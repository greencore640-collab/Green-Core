const pages = {
  '/': {
    title: 'GreenCore – Scrap Pickup & Recycling Service in Chennai',
    description: 'GreenCore picks up scrap metal, paper, plastic and e-waste from your home or business in Chennai. Fair rates and convenient doorstep pickup. Book online.',
  },
  '/services': {
    title: 'Scrap Pickup Services in Chennai | GreenCore',
    description: 'GreenCore collects recyclable scrap from homes, schools and businesses across Chennai. Book doorstep pickup for paper, metal, plastic and e-waste.',
  },
  '/contact': {
    title: 'Contact GreenCore | Scrap Pickup in Chennai',
    description: 'Contact GreenCore to arrange scrap pickup in Chennai. Reach us by phone, WhatsApp or email for home and business collections.',
  },
};

export function getPageMetadata(pathname) {
  return pages[pathname] ?? pages['/'];
}
