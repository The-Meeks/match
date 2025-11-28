import FloatingShapes from "./FloatingShapes";
import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6">
      
      <FloatingShapes />

      <img 
        src="/logo.png" 
        alt="The Select Match" 
        className="w-40 mb-6 fade-slide-up"
      />

      <h1 className="text-gold font-serif text-5xl max-w-3xl leading-tight fade-slide-up">
        Love isn’t a swipe — it’s an experience.
      </h1>

      <p className="text-gray-300 max-w-2xl mt-6 fade-in">
        Exclusive Matchmaking for professionals, executives, and intentional singles.
      </p>

      <div className="flex gap-6 mt-8 fade-in">
        <Link href="/profile-form">
          <Button variant="gold">Join Now</Button>
        </Link>

        <Link href="/packages">
          <Button variant="outline">View Packages</Button>
        </Link>
      </div>
    </section>
  );
}
