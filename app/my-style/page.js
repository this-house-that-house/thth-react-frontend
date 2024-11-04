"use client";

import Progress from '../components/Progress';
import { myStyleContainer } from '../components/index.css';
import Step1 from './Step1';
import Step2 from './Step2';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function () {
  const [step, setStep] = useState(1);
  const router = useRouter();
  return (
    <div className={myStyleContainer}>
      {step <= 2 && <Progress total={2} current={step} />}
      {step === 1 && <Step1 onDone={() => setStep(2)} />}
      {step === 2 && <Step2 onDone={() => router.push('/complete?variant=my-style')} />}
    </div>
  )
}