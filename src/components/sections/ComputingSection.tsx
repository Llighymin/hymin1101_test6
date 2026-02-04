import { useState } from "react";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedElement from "../AnimatedElement";

const TABS = [
  { id: "interface", label: "인터페이스" },
  { id: "performance", label: "퍼포먼스" },
  { id: "safety", label: "안전" },
];

const ComputingSection = () => {
  const [activeTab, setActiveTab] = useState("interface");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="section-6" className="snap-section flex flex-col bg-gray-900">
      <div
        ref={ref}
        className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <AnimatedElement isVisible={isVisible} delay={0} direction="up">
                <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 md:text-lg">
                  Computing Platform
                </h2>
                <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  고성능 자율주행 컴퓨팅 플랫폼
                </h3>
              </AnimatedElement>

              <AnimatedElement isVisible={isVisible} delay={200} direction="up">
                <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
                  CHIMERA의 최신 자율주행 컨트롤러(ADC)는 고성능 프로세서로 구성되어 있으며, 초당 수백조 연산을 지원합니다.
                  <br />
                  <br />
                  세계 최고 성능의 자동차 등급 SoC는 수많은 애플리케이션과 딥러닝 심층 신경망(DNN)을 동시에 처리하며 자율주행을 구현하도록 설계되었습니다.
                </p>
              </AnimatedElement>

              <AnimatedElement isVisible={isVisible} delay={400} direction="up">
                <div className="mt-8 flex gap-4">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabClick(tab.id)}
                      className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "bg-white text-gray-900"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </AnimatedElement>
            </div>

            <AnimatedElement isVisible={isVisible} delay={300} direction="right">
              <img
                src="/images/computingSection_img.png"
                alt="고성능 자율주행 컴퓨팅 플랫폼"
                className="aspect-square h-full w-full rounded-2xl object-cover"
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputingSection;
