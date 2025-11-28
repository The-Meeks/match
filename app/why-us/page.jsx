import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";
import FeatureCard from "../../components/FeatureCard";

export default function WhyUs() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto pb-20">
        <SectionTitle title="Why Choose The Select Match" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Genuine & Verified Profiles" />
          <FeatureCard title="No Swiping, No Games" />
          <FeatureCard title="Curated Matches by Real Matchmakers" />
          <FeatureCard title="Confidential & Discreet Process" />
          <FeatureCard title="Premium First Dates – Fully Arranged" />
          <FeatureCard title="Designed for Busy, Successful Individuals" />
        </div>

        <div className="section-bg mt-16 text-gray-300 leading-relaxed">
          <p>
            Unlike apps that prioritise volume and swipes, we prioritise quality,
            compatibility, and intentional introductions. Every introduction is
            thoughtfully arranged to give you the best chance of meaningful connection.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
