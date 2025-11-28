import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="max-w-4xl mx-auto pb-20">
        <SectionTitle title="Contact & Enquiries" />

        <div className="section-bg text-center space-y-6 text-gray-300">
          <p className="text-lg">
            For serious, confidential matchmaking enquiries, you may reach us via:
          </p>

          <p>
            <span className="text-gold">Email:</span> theselectmatch1@gmail.com
          </p>

          <p>
            <span className="text-gold">Instagram:</span> @theselectmatch
          </p>

          <p>
            <span className="text-gold">Phone / WhatsApp:</span> +[your-number-here]
          </p>

          <p>
            <span className="text-gold">M-PESA / Payment Details:</span> Provided upon acceptance and onboarding.
          </p>

          <p className="text-sm text-gray-400">
            Please note: Due to the confidential and curated nature of the service, we may not
            be able to take on every enquiry or application immediately.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
