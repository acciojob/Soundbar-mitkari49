
document.addEventListener("DOMContentLoaded",()=>{
// selected all btn's
	const AllButtons = document.querySelectorAll(".btn");
// Added click event to each buttons
	AllButtons.forEach(button=>{
		button.addEventListener("click",()=>{
			// getting sound file from data attibute

			const soundName=button.getAttribute("data-sound");
			const audio =new Audio(`sounds/${soundName}.mp3`);
			audio.play();
		})
	})
})
