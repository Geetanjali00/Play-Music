console.log("PLAY MAGICAL");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

masterPlay.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play-circle");
		masterPlay.classList.add("fa-pause-circle");
	} else {
		audioElement.pause();
		masterPlay.classList.remove("fa-pause-circle");
		masterPlay.classList.add("fa-play-circle");
	}
});
audioElement.addEventListener("timeupdate", () => {
	progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
	myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
	audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
	Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
		element.classList.remove("fa-pause-circle");
		element.classList.add("fa-play-circle");
	});
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
	element.addEventListener("click", (e) => {
		console.log(e.target);
		makeAllPlays();
		index = parseInt(e.target.id);
		e.target.classList.remove("fa-play-circle");
		e.target.classList.add("fa-pause-circle");
		audioElement.src = `${index + 1}.mp3`;
		audioElement.currentTime = 0;
		audioElement.play();
		masterPlay.classList.remove("fa-play-circle");
		masterPlay.classList.add("fa-pause-circle");
	});
});
