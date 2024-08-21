// burger menu
const burger = document.querySelector(".header__wrapper_burger");
const burgerMenuBlock = document.querySelector(".header__mobile_block");
const headerLinks = document.querySelectorAll(".header__item_link");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  burgerMenuBlock.classList.toggle("active");

  if (burgerMenuBlock.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

headerLinks.forEach((headerLink) => {
  headerLink.addEventListener("click", function () {
    burger.classList.toggle("active");
    burgerMenuBlock.classList.toggle("active");

    if (burgerMenuBlock.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});
