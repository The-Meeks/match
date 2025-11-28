export default function StepOne({ formData, update }) {
  return (
    <div className="space-y-6">
      <h2 className="text-gold text-3xl font-serif mb-4">Personal Information</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.fullName}
        onChange={(e) => update("fullName", e.target.value)}
      />

      <select
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.gender}
        onChange={(e) => update("gender", e.target.value)}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input
        type="number"
        placeholder="Age"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.age}
        onChange={(e) => update("age", e.target.value)}
      />

      <input
        type="text"
        placeholder="Nationality"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.nationality}
        onChange={(e) => update("nationality", e.target.value)}
      />

      <input
        type="text"
        placeholder="City of Residence"
        className="w-full bg-black border border-gold p-3 rounded"
        value={formData.city}
        onChange={(e) => update("city", e.target.value)}
      />
    </div>
  );
}
