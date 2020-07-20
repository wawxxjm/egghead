// //document.body.innerHTML = `<h1>Hello from ${d3.version}</h1>`;

// // var linearScale = d3.scaleLinear()
// //     .domain([0, 100])
// //     .range([0, 600])
// //     .clamp(true);

// // console.log('linear Scale starts');
// // console.log(linearScale(-20));
// // console.log(linearScale(50));
// // console.log(linearScale(105));

// // console.log(linearScale.invert(300));

// // var timeScale = d3.scaleTime()
// //     .domain([new Date(2015, 1, 1), new Date()])
// //     .range([0, 100]);

// // console.log('time Scale starts');
// // console.log(timeScale(new Date(2016, 0, 1)));
// // console.log(timeScale.invert(50));

// // var quantizeScale = d3.scaleQuantize()
// //     .domain([0, 100])
// //     .range(['red', 'white', 'green']);

// // console.log('quantize scale starts');
// // console.log(quantizeScale(22));
// // console.log(quantizeScale(50));
// // console.log(quantizeScale(88));
// // console.log(quantizeScale.invertExtent('green'));

// // var ordinalScale = d3.scaleOrdinal()
// //     .domain(['poor', 'good', 'great'])
// //     .range(['red', 'white', 'green']);

// // console.log('ordinal scale starts');
// // console.log(ordinalScale('poor'));
// // console.log(ordinalScale('good'));
// // console.log(ordinalScale('great'));


// // d3.json('data/data.json', function (data) {
// //     console.log(data);
// //     var min = d3.min(data, function (d) {
// //         return d.age;
// //     })
// //     console.log(min);

// //     var max = d3.max(data, function (d) {
// //         return d.age;
// //     })
// //     console.log(max);

// //     var extent = d3.extent(data, function (d) {
// //         return d.age;
// //     })
// //     console.log(extent);

// //     var scale = d3.scaleLinear()
// //         .domain(extent)
// //         .range([0, 600]);
// //     console.log(scale(37));

// //     var ages = d3.set(data, function (d) {
// //         return d.age;
// //     })
// //     console.log(ages.values());
// // });

// // console.log('select DOM');
// // var div = d3.select('div');
// // console.log(div.nodes());

// // var divLinks = div.selectAll('a');
// // console.log(divLinks.nodes());

// // var secondLink = d3.selectAll('a:nth-child(2)');
// // console.log(secondLink.nodes());

// // var allLinks = d3.selectAll(document.links);
// // console.log(allLinks.size());
// // d3.selectAll('a:nth-child(2)')
// //   .attr('href', 'http://google.com')
// //   .classed('red', true)
// //   .html('Inventory <b>SALE</b>');

// // d3.select('.title > a:nth-child(2)')
// //     .append('div')
// //         .style('color', 'red')
// //         .html('Inventory <b>SALE</b>')
// //     .append('button')
// //         .style('display', 'block')
// //         .text('submit');


// var scores = [
//     { name: 'Alice', score: 96 },
//     { name: 'Billy', score: 83 },
//     { name: 'Cindy', score: 91 },
//     { name: 'David', score: 96 },
//     { name: 'Emily', score: 88 }
// ];

// // var update = d3.select('.chart')
// //     .selectAll('div')
// //     .data(scores, function (d) {
// //         return d ? d.name : this.innerText;
// //     })
// //     .style('color', 'blue');

// // var enter = update.enter()
// //     .append('div')
// //     .text(function (d) {
// //         return d.name;
// //     })
// //     .style('color', 'green');

// // update.exit().remove();
// // update.merge(enter, update.exit())
// //     .style('text-transform', 'uppercase');

// //     update.merge(enter)
// //     .style('width', d => d.score + 'px')
// //     .style('height', '50px')
// //     .style('background', 'lightgreen')
// //     .style('border', '1px solid black')

// var bar = d3.select('.chart')
//   .append('svg')
//     .attr('width', 225)
//     .attr('height', 300)
//   .selectAll('g')
//   .data(scores)
//   .enter()
//     .append('g')
//     .attr('transform', (d, i) => 'translate(0, ' + i * 33 +')');

// function scaleBar (selection, scale) {
//     selection.style('trasnsform', 'scaleX(' + scale + ')');
// }

// function setFill (selection, color) {
//     selection.style('fill', color);
// }

// function fade(selection, opacity) {
//     selection.style('fill-opacity', opacity);
// }
// bar.append('rect')
//     .style('width', d => d.score)
//     .attr('class', 'bar')
//     .on('mouseover', function (d, i, elements) {
//         d3.select(this)
//             .call(scaleBar, 2)
//             .call(setFill, 'orange');
//         d3.selectAll(elements)
//             .filter(':not(:hover)')
//             .call(fade, 0.5);   
//     })
//     .on('mouseout', function (d, i, elements) {
//         d3.select(this)
//         .call(scaleBar, 1)
//         .call(setFill, 'lightgreen');

//         d3.selectAll(elements)
//             .call(fade, 1);
//     });

// bar.append('text')
//     .attr('y', 20)
//     .text(function (d) {
//       return d.name;
//     })
// var margin = { top: 10, right: 20, bottom: 60, left: 30 };
// var width = 400- margin.left - margin.right;
// var height = 565 - margin.top - margin.bottom;


// var svg = d3.select('.chart')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .call(responsivefy)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// d3.json('./data.json', function (err, data) {
//     // var data = [
//     //     {score: 63, subject: 'Mathematics'},
//     //     {score: 82, subject: 'Geography'},
//     //     {score: 74, subject: 'Spelling'},
//     //     {score: 97, subject: 'Reading'},
//     //     {score: 52, subject: 'Science'},
//     //     {score: 74, subject: 'Chemistry'},
//     //     {score: 97, subject: 'Physics'},
//     //     {score: 52, subject: 'ASL'}
//     //   ];
// // svg.append('rect')
// //     .attr('width', width / 2)
// //     .attr('height', height)
// //     .style('fill', 'lightblue')
// //     .style('stroke', 'green');

// // svg.append('rect')
// //     .attr('x', width / 2)
// //     .attr('width', width / 2)
// //     .attr('height', height)
// //     .style('fill', 'lightblue')
// //     .style('stroke', 'green');


// var yScale = d3.scaleLinear()
//     .domain(d3.extent(data, d => expectancy))
//     .range([height, 0])
//     .nice();

// var yAxis = d3.axisLeft(yScale);
// svg.call(yAxis);


// var xScale = d3.scaleLinear()
// .domain(d3.extent(data, d => d.cost))
// .range([0, width])
// .nice();

// var xAxis = d3.axisBottom(xScale).ticks(5)



// svg
// .append('g')
// .attr('transform', `translate(0, ${height})`)
// .call(xAxis)
// });
// // .selectAll('text')
// // .style('text-anchor', 'end')
// // .attr('transform', 'rotate(-30)');

// // svg.selectAll('rect')
// // .data(data)
// // .enter()
// // .append('rect')
// // .attr('x', d => xScale(d.subject))
// // .attr('y', d => yScale(d.score))
// // .attr('width', d => xScale.bandwidth())
// // .attr('height', d => height - yScale(d.score))

// function responsivefy(svg) {
//     // get container + svg aspect ratio
//     var container = d3.select(svg.node().parentNode),
//         width = parseInt(svg.style("width")),
//         height = parseInt(svg.style("height")),
//         aspect = width / height;
  
//     // add viewBox and preserveAspectRatio properties,
//     // and call resize so that svg resizes on inital page load
//     svg.attr("viewBox", "0 0 " + width + " " + height)
//         .attr("preserveAspectRatio", "xMinYMid")
//         .call(resize);
  
//     // to register multiple listeners for same event type,
//     // you need to add namespace, i.e., 'click.foo'
//     // necessary if you call invoke this function for multiple svgs
//     // api docs: https://github.com/mbostock/d3/wiki/Selections#on
//     d3.select(window).on("resize." + container.attr("id"), resize);
  
//     // get width of container and resize svg to fit it
//     function resize() {
//         var targetWidth = parseInt(container.style("width"));
//         svg.attr("width", targetWidth);
//         svg.attr("height", Math.round(targetWidth / aspect));
//     }
//   }



var margin = { top: 10, right: 20, bottom: 30, left: 30 };
var width = 400 - margin.left - margin.right;
var height = 565 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .call(responsivefy)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

d3.json('./data.json', function (err, data) {
  var yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.expectancy))
    .range([height, 0])
    .nice();
  var yAxis = d3.axisLeft(yScale);
  svg.call(yAxis);

  var xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.cost))
    .range([0, width])
    .nice();

  var xAxis = d3.axisBottom(xScale)
    .ticks(5);
  svg
    .append('g')
      .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  var rScale = d3.scaleSqrt()
    .domain([0, d3.max(data, d => d.population)])
    .range([0, 40]);

  var circles = svg
    .selectAll('.ball')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'ball')
    .attr('transform', d => {
      return `translate(${xScale(d.cost)}, ${yScale(d.expectancy)})`;
    });

  circles
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => rScale(d.population))
    .style('fill-opacity', 0.5)
    .style('fill', 'steelblue');

  circles
    .append('text')
    .style('text-anchor', 'middle')
    .style('fill', 'black')
    .attr('y', 4)
    .text(d => d.code);

});


function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width")),
      height = parseInt(svg.style("height")),
      aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
      var targetWidth = parseInt(container.style("width"));
      svg.attr("width", targetWidth);
      svg.attr("height", Math.round(targetWidth / aspect));
  }
}
