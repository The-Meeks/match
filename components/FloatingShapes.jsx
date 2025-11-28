export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-gold/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-3xl rounded-full animate-pulse"></div>
    </div>
  );
}
