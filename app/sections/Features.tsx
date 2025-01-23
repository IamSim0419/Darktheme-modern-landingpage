import Feature from "../components/Feature";

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

        {/* Featured Box */}
        <Feature features={features} />
      </div>
    </section>
  )
}
