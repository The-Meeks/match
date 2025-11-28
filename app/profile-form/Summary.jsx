export default function Summary({ formData }) {
  return (
    <div className="space-y-6">
      <h2 className="text-gold text-3xl font-serif mb-6">
        Review Your Information
      </h2>

      <div className="space-y-3 text-gray-300">
        {Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            <span className="text-gold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>{" "}
            {value ? value.toString() : "Not provided"}
          </p>
        ))}
      </div>

      <p className="text-gray-400 text-sm mt-8">
        This is a preview. Submission functionality will be added when we connect a backend.
      </p>
    </div>
  );
}
