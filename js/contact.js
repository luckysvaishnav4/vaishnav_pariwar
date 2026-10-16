/* Set these values only to public, owner-approved contact channels. */
const CONTACT_CONFIG = {
  email: 'info@vaishnavpariwar.com',
  phone: '+91- 6376532125',
  social: {
    instagram: 'www.instagram.com/vaishnavpariwarofficial/',
    facebook: 'www.facebook.com/vaishnavpariwarofficial/',
    youtube: 'www.youtube.com/@vaishnavpariwarofficial',
  }
};

const setConfiguredLink = (link, placeholder, href, label) => {
  if (!link || !placeholder) return;
  if (href) {
    link.href = href;
    link.textContent = label;
    link.hidden = false;
    placeholder.hidden = true;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const email = CONTACT_CONFIG.email.trim();
  const phone = CONTACT_CONFIG.phone.trim();
  setConfiguredLink(document.querySelector('[data-contact-email-link]'), document.querySelector('[data-contact-email-placeholder]'), email ? `mailto:${email}` : '', email);
  const phoneHref = phone ? `tel:${phone.replace(/[^+\d]/g, '')}` : '';
  setConfiguredLink(document.querySelector('[data-contact-phone-link]'), document.querySelector('[data-contact-phone-placeholder]'), phoneHref, phone);

  Object.entries(CONTACT_CONFIG.social).forEach(([network, url]) => {
    const link = document.querySelector(`[data-social-link="${network}"]`);
    const placeholder = document.querySelector(`[data-social-placeholder="${network}"]`);
    const candidate = url.trim();
    const normalizedUrl = /^https:\/\//i.test(candidate) ? candidate : (/^www\./i.test(candidate) ? `https://${candidate}` : '');
    let safeUrl = '';
    try {
      const parsedUrl = new URL(normalizedUrl);
      if (parsedUrl.protocol === 'https:') safeUrl = parsedUrl.href;
    } catch {
      safeUrl = '';
    }
    if (link && placeholder && safeUrl) {
      link.href = safeUrl;
      link.hidden = false;
      placeholder.hidden = true;
    }
  });

  const form = document.querySelector('[data-contact-form]');
  const result = document.querySelector('[data-contact-result]');
  if (!form) return;
  const fields = [...form.querySelectorAll('input, select, textarea')];
  fields.forEach(field => field.addEventListener('input', () => {
    if (field.checkValidity()) field.classList.remove('is-invalid');
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalidFields = fields.filter(field => !field.checkValidity());
    fields.forEach(field => field.classList.toggle('is-invalid', invalidFields.includes(field)));
    if (invalidFields.length) {
      invalidFields[0].focus();
      return;
    }
    if (result) result.textContent = '';
  });
});
