import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedElement from "../AnimatedElement";

const LocalizationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="section-3" className="snap-section flex flex-col bg-white">
      <div
        ref={ref}
        className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement isVisible={isVisible} delay={0} direction="left">
              <img
                src="/images/localizationSection_img.png"
                alt="고정밀 위치 인식 시스템"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </AnimatedElement>

            <div className="flex flex-col justify-center">
              <AnimatedElement isVisible={isVisible} delay={200} direction="up">
                <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-lg">
                  Localization
                </h2>
                <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  고정밀 위치 인식 시스템
                </h3>
              </AnimatedElement>

              <AnimatedElement isVisible={isVisible} delay={400} direction="up">
                <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
                  자체 구축한 HD Map(고정밀 지도)을 활용하고, 다중 센서 융합 방식을 통해 주변 환경을 정확히 인지합니다.
                  <br />
                  <br />
                  차량에 탑재된 센서를 통해 수집된 방대한 데이터는 자율주행차의 안전한 운행에 필수적인 정보입니다.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizationSection;
