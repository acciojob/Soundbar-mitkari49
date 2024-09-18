const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");
let currentSound;

buttons.forEach(button => {
	button.addEventListener("click", playSound);
});

stopButton.addEventListener("click", stopSound);

function playSound(event) {
	const soundName = event.target.getAttribute("data-sound");
	currentSound = new Audio(`sounds/${soundName}.mp3`);
	currentSound.play();
}

function stopSound() {
	if (currentSound) {
		currentSound.pause();
	}
}