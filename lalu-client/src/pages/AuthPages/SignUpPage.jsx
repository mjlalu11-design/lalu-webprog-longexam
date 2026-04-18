import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-zinc-200 bg-zinc-100 p-10 shadow-xl">
          <div className="flex min-h-[32rem] flex-col items-center justify-center gap-6 text-center">
            <img src={logo} alt="nubdexchange logo" className="h-32 w-32 rounded-full border-2 border-zinc-900 bg-white p-3" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">National University</p>
            <h2 className="text-3xl font-bold text-zinc-900">Join the campus store</h2>
            <p className="max-w-sm text-sm leading-6 text-zinc-600">
              Create your NU account to save checkout details, access student specials, and track pickups.
            </p>
            <div className="grid w-full gap-4 text-left text-sm text-zinc-600 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white p-4 shadow-sm border border-zinc-200">
                <p className="font-semibold text-zinc-900">Faster orders</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">Checkout quickly with saved student details.</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-4 shadow-sm border border-zinc-200">
                <p className="font-semibold text-zinc-900">Pickup ready</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">Get notified when your order is ready to collect.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
            <p className="font-medium text-zinc-700">Existing customer?</p>
            <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
              Log in here
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Create a store account for faster checkout, order updates, and pickup details.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                placeholder="student@email.com"
                autoComplete="email"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                className={inputClasses}
              />
              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Use a secure password with letters, numbers, and symbols.
              </p>
            </div>

            <Button type="submit" variant="primary" className={actionButtonClassName}>
              Create Account
            </Button>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <Button type="button" variant="secondary" className={actionButtonClassName}>
                Sign Up with Google
              </Button>
              <Button type="button" variant="secondary" className={actionButtonClassName}>
                Sign Up with Apple
              </Button>
            </div>
          </form>

          <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
            Already have an account?{' '}
            <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
