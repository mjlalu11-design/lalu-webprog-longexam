import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import bagImage from '../../assets/img/bag2.png';
import notesImage from '../../assets/img/desk.png';
import hoodieImage from '../../assets/img/hoodie.png';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt="Campus storefront banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/45" />

                <div className="relative z-10 flex min-h-[22rem] items-end justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <span className="inline-flex rounded-full border border-bulldog-gold/60 bg-bulldog-dark/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-bulldog-gold">
                            Official National U Merchandise Store
                        </span>
                        <h1 className="mt-6 text-4xl font-bold leading-tight text-zinc-50 sm:text-5xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-base leading-8 text-zinc-100 sm:text-lg">
                            Explore campus essentials, student apparel, and everyday study tools in a polished National University storefront.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-end gap-3">
                            <Button to="/products" className="bg-bulldog-gold text-bulldog-dark hover:bg-[#f8c300]">Shop Now</Button>
                            <Button to="/about" variant="primary" className="border-white/10 bg-white text-bulldog-dark hover:bg-zinc-100">About Store</Button>
                        </div>
                        <p className="mt-4 text-sm text-zinc-200">
                            Already a member?{' '}
                            <Link to="/auth/signin" className="font-semibold text-zinc-100 underline decoration-zinc-500 transition hover:text-zinc-50">
                                Sign In
                            </Link>{' '}
                            or{' '}
                            <Link to="/auth/signup" className="font-semibold text-zinc-100 underline decoration-zinc-500 transition hover:text-zinc-50">
                                Sign Up
                            </Link>
                            {' '}for a faster checkout.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/70">
                        <p className="text-4xl font-bold text-bulldog-dark">08</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Products</p>
                    </div>
                    <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/70">
                        <p className="text-4xl font-bold text-bulldog-dark">06</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Categories</p>
                    </div>
                    <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/70">
                        <p className="text-4xl font-bold text-bulldog-dark">24</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Orders</p>
                    </div>
                    <div className="rounded-[2rem] border border-zinc-300 bg-white p-6 text-center shadow-sm shadow-zinc-200/70">
                        <p className="text-4xl font-bold text-bulldog-dark">03</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Pickup Slots</p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Simple store cards</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <article className="overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white shadow-sm shadow-zinc-200/50">
                        <div className="overflow-hidden rounded-t-[2rem]">
                            <img
                                src={bagImage}
                                alt="Daily essentials bag"
                                className="h-52 w-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <span className="inline-flex rounded-full bg-bulldog-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-bulldog-gold">
                                Daily Essentials
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Bags & Accessories</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Bags, tumblers, lanyards, and items used every school day.
                            </p>
                            <Button to="/products" className="mt-5 bg-bulldog-dark text-white hover:bg-[#001f44]">View Products</Button>
                        </div>
                    </article>

                    <article className="overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white shadow-sm shadow-zinc-200/50">
                        <div className="overflow-hidden rounded-t-[2rem]">
                            <img
                                src={notesImage}
                                alt="Study supplies notebook"
                                className="h-52 w-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <span className="inline-flex rounded-full bg-bulldog-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-bulldog-gold">
                                Study Supplies
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Notes & Desk Tools</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Notes, desk tools, and study kits for class and review weeks.
                            </p>
                            <Button to="/products" className="mt-5 bg-bulldog-dark text-white hover:bg-[#001f44]">Shop Supplies</Button>
                        </div>
                    </article>

                    <article className="overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white shadow-sm shadow-zinc-200/50">
                        <div className="overflow-hidden rounded-t-[2rem]">
                            <img
                                src={hoodieImage}
                                alt="Campus apparel hoodie"
                                className="h-52 w-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <span className="inline-flex rounded-full bg-bulldog-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-bulldog-gold">
                                Campus Apparel
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Official Wear</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Comfortable pieces for class days, commute days, and weekends.
                            </p>
                            <Button to="/products" className="mt-5 bg-bulldog-dark text-white hover:bg-[#001f44]">
                                View Apparel
                            </Button>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
