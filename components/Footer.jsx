export default function Footer() {
  return (
    <footer className="border-t border-gold py-10 mt-20 text-center">
      <img 
        src="/logo.png" 
        className="w-20 mx-auto mb-4 opacity-70"
        alt="The Select Match"
      />

      <p className="text-gray-400">© {new Date().getFullYear()} The Select Match</p>
      <p className="text-gold font-serif mt-2">Exclusive • Confidential • Elite</p>
    </footer>
  );
}
