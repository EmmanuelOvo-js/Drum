window.addEventListener('keydown', playSound);

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	//If the key clicked is not assigned to sound then return nothing
	if (!audio) return;

	//Make audio start from 0 the beginning
	audio.currentTime = 0;
	//..

	audio.play();
	//Add class "playing" for letter button to animate
	key.classList.add('playing');

	//Remove class so that button can return to its normal state
	setTimeout(() => {
		key.classList.remove('playing');
	}, 100);
}
