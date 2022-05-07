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

/**
 * "Draw a circle with a given color, ratio, and direction."
 * 
 * The ratio is a number between 0 and 1. 
 * 
 * The direction is either clockwise or anti-clockwise. 
 * 
 * The ratio is used to determine how much of the circle to draw. 
 * 
 * The direction is used to determine which direction to draw the circle. 
 * 
 * The ratio and direction are used to determine the end angle of the circle. 
 * 
 * The start angle is always 0. 
 * 
 * The end angle is calculated by multiplying the ratio by 2π. 
 * 
 * If the direction is anti-clockwise, the end angle is multiplied by -1. 
 * 
 * The end angle is then added to the start angle. 
 * 
 * The start and end angles are then passed to the arc() method.
 * @param color - The color of the circle.
 * @param ratio - The ratio of the circle to be drawn.
 * @param anticlockwise
 */
function drawCircle(color, ratio, anticlockwise) {

    chartContext.strokeStyle = color;
    chartContext.beginPath();
    chartContext.arc(canvas.width / 2, canvas.height / 2, radius, 0, ratio * 2 * Math.PI, anticlockwise);
    chartContext.stroke();
}

/**
 * It clears the canvas, calculates the ratio of income to income+outcome, and then draws two circles,
 * one for income and one for outcome.
 * 
 * The drawCircle function is defined as follows:
 * @param income - the income value
 * @param outcome - the amount of money you spent
 */
function updateChart(income, outcome) {
    chartContext.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income + outcome);

    drawCircle("#FFFFFF", - ratio, true);
    drawCircle("#F0624D", 1 - ratio, false);
}