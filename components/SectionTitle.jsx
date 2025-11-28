export default function SectionTitle({ title, center = true }) {
  return (
    <h2
      className={`text-gold text-4xl font-serif mb-12 ${
        center ? "text-center" : ""
      } fade-slide-up`}
    >
      {title}
    </h2>
  );
}
