import AboutAnimations from "./AboutAnimations";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="bg-white text-primary py-24 pb-32 px-6 md:px-16 relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <AboutAnimations />
      </div>
    </section>
  );
}
