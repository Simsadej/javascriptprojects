window.addEventListener('keydown', playSound);
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!audio) return; //stops the function from running all together 
	audio.currentTime = 0; //rewind audio to the start
	audio.play();
	key.classList.add('playing');
};
function removeTransition(e) {
	if(e.propertyName !== 'transform')return; //skip if its not a transform
	 this.classList.remove('playing');//this referrs to the key
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
