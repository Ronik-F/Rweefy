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
    href: "/tracker/add",
    children: [
      { label: "Fitness", href: "/tracker/fitness" },
      { label: "Journal", href: "/tracker/journal" },
      { label: "Habits", href: "/tracker/habits" },
      { label: "Sleep", href: "/tracker/sleep" },
      { label: "Deep Work", href: "/tracker/deep-work" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
