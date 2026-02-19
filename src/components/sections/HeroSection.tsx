import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("section-1");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="section-0" className="snap-section flex flex-col bg-black">
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-60"
        style={{ backgroundImage: "url(/images/hero_background.png)" }}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-center px-6 md:px-12 lg:px-20">
          <div className="w-full max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-white/70 md:text-base">
                ABOUT CHIMERA
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Dreaming the Future of Mobility
              </h1>

              <div className="mt-8 space-y-4 text-xl leading-relaxed text-white/90">
                <p>
                  CHIMERA는 AI-driven autonomous driving technology를 기반으로
                  <br />
                  next-generation mobility systems를 설계하는 자율주행 기술 기업입니다.
                </p>

                <p>
                  우리는 단순한 자율주행차량이 아닌,
                  <br />
                  decision-making, predictive, and accountable autonomy를 구현합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12">
          <button
            type="button"
            onClick={handleScrollDown}
            className="mx-auto flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <span className="text-sm">Scroll down</span>
            <ChevronDown className="size-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
