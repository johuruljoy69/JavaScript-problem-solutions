document.getElementById("open-popup-btn").addEventListener("click", function(){
    document.getElementsByClassName("dialog-popup")
    [0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
    document.getElementsByClassName("dialog-popup")
    [0].classList.remove("active");
});
