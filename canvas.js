
function drawFrame() {
   frame.lineWidth=8
   frame.lineCap="round"
   frame.lineJoin="round"
   frame.fillStyle= "#F3F5FC"
   frame.strokeStyle = "#6e522c"
   frame.fillRect(0,0,1200,800)
   frame.beginPath();
   frame.moveTo(650,500)
   frame.lineTo(900,500)
   frame.stroke()
   frame.closePath()
}

function drawLine() {
   frame.lineWidth=6
   frame.lineCap="round"
   frame.lineJoin="round"
   frame.strokeStyle = "#6e522c"
   frame.beginPath()
   let l=600/maskW.length
   for (let i=0;i<maskW.length;i++){
      frame.moveTo(500+(l*i),640)
      frame.lineTo(550+(l*i),640)
   }
   frame.stroke()
   frame.closePath()
}

function writeRightLetter(index) {
   frame.font = 'bold 52px Finlandica';
   frame.lineWidth=6
   frame.lineCap="round"
   frame.lineJoin="round"
   frame.fillStyle= "#6e522c"
   let l=600/maskW.length
   frame.fillText(maskW[index],505+(l*index),620)
   frame.stroke()
}

function writeWrongLetter(letter, errorsLeft) {
   frame.lineWidth=6
   frame.font = 'bold 40px Finlandica';
   frame.lineCap="round"
   frame.lineJoin="round"
   frame.fillStyle="#6e522c"
   frame.fillText(letter,535+(40*(10-errorsLeft)),710,40)
}

   function mainDraw(x) {
      frame.lineCap="round"
      frame.lineJoin="round"
      frame.strokeStyle = "#6e522c"
      if(x===8){
         frame.moveTo(700,500)
         frame.lineTo(700,100)
      }
      if(x===7){
         frame.moveTo(850,100)
         frame.lineTo(700,100)
      }
      if(x===6){
         frame.moveTo(850,100)
         frame.lineTo(850,171)
      }      
      if(x===5){
         frame.moveTo(900,230)
         frame.arc(850,230,50,0,Math.PI*2)
      }
      if(x===4){
         frame.moveTo(850,389)
         frame.lineTo(850,289)
      }
      if(x===3){
         frame.moveTo(850,389)
         frame.lineTo(800,450)
      }
      if(x===2){
         frame.moveTo(850,389)
         frame.lineTo(890,450)
      }
      if(x===1){
         frame.moveTo(850,330)
         frame.lineTo(800,389)
      }
      if(x===0){
         frame.moveTo(850,330)
         frame.lineTo(890,389)
      }

      frame.stroke()
      frame.closePath()
   }

// victory-defeat functions
   function showDefeat() {
      frame.font = ' bold 42px Finlandica';
      frame.lineWidth=6
      frame.lineCap="round"
      frame.lineJoin="round"
      frame.fillText("You loose :(",400,400)
   }

   function showVictory() {
      frame.font = 'bold 42px Finlandica';
      frame.lineWidth=6
      frame.lineCap="round"
      frame.lineJoin="round"
      frame.fillText("You Win :)",400,400)
   }
