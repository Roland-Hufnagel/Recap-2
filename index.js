// phew… not a lot going on here. Please add some code!
const answerButton = document.querySelector("[data-js='show-answer']");
const answer = document.querySelector("[data-js='card-answer']");

const bookmarkButton = document.querySelector("[data-js='bookmark-button']");
const bookmarkSvg = document.querySelector("[data-js='bookmark-svg']");

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");

  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});

bookmarkButton.addEventListener("click", () => {
  bookmarkSvg.classList.toggle("bookmark__icon--active");
});
