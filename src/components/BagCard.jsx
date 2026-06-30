import { useState } from "react";
import { Link } from "react-router-dom";

export default function BagCard({ bag }) {
  const [mainImage, setMainImage] = useState(
    bag.images[0]
  );

  const savings = bag.price - bag.discountPrice;

  const whatsappMessage = encodeURIComponent(
    `Hello Shop With Aba, I'm interested in the ${bag.name} priced at GH₵${bag.discountPrice}.`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={mainImage}
          alt={bag.name}
          className="w-full h-80 object-cover"
        />

        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Save GH₵{savings}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 p-3">
        {bag.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={bag.name}
            onClick={() => setMainImage(img)}
            className={`w-16 h-16 rounded-lg object-cover cursor-pointer border-2 ${
              mainImage === img
                ? "border-pink-600"
                : "border-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold">
          {bag.name}
        </h3>

        <div className="mt-3 space-y-1 text-gray-600">
          <p>
            <span className="font-medium">
              Color:
            </span>{" "}
            {bag.color}
          </p>

          <p>
            <span className="font-medium">
              Material:
            </span>{" "}
            {bag.material}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="line-through text-gray-400">
            GH₵{bag.price}
          </span>

          <span className="text-2xl font-bold text-pink-600">
            GH₵{bag.discountPrice}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <Link
  to={`/bags/${bag.id}`}
  className="flex-1 text-center bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
>
  View Details
</Link>

          <a
            href={`https://wa.me/233546526690?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
}