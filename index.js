class Timer {
  constructor(durationInput,startButton,pauseButton){
  this.durationInput = durationInput;
  this.startButton = startButton;
  this.pauseButton =  pauseButton;
  
  this.startButton.addEventListener('click',this.start);
  }

  start () {
    console.log('hello');
  }

}


const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#duration')

const timer = new Timer(durationInput,startButton,pauseButton)
