export default function PackageCard({ title, price, items }) {
  return (
    <div className="border border-gold p-8 rounded-xl bg-black/30 hover:bg-black/50 transition">
      <h3 className="text-gold text-3xl font-serif">{title}</h3>
      <p className="text-gray-300 mt-2 mb-4">{price}</p>

      <ul className="text-gray-400 space-y-2">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
