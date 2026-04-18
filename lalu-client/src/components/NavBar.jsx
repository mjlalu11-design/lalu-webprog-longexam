import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900',
  ].join(' ');

const authLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-bulldog-gold bg-bulldog-gold text-bulldog-dark'
      : 'border-bulldog-gold/20 bg-white text-bulldog-dark hover:border-bulldog-gold hover:bg-bulldog-gold/10 hover:text-bulldog-gold',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bulldog-dark/10 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-10 w-10 rounded-full border-2 border-bulldog-dark bg-white object-contain" />
          <div className="space-y-0.5">
            <p className="text-lg font-bold text-bulldog-dark">BulldogEx Shop</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-bulldog-gold">Official NU Store</p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <nav className="flex items-center gap-2" aria-label="Authentication links">
            {authLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={authLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
