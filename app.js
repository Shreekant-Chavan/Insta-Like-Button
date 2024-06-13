var container = document.querySelector(".container");
var loveBtn = document.querySelector("i");

container.addEventListener("dblclick", () => {
    loveBtn.style.transform = "translate(-50%, -50%) scale(1)";
    loveBtn.style.opacity = "0.9";
    
    console.log("JAY SHREE RAM");
    
    setTimeout(() => {
        loveBtn.style.opacity = "0";
    }, 1000);
    
    setTimeout(() => {
        loveBtn.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1000);
})
