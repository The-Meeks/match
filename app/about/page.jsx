import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";

export default function About() {
  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto pb-20">
        <SectionTitle title="About The Select Match" />

        <div className="section-bg space-y-6 text-gray-300 leading-relaxed">
          <p>
            The Select Match is a high-end matchmaking and luxury dating concierge
            service for successful, like-minded professionals who value privacy,
            quality, and intentional connection.
          </p>

          <p>
            For over six years, we have operated discreetly through private networks,
            referrals, and word-of-mouth. Our members include executives, entrepreneurs,
            professionals, and individuals who are serious about finding a compatible partner.
          </p>

          <p>
            We are not a dating app. We do not engage in random matching or swiping dynamics.
            Every client is personally reviewed, vetted, and matched based on compatibility,
            lifestyle, values, and long-term relationship goals.
          </p>

          <p>
            Our role is to handle the search, screening, and arrangement, allowing you to
            focus on what truly matters: showing up as your authentic self and enjoying
            a curated dating experience.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
