export const siteTitle = "The Mental Marathon";
export const siteSubtitle = "Inside the psychology of complex orthopaedic recovery";

/** Prefix a site path with the base path, so links work on GitHub Pages (served from /lisa-physio-website/). */
export function url(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}

export interface NavItem {
  href: string;
  label: string;
  /** Short tag shown above the label, e.g. "Module 1". */
  eyebrow?: string;
}

/** The course: Home plus the three modules, in reading order. Drawn as a route in the sidebar. */
export const course: NavItem[] = [
  { href: url("/"), label: "Home", eyebrow: "Start" },
  { href: url("/module-1-fatigue/"), label: "Fatigue", eyebrow: "Module 1" },
  { href: url("/module-2-fear-of-movement/"), label: "Fear of movement", eyebrow: "Module 2" },
  { href: url("/module-3-setbacks-and-motivation/"), label: "Setbacks & motivation", eyebrow: "Module 3" },
];

/** Supporting pages listed under the course. */
export const extras: NavItem[] = [
  { href: url("/resources/"), label: "Resources" },
  { href: url("/references/"), label: "References" },
  { href: url("/scope-of-practice/"), label: "Scope of practice guide" },
];

export const scopeOfPractice = extras[2];

/** The design styles to compare, shown in the switcher at the bottom right. "current" is the live site style. */
export const designOptions = [
  { id: "1", label: "1", name: "Race Day", href: url("/designs/option-1/") },
  { id: "2", label: "2", name: "Rehab Notebook", href: url("/designs/option-2/") },
  { id: "3", label: "3", name: "Calm Clinic", href: url("/designs/option-3/") },
  { id: "4", label: "4", name: "Treatment Plan", href: url("/designs/option-4/") },
  { id: "current", label: "Current", name: "Current style", href: url("/module-1-fatigue/") },
];

/** True when `href` is the page currently being viewed. */
export function isCurrent(href: string, pathname: string): boolean {
  const clean = (p: string) => p.replace(/\/+$/, "") || "/";
  return clean(href) === clean(pathname);
}
