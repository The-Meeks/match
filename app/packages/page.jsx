import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";
import PackageCard from "../../components/PackageCard";

export default function Packages() {
  return (
    <PageWrapper>
      <section className="max-w-7xl mx-auto pb-20">
        <SectionTitle title="Membership Packages" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <PackageCard
            title="Silver"
            price="USD 800 / KES 100,000"
            items={[
              "2 curated introductions",
              "Confidential profile review",
              "Matchmaker-led selection",
              "Support via email / WhatsApp",
              "Option to upgrade"
            ]}
          />

          <PackageCard
            title="Gold"
            price="USD 1,500 / KES 200,000"
            items={[
              "4 curated introductions",
              "Priority match search",
              "Profile refinement & image guidance",
              "Match feedback review",
              "Regional match consideration"
            ]}
          />

          <PackageCard
            title="Platinum"
            price="USD 3,000 / KES 400,000"
            items={[
              "6+ curated introductions",
              "Senior matchmaker involvement",
              "Lifestyle & dating strategy support",
              "National & select international search",
              "High-priority scheduling"
            ]}
          />

          <PackageCard
            title="Lifetime"
            price="USD 10,000 / KES 1.3M"
            items={[
              "Ongoing introductions (lifetime)",
              "Exclusive VIP experience",
              "Access to premium events (where applicable)",
              "Global match search (subject to availability)",
              "Long-term match support"
            ]}
          />
        </div>

        <p className="text-gray-400 text-center mt-10">
          All memberships are subject to vetting and availability. We reserve the right
          to decline applications that do not align with our values, standards, or client base.
        </p>
      </section>
    </PageWrapper>
  );
}
