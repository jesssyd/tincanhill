import Banner from "../ui/banner";
import Product from "./ui/product";

import { getProducts } from "@/lib/api/getProducts";

export default async function Shop() {
  const products = await getProducts();

  return (
    <main>
      <Banner
        title="Shop"
        body="Please support us and grab some merch! All proceeds contribute to TCHCC activities including the long term protection of the Hill."
        className="bg-primary text-primary-content"
      />

      <section className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-full md:col-start-2 md:col-end-12">
          <h2>Our Merch</h2>
          <p className="max-w-2xl">
            T-shirts and hoodies are made locally by{" "}
            <a
              href="https://www.erasmusapparel.com/?srsltid=AfmBOooa189Idsddypheipnc2mVuBXY70aK9xeBUWrC6v6edIueKksUx"
              className="underline"
            >
              Erasmus Apparel of Yellowknife
            </a>
            . Our logo was designed by Yellowknife residents, Meghan Cooper and
            Mary Tapsell.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 grid-cols-2">
            {products.map((product, index) => (
              <Product
                title={product.title}
                key={index}
                src={product.imageURL}
                text={product.description}
                price={`$${product.price}`}
                className="sm:col-span-1 col-start-auto"
              ></Product>
            ))}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-full md:col-start-2 md:col-end-12">
          <h2>How to Purchase</h2>
          <p className="max-w-2xl">
            If you would like to purchase a product please send an Interac
            Transfer to{" "}
            <a
              className="underline"
              href="mailto:tincanhillyellowknife@gmail.com"
            >
              tincanhillyellowknife@gmail.com
            </a>
            . <br />
            <br />
            In the Interac Transfer please provide your phone number, email
            address and the product type, colour and size you wish to purchase.
            <br />
            <br />
            Please be patient and allow us one week from the time of purchase to
            receive order confirmation. <br /> <br />{" "}
            <span className="text-success-content bg-success">
              Thank you for your support!
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
