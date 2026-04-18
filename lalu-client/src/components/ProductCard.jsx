import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-zinc-300/30">
      <div className="relative overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-56 items-center justify-center border border-dashed border-zinc-300 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Product image
          </div>
        )}

        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-700 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {String(index + 1).padStart(2, '0')}
          </p>
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
            product.stock === 'Low stock'
              ? 'bg-amber-100 text-amber-700'
              : product.stock === 'Preorder'
              ? 'bg-sky-100 text-sky-700'
              : 'bg-emerald-100 text-emerald-700'
          }`}>
            {product.stock}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-900">{product.title}</h3>
          <p className="mt-2 text-2xl font-bold tracking-tight text-bulldog-dark">{product.price}</p>
        </div>

        <p className="text-sm leading-6 text-zinc-600">
          {product.content[0]}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button
            to={`/products/${product.name}`}
            variant="primary"
            className="w-full justify-center bg-bulldog-dark text-white hover:bg-[#001f44] sm:w-auto"
          >
            View Product
          </Button>
          <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            Shop now
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
