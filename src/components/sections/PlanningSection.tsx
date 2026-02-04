import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedElement from "../AnimatedElement";

const PlanningSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="section-5" className="snap-section flex flex-col bg-white">
      <div
        ref={ref}
        className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement isVisible={isVisible} delay={0} direction="left">
              <img
                src="/images/planningSection_img.png"
                alt="지능형 경로 계획 및 제어"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </AnimatedElement>

            <div className="flex flex-col justify-center">
              <AnimatedElement isVisible={isVisible} delay={200} direction="up">
                <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-lg">
                  Planning & Control
                </h2>
                <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  지능형 경로 계획 및 제어
                </h3>
              </AnimatedElement>

              <AnimatedElement isVisible={isVisible} delay={400} direction="up">
                <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
                  CHIMERA의 자율주행 시스템은 머신러닝과 딥러닝을 융합해 주행 경로를 계획하고 차량을 제어합니다.
                  <br />
                  <br />
                  최첨단 자율주행 시스템은 고속도로에서부터 대도시의 복잡한 교차로에 달하는 다양한 교통 시나리오를 원활히 탐색해 자율주행차가 도로 상의 특이 상황에 적절히 대응하게 해줍니다.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;
