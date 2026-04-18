import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bulldog-dark/95 text-white pt-8 pb-6 shadow-[0_-6px_30px_-22px_rgba(0,0,0,0.65)]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.8fr_1fr_1fr]">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-bulldog-gold">BulldogEx Shop</h3>
            <p className="max-w-sm text-sm leading-6 text-bulldog-gold/80">
              The official National University student exchange and campus store. Wear your pride with every purchase.
            </p>
            <p className="text-sm text-bulldog-gold/70">
              Fast pickup, clear pricing, and campus essentials designed for Bulldogs.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-bulldog-gold/80">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition hover:text-white">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white">Support</h4>
            <ul className="space-y-3 text-sm text-bulldog-gold/80">
              <li>
                <Link to="/auth/signin" className="transition hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="mailto:support@bulldogex.ph" className="transition hover:text-white">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-bulldog-gold/20 pt-4 text-center text-xs text-bulldog-gold/70">
          <p>
            &copy; {new Date().getFullYear()} National University Bulldog Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
