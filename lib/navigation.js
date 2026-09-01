// Central navigation data model.
// Add / remove / nest items here — sidebar rebuilds automatically.

export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "Selected Work", href: "/work/selected" },
      { label: "Projects", href: "/work/projects" },
      { label: "Experiments", href: "/work/experiments" },
    ],
  },
  {
    label: "Tracker",
    href: "/tracker",
    children: [
      { label: "Deep Work", href: "/tracker/deep-work" },
      { label: "Fitness", href: "/tracker/fitness" },
      { label: "Sleep", href: "/tracker/sleep" },
      { label: "Diet", href: "/tracker/diet" },
      { label: "Habits", href: "/tracker/habits" },
      { label: "Journal", href: "/tracker/journal" },
      { label: "Admin Console", href: "/tracker/add" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
