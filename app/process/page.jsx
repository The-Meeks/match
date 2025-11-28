import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";

export default function Process() {
  const steps = [
    {
      title: "1. Confidential Profile",
      text: "You complete a detailed profile form, sharing your background, preferences, and relationship goals."
    },
    {
      title: "2. Private Consultation",
      text: "A matchmaker reviews your profile and may schedule a consultation to understand you more deeply."
    },
    {
      title: "3. Vetting & Selection",
      text: "We verify information where necessary and identify potential matches based on compatibility and values."
    },
    {
      title: "4. Curated Introduction",
      text: "We arrange a fully organised first date at a suitable venue. Your match is informed and briefed; you simply show up."
    },
    {
      title: "5. Feedback & Refinement",
      text: "After the introduction, we privately gather feedback from both sides to refine future matches where needed."
    },
    {
      title: "6. Ongoing Support (For Members)",
      text: "Depending on your membership tier, we continue to introduce carefully selected matches over time."
    },
  ];

  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto pb-20">
        <SectionTitle title="Our Process" />

        <div className="space-y-8 section-bg">
          {steps.map((step) => (
            <div key={step.title}>
              <h3 className="text-gold font-serif text-2xl mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
