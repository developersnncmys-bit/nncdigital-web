// Single source of truth for how to reach NNC.
//
// These details were previously repeated across the contact pages, the thank
// you page, the help bot, the travel pages and the structured data, and had
// drifted: three different WhatsApp numbers were live at once
// (919900563371 on the contact pages, 919900566466 in the help bot and
// 919164566466 in the chat). Anything that links to or displays a number or
// address should import from here rather than writing its own.
//
// Prose inside data/helpbot.js and data/pages.js still spells the details out
// in sentences, so those cannot import a constant — but the values there match
// what is defined below.

export const contact = {
  // Calls go to the IVR line.
  phone: '+91 94227 99466',
  phoneDisplay: '94227 99466',
  phoneHref: 'tel:+919422799466',

  // WhatsApp is a separate handset from the IVR line, so the two are always
  // shown as different numbers rather than one "call or WhatsApp" contact.
  whatsapp: '+91 91645 66466',
  whatsappDisplay: '91645 66466',
  whatsappNumber: '919164566466',
  whatsappHref: 'https://wa.me/919164566466',

  // Public address shown to visitors.
  email: 'hello@nncdigital.co.in',
  emailHref: 'mailto:hello@nncdigital.co.in',

  // Where website enquiries are actually delivered. Deliberately separate from
  // the public address: changing this changes which inbox receives leads, and
  // FormSubmit needs a one-time confirmation before a new recipient works.
  enquiryEmail: 'info@nakshatranamahacreations.com',

  website: 'nncdigital.co.in',
  websiteHref: 'https://nncdigital.co.in/',
}

// Role addresses, which are intentionally distinct rather than inconsistent.
export const roleEmails = {
  careers: 'careers@nncdigital.co.in',
  partners: 'partners@nncdigital.co.in',
  press: 'press@nncdigital.co.in',
  legal: 'legal@nncdigital.co.in',
}
