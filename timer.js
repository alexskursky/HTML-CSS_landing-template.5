let countDownDate = new Date("Aug 6, 2022 15:37:25").getTime();

let x = setInterval(function() { 
    let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " Days ";
  document.getElementById("hours").innerHTML = hours + " Hours ";
  document.getElementById("minutes").innerHTML = minutes + " Minutes ";
  document.getElementById("seconds").innerHTML = seconds + " Seconds ";

}, 1000)