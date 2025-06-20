import { icons, LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
}

const Icon = ({ name, fallback, ...props }: IconProps) => {
  const LucideIcon = icons[name] || icons[fallback || "CircleAlert"];
  return <LucideIcon {...props} />;
};

export default Icon;
