import { ArrowRight } from "lucide-react";

const FOOTER_LINKS = [
  { label: "About", href: "#" },
  { label: "Technology", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact us", href: "#" },
];

const LEGAL_LINKS = [
  "법적고지",
  "이메일 무단 수집 거부",
  "개인정보 처리방침",
  "윤리경영",
];

const Footer = () => {
  return (
    <footer id="section-footer" className="snap-section flex flex-col bg-gray-900 text-white">
      <div className="flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-20">
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
            {FOOTER_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group flex items-center justify-between border-b border-gray-700 pb-4 transition-colors hover:border-white"
              >
                <span className="text-base font-medium md:text-lg">{link.label}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 md:size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-6 md:px-12 md:py-8 lg:px-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                {LEGAL_LINKS.map((link, index) => (
                  <a key={index} href="#" className="hover:text-white">
                    {link}
                  </a>
                ))}
              </div>

              <div className="text-xl font-bold text-white">
                CHIMERA
              </div>
            </div>

            <div className="mt-6 flex-between gap-4 text-sm text-gray-400">
              <p>서울특별시 강남구 테헤란로 123 키메라타워</p>
              <p>© CHIMERA. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
