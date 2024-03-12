const dropDown = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "white",
  "black",
];

let selectedValues = [];

document.addEventListener("DOMContentLoaded", function () {
  function initialFunc (method) {
    const inputFields = document.querySelectorAll(".input-border");
    inputFields.forEach((input) => {
      input.addEventListener("click", function (event) {
        const target = event.target;
        const dropdown = document.querySelectorAll(".Dropdown");
        dropdown.forEach((drop) => {
          if (!target.classList.contains("input-text")) {
           if(method) {
            drop.classList.toggle("open");
           } else {
            drop.classList.add("open");
           }
          }
        });
      });
    });
  }
  initialFunc('toggle')

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!target.closest(".container")) {
      const dropdown = document.querySelector(".Dropdown");
      dropdown.classList.remove("open");
    }
  });

  function showList (dropDown) {
    const list = document.querySelectorAll(".list");
  const create = document.createElement("option");
  dropDown.map((drop) => {
    create.innerHTML = drop;
    create.setAttribute("value", drop);
    create.setAttribute("id", "data-list");
    list.forEach((list) => {
      list.appendChild(create.cloneNode(true));
    });
  });
  }

  showList(dropDown)

  const option = document.querySelectorAll("#data-list");
  option.forEach((opt) => {
    opt.addEventListener("click", function (event) {
      const selectedOption = event.target;
      const selectedValue = selectedOption.textContent;
      if (!selectedValues.includes(selectedValue)) {
        selectedValues.push(selectedValue);
        const getDiv = document.querySelector(".input-bg");
        const span = document.createElement("span");
        span.innerHTML = `${selectedValue} &#10006;`;
        span.setAttribute("id", selectedValue);
        span.setAttribute("class", "input-text");
        span.addEventListener("click", (event) => {
          const id = document.getElementById(event.target.id);
          const index = selectedValues.findIndex(i=> i === event.target.id)
          if(index > -1) {
            selectedValues.splice(index, 1)
          }
          id.remove()
        });
        getDiv.appendChild(span);
      }
    });
  });
});
