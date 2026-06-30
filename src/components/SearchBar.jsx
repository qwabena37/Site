export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="max-w-xl mx-auto my-8">
      <input
        type="text"
        placeholder="Search by name, color or price..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
  );
}