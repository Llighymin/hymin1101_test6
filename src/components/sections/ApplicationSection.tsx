import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedElement from "../AnimatedElement";

const ApplicationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="section-1" className="snap-section flex flex-col bg-gray-50">
      <div
        ref={ref}
        className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <AnimatedElement isVisible={isVisible} delay={0} direction="up">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-lg">
                  APPLICATION
                </h2>
                <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  실제 도심 환경 중심의 기술 적용
                </h3>
              </div>
            </AnimatedElement>
            <AnimatedElement isVisible={isVisible} delay={200} direction="up">
              <p className="max-w-md text-base leading-relaxed text-gray-600 md:text-lg">
                키메라의 자율주행 플랫폼은 다음 분야에 적용됩니다.
              </p>
            </AnimatedElement>
          </div>

          <AnimatedElement isVisible={isVisible} delay={400} direction="up">
            <div className="relative mt-8 md:mt-12">
              <img 
                src="/images/application_img.png" 
                alt="실제 도심 환경 자율주행 적용 사례"
                className="w-full rounded-xl object-cover"
              />
              <div className="absolute bottom-4 left-4 cursor-default md:bottom-6 md:left-6">
                <p className="text-xs text-white/80 md:text-sm">
                  모든 기술은 실제 도로 환경 기반 테스트를 통해 검증됩니다.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
