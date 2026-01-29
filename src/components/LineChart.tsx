import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ChartDataPoint } from '../data';

interface LineChartProps {
  data: ChartDataPoint[];
}

export const LineChart = ({ data }: LineChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    // Dimensions
    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = svgRef.current.clientWidth - margin.left - margin.right;
    const height = 280 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.time))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => Math.max(d.supply, d.demand, d.storage)) || 2000,
      ])
      .nice()
      .range([height, 0]);

    // Grid lines
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('opacity', 0.1)
      .call(
        d3
          .axisLeft(y)
          .tickSize(-width)
          .tickFormat(() => '')
      );

    // X Axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3
          .axisBottom(x)
          .tickValues(x.domain().filter((_, i) => i % 4 === 0))
      )
      .attr('color', '#6b7280')
      .selectAll('text')
      .attr('fill', '#9ca3af');

    // Y Axis
    svg
      .append('g')
      .call(d3.axisLeft(y).ticks(5))
      .attr('color', '#6b7280')
      .selectAll('text')
      .attr('fill', '#9ca3af');

    // Line generators
    const lineSupply = d3
      .line<ChartDataPoint>()
      .x((d) => x(d.time) || 0)
      .y((d) => y(d.supply))
      .curve(d3.curveMonotoneX);

    const lineDemand = d3
      .line<ChartDataPoint>()
      .x((d) => x(d.time) || 0)
      .y((d) => y(d.demand))
      .curve(d3.curveMonotoneX);

    const lineStorage = d3
      .line<ChartDataPoint>()
      .x((d) => x(d.time) || 0)
      .y((d) => y(d.storage))
      .curve(d3.curveMonotoneX);

    // Draw lines
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#10b981')
      .attr('stroke-width', 2.5)
      .attr('d', lineSupply)
      .attr('opacity', 0.9);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#3b82f6')
      .attr('stroke-width', 2.5)
      .attr('d', lineDemand)
      .attr('opacity', 0.9);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#f59e0b')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5')
      .attr('d', lineStorage)
      .attr('opacity', 0.7);

    // Add interactive dots on hover
    const focus = svg.append('g').style('display', 'none');

    focus
      .append('circle')
      .attr('r', 4)
      .attr('fill', '#10b981')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    focus
      .append('text')
      .attr('x', 10)
      .attr('dy', '.31em')
      .attr('fill', '#e5e7eb')
      .style('font-size', '12px');

    svg
      .append('rect')
      .attr('width', width)
      .attr('height', height)
      .style('fill', 'none')
      .style('pointer-events', 'all')
      .on('mouseover', () => focus.style('display', null))
      .on('mouseout', () => focus.style('display', 'none'))
      .on('mousemove', function (event) {
        const [mouseX] = d3.pointer(event);
        const timeValues = x.domain();
        const index = Math.round((mouseX / width) * (timeValues.length - 1));
        const d = data[index];

        if (d) {
          focus.attr('transform', `translate(${x(d.time)},${y(d.supply)})`);
          focus.select('text').text(`${d.supply.toFixed(0)} MW`);
        }
      });
  }, [data]);

  return (
    <div className="w-full h-[280px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};
