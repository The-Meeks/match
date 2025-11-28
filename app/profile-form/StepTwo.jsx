export default function StepTwo({ formData, update }) {
  return (
    <div className="space-y-6">
      <h2 className="text-gold text-3xl font-serif mb-4">Lifestyle & Background</h2>

      <input
        type="text"
        placeholder="Occupation"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.occupation}
        onChange={(e) => update("occupation", e.target.value)}
      />

      <input
        type="text"
        placeholder="Income Range (optional)"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.incomeRange}
        onChange={(e) => update("incomeRange", e.target.value)}
      />

      <input
        type="text"
        placeholder="Highest Education Level"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.education}
        onChange={(e) => update("education", e.target.value)}
      />

      <textarea
        placeholder="Describe your lifestyle (your routine, interests, social habits)"
        className="w-full bg-black border border-gold p-3 rounded h-28"
        value={formData.lifestyle}
        onChange={(e) => update("lifestyle", e.target.value)}
      />
    </div>
  );
}
