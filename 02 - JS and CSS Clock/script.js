const secondHand = document.querySelector('.second-hand'),
			minuteHand = document.querySelector('.min-hand'),
			hourHand = document.querySelector('.hour-hand');

function setDate() {
	//get times and set them equal to the degrees on the clock (with micro degrees for hours/minutes)
	const now = new Date();
	const hoursDegrees = ((now.getHours() % 12) * 30) + Math.round(now.getMinutes() / 10) + 90;
	const minutesDegrees = (now.getMinutes() * 6) + Math.round(now.getSeconds() / 10) + 90;
	const secondsDegrees = (now.getSeconds() * 6) + 90;

	//check if a hand is at '12 o'clock' and disable transition to prevent ugly shudder effect
	if (hoursDegrees === 90) hourHand.style.transitionDuration = "0s";
	if (minutesDegrees === 90) minuteHand.style.transitionDuration = "0s";
	if (secondsDegrees === 90) secondHand.style.transitionDuration = "0s";
	
	//set hands to appropriate locations
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;	
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;	
	
	//reset transition effects if they were changed earlier
	hourHand.style.transitionDuration = "0.05s";
	minuteHand.style.transitionDuration = "0.05s";
	secondHand.style.transitionDuration = "0.05s";
}

setInterval(setDate, 1000);