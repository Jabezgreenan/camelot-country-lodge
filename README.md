# Camelot Country Lodge website

A responsive static multi-page guesthouse website template built with HTML, Tailwind CSS CDN, and vanilla JavaScript.

## Pages
- `index.html` — homepage
- `pages/rooms.html` — accommodation overview
- `pages/facilities.html` — facilities
- `pages/gallery.html` — photo gallery
- `pages/about.html` — lodge story
- `pages/contact.html` — contact form
- `pages/booking.html` — booking enquiry form

## Run locally
Open the folder in VS Code and use the Live Server extension, or serve it with any local static web server. Tailwind is loaded from its CDN, so an internet connection is required for Tailwind styles.

## Before publishing
1. Replace the sample images with real Camelot Country Lodge photos.
2. Update room names, capacities, facilities, address, phone and email with verified details.
3. In `js/main.js`, replace the placeholder email address with the lodge's actual enquiry email.
4. Connect forms to a form service or backend if you want submissions without opening the visitor's email app.
5. If using a Tailwind production build, replace the CDN script with your compiled CSS.

The sample contact and booking forms open the visitor's email app; they do not provide live availability or automatically confirm reservations.
