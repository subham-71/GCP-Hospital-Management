// get the toast and show
var toast = document.getElementsByClassName("toast")[0];
var button = document.getElementById("submit");
var progressBar = document.getElementsByClassName("progress-bar")[0];

toast = new bootstrap.Toast(toast, {
    animation: true,
    autohide: true,
    delay: 5000
});




button.addEventListener("click", function () {
    var progress = 0;
    progressBar.style.width = progress + "%";
    toast.show();
    var interval = setInterval(function () {
        progress+= 5;
        if (progress >= 150) {
            clearInterval(interval);
            toast.hide();
        }else if (progress <= 100) {
            progressBar.style.width = progress + "%";
        } else {
            progressBar.style.width = 100 + "%";
        }
    }, 100);
});
