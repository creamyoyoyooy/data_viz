/* eslint-disable func-names */
/* globals d3 */
// data describing the Training_computation_petaflop and width of the petals for three subspecies of the iris flowers
const data = [
  {
    "Entity": "Transformer local-attention (NesT-B)",
    "Day": 2021.05,
    "Training_computation_petaflop": 2.191008521,
    "Domain": "Vision"
  },
  {
    "Entity": "Meta Pseudo Labels",
    "Day": 2021.03,
    "Training_computation_petaflop": 4.16316793,
    "Domain": "Vision"
  },
  {
    "Entity": "ViT-H/14",
    "Day": 2020.09,
    "Training_computation_petaflop": 3.553604985,
    "Domain": "Vision"
  },
  {
    "Entity": "ObjectNet",
    "Day": 2019.09,
    "Training_computation_petaflop": 2.143900865,
    "Domain": "Vision"
  },
  {
    "Entity": "MnasNet-A1 + SSDLite",
    "Day": 2019.05,
    "Training_computation_petaflop": 3.08804563,
    "Domain": "Vision"
  },
  {
    "Entity": "MnasNet-A3",
    "Day": 2019.05,
    "Training_computation_petaflop": 3.08804563,
    "Domain": "Vision"
  },
  {
    "Entity": "Decoupled weight decay regularization",
    "Day": 2019.01,
    "Training_computation_petaflop": 1.696348477,
    "Domain": "Vision"
  },
  {
    "Entity": "YOLOv3",
    "Day": 2018.04,
    "Training_computation_petaflop": 2.353358891,
    "Domain": "Vision"
  },
  {
    "Entity": "AmoebaNet-A (F=448)",
    "Day": 2018.02,
    "Training_computation_petaflop": 2.792730365,
    "Domain": "Vision"
  },
  {
    "Entity": "JFT",
    "Day": 2017.08,
    "Training_computation_petaflop": 2.840167757,
    "Domain": "Vision"
  },
  {
    "Entity": "Whisper",
    "Day": 2022.09,
    "Training_computation_petaflop": 3.833726476,
    "Domain": "Speech"
  },
  {
    "Entity": "wave2vec 2.0 LARGE",
    "Day": 2020.1,
    "Training_computation_petaflop": 2.818744865,
    "Domain": "Speech"
  },
  {
    "Entity": "Gato",
    "Day": 2022.05,
    "Training_computation_petaflop": 3.36779945,
    "Domain": "Multimodal"
  },
  {
    "Entity": "N脺WA",
    "Day": 2021.11,
    "Training_computation_petaflop": 3.342422681,
    "Domain": "Multimodal"
  },
  {
    "Entity": "CLIP (ViT L/14@336px)",
    "Day": 2021.01,
    "Training_computation_petaflop": 3.51059465,
    "Domain": "Multimodal"
  },
  {
    "Entity": "AlexaTM 20B",
    "Day": 2022.08,
    "Training_computation_petaflop": 4.154815084,
    "Domain": "Language"
  },
  {
    "Entity": "NLLB",
    "Day": 2022.07,
    "Training_computation_petaflop": 3.621519024,
    "Domain": "Language"
  },
  {
    "Entity": "Minerva (540B)",
    "Day": 2022.06,
    "Training_computation_petaflop": 4.718875281,
    "Domain": "Language"
  },
  {
    "Entity": "Sparse all-MLP",
    "Day": 2022.04,
    "Training_computation_petaflop": 2.168229867,
    "Domain": "Language"
  },
  {
    "Entity": "PaLM (540B)",
    "Day": 2022.04,
    "Training_computation_petaflop": 4.701560261,
    "Domain": "Language"
  },
  {
    "Entity": "Chinchilla",
    "Day": 2022.03,
    "Training_computation_petaflop": 4.380211242,
    "Domain": "Language"
  },
  {
    "Entity": "LaMDA",
    "Day": 2022.02,
    "Training_computation_petaflop": 4.275114177,
    "Domain": "Language"
  },
  {
    "Entity": "GPT-NeoX-20B",
    "Day": 2022.02,
    "Training_computation_petaflop": 3.984707956,
    "Domain": "Language"
  },
  {
    "Entity": "AlphaCode",
    "Day": 2022.02,
    "Training_computation_petaflop": 3.803727512,
    "Domain": "Language"
  },
  {
    "Entity": "HuBERT",
    "Day": 2021.07,
    "Training_computation_petaflop": 3.371754882,
    "Domain": "Language"
  },
  {
    "Entity": "PLUG",
    "Day": 2021.04,
    "Training_computation_petaflop": 3.77815125,
    "Domain": "Language"
  },
  {
    "Entity": "GPT-3 175B (davinci)",
    "Day": 2020.05,
    "Training_computation_petaflop": 4.248464824,
    "Domain": "Language"
  },
  {
    "Entity": "ALBERT-xxlarge",
    "Day": 2020.02,
    "Training_computation_petaflop": 3.202416858,
    "Domain": "Language"
  },
  {
    "Entity": "T5-11B",
    "Day": 2019.1,
    "Training_computation_petaflop": 3.803727512,
    "Domain": "Language"
  },
  {
    "Entity": "T5-3B",
    "Day": 2019.1,
    "Training_computation_petaflop": 3.50851667,
    "Domain": "Language"
  },
  {
    "Entity": "GPT-2",
    "Day": 2019.02,
    "Training_computation_petaflop": 3.086593134,
    "Domain": "Language"
  },
  {
    "Entity": "BERT-Large",
    "Day": 2018.1,
    "Training_computation_petaflop": 2.72742243,
    "Domain": "Language"
  },
  {
    "Entity": "GPT",
    "Day": 2018.06,
    "Training_computation_petaflop": 2.122756334,
    "Domain": "Language"
  },
  {
    "Entity": "Transformer",
    "Day": 2017.06,
    "Training_computation_petaflop": 1.935201953,
    "Domain": "Language"
  },
  {
    "Entity": "OpenAI Five",
    "Day": 2019.12,
    "Training_computation_petaflop": 3.913037401,
    "Domain": "Games"
  },
  {
    "Entity": "OpenAI Five Rerun",
    "Day": 2019.12,
    "Training_computation_petaflop": 3.556971676,
    "Domain": "Games"
  },
  {
    "Entity": "MuZero",
    "Day": 2019.11,
    "Training_computation_petaflop": 2.340620619,
    "Domain": "Games"
  },
  {
    "Entity": "AlphaStar",
    "Day": 2019.1,
    "Training_computation_petaflop": 4.152675685,
    "Domain": "Games"
  },
  {
    "Entity": "AlphaZero",
    "Day": 2017.12,
    "Training_computation_petaflop": 3.782333032,
    "Domain": "Games"
  },
  {
    "Entity": "AlphaGo Zero",
    "Day": 2017.1,
    "Training_computation_petaflop": 4.266377189,
    "Domain": "Games"
  },
  {
    "Entity": "OpenAI TI7 DOTA 1v1",
    "Day": 2017.08,
    "Training_computation_petaflop": 2.890877687,
    "Domain": "Games"
  },
  {
    "Entity": "AlphaGo Master",
    "Day": 2017.01,
    "Training_computation_petaflop": 4.08804563,
    "Domain": "Games"
  },
  {
    "Entity": "Libratus",
    "Day": 2017.01,
    "Training_computation_petaflop": 3.03034892,
    "Domain": "Games"
  },
  {
    "Entity": "Parti",
    "Day": 2022.06,
    "Training_computation_petaflop": 4.298847593,
    "Domain": "Drawing"
  },
  {
    "Entity": "Stable Diffusion (LDM-KL-8-G)",
    "Day": 2022.04,
    "Training_computation_petaflop": 3.849485002,
    "Domain": "Drawing"
  },
  {
    "Entity": "Denoising Diffusion Probabilistic Models (LSUN Bedroom)",
    "Day": 2021.06,
    "Training_computation_petaflop": 1.602059991,
    "Domain": "Drawing"
  },
  {
    "Entity": "DALL-E",
    "Day": 2021.01,
    "Training_computation_petaflop": 3.836048929,
    "Domain": "Drawing"
  },
  {
    "Entity": "BigGAN-deep 512x512",
    "Day": 2018.09,
    "Training_computation_petaflop": 3.238560627,
    "Domain": "Drawing"
  }
 ]
 
 
 // BOTH VISUALIZATIONS
 // describe the margin and size(s) of the svg element
 const margin = {
   top: 40,
   right: 55,
   bottom: 40,
   left: 55,
 };
 
 const width = 700 - (margin.right + margin.left);
 const height = 500 - (margin.top + margin.bottom);
 
 // describe the scales and axes (they are later added with the .call() function on each separate visualization)
 // x scale: Day
 const xScale = d3
   .scaleLinear()
   // consider the maximum value found in the dataset
   .domain([2017, d3.max(data, d => d.Day)])
   .range([0, width])
   .nice();
 
 // y scale: petal 
 
 const yScale = d3
   .scaleLinear()
   .domain([0, d3.max(data, d => d.Training_computation_petaflop)])
   // given the top-down coordinate system of the svg element invert the range
   .range([height, 0])
   .nice();
 
 // describe axes to show the Training_computation_petaflop and Day in centimeters
 const xAxis = d3
   .axisBottom(xScale)
   .ticks(7)
   .tickPadding(4)
   .tickFormat(d => `${d}`);
 
 const yAxis = d3
   .axisLeft(yScale)
   .ticks(4)
   .tickPadding(4)
   .tickFormat(d => `100^${d}`);
 
 // describe the fill according to the sub-specie of flower
 const fill = {
   Drawing: 'hsl(260, 40%, 45%)',
   Games: 'hsl(300, 40%, 45%)',
   Language: 'hsl(240, 40%, 45%)',
   Multimodal: 'hsl(200, 40%, 45%)',
   Speech: 'hsl(280, 40%, 45%)',
   Vision:'hsl(320, 40%, 45%)'
 };
 
 
 // HEXBIN
 // in the .viz__hexbin container add an svg element for the first visualization
 const vizHexbin = d3
   .select('.viz__hexbin');
 
 const svgHexbin = vizHexbin
   .append('svg')
   .attr('viewBox', `0 0 ${width + (margin.right + margin.left)} ${height + (margin.top + margin.bottom)}`);
 
 const groupHexbin = svgHexbin
   .append('g')
   .attr('transform', `translate(${margin.left} ${margin.top})`);
 
 // include the axes
 groupHexbin
   .append('g')
   .attr('class', 'axis x-axis')
   .attr('transform', `translate(0 ${height})`)
   .call(xAxis);
 
 groupHexbin
   .append('g')
   .attr('class', 'axis y-axis')
   .call(yAxis);
 
 // define the hexbin function to consider the data points' values
 const hexbin = d3
   .hexbin()
   .radius(10) // a greater radius means a greater aggregation of data points (practically it means fewer, bigger hexagons)
   .x(d => xScale(d.Day))
   .y(d => yScale(d.Training_computation_petaflop))
   .size([width, height]); // the size is helpful to build the mesh
 
 // include the mesh and hide it by default
 groupHexbin
   .append('path')
   .attr('class', 'mesh')
   .attr('d', hexbin.mesh())
   .attr('fill', 'none')
   .attr('opacity', 0)
   .attr('stroke', 'currentColor');
 
 /* add an hexagon for each data point
  the hexbin(data) function creates an array aggregating the data point
  the x and `y` property are added to describe the origin of the shape
 */
 groupHexbin
   .selectAll('path.hexagon')
   .data(hexbin(data)) // the hexbin function creates an array aggregating the data points
   .enter()
   .append('path')
   .attr('class', 'hexagon')
   .attr('d', hexbin.hexagon())
   .attr('transform', ({ x, y }) => `translate(${x} ${y})`)
   .attr('fill', d => fill[d[0].Domain]);
 
 // when the checkbox for the first viz is checked show the mesh behind the hexagons
 d3
   .select('input#mesh')
   .on('input', function () {
     const { checked } = this;
     if (checked) {
       d3
         .select('path.mesh')
         .attr('opacity', 0.7);
     } else {
       d3
         .select('path.mesh')
         .attr('opacity', 0);
     }
   });
 
 
 // CONTOUR
 // the process replicates much of the logic introduced for the hexbin
 // add an svg element
 const vizContour = d3
   .select('.viz__contour');
 
 const svgContour = vizContour
   .append('svg')
   .attr('viewBox', `0 0 ${width + (margin.right + margin.left)} ${height + (margin.top + margin.bottom)}`);
 
 const groupContour = svgContour
   .append('g')
   .attr('transform', `translate(${margin.left} ${margin.top})`);
 
 // include the axes
 groupContour
   .append('g')
   .attr('class', 'axis x-axis')
   .attr('transform', `translate(0 ${height})`)
   .call(xAxis);
 
 groupContour
   .append('g')
   .attr('class', 'axis y-axis')
   .call(yAxis);
 
 // define the contour function to estimate the density of the dataset
 const contour = d3
   .contourDensity()
   .x(d => xScale(d.Day))
   .y(d => yScale(d.Training_computation_petaflop))
   .size([width, height]);
 
 /* to visualize the subspecies with a different color massage the data to describe the petals as follows:
 
 {
   setosa: [
     {
       width,
       Training_computation_petaflop
     },
     {
       width,
       Training_computation_petaflop
     },
     ...
   ],
   versicolor: [
     ...
   ],
   ...
 }
 
 for each subspecies describing an array of objects detailing the flower's values
 */
 const contourData = data.reduce((acc, curr) => {
   // if the species is already included in the accumulator push the data point's width and Training_computation_petaflop in the array
   const { Domain } = curr;
   if (acc[Domain]) {
     acc[Domain].push({ Day: curr.Day, Training_computation_petaflop: curr.Training_computation_petaflop });
   } else {
     // else initialize the property with an empty array
     acc[Domain] = [];
   }
   return acc;
 }, {});
 
 // create a multidimensional array to bind both the species and values in the svg element
 // [species, values], where values is the array of objects
 const contourDataEntries = Object.entries(contourData);
 const contourDataGroups = groupContour
   .selectAll('g.species')
   .data(contourDataEntries)
   .enter()
   .append('g')
   .attr('class', 'species')
   .attr('fill', ([Domain]) => fill[Domain]); // the fill cascades down to the nested elements, and specifically the density area
 
 // returns an array of objects of type MultiPolygon, a value describing the density and an array describing the coordinates
 // console.log(contour(data));
 /* the contour() function, when the data is passed as argument, provides an array of objects
   {
     type: 'MultiPolygon',
     coordinates,
     value
   }
 
   while the value describes the density, the coordinates can be used by the geoPath generator function to draw the desired shapes
 */
 
 // create a linear scale mapping the density values to a range of [0, 1]
 const valueScale = d3
   .scaleLinear()
   // ! use the entire dataset and not the dataset separated by subspecies to consider the maximum value between all flowers
   .domain([0, d3.max(contour(data), ({ value }) => value)])
   .range([0, 1]);
 
 // add the areas using the valueScale to describe the opacity
 // ! the fill is inherited from the parent container
 contourDataGroups
   .selectAll('path.areas')
   .data(([, points]) => contour(points))
   .enter()
   .append('path')
   .attr('class', 'areas')
   .attr('opacity', ({ value }) => valueScale(value))
   .attr('d', d3.geoPath());
 
 // include path elements describing the contours of the density areas
 // lines hidden by default
 contourDataGroups
   .selectAll('path.lines')
   .data(([, points]) => contour(points))
   .enter()
   .append('path')
   .attr('class', 'lines')
   .attr('opacity', 0)
   .attr('fill', 'none')
   .attr('stroke', 'currentColor')
   .attr('d', d3.geoPath());
 
 // when the checkbox for the second visualization is checked toggle the opacity of the lines delimiting the density areas
 d3
   .select('input#lines')
   .on('input', function () {
     const { checked } = this;
     if (checked) {
       d3
         .selectAll('path.lines')
         .attr('opacity', 0.7);
     } else {
       d3
         .selectAll('path.lines')
         .attr('opacity', 0);
     }
   });
 
 
 // BOTH VISUALIZATIONS
 // once the visualizations are set up, style the axes
 // remove the path elements describing the axes and the line elements behind the ticks
 d3
   .selectAll('g.axis')
   .selectAll('path')
   .remove();
 
 d3
   .selectAll('g.axis')
   .selectAll('line')
   .remove();
 
 // remove the first tick from both axes and add a single '0cm' shared by both
 d3
   .selectAll('g.axis')
   .select('g.tick')
   .remove();
 
 d3
   .selectAll('g.x-axis')
   .append('text')
   .attr('x', -18)
   .attr('y', 18)
   .text('2017');
 
 // add grid lines for the existing ticks
 d3
   .selectAll('g.x-axis')
   .selectAll('g.tick')
   .append('path')
   .attr('stroke', 'currentColor')
   .attr('fill', 'none')
   .attr('d', `M 0 0 v${-height}`);
 
 d3
   .selectAll('g.y-axis')
   .selectAll('g.tick')
   .append('path')
   .attr('stroke', 'currentColor')
   .attr('fill', 'none')
   .attr('d', `M 0 0 h${width}`);
 
 // style the grid lines
 d3
   .selectAll('g.axis')
   .selectAll('g.tick')
   .select('path')
   .attr('stroke-width', '2')
   .attr('stroke-dasharray', '5')
   .attr('opacity', 0.5);
 
 // include two labels for the axes
 d3
   .selectAll('g.x-axis')
   .append('text')
   .attr('class', 'label')
   .attr('x', width / 2)
   .attr('y', margin.bottom)
   .attr('text-anchor', 'middle')
   .text('Publication Date');
 
 d3
   .selectAll('g.y-axis')
   .append('text')
   .attr('class', 'label')
   .attr('x', -margin.left + 5)
   .attr('y', height / 2)
   .attr('text-anchor', 'middle')
   .style('writing-mode', 'vertical-rl')
   .text('Training Computation Petaflop');
 