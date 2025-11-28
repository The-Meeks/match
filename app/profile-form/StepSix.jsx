export default function StepSix({ formData, update }) {
  return (
    <div className="space-y-6">
      <h2 className="text-gold text-3xl font-serif mb-4">Photos & Consent</h2>

      <input
        type="file"
        className="w-full bg-black border border-gold p-3 rounded"
        onChange={(e) => update("photos", e.target.files[0])}
      />

      <textarea
        placeholder="Type your full name as a digital signature confirming the information is true and accurate"
        className="w-full bg-black border border-gold p-3 rounded h-28"
        value={formData.consentSignature}
        onChange={(e) => update("consentSignature", e.target.value)}
      />
    </div>
  );
}
