window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    '#60d395',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#6860d3',
    '#60b2d3'
  ]


  //lets get going with the sound here

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play()

      createBubbles(index);
    })
  });

  //create a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = `
    <div class="visual">
      <div class="bubble"></div>
    </div>

    <style>
    .bubble{
      background-color: ${colors[index]};
      animation: jump 1s ease;
    }
    </style>
    `
    return visual.innerHTML += bubble;
  }


});
