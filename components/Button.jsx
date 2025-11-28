export default function Button({ children, onClick, type = "button", variant = "gold" }) {
  const base = "px-8 py-3 rounded-lg font-serif text-lg transition shadow-gold";

  const styles = {
    gold: "bg-gold text-black hover:bg-white hover:text-black",
    outline: "border border-gold text-gold hover:bg-gold hover:text-black",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
