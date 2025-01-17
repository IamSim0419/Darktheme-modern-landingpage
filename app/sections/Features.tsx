import EcoSystem from "@/assets/icons/ecosystem.svg"

const features = [
  {
    title: "Comprehensive Integration",
    description:
      "Boost your efficiency by linking with your tools, consolidating your essentials in one location.",
  },
  {
    title: "Objective Setting and Monitoring",
    description:
      "Set and monitor your goals, breaking down tasks into manageable steps to keep your objectives clear.",
  },
  {
    title: "Robust Data Security",
    description:
      "Utilizing end-to-end encryption, your data is securely stored and safeguarded from unauthorized access.",
  },
];

export default function Features() {
  return (
    <section className="bg-black text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">All the tools you need</h2>
        <div className="md:max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          Take advantage of customizable lists, collaborative tools, and intelligent tracking all in one platform. Assign tasks, receive reminders, and effortlessly track your progress.
          </p>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row gap-4">
          {features.map(({ title, description}) => (
            <div 
              key={title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl md:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcoSystem />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
