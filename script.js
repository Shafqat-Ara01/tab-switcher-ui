const portfolio = {
  btns: document.querySelectorAll(".btn "),
  contents: document.querySelectorAll(".content"),
};

portfolio.btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //removing
    portfolio.btns.forEach((btn) => btn.classList.remove("active"));
    portfolio.contents.forEach((content) => {
      content.classList.remove("active");
    });

    //adding

    btn.classList.add("active"); //the one we clicked

    document.getElementById(btn.dataset.info).classList.add("active"); //we get the id by going to the data attribute of the btn we clicked.
  });
});
