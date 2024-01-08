const signInBtn = document.querySelector(".signInBtn");
const signUpBtn = document.querySelector(".signUpBtn");
const mainbox = document.querySelector(".mainbox");
const rightpart = document.querySelector(".right-part");
const signin = document.querySelector(".sign-in");
const leftpart = document.querySelector(".left-part");

signInBtn.addEventListener("click", function () {
  mainbox.style.flexDirection = "row-reverse";
  signInBtn.style.opacity = "0";
  signUpBtn.style.opacity = "1";
  signUpBtn.classList.add("signUpBtn-active");
  rightpart.style.display = "none";
  signin.style.display = "block";
  leftpart.classList.add("left-part-customize");
  signin.classList.add("sign-in-active");
});

signUpBtn.addEventListener("click", function () {
  mainbox.style.flexDirection = "row";
  signUpBtn.style.opacity = "0";
  signUpBtn.classList.remove("signUpBtn-active");
  leftpart.classList.remove("left-part-customize");
  signInBtn.style.opacity = "1";
  rightpart.style.display = "block";
  signin.style.display = "none";
});
