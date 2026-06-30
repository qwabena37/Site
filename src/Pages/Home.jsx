import { Link } from "react-router-dom";
import { bags } from "../data/bags";

export default function Home() {
  const featured = bags.slice(0, 3);

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section
  className="text-white py-24 px-4 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('./images/Aba.jpeg')",
  }}
>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Stylish Bags for Every Occasion
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover premium handbags, totes, and shoulder bags crafted with elegance and quality by Shop With Aba.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/bags"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              Shop Now
            </Link>

            <a
              href="https://wa.me/233546526690"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Bags
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((bag) => (
            <div
              key={bag.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={bag.images[0]}
                alt={bag.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">
                  {bag.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {bag.color} • {bag.material}
                </p>

                <div className="mt-3 flex justify-between items-center">
                  <span className="text-gray-400 line-through">
                    GH₵{bag.price}
                  </span>

                  <span className="text-pink-600 font-bold text-xl">
                    GH₵{bag.discountPrice}
                  </span>
                </div>

                <Link
                  to={`/bags/${bag.id}`}
                  className="block mt-4 text-center bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Shop With Aba?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                💎 Premium Quality
              </h3>
              <p className="text-gray-600">
                Carefully selected bags made with durable and stylish materials.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                🚚 Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick delivery across Ghana with reliable service.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                💬 Easy Ordering
              </h3>
              <p className="text-gray-600">
                Order instantly via WhatsApp with fast response support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-pink-600 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold">
          Ready to upgrade your style?
        </h2>

        <p className="mt-3 text-white/90">
          Explore our latest collection now.
        </p>

        <Link
          to="/bags"
          className="inline-block mt-6 bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Shop Collection
        </Link>
      </section>

    </div>
  );
}