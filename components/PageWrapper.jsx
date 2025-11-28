export default function PageWrapper({ children }) {
  return (
    <div className="fade-in px-6">
      {children}
    </div>
  );
}
