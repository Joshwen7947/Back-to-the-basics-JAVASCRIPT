console.log('Hello JS!');
// window.onload = init;
// CHANGE TEXT AFTER 3 SECONDS
function changeFirstBox() {
	console.log('Change My first Box Treo March 30');
	document.getElementById('change-text').innerHTML = 'Hello World';
}
setTimeout(changeFirstBox, 3000);

// AUTOMATIC TIMER
let count = 0;

function changeSecondBox() {
	// count++
	count = count + 1;
	document.getElementById('change-count').innerHTML = count;
}
setInterval(changeSecondBox, 1000);

// CHANGE TO RANDOM COLOR EVERY 3 SECONDS
function generateRandomColor() {
	let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	document.getElementById(`change-color`).style.backgroundColor = randomColor;
	return randomColor++;
}
setInterval(generateRandomColor, 3000);

// INCREMENT ON CLICK NUMBER + 1
let clickCount = 0;

function incrementOnClick() {
	clickCount++;
	document.getElementById('change-click').innerHTML = clickCount;
}
document
	.getElementById('change-click')
	.addEventListener('click', incrementOnClick);

// INCREMENTS NUMBER BY 1 WHEN YOU HOVER OVER IT
let hoverCount = 0;
function incrementOnHover() {
	hoverCount++;
	document.getElementById(`change-hover`).innerHTML = hoverCount;
}
document
	.getElementById(`change-hover`)
	.addEventListener('mouseover', incrementOnHover);

// Toggle between two elements when clicked
function yesOrNo() {
	let test = (document.getElementById(`change-he-loves-me`).innerHTML =
		Math.floor(Math.random() * 2));
	if (test === 1) {
		document.getElementById(
			`change-he-loves-me`
		).innerHTML = `Yes, It's real love!`;
	} else {
		document.getElementById(
			`change-he-loves-me`
		).innerHTML = `No, It's not real...`;
	}
}
document
	.getElementById(`change-he-loves-me`)
	.addEventListener('click', yesOrNo);

// Show the time when clicked
function showTime() {
	let time = (document.getElementById(`change-to-current-date`).innerHTML =
		new Date());
	return time;
}
document
	.getElementById(`change-to-current-date`)
	.addEventListener(`click`, showTime);

// ADD HTML ELEMENT WHEN CLICKED
function addElement() {
	let li = document.createElement(`li`);
	let n = 1;
	let liText = document.createTextNode(`${n} Place!`);
	li.appendChild(liText);
	document.getElementById(`add-list-item`).appendChild(li);
	n = n++;
}
document.getElementById(`add-list-item`).addEventListener('click', addElement);

// SHOW PAGE WIDTH & HEIGHT
function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}
document.getElementById(`change-to-current-width`).innerHTML =
	'Width: ' + getWidth();

function getHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.documentElement.clientHeight
	);
}
document.getElementById(`change-to-current-height`).innerHTML =
	'Width: ' + getHeight();

// SHOW CURRENT URL WHEN CLICKED
function showURL() {
	let url = (document.getElementById(`change-to-url`).innerHTML =
		`The current URL for this site is: ` + window.location.href);
}
document.getElementById(`change-to-url`).addEventListener(`click`, showURL);
