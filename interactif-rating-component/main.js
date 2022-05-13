const btn = document.querySelector("button");

const tl = gsap.timeline();
let rating = 0;

// onClick on interactive-card__rating__item add actif class and remove it from the others
const interactiveCardRatingItem = document.querySelectorAll(
  ".interactive-card__rating__item"
);
interactiveCardRatingItem.forEach((item) => {
  item.addEventListener("click", function () {
    interactiveCardRatingItem.forEach((item) => {
      item.classList.remove("actif-state");
    });
    this.classList.add("actif-state");
    rating = this.dataset.target;
  });
});

const changeState = () => {
  if (rating === 0) return alert("Please select a rating before submitting");

  document.querySelector("#rating").innerHTML = rating;

  tl.to("#input-state", {
    duration: 0.7,
    opacity: 0,
    x: -50,
    ease: "power3.out",
    stagger: {
      amount: 0.5,
    },
  });
  tl.to(".loader", {
    duration: 0.7,
    opacity: 1,
    ease: "power3.out",
  });
  tl.to(".loader", {
    duration: 0.7,
    opacity: 0,
    ease: "power3.out",
    delay: 1,
  });
  tl.fromTo(
    "#success-state",
    {
      duration: 0.7,
      opacity: 0,
      x: 50,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
      },
    },
    {
      duration: 0.7,
      opacity: 1,
      x: 0,
      ease: "power3.out",
      zIndex: 3,
      stagger: {
        amount: 0.5,
      },
    }
  );
};

// onClick on button, change the state of the card
btn.addEventListener("click", changeState);
