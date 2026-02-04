import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedElement from "../AnimatedElement";

const PhilosophyGraphic = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    className={`size-full ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="130" cy="200" r="80" stroke="#d1d5db" strokeWidth="2" fill="none" />
    <circle cx="270" cy="200" r="80" stroke="#d1d5db" strokeWidth="2" fill="none" />
    
    <path
      d="M200 145 C180 145, 165 170, 165 200 C165 230, 180 255, 200 255 C220 255, 235 230, 235 200 C235 170, 220 145, 200 145"
      fill="#f3f4f6"
      stroke="#9ca3af"
      strokeWidth="2"
    />
    
    <text x="130" y="205" textAnchor="middle" className="fill-gray-500 text-xs font-medium">TECH</text>
    <text x="270" y="205" textAnchor="middle" className="fill-gray-500 text-xs font-medium">HUMAN</text>
    <text x="200" y="205" textAnchor="middle" className="fill-gray-700 text-xs font-semibold">책임</text>
    
    <circle cx="200" cy="170" r="4" fill="#374151" />
    <circle cx="200" cy="230" r="4" fill="#374151" />
    
    <path d="M200 100 L200 130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
    <path d="M200 270 L200 300" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
    
    <circle cx="200" cy="100" r="6" fill="none" stroke="#9ca3af" strokeWidth="1" />
    <circle cx="200" cy="300" r="6" fill="none" stroke="#9ca3af" strokeWidth="1" />
  </svg>
);

const SensorFusionGraphic = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    className={`size-full ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="175" y="220" width="50" height="80" rx="8" fill="#374151" />
    <path d="M185 220 L185 200 L215 200 L215 220" fill="#4b5563" />
    <circle cx="200" cy="185" r="15" fill="#6b7280" stroke="#4b5563" strokeWidth="2" />
    
    <g opacity="0.6">
      <path d="M200 170 L120 80" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M200 170 L200 50" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M200 170 L280 80" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
    </g>
    
    <path d="M200 170 L100 170" stroke="#34d399" strokeWidth="1.5" opacity="0.7" />
    <path d="M200 170 L300 170" stroke="#34d399" strokeWidth="1.5" opacity="0.7" />
    
    <circle cx="200" cy="170" r="120" stroke="#e5e7eb" strokeWidth="1" fill="none" strokeDasharray="8 4" />
    <circle cx="200" cy="170" r="80" stroke="#d1d5db" strokeWidth="1" fill="none" strokeDasharray="6 3" />
    <circle cx="200" cy="170" r="40" stroke="#9ca3af" strokeWidth="1" fill="none" />
    
    <circle cx="120" cy="100" r="8" fill="#fbbf24" opacity="0.8" />
    <circle cx="280" cy="130" r="6" fill="#fbbf24" opacity="0.6" />
    <circle cx="100" cy="180" r="5" fill="#fbbf24" opacity="0.5" />
    <circle cx="310" cy="160" r="7" fill="#fbbf24" opacity="0.7" />
    <circle cx="160" cy="90" r="4" fill="#fbbf24" opacity="0.4" />
    
    <text x="120" y="345" className="fill-gray-400 text-[10px]">LiDAR</text>
    <text x="180" y="345" className="fill-gray-400 text-[10px]">Radar</text>
    <text x="240" y="345" className="fill-gray-400 text-[10px]">Camera</text>
    
    <circle cx="130" cy="330" r="4" fill="#60a5fa" />
    <circle cx="190" cy="330" r="4" fill="#34d399" />
    <circle cx="250" cy="330" r="4" fill="#fbbf24" />
  </svg>
);

const PerceptionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="section-4" className="snap-section flex flex-col bg-gray-50">
      <div
        ref={ref}
        className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              <AnimatedElement isVisible={isVisible} delay={0} direction="left">
                <div className="flex-center aspect-video">
                  <PhilosophyGraphic className="opacity-90" />
                </div>
              </AnimatedElement>

              <div className="flex flex-col justify-center">
                <AnimatedElement isVisible={isVisible} delay={200} direction="up">
                  <h2 className="text-lg font-medium uppercase tracking-wide text-gray-500">
                    PHILOSOPHY
                  </h2>
                </AnimatedElement>

                <AnimatedElement isVisible={isVisible} delay={300} direction="up">
                  <div className="mt-6 space-y-4">
                    <p className="text-xl font-semibold italic leading-relaxed text-gray-900 md:text-2xl">
                      "The completion of autonomous driving is not technology,
                      <br />
                      but accountable decision-making."
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                      "자율주행의 완성은 기술이 아니라 책임질 수 있는 판단이다."
                    </p>
                  </div>
                </AnimatedElement>

                <AnimatedElement isVisible={isVisible} delay={450} direction="up">
                  <p className="mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
                    키메라는 빠른 상용화보다 올바른 상용화를 선택합니다.
                    <br />
                    사회가 받아들일 수 있는 자율주행의 기준을 만듭니다.
                  </p>
                </AnimatedElement>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center">
                <AnimatedElement isVisible={isVisible} delay={500} direction="up">
                  <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-lg">
                    CORE TECHNOLOGY
                  </h2>
                  <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    인지 · 예측 · 판단 · 검증
                  </h3>
                </AnimatedElement>

                <div className="mt-8 space-y-6">
                  <AnimatedElement isVisible={isVisible} delay={600} direction="up">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 md:text-lg">
                        1. Sensor Fusion
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                        LiDAR, Radar, Camera, 차량 센서 데이터를 실시간으로 통합하여 도로 환경을 정밀하게 인식합니다.
                      </p>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement isVisible={isVisible} delay={700} direction="up">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 md:text-lg">
                        2. 예측 기반 주행 판단 AI
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                        단순 규칙 기반 제어를 넘어, 주변 객체의 이동 경로와 위험도를 예측하여 상황에 맞는 주행 판단을 수행합니다.
                      </p>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement isVisible={isVisible} delay={800} direction="up">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 md:text-lg">
                        3. Safety Validation
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                        모든 판단은 독립적인 검증 단계에서 재확인되며, 이상 징후 발생 시 즉각적인 안전 개입이 이루어집니다.
                      </p>
                    </div>
                  </AnimatedElement>
                </div>
              </div>

              <AnimatedElement isVisible={isVisible} delay={550} direction="right">
                <div className="flex-center h-full">
                  <SensorFusionGraphic className="opacity-90" />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerceptionSection;
