export default function StepFour({ formData, update }) {
  return (
    <div className="space-y-6">
      <h2 className="text-gold text-3xl font-serif mb-4">Partner Preferences</h2>

      <input
        type="text"
        placeholder="Preferred Age Range"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.preferredAge}
        onChange={(e) => update("preferredAge", e.target.value)}
      />

      <textarea
        placeholder="Qualities you value in a partner"
        className="w-full bg-black border border-gold p-3 rounded h-24"
        value={formData.preferredTraits}
        onChange={(e) => update("preferredTraits", e.target.value)}
      />

      <textarea
        placeholder="Deal breakers or boundaries"
        className="w-full bg-black border border-gold p-3 rounded h-24"
        value={formData.dealBreakers}
        onChange={(e) => update("dealBreakers", e.target.value)}
      />

      <select
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.opennessDistance}
        onChange={(e) => update("opennessDistance", e.target.value)}
      >
        <option value="">Willing to date long-distance?</option>
        <option>Yes</option>
        <option>No</option>
        <option>Maybe</option>
      </select>
    </div>
  );
}
