const nums = document.querySelectorAll(".num");
const nextBtn = document.querySelector(".cta-btn button");


const $ = (element, eventType, callback) => element.addEventListener(eventType, callback);

function chooseNextSection() {
    //find the html element which has the active class and remove it
 const currentActive = [...nums].filter(num => num.classList.contains("active"));
 let value = Number(currentActive[0].innerText);
 if(value === 4) {
    return;
}
 currentActive[0].classList.remove("active");


 let incValue = value + 1;

 const requiredNum = [...nums][incValue-1];
 requiredNum.classList.add("active");
 
 let elementToRemove = document.getElementById(`${value.toString()}`);
 elementToRemove.classList.toggle("hide");
 let nextElementToShow = document.getElementById(`${incValue}`);
 nextElementToShow.classList.toggle("hide");
}

$(nextBtn, "click", chooseNextSection);