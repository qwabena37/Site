import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { bags } from "../data/bags";

export default function ProductDetails() {
  const { id } = useParams();

  const bag = bags.find((item) => item.id === Number(id));

  const [mainImage, setMainImage] = useState(
    bag?.images?.[0] || ""
  );

  if (!bag) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Product Not Found
        </h1>

        <Link
          to="/bags"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const savings = bag.price - bag.discountPrice;

  const whatsappMessage = encodeURIComponent(
    `Hello Shop With Aba, I'm interested in the ${bag.name} priced at GH₵${bag.discountPrice}.`
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>
          {" / "}
          <Link to="/bags" className="hover:text-pink-600">
            Bags
          </Link>
          {" / "}
          <span>{bag.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Images */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow">
              <img
                src={mainImage}
                alt={bag.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="flex gap-3 mt-4">
              {bag.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={bag.name}
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img
                      ? "border-pink-600"
                      : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
              Available
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {bag.name}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-gray-400 line-through text-xl">
                GH₵{bag.price}
              </span>

              <span className="text-4xl font-bold text-pink-600">
                GH₵{bag.discountPrice}
              </span>
            </div>

            <div className="mt-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Save GH₵{savings}
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <p>
                <strong>Color:</strong> {bag.color}
              </p>

              <p>
                <strong>Material:</strong> {bag.material}
              </p>

              <p>
                <strong>Condition:</strong> Brand New
              </p>

              <p>
                <strong>Availability:</strong> In Stock
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">
                Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
                This premium {bag.name.toLowerCase()} is
                crafted with high-quality {bag.material.toLowerCase()}
                and designed to complement both casual and
                formal outfits. Durable, stylish and spacious
                enough for your everyday essentials.
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href={`https://wa.me/233546526690?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold"
              >
                Order on WhatsApp
              </a>

              <Link
                to="/bags"
                className="bg-gray-200 hover:bg-gray-300 px-8 py-4 rounded-xl font-semibold"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Related Products
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {bags
              .filter((item) => item.id !== bag.id)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/bags/${item.id}`}
                  className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-pink-600 font-bold mt-2">
                      GH₵{item.discountPrice}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}