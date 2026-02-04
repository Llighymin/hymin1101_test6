interface AnimatedElementProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  className?: string;
}

const AnimatedElement = ({
  children,
  isVisible,
  delay = 0,
  direction = "up",
  className = "",
}: AnimatedElementProps) => {
  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-12";
      case "down":
        return "-translate-y-12";
      case "left":
        return "translate-x-12";
      case "right":
        return "-translate-x-12";
      case "fade":
        return "";
      default:
        return "translate-y-12";
    }
  };

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${getTransform()}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
