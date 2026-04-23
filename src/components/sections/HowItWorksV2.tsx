import { HOW_IT_WORKS_STEPS } from '@/data/howItWorksSteps';

export function HowItWorksV2() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-deep text-center mb-4">
          Como a GiroB2B resolve
        </h2>
        <p className="text-lg text-graphite text-center mb-12">
          Três passos para transformar sua operação comercial B2B.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.n} className="relative">
              <div className="text-6xl font-bold text-gold-burnt mb-4 leading-none">{step.n}</div>
              <h3 className="text-xl font-bold text-teal-deep mb-3">{step.title}</h3>
              <p className="text-graphite leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
