let image = document.getElementById("dynamicImage");
let increaseButton = document.getElementById('increaseButton');
let decreaseButton = document.getElementById('decreaseButton');
let p = document.getElementById('dynamicP');
let currentWidth = image.clientWidth;

increaseButton.addEventListener("click",()=>{
    if(currentWidth <400){
    currentWidth+=50;
    image.style.width = `${currentWidth}px` 
    p.innerHTML = `Current Width : ${currentWidth}`
    p.style.color = "black";
    } else{
        p.innerHTML = "Too Large, Decrease the Size of Image";
        p.style.color = "red";
    }
});

decreaseButton.addEventListener("click",()=>{
    if(currentWidth >50){
    currentWidth-=50;
    image.style.width = `${currentWidth}px` 
    p.innerHTML = `Current Width : ${currentWidth}`
    p.style.color = "black";
    } else{
        p.innerHTML = "Too Small, Increase the Size of Image";
        p.style.color = "red";
    }
})