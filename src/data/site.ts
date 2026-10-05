export const siteTitle = "The Mental Marathon";
export const siteSubtitle = "Inside the psychology of complex orthopaedic recovery";

export interface NavItem {
  href: string;
  label: string;
  /** Short tag shown above the label, e.g. "Module 1". */
  eyebrow?: string;
}

/** The course: Home plus the three modules, in reading order. Drawn as a route in the sidebar. */
export const course: NavItem[] = [
  { href: "/", label: "Home", eyebrow: "Start" },
  { href: "/module-1-fatigue/", label: "Fatigue", eyebrow: "Module 1" },
  { href: "/module-2-fear-of-movement/", label: "Fear of movement", eyebrow: "Module 2" },
  { href: "/module-3-setbacks-and-motivation/", label: "Setbacks & motivation", eyebrow: "Module 3" },
];

/** Supporting pages listed under the course. */
export const extras: NavItem[] = [
  { href: "/resources/", label: "Resources" },
  { href: "/references/", label: "References" },
  { href: "/scope-of-practice/", label: "Scope of practice guide" },
];

export const scopeOfPractice = extras[2];

/** True when `href` is the page currently being viewed. */
export function isCurrent(href: string, pathname: string): boolean {
  const clean = (p: string) => p.replace(/\/+$/, "") || "/";
  return clean(href) === clean(pathname);
}
