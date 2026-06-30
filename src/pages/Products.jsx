import { useState } from "react";
import { bags } from "../data/bags";
import BagCard from "../components/BagCard";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBags = bags.filter((bag) => {
    const search = searchTerm.toLowerCase();

    return (
      bag.name.toLowerCase().includes(search) ||
      bag.color.toLowerCase().includes(search) ||
      bag.material.toLowerCase().includes(search) ||
      bag.price.toString().includes(search) ||
      bag.discountPrice.toString().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Our Collection
          </h1>

          <p className="text-lg max-w-2xl mx-auto">
            Discover elegant handbags, shoulder bags,
            totes, travel bags and fashion accessories
            carefully selected for every occasion.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Search by name, color, material or price..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mt-4 text-gray-600">
          Showing {filteredBags.length} product
          {filteredBags.length !== 1 ? "s" : ""}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        {filteredBags.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBags.map((bag) => (
              <BagCard key={bag.id} bag={bag} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              No Bags Found
            </h2>

            <p className="text-gray-500">
              Try searching with a different bag
              name, color or price.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}