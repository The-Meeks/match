export default function StepThree({ formData, update }) {
  return (
    <div className="space-y-6">
      <h2 className="text-gold text-3xl font-serif mb-4">Relationship Intentions</h2>

      <textarea
        placeholder="What is your relationship goal?"
        className="w-full bg-black border border-gold p-3 rounded h-24"
        value={formData.relationshipGoal}
        onChange={(e) => update("relationshipGoal", e.target.value)}
      />

      <textarea
        placeholder="What values do you hold strongly in a relationship?"
        className="w-full bg-black border border-gold p-3 rounded h-24"
        value={formData.values}
        onChange={(e) => update("values", e.target.value)}
      />

      <textarea
        placeholder="Challenges you’ve faced in past relationships (optional)"
        className="w-full bg-black border border-gold p-3 rounded h-24"
        value={formData.pastChallenges}
        onChange={(e) => update("pastChallenges", e.target.value)}
      />
    </div>
  );
}
