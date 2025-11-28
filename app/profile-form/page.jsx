"use client";

import { useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import Button from "../../components/Button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import Summary from "./Summary";

export default function ProfileForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    gender: "",
    age: "",
    nationality: "",
    city: "",

    // Step 2
    occupation: "",
    incomeRange: "",
    education: "",
    lifestyle: "",

    // Step 3
    relationshipGoal: "",
    values: "",
    pastChallenges: "",

    // Step 4
    preferredAge: "",
    preferredTraits: "",
    dealBreakers: "",
    opennessDistance: "",

    // Step 5
    hobbies: "",
    religion: "",
    marriageIntent: "",

    // Step 6
    photos: null,
    consentSignature: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <PageWrapper>
      <section className="max-w-3xl mx-auto pb-20 section-bg">
        <h1 className="text-gold font-serif text-4xl text-center mb-10">
          Client Profile Form
        </h1>

        {/* STEPS CONTROLLER */}
        {step === 1 && <StepOne formData={formData} update={updateField} />}
        {step === 2 && <StepTwo formData={formData} update={updateField} />}
        {step === 3 && <StepThree formData={formData} update={updateField} />}
        {step === 4 && <StepFour formData={formData} update={updateField} />}
        {step === 5 && <StepFive formData={formData} update={updateField} />}
        {step === 6 && <StepSix formData={formData} update={updateField} />}
        {step === 7 && <Summary formData={formData} />}

        {/* BUTTONS */}
        <div className="mt-10 flex justify-between">
          {step > 1 && step < 7 && (
            <Button variant="outline" onClick={prevStep}>Back</Button>
          )}

          {step < 7 && (
            <Button variant="gold" onClick={nextStep}>Next</Button>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
