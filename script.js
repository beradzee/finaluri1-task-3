const url = "https://api.chucknorris.io/jokes/random";

const joke = document.getElementById("fetchButton");
const like = document.getElementById("thumbsUpButton");
const disLike = document.getElementById("thumbsDownButton");

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     let jokeText = document.querySelector(".joke");
//     jokeText.textContent = data.value;
//   });

joke.addEventListener("click", function () {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let jokeText = document.querySelector(".joke");
      jokeText.textContent = data.value;
    });
});

let counter = 0;

const counterDiv = document.getElementById("counter");
counterDiv.textContent = `total Like/Dislike : ${counter}`;

like.addEventListener("click", function () {
  counter++;
  console.log(counter);

  counterDiv.textContent = `total Like/Dislike : ${counter}`;
});

disLike.addEventListener("click", function () {
  counter--;
  console.log(counter);

  console.log(counterDiv);
  counterDiv.textContent = `total Like/Dislike : ${counter}`;
});
