import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#", isActive: false },
  { label: "Technology", href: "#", isActive: true },
  { label: "Safety", href: "#", isActive: false },
  { label: "Our STORY", href: "#", isActive: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const darkSections = ["section-0", "section-6", "section-footer"];
            setIsDarkBackground(darkSections.includes(sectionId));
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id^='section-'], footer[id^='section-']");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const textColor = isDarkBackground ? "text-white" : "text-gray-900";
  const textColorActive = isDarkBackground
    ? "font-semibold text-white"
    : "font-semibold text-gray-900";
  const textColorInactive = isDarkBackground
    ? "text-white/60 hover:text-white"
    : "text-gray-600 hover:text-gray-900";

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="flex h-16 items-center">
        <div className="flex items-center px-4 md:px-6 lg:px-8">
          <a href="/" className={`text-xl font-bold md:text-2xl lg:text-3xl ${textColor}`}>
            CHIMERA
          </a>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex md:gap-12">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-sm transition-colors ${
                item.isActive ? textColorActive : textColorInactive
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={handleMenuToggle}
          className={`flex-center h-16 w-16 transition-colors ${
            isDarkBackground 
              ? "bg-white/10 text-white hover:bg-white/20" 
              : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
          }`}
          aria-label="메뉴 토글"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-sm"
            onClick={handleMenuClose}
          />
          <div className="fixed top-16 right-0 z-50 h-auto w-96 bg-white shadow-2xl">
            <nav className="flex flex-col p-8">
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-500">NAVIGATION</p>
              </div>
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleMenuClose}
                  className={`group flex items-center justify-between border-b border-gray-200 py-5 transition-colors last:border-b-0 ${
                    item.isActive 
                      ? "text-gray-900" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span className="text-lg font-medium">{item.label}</span>
                  <span className="text-2xl font-light transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
