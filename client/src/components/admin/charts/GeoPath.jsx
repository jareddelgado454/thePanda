"use client";
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client'; 

export const GeoPath = () => {


    const chartRef = useRef();

    useEffect(() => {
      const width = 800;
      const height = 600;

      const svg = d3.select(chartRef.current)
          .append('svg')
          .attr('width', width)
          .attr('height', height);

      const projection = d3.geoAlbersUsa()
          .scale(1000)
          .translate([width / 2, height / 2]);

      const path = d3.geoPath().projection(projection);

      // Carga el archivo JSON de los límites de los estados de EE. UU.
      fetch('https://unpkg.com/us-atlas@3.0.0/states-10m.json')
          .then(response => response.json())
          .then(data => {
              // Usa topojson-client para convertir los datos TopoJSON en GeoJSON
              const geojsonData = topojson.feature(data, data.objects.nation);

              // Agrega los caminos de los estados al SVG
              svg.selectAll('path')
                  .data(geojsonData.features)
                  .enter()
                  .append('path')
                  .attr('d', path)
                  .style('stroke', '#666')
                  .style('fill', '#b8b8b8');
          });
  }, []);

  return (
    <div ref={chartRef}></div>
  )
}
