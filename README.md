# Vaishnav Samaj

A responsive static community portal built with HTML, CSS, Bootstrap 5.3 and vanilla JavaScript. Open `index.html` or serve this folder from a static host. There is no backend: forms do not store, send or publish information.

## Pages and files

- `index.html` is the long-form homepage.
- Community pages cover About, Rishte, announcements, Kuldevi, gotra, history, events, directory, gallery, seva, contact, privacy and terms.
- `assets/css/` contains global, responsive, motion and page styles.
- `js/` contains navigation and page interactions, including the sample profile and notice data.
- Bootstrap and Bootstrap Icons load from their official jsDelivr CDN URLs. No vendor library files were present locally, so the site does not include fake or empty libraries. jQuery, AOS, Swiper and GSAP are not required.

## Demonstration content and trust

The site includes eight fictional matrimonial profile examples, three fictional wedding-related notice examples, and Indian wedding stock photography from Unsplash and Pexels. Names, biographies, notice copy and dates are invented solely to demonstrate the interface. Each sample is visibly labelled; stock photographs do not depict the named profiles, community members or actual events. No real member profiles, official notices, scheduled events, temple addresses, directory listings, donation credentials or community statistics are represented.

Update the central arrays `fictionalProfileSamples` in `js/marriage.js`, `vaishnavGotraNames` in `js/gotra.js`, and `sampleNotices` in `js/announcements.js` to revise the visual examples. The gotra page contains the 52 names supplied for this directory. The eight fictional marriage examples each use the surname Vaishnav and a distinct gotra from that supplied list. Keep the fiction labels for demos. Before publishing real profiles, obtain explicit consent and implement a secure submission, review, access and removal process. Do not place personal contact details in static page data.

The gotra directory in js/gotra.js contains the 52 names supplied for this site. Names are shown in the supplied Hindi spellings; family and regional variation may still exist. The eight fictional profile examples in js/marriage.js use distinct entries from this list.

## Updating the site

- Update the brand name and theme variables in `assets/css/style.css` and page-specific visual styles in `assets/css/pages.css`.
- Edit the profile samples and wedding notice examples in the JavaScript files above. Real community updates must have a confirmed source, date and publication permission.
- Add event, directory, history, gallery, gotra or Kuldevi entries only after verification and approval. Gallery photos require appropriate usage rights and consent from recognizable people.
- Forms validate locally but cannot securely save or send information. A real submission service and privacy review are needed before collecting personal data.
- Configure public email, phone and social links in CONTACT_CONFIG in js/contact.js. The contact form opens a mail draft only when a recipient email is configured; it never stores messages or claims they were sent.

## Privacy, images and deployment

The site does not use local storage or analytics. Bootstrap and Unsplash images are loaded from their CDNs and need an internet connection. The gallery uses representative Indian wedding imagery, not photos of this community. For offline deployment, use appropriately licensed, optimized local images and update image references.

Smooth scrolling respects `prefers-reduced-motion`; animations use small CSS transitions and IntersectionObserver reveals. Before publishing real submissions, implement secure storage, retention and deletion rules, consent records, identity and moderation procedures, and a monitored correction or removal channel. Static hosting alone cannot provide these protections.
