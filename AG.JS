
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-item");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projects.forEach((project) => {
      const categories = project.dataset.category.split(" ");

      project.hidden =
        selected !== "all" && !categories.includes(selected);
    });
  });
});

// Demo contact form: front-end only, no message is sent to a server.
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent =
    "Form preview only. Connect a backend to send your message.";

  contactForm.reset();
});
