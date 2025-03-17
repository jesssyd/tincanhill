interface NavLinks {
  name: string;
  path: string;
}

export const navLinks: NavLinks[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "History", path: "/history" },
  { name: "Shop", path: "/shop" },
];

export const footerLinks: NavLinks[] = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Events", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Get Involved", path: "/support" },
];
