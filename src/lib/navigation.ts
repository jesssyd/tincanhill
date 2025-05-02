interface NavLinks {
  name: string;
  path: string;
}

export const navLinks: NavLinks[] = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "History", path: "/history" },
  { name: "Events", path: "/events" }
];

export const footerLinks: NavLinks[] = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "History", path: "/history" },
  { name: "Support", path: "/support" },
];
