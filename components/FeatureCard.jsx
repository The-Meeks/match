export default function FeatureCard({ title }) {
  return (
    <div className="border border-gold p-6 rounded-lg bg-black/40 text-center">
      <h3 className="text-gold text-xl font-serif">{title}</h3>
    </div>
  );
}
