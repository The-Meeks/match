import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this a dating app?",
      a: "No. The Select Match is a private matchmaking and dating concierge service. There is no swiping or public browsing of profiles."
    },
    {
      q: "Who is this service for?",
      a: "Professionals, entrepreneurs, executives, and intentional singles who are serious about finding a meaningful, compatible relationship."
    },
    {
      q: "Are my details confidential?",
      a: "Yes. Client information is handled with strict confidentiality and is only shared with potential matches as part of the curated introduction process."
    },
    {
      q: "Can you guarantee that I will find a partner?",
      a: "We cannot guarantee a relationship, but we do guarantee a professional, curated, and high-standard approach to every introduction."
    },
    {
      q: "Where do introductions take place?",
      a: "Introductions typically take place at carefully selected venues such as restaurants, lounges, or hotels suitable for a refined first meeting."
    },
    {
      q: "What happens after the first introduction?",
      a: "Your matchmaker will gather feedback from both sides. If there is mutual interest, you can continue independently. If not, we refine and arrange further matches where included in your package."
    },
  ];

  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto pb-20">
        <SectionTitle title="Frequently Asked Questions" />

        <div className="space-y-6 section-bg">
          {faqs.map((item) => (
            <div key={item.q}>
              <h3 className="text-gold font-serif text-xl mb-2">{item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
