import bagImage from './img/bag.png';
import capImage from './img/cap.png';
import hoodieImage from './img/hoodie.png';
import lampImage from './img/lamp.png';
import lanyardImage from './img/lanyard.png';
import notesImage from './img/notes.png';
import organizerImage from './img/organizer.png';
import shirtImage from './img/shirt.png';
import sweaterImage from './img/sweater.png';
import tumblerImage from './img/tumbler.png';

const products = [
  {
    name: 'campus-tote-bag',
    title: 'Campus Tote Bag',
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    image: bagImage,
    content: [
      'A roomy everyday tote for notebooks, charger cables, snacks, and campus essentials.',
      'The reinforced canvas body and soft handles make it easy to carry between classes.',
      'Designed for students who want one reliable bag for study sessions, lectures, and errands.',
    ],
  },
  {
    name: 'daily-notes-pack',
    title: 'Daily Notes Pack',
    category: 'Stationery',
    price: 'PHP 249',
    stock: 'In stock',
    image: notesImage,
    content: [
      'A curated bundle of notebooks, sticky notes, and index tabs for everyday lectures.',
      'Compact and stackable so the kit fits easily in any backpack or dorm drawer.',
      'Perfect for planning study sessions, project timelines, and review notes.',
    ],
  },
  {
    name: 'stainless-tumbler',
    title: 'Stainless Tumbler',
    category: 'Drinkware',
    price: 'PHP 599',
    stock: 'Low stock',
    image: tumblerImage,
    content: [
      'A double-wall tumbler built for cold drinks, warm coffee, or hydration between classes.',
      'The spill-resistant lid and matte finish are made for backpacks and busy commutes.',
      'Fits most side pockets and keeps beverages ready during long campus days.',
    ],
  },
  {
    name: 'wireless-study-lamp',
    title: 'Wireless Study Lamp',
    category: 'Tech',
    price: 'PHP 899',
    stock: 'In stock',
    image: lampImage,
    content: [
      'A compact lamp with adjustable brightness levels for late-night study sessions.',
      'Rechargeable battery life keeps your desk lit without needing a wall outlet nearby.',
      'Foldable design lets it tuck away neatly after long nights of notes and reading.',
    ],
  },
  {
    name: 'hoodie-jacket',
    title: 'Hoodie Jacket',
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'Preorder',
    image: hoodieImage,
    content: [
      'A soft hoodie with a relaxed fit for class days, morning commutes, and weekend wear.',
      'Made with breathable cotton blend material that feels comfortable all day long.',
      'Reserve your size with preorder availability and get campus-ready style first.',
    ],
  },
  {
    name: 'desk-organizer-kit',
    title: 'Desk Organizer Kit',
    category: 'Workspace',
    price: 'PHP 349',
    stock: 'In stock',
    image: organizerImage,
    content: [
      'A sleek tabletop kit for pens, clips, cables, and small study tools.',
      'Modular pieces help you arrange your desk exactly how you need it for focus.',
      'Keeps essentials visible without crowding your study area or notes.',
    ],
  },
  {
    name: 'id-lanyard-set',
    title: 'ID Lanyard Set',
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    image: lanyardImage,
    content: [
      'A durable lanyard and card holder set for IDs, access passes, and small items.',
      'The easy-release clip makes scanning access cards quick and secure.',
      'A polished design that keeps your essentials ready for everyday campus life.',
    ],
  },
  {
    name: 'exam-week-care-pack',
    title: 'Exam Week Care Pack',
    category: 'Bundles',
    price: 'PHP 399',
    stock: 'In stock',
    image: capImage,
    content: [
      'A compact care pack with energy snacks, sticky tabs, and quick-review essentials.',
      'Designed to keep your desk organized and your schedule on track during finals.',
      'Ideal for students preparing for exams, presentations, and project deadlines.',
    ],
  },
];

export default products;
