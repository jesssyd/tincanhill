import Card from "./card";

export default function CardLayout() {
  return (
    <section className="bg-base-200 grid grid-cols-12 gap-6 py-20 px-8">
      <div className="col-start-2 col-end-12">
        <h2 className=" text-4xl font-bold">How You Can Help</h2>

        <div className="flex justify-between flex-row flex-wrap md:gap-8 gap-3">
          <Card
            title="Join the Newsletter"
            buttonProps={{
              href:"/support#support-form",
              text: "Sign Up",
              className: "btn-accent",
            }}
          />
          <Card
            title="Join our Facebook Group"
            buttonProps={{
              href: "https://www.facebook.com/groups/tincanhill",
              text: "Join Now",
              className: "btn-accent",
              target:"_blank",
            }}
          />
          <Card
            title="Sign the Petition"
            buttonProps={{
              href: "https://www.change.org/p/protect-tin-can-hill-recreation-area-from-development-in-yellowknife",
              text: "Sign Here",
              className: "btn-accent",
              target:"_blank",
            }}
          />
          <Card
            title="Grab some Merch"
            buttonProps={{
              href: "/shop",
              text: "Buy Now",
              className: "btn-accent",
            }}
          />
        </div>
      </div>
    </section>
  );
}
