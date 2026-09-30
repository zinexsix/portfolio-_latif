import {
  Code2,
  Palette,
  ShoppingCart,
  Brush,
  Award,
  FileText,
  Share2,
  BookOpen,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFigma,
  SiGit,
  SiWordpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const icons = {
  code: Code2,
  palette: Palette,
  "shopping-cart": ShoppingCart,
  brush: Brush,
  award: Award,
  "file-text": FileText,
  "share-2": Share2,
  "book-open": BookOpen,
  sparkles: Sparkles,
} satisfies Record<string, LucideIcon>;

export const brandIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  youtube: FaYoutube,
} satisfies Record<string, IconType>;

export const techIcons = {
  html5: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  php: SiPhp,
  laravel: SiLaravel,
  mysql: SiMysql,
  figma: SiFigma,
  git: SiGit,
  wordpress: SiWordpress,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof icons;
export type BrandIconName = keyof typeof brandIcons;
export type TechIconName = keyof typeof techIcons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component className={className} />;
}

export function BrandIcon({ name, className }: { name: BrandIconName; className?: string }) {
  const Component = brandIcons[name];
  return <Component className={className} />;
}

export function TechIcon({
  name,
  className,
  color,
}: {
  name: TechIconName;
  className?: string;
  color?: string;
}) {
  const Component = techIcons[name];
  return <Component className={className} style={color ? { color } : undefined} />;
}
