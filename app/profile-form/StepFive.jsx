export default function StepFive({ formData, update }) {
  return (
    <div className="space-y-6">
      <h2 className="text-gold text-3xl font-serif mb-4">Additional Information</h2>

      <textarea
        placeholder="Hobbies & personal interests"
        className="w-full bg-black border border-gold p-3 rounded h-24"
        value={formData.hobbies}
        onChange={(e) => update("hobbies", e.target.value)}
      />

      <input
        type="text"
        placeholder="Religion (optional)"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.religion}
        onChange={(e) => update("religion", e.target.value)}
      />

      <select
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.marriageIntent}
        onChange={(e) => update("marriageIntent", e.target.value)}
      >
        <option value="">What is your intent towards marriage?</option>
        <option>Definitely want marriage</option>
        <option>Open to marriage</option>
        <option>Not sure yet</option>
        <option>Not looking for marriage</option>
      </select>
    </div>
  );
}
