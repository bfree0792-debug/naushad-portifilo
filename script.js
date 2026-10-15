const messages = {
  "FULL-TIME": "I'm open to full-time opportunities and joining a team.",
  "FREELANCE": "I'm available for freelance projects and collaborations.",
  "CONSULTING": "I'm open to consulting and strategy sessions."
};

const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {
  tag.addEventListener("click", () => {
    tags.forEach(item => item.classList.remove("active"));
    tag.classList.add("active");

    const description = tag.closest(".side-card")
      .querySelector("p:last-child");

    description.textContent = messages[tag.textContent.trim()];
  });
});

document.querySelectorAll("[data-nav-toggle]").forEach(navToggle => {
  const navigation = document.getElementById(
    navToggle.getAttribute("aria-controls")
  );
  const navbar = navToggle.closest(".navbar");

  if (!navigation || !navbar) return;

  const setNavigationOpen = isOpen => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    navbar.classList.toggle("is-open", isOpen);
  };

  navToggle.addEventListener("click", () => {
    setNavigationOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setNavigationOpen(false));
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setNavigationOpen(false);
      navToggle.focus();
    }
  });

  window.matchMedia("(max-width: 760px)").addEventListener("change", event => {
    if (!event.matches) setNavigationOpen(false);
  });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailto = "mailto:hello@yourname.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    document.getElementById("form-message").textContent =
      "Opening your email application...";

    window.location.href = mailto;
  });
}