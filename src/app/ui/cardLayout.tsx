import Card from "./card";

export default function CardLayout() {
  return (
    <section className="bg-base-200 py-20">
      <h2 className="text-4xl font-bold">How You Can Help</h2>
      <div className="flex justify-around md:gap-8 gap-3 flex-row flex-wrap sm:flex-nowrap">
        
        <Card
          title="Join the Newsletter"
          buttonProps={{
            href: "/",
            text: "Sign Up",
            className: "btn-primary",
          }}
        />
        <Card
          title="Join our Facebook Group"
          buttonProps={{
            href: "/",
            text: "Join Now",
            className: "btn-primary",
          }}
        />
        <Card
          title="Sign the Petition"
          buttonProps={{
            href: "/",
            text: "Sign Today",
            className: "btn-primary",
          }}
        />
        <Card
          title="Grab some Merch"
          buttonProps={{
            href: "/",
            text: "Buy Now",
            className: "btn-primary",
          }}
        />
      </div>
    </section>
  );
}
