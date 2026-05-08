let timer;
function startCountdown() {
    try {
        let input = document.getElementById("date").value;
        let target = new Date(input);
        let now = new Date();
        if (input === "") throw "Please select a date";
        if (target <= now) throw "Enter a future date";
        clearInterval(timer);
        timer = setInterval(function () {
            let diff = target - new Date();
            if (diff <= 0) {
                clearInterval(timer);
                document.getElementById("msg").innerHTML = "Countdown Finished!";
                return;
            }
            document.getElementById("d").innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById("h").innerHTML = Math.floor((diff / (1000 * 60 * 60)) % 24);
            document.getElementById("m").innerHTML = Math.floor((diff / (1000 * 60)) % 60);
            document.getElementById("s").innerHTML = Math.floor((diff / 1000) % 60);
        }, 1000);
        document.getElementById("msg").innerHTML = "";
    } catch (error) {
        console.error(error);
        document.getElementById("msg").innerHTML = error;
    }
}