const page = document.body.dataset.page || "home";
const inPages = location.pathname.includes("/pages/");
const pathTo = (path) => (inPages ? "../" : "") + path;
const pages = [
  ["Home", "index.html", "home"],
  ["Rooms", "pages/rooms.html", "rooms"],
  ["Facilities", "pages/facilities.html", "facilities"],
  ["Gallery", "pages/gallery.html", "gallery"],
  ["About", "pages/about.html", "about"],
  ["Contact", "pages/contact.html", "contact"]
];
const logo = `
<a class="logo-mark" href="${pathTo("index.html")}" aria-label="Camelot Country Lodge home">
  <svg viewBox="0 0 72 42" fill="none" aria-hidden="true"><path d="M3 35 28 8 39 19 48 10 69 35M18 35 39 19 55 35" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <span><span class="logo-type">CAMELOT</span><span class="logo-sub">COUNTRY LODGE</span></span>
</a>`;
const navLinks = pages.map(([label, href, key]) =>
  `<a class="${page === key ? "nav-active" : ""}" href="${pathTo(href)}">${label}</a>`).join("");
const header = document.querySelector("#site-header");
if (header) {
  header.innerHTML = `
  <header class="absolute z-20 w-full text-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      ${logo}
      <nav class="hidden items-center gap-8 text-sm md:flex">${navLinks}</nav>
      <a class="hidden border border-white/70 px-5 py-2 text-sm md:inline-flex" href="${pathTo("pages/booking.html")}">Book Now</a>
      <button id="menu-toggle" class="rounded border border-white/50 px-3 py-2 text-sm md:hidden" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    </div>
    <nav id="mobile-menu" class="mobile-menu bg-camelot-forest px-6 pb-5 md:hidden" hidden>
      <div class="flex flex-col gap-4 py-3">${navLinks}<a href="${pathTo("pages/booking.html")}" class="font-semibold">Book Now →</a></div>
    </nav>
  </header>`;
}
const footer = document.querySelector("#site-footer");
if (footer) {
  footer.innerHTML = `
  <footer class="bg-camelot-ink text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>${logo}<p class="mt-5 max-w-xs text-sm leading-6 text-white/60">Escape · Relax · Reconnect</p></div>
      <div>
        <h2 class="mb-4 font-display text-xl">Quick Links</h2>
          <div class="flex flex-col gap-2 text-sm text-white/70">${navLinks}
          <a href="${pathTo("pages/booking.html")}">Book Now</a>
          </div>
        </div>
      <div>

        <h2 class="mb-4 font-display text-xl">Contact</h2>
        <p class="text-sm leading-7 text-white/70">+27 ....</p>
        <p class="text-sm leading-7 text-white/70">camelot.estate@gmail.com</p>
        <p class="text-sm leading-7 text-white/70">R64 Bosof Road, Kimberley, Northern Cape, South Africa</p>

      </div>
      <div>

        <h2 class="mb-4 font-display text-xl">Plan Your Stay</h2>
        <p class="text-sm leading-6 text-white/70">Have a question or planning a visit?</p>
        <a class="mt-4 inline-block text-sm underline underline-offset-4" href="${pathTo("pages/booking.html")}">Make an enquiry →</a>
      </div>

    </div>

    <div class="border-t border-white/15">
      <div class="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
        <span>© ${new Date().getFullYear()} Camelot Country Lodge. All rights reserved. Designed and hosted by Jabez Greenan.</span>
        <span>Escape · Relax · Reconnect</span>
      </div>
    </div>
  </footer>`;
}
document.addEventListener("click", (event) => {
  const button = event.target.closest("#menu-toggle");
  if (!button) return;
  const menu = document.querySelector("#mobile-menu");
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  menu.hidden = expanded;
});
document.querySelectorAll("[data-contact-form], [data-booking-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const booking = form.hasAttribute("data-booking-form");
    const subject = booking ? "Booking enquiry - Camelot Country Lodge" : "Website enquiry - Camelot Country Lodge";
    const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
    // Replace this address with the lodge's real email before publishing.
    const email = "hello@camelotcountrylodge.co.za";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
