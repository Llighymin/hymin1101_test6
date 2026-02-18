import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedElement from "../AnimatedElement";

const FEATURES = [
  {
    title: "Sensor Fusion & AI",
    description:
      "자율주행 기술 구현을 위해 센서와 인공지능에 중점을 두고 있으며, 주변 환경을 정확히 인식하고 차량을 제어하는 기술력이 타 경쟁사 대비 월등히 뛰어나다는 것이 강점입니다.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "글로벌 주요 차량 제조사와의 파트너십 체결을 통해 자율주행차 상용화를 위한 기반을 확고히 구축했습니다.",
  },
  {
    title: "Scalable Platform",
    description:
      "CHIMERA의 플랫폼은 짧은 레이턴시와 높은 안정성을 갖춘 고성능 시스템을 구현하여 다양한 모빌리티 환경에 적용 가능합니다.",
  },
];

const ElementalTechnology = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="section-2" className="snap-section flex flex-col bg-gray-50">
      <div
        ref={ref}
        className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <AnimatedElement isVisible={isVisible} delay={0} direction="up">
                <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-lg">
                  Elemental Technology
                </h2>
                <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  CHIMERA 자율주행의 핵심 기술 요소
                </h3>
              </AnimatedElement>

              <div className="mt-8 space-y-6">
                {FEATURES.map((feature, index) => (
                  <AnimatedElement
                    key={index}
                    isVisible={isVisible}
                    delay={200 + index * 150}
                    direction="up"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 md:text-lg">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>

            <AnimatedElement isVisible={isVisible} delay={300} direction="right">
              <img
                src="/images/elementalSection_img.png"
                alt="CHIMERA 자율주행 핵심 기술"
                className="h-full w-full rounded-2xl object-cover"
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElementalTechnology;
