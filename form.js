const form = document.querySelector("[data-js='form']");
const cardList = document.querySelector("[data-js='card-list']");
const questionTextArea = document.querySelector(
  "[data-js='question-textarea']"
);
const answerTextArea = document.querySelector("[data-js='answer-textarea']");
const questionCount = document.querySelector("[data-js='question-count']");

function setCounter(event) {
  const counter = document.querySelector(
    `[data-js='${event.target.name}-count']`
  );
  counter.textContent = `${150 - event.target.value.length} characters left`;
}

questionTextArea.addEventListener("input", setCounter);
answerTextArea.addEventListener("input", setCounter);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const card = document.createElement("li");
  card.classList.add("card-list__item");
  card.innerHTML = `<article class="card">
  <h2 class="card__question">
   ${data.question}
  </h2>
  <button
    class="card__button-answer"
    type="button"
    data-js="show-answer"
  >
    Show answer
  </button>
  <p class="card__answer" data-js="card-answer">${data.answer}</p>
  <ul class="card__tag-list">
    <li class="card__tag-list-item">#${data.tag}</li>
  </ul>
  <div class="card__button-bookmark">
    <button
      class="bookmark"
      aria-label="bookmark"
      type="button"
      data-js="bookmark-button"
    >
      <svg
        class="bookmark__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
      >
        <path
          d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
      </svg>
    </button>
  </div>
</article>`;
// prepend: add to the beginning
// append: add to the end
  cardList.prepend(card);
  event.target.reset();
});
