let start=document.querySelector(".start");
let pressed=document.querySelector(".pressed");
let asciiCode=document.querySelector(".asciiCode");
let span=document.getElementsByTagName("span")[0];
let displayKeyCode=document.querySelector(".displayKeyCode");

console.log(pressed);
pressed.style.display="none";
displayKeyCode.style.display="none";
let keyHistroy=[];
var audio = new Audio('sound.wav');
// audio.play();
window.addEventListener("keydown",(eve)=>{
  console.log(eve);
    var evtobj = window.event? event : eve;
    keyHistroy.push(eve.key);
    if(evtobj.ctrlKey){
      // console.log("hii");
      if(evtobj.keyCode>=65 && evtobj.keyCode<=90){
        console.log("ctrl+",eve.key,evtobj.keyCode);
        span.innerText="ctrl-"+eve.key;
        pressed.style.display="block";
        displayKeyCode.style.display="block";
        asciiCode.innerText=eve.keyCode;
        audio.play();
        eve.preventDefault();
      }else{
        span.innerText=eve.key;
        pressed.style.display="block";
        displayKeyCode.style.display="block";
        asciiCode.innerText=eve.keyCode;
        audio.play();
        eve.preventDefault();
      }
    }
    else{
      span.innerText=eve.key
      pressed.style.display="block";
      displayKeyCode.style.display="block";
      asciiCode.innerText=eve.keyCode;  
      audio.play();
    }
    // const htmlEntities=Array.from(eve.key.codePointAt(0)).map(char=>{
    //     const codePoint=char.codePointAt(0);
    //     return `&#${codePoint};`;
    // }).join("");
    // console.log(htmlEntities,"hi");
    // console.log(eve.key.codePointAt(0));
    // span.innerHTML=`<span>&#${eve.key.codePointAt(0)}</span>`;
    
    // span.innerText=eve.key
    // pressed.style.display="block";
    // displayKeyCode.style.display="block";
    // asciiCode.innerText=eve.keyCode;
    console.log("key history is",keyHistroy);
})
