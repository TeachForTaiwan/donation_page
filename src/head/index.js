// favicon
import '../assets/favicon.png';

const headData = {
  title: '支持我們',
  desc: 'TFT 與有師資需求的偏鄉小學合作，支持該班級優秀教師的培育。您的捐款不但是校園的及時雨，也投資了陪伴幾十位孩子兩年的守護者、啟發者、改變者。',
  socialImage: 'assets/logo_350px.png',
  favicon: 'assets/favicon.png',
};

const headMeta = [
  { name: 'copyright', content: 'Teach For Taiwan', id: 'copyright' },
  { name: 'description', content: headData.desc, id: 'desc' },
  { name: 'theme-color', content: '#E95371', id: 'theme-color' },
  // Google+ / Schema.org
  { itemprop: 'name', content: headData.title },
  { itemprop: 'description', content: headData.desc },
  { itemprop: 'image', content: headData.socialImage },
  // Facebook / Open Graph
  { property: 'og:title', content: headData.title },
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: headData.socialImage },
  { property: 'og:description', content: headData.desc },
  { property: 'og:site_name', content: '為台灣而教' },
  { property: 'og:locale', content: 'zh_TW', id: 'locale' },
  // Twitter
  { name: 'twitter:title', content: headData.title },
  { name: 'twitter:description', content: headData.desc },
];

const headLink = [
  {
    rel: 'icon', href: headData.favicon, sizes: '192x192', type: 'image/png',
  },
  { href: 'https://plus.google.com/116905848798559143583', rel: 'publisher' },
];

export {
  headMeta,
  headLink,
};
