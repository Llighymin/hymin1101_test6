import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedElement from "../AnimatedElement";

const SERVICES = [
  {
    titleKo: "자율주행 트럭",
    titleEn: "Self-Driving Truck",
    image: "/images/truck.png",
  },
  {
    titleKo: "자율주행 택시",
    titleEn: "Self-Driving Taxi",
    image: "/images/taxi.png",
  },
  {
    titleKo: "자율주행 버스",
    titleEn: "Self-Driving Bus",
    image: "/images/bus.png",
  },
  {
    titleKo: "통합 관제",
    titleEn: "Integrated Control",
    image: "/images/IntegratedControl.png",
  },
];

const BusinessOpportunities = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="section-7" className="snap-section flex flex-col bg-white">
      <div
        ref={ref}
        className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedElement isVisible={isVisible} delay={0} direction="up">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-lg">
              Business Opportunities
            </h2>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              자율주행 기반 모빌리티 통합 서비스
            </h3>
          </AnimatedElement>

          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12 md:gap-6 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <AnimatedElement
                key={index}
                isVisible={isVisible}
                delay={200 + index * 100}
                direction="up"
              >
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.titleKo}
                    className="aspect-3/4 w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <p className="text-lg font-bold text-white">
                      {service.titleKo}
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      {service.titleEn}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunities;
