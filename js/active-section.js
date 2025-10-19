document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll("main > section[id]"));
  const navLinks = Array.from(document.querySelectorAll('nav ul a[href^="#"]'));

  function clearCurrent() {
    navLinks.forEach(link => {
      link.classList.remove("current-menu-item");
      link.removeAttribute("aria-current");
    });
  }

  function onScroll() {
    let currentSectionId = null;
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // If we're above the first section, highlight nothing
    if (window.scrollY < sections[0].offsetTop - 10) {
      clearCurrent();
      return;
    }

    for (const section of sections) {
      if (section.offsetTop <= scrollPosition) {
        currentSectionId = section.id;
      }
    }

    // Special case: highlight last nav item if near page bottom
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
      currentSectionId = sections[sections.length - 1].id;
    }

    clearCurrent();
    if (currentSectionId) {
      const activeLink = navLinks.find(a => a.getAttribute("href") === `#${currentSectionId}`);
      if (activeLink) {
        activeLink.classList.add("current-menu-item");
        activeLink.setAttribute("aria-current", "true");
      }
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll(); // Run on page load
});