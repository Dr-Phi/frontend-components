const myLabel = document.getElementById("myLabel");
const dayNight = document.getElementById("amPm");
const day = document.getElementById("day");

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

update();
setInterval(update, 1000);



function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date)[0];
  dayNight.innerHTML = formatTime(date)[1];
  day.innerHTML = weekday[date.getDay()];

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = hours >= 12 ? "☽" : "🔆";

    hours = hours % 12 || 12;
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return [`${hours}:${minutes}:${seconds}`, `${amPm}`];
  }
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
const img = document.getElementById("target");

const generateImg = () => {
  fetch("https://aws.random.cat/meow")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      img.setAttribute("src", `${json.file}`)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("That's it!");
    });
};

const btn = document.getElementById("randomQ");


btn.addEventListener("click", generateImg)




