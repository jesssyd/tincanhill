interface Products {
    name: string;
    path: string;
  }
  
  export const products: Products[] = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" }
  ];