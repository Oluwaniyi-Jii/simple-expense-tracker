// SELECT CHART ELEMENT
const chart = document.querySelector(".chart");

// CREATE CANVAS ELEMMENT
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// APPEND CANVAS TO CHART ELEMENT
chart.appendChild(canvas);

// TO DRAW ON CANVAS, WE NEED TO GET CONTEXT OF CANVAS
const chartContext = canvas.getContext("2d");

// CHANGE THE LINE WIDTH
chartContext.lineWidth = 8;

// CIRCLE RADIUS
const radius = 20;

function drawCircle(color, ratio, anticlockwise){

    chartContext.strokeStyle = color;
    chartContext.beginPath();
    chartContext.arc( canvas.width/2, canvas.height/2, radius, 0, ratio * 2 * Math.PI, anticlockwise);
    chartContext.stroke();
}

function updateChart( income, outcome){
    chartContext.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#FFFFFF", - ratio, true);
    drawCircle("#F0624D", 1 - ratio, false);
}