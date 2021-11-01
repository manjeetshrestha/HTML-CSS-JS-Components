const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let blur = 100;

let int = setInterval(blurring,40)

function blurring(){
    load++;
    blur--;
    if(load >99){
        clearInterval(int);
    }
    console.log(load);
    loadText.innerHTML=`${load}%`;
    let blurVal = `blur(${blur}px)`;
    bg.style.filter = blurVal;
    // console.log(`blur(${blur}px)`)
    // bg.style.filter="blur(0px)";
}