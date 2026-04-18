import { Link } from "react-router-dom";
import Button from "../components/Button";
import logo from "../assets/img/nubdexchange_logo.png";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-slate-200 px-4 py-16">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/95 p-8 shadow-2xl shadow-zinc-200/30 backdrop-blur-sm sm:p-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bulldog-blue/20 to-transparent" />
          <div className="relative flex flex-col items-center gap-8 text-center">
            <img
              src={logo}
              alt="nubdexchange logo"
              className="h-24 w-24 rounded-full border border-zinc-200 bg-white p-2 shadow-sm"
            />

            <div className="grid w-full gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:text-left">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-bulldog-blue/5 text-5xl font-bold text-bulldog-blue shadow-inner shadow-bulldog-blue/10">
                404
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">Page Not Found</p>
                <h1 className="mt-4 text-4xl font-bold text-zinc-900 sm:text-5xl">Oops! You’ve wandered off campus.</h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 lg:mt-6">
                  The page you’re trying to reach isn’t available right now. Use the links below to return home, continue browsing products, or explore other campus essentials.
                </p>
              </div>
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-[auto_auto]">
              <Link to="/">
                <Button className="px-10 py-3">Back to Home</Button>
              </Link>
              <Link to="/products">
                <Button variant="secondary" className="px-10 py-3">Browse Products</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">The shortcut</p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">Try the homepage or product catalog if you want to keep shopping without interruption.</p>
          </div>
          <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Campus support</p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">Need help finding something? Reach out to the campus store support team directly.</p>
          </div>
          <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Stay on track</p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">Bookmark your favorite pages or use the navigation bar to keep access simple and fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;