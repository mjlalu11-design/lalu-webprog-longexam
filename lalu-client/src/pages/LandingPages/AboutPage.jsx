import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import bagImage from '../../assets/img/bag.png';
import notesImage from '../../assets/img/notes.png';
import hoodieImage from '../../assets/img/hoodie.png';
import tumblerImage from '../../assets/img/tumbler.png';
import logo from '../../assets/img/nubdexchange_logo.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-zinc-900 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-bulldog-dark shadow-sm">
              Official National U Campus Store
            </div>
            <div className="flex items-center gap-4 rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-sm">
              <img src={logo} alt="BulldogEx logo" className="h-16 w-16 rounded-full border border-zinc-900 bg-zinc-50 p-2" />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">BulldogEx</p>
                <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                  Campus essentials made easy for every student.
                </h1>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
              Browse National University-inspired goods, reliable study accessories, and everyday campus items in a clean, modern shopping experience designed for fast browsing and clear decisions.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button to="/products" variant="primary">
                Explore Products
              </Button>
              <Button to="/" className="bg-white text-bulldog-dark hover:bg-zinc-100">
                Back Home
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 shadow-xl">
            <img src={banner} alt="Campus storefront banner" className="h-96 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/10 to-transparent" />
            <div className="absolute left-6 right-6 bottom-6 rounded-3xl bg-white/95 p-5 shadow-lg backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Featured collection
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900">
                Student-ready essentials for study, campus life, and everyday routines.
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Discover curated items that keep your school days organized, comfortable, and on brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick store highlights</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/50">
            <p className="text-4xl font-bold text-bulldog-dark">08</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Items</p>
          </div>
          <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/50">
            <p className="text-4xl font-bold text-bulldog-dark">06</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Categories</p>
          </div>
          <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/50">
            <p className="text-4xl font-bold text-bulldog-dark">03</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Pickup Slots</p>
          </div>
          <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/50">
            <p className="text-4xl font-bold text-bulldog-dark">24</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Orders</p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Flexible shopping that feels familiar</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-[2rem] border border-zinc-300 bg-white p-5 shadow-sm shadow-zinc-200/50">
                <h3 className="text-lg font-semibold text-zinc-900">Curated catalog</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Browse categories designed around campus essentials, signed off with a clean product presentation.
                </p>
              </article>

              <article className="rounded-[2rem] border border-zinc-300 bg-white p-5 shadow-sm shadow-zinc-200/50">
                <h3 className="text-lg font-semibold text-zinc-900">Simple checkout</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Pricing, availability, and checkout actions are easy to find and act on.
                </p>
              </article>

              <article className="rounded-[2rem] border border-zinc-300 bg-white p-5 shadow-sm shadow-zinc-200/50">
                <h3 className="text-lg font-semibold text-zinc-900">Quick pickup</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Designed for students who want fast updates and ready-to-go campus orders.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-300 bg-white p-5 shadow-sm shadow-zinc-200/50">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.8rem] bg-zinc-100 shadow-inner">
                <img src={bagImage} alt="Bags" className="h-32 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-zinc-900">Bags & Accessories</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.8rem] bg-zinc-100 shadow-inner">
                <img src={notesImage} alt="Stationery" className="h-32 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-zinc-900">Stationery</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.8rem] bg-zinc-100 shadow-inner">
                <img src={hoodieImage} alt="Apparel" className="h-32 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-zinc-900">Apparel</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.8rem] bg-zinc-100 shadow-inner">
                <img src={tumblerImage} alt="Drinkware" className="h-32 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-zinc-900">Drinkware</p>
                </div>
              </div>
            </div>
            <Button to="/products" className="mt-5 w-full bg-bulldog-dark text-white hover:bg-[#001f44]">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
