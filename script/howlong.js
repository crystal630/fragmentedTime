let w = 1200;
let h = 600;
let xpadding = 100;
let ypadding = 60;
function getColors(d,i){

  return d.sharedColor;
}
function share(datapoint){
  a=datapoint.sharedColor;
  return a;
}
function cordinateX(d,i){
  x=d.times*100;

 return 'translate('+ x +','+ '50)';
}
function cordinateYwx(d,i){
  y=d.weibo*3;
  return y;


}
function cordinateYdb(d,i){
  db=d.weibo*3+d.weixin*3;
  return db;

 return 'translate('+ x +','+ '50)';
}
function cordinateYbb(d,i){
  bb=d.weibo*3+d.weixin*3+d.douban*3;
  return bb;

 return 'translate('+ x +','+ '50)';
}


function weibo(d,i){
  c=d.weibo*3;
  return c;

}
function weixin(d,i){
  f=d.weixin*3
  return f;
}
function douban(d,i){
  p=d.douban*3
  return p;
}
function bilibili(d,i){
  p=d.bilibili*3
  return p;
}


function gotData(incomingData){

  // create svg
  let viz = d3.select("#viz-container")
        .append("svg")
        .attr("id","viz")
        .attr("width",1400)
        .attr("height",725);

  // append groups
  let datagroup=viz.selectAll(".datagroup").data(incomingData).enter()
        .append("g")
        .attr("class","datagroup");

  let xScale = d3.scaleLinear().domain([0,10]).range([xpadding, w-xpadding]);

        let xAxis = d3.axisBottom(xScale);
        let xAxisGroup = viz.append("g")
            .attr("class", "xaxisgroup")
            .attr("transform", "translate(0,"+"40)")
        ;
        xAxisGroup.append("g").attr('class', 'xLabel')
          .attr("transform", "translate("+w/2+", -20)")
          .append("text")
          .attr("fill", "Black")
          .text("  Day 📆")
          .attr("font-family", "Bradley Hand")
          .attr("font-size", "3em")

        xAxisGroup.call(xAxis);

        let yScale = d3.scaleLinear().domain([3,0]).range([600,60]);
        let yAxis = d3.axisLeft(yScale);
        let yAxisGroup = viz.append("g")
            .attr("class", "yaxisgroup")
            .attr("transform", "translate("+xpadding+",0)")
        ;
        yAxisGroup.append("g").attr('class', 'yLabel')
          .attr("transform", "translate(-43, 190) rotate(-90)")
          .append("text")
          .attr("fill", "Black")
          .text(" Hours⏱")
          .attr("font-family", "Bradley Hand")
          .attr("font-size", "3em")

        yAxisGroup.call(yAxis);



     wbb = datagroup
        .append("rect")
        .attr("class", "weibo");
     wbb.attr("x",20)
        .attr("y",0)
        .attr("width",60)
        .attr("height",weibo)
        .style("fill","black")
        .attr('opacity',100);
        // .transition()
        // .duration(800)
        // .attr('opacity',1)
        // .attr("height",weibo);
      wx = datagroup
        .append("rect")
        .attr("class", "weixin");
      wx.attr("x",20)
        .attr("y",cordinateYwx)
        .attr("width",60)
        .attr("height",weixin)
        .style("fill","black");

      douB = datagroup
         .append("rect")
         .attr("class", "douban");
      douB.attr("x",20)
         .attr("y",cordinateYdb)
         .attr("width",60)
         .attr("height",douban)
         .style("fill","black");

      blbl = datagroup
          .append("rect")
          .attr("class", "bilibili");
      blbl.attr("x",20)
          .attr("y",cordinateYbb)
          .attr("width",60)
          .attr("height",bilibili)
          .style("fill","black");

      datagroup.attr("transform", cordinateX);
      function type(){
        wbb
          .transition()
          .duration(800)
          .style("fill","Orange")
          .attr("height",weibo);
      }
      function type1(){
        wx
        .transition()
        .duration(800)
        .style("fill","LimeGreen")
        .attr("height",weixin);
      }
      function type2(){
        douB
        .transition()
        .duration(800)
        .style("fill","DarkGreen")
        .attr("height",douban);
      }
      function type3(){
        blbl
        .transition()
        .duration(800)
        .style("fill","PaleVioletRed")
        .attr("height",bilibili);
      }

      document.getElementById("weibo").addEventListener("click", type);
      document.getElementById("wx").addEventListener("click", type1);
      document.getElementById("db").addEventListener("click", type2);
      document.getElementById("bl").addEventListener("click", type3);

    // colors = datagroup.append("g").attr("id","color");
    // colors
    //  .selectAll("rect").data(getColors).enter()
    //  .append("rect")
    //  .attr("x", 60)
    //  .attr("y", cordinateY)
    //  .attr("height", 30)
    //  .attr("width",60)
    //  .attr('fill',share);
    // colors.attr("transform", cordinateX);



}
// get data
d3.json("../data.json").then(gotData);
