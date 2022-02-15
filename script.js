const nums = document.querySelectorAll(".num");
const nextBtn = document.querySelector(".cta-btn button");

const $ = (element, eventType, callback) => element.addEventListener(eventType, callback);

function chooseNextSection() {
    //find the html element which has the active class and remove it
 const currentActive = [...nums].filter(num => num.classList.contains("active"));
 currentActive[0].classList.remove("active");

 let value = Number(currentActive[0].innerText);
 let incValue = ++value;

 const requiredNum = [...nums][incValue-1];
 requiredNum.classList.add("active");
 let elementToRemove = document.getElementById(`${value.toString()}`)
 let nextElementToShow;
}

$(nextBtn, "click", chooseNextSection);