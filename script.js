const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector("#demo-form");
const formMessage = document.querySelector(".form-message");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".billing-option").forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelectorAll(".billing-option").forEach((item) => item.classList.remove("active"));
    option.classList.add("active");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const fieldsAreValid = name.value.trim().length > 1 && emailIsValid;

  name.classList.toggle("input-error", name.value.trim().length <= 1);
  email.classList.toggle("input-error", !emailIsValid);

  if (!fieldsAreValid) {
    formMessage.className = "form-message error";
    formMessage.textContent = "Please enter your name and a valid work email.";
    return;
  }

  formMessage.className = "form-message success";
  formMessage.textContent = `Thanks, ${name.value.trim().split(" ")[0]}! Your workspace is ready to explore.`;
  form.reset();
  name.classList.remove("input-error");
  email.classList.remove("input-error");
});
