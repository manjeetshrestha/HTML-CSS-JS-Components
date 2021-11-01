const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
let progessWidth =0;

next.addEventListener('click',()=>{
    currentActive++;

    disableOrenable();

    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    incProgressLine()

    update();
})


prev.addEventListener('click',()=>{
    currentActive--;

    disableOrenable();

    if(currentActive < 1){
        currentActive = 1;
    }

    decProgressLine()
    
    update();
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
}


function disableOrenable(){
    if(currentActive === 1){
        prev.disabled = true;
    }
    else{
        prev.disabled = false;
    }

    if(currentActive === 4){
        next.disabled = true;
    }else{
        next.disabled = false;
    }
    
}

function incProgressLine(){
    progessWidth+=33;
    if(progessWidth > 99){
        progessWidth = 99;
    }
    progress.style.width= `${progessWidth}%`;
}

function decProgressLine(){
    progessWidth-=33;
    progress.style.width= `${progessWidth}%`;
    console.log(progessWidth);
}