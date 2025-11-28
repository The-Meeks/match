import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Hero />

      <PageWrapper>
        {/* ABOUT PREVIEW */}
        <section className="mt-10 max-w-5xl mx-auto section-bg">
          <SectionTitle title="About The Select Match" />
          <p className="text-gray-300 leading-relaxed text-center">
            For the past six years, The Select Match has operated discreetly,
            introducing successful, like-minded professionals through private
            networks and referrals. We now bring this exclusive experience
            online for those who value privacy, intention, and high standards in dating.
          </p>
        </section>

        {/* WHY CHOOSE US PREVIEW */}
        <section className="mt-16 max-w-6xl mx-auto">
          <SectionTitle title="Why Choose Us" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="Genuine, Verified Members" />
            <FeatureCard title="Curated, Intentional Matches" />
            <FeatureCard title="Premium First Dates – Paid For" />
            <FeatureCard title="Strict Confidentiality & Discretion" />
            <FeatureCard title="Matchmaker-Led Experience" />
            <FeatureCard title="Designed for Serious, Intentional Singles" />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mt-20 max-w-4xl mx-auto text-center section-bg">
          <h3 className="text-gold font-serif text-3xl mb-4">
            Ready to Begin Your Curated Matchmaking Journey?
          </h3>
          <p className="text-gray-300 mb-8">
            Complete your confidential profile and let our team of matchmakers
            begin the process of introducing you to highly compatible, like-minded individuals.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/profile-form">
              <Button variant="gold">Complete Client Profile</Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline">View Membership Packages</Button>
            </Link>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
