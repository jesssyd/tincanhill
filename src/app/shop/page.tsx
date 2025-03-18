import Banner from "../ui/banner";

import Product from "../ui/product";

export default function Shop() {
  return (
    <main>
      <Banner
        title="Shop"
        body="Please support us and grab some merch! All proceeds contribute to educational materials and TCHCC activities including promoting the long term protection of the Hill."
      />
      <section>
        <h2>How to Purchase</h2>
        <p>
          If you would like to purchase a product please send an Interac
          Transfer to{" "}
          <a
            className="underline"
            href="mailto:tincanhillyellowknife@gmail.com"
          >
            tincanhillyellowknife@gmail.com
          </a>
          . <br />
          In the Interac Transfer please provide your phone number, email
          address and the product type, colour and size you wish to purchase.
          <br />
          Please be patient and allow us one week from the time of purchase to
          receive order confirmation. <br /> Thank you for your support!
        </p>
      </section>
      <div className="flex w-full flex-col px-4 lg:px-12 max-w-6xl mx-auto">
        <div className="divider"></div>
      </div>
      <section>
        <h2>Our Merch</h2>
        <p>
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
        <h3>Unisex T-Shirts</h3>
        <div className="flex gap-6 mb-10">
          <Product
            title='"Keep it Wild" T-Shirt'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            text={"Available in S-5XL. Black only."}
            price="$35"
          ></Product>
        </div>
        <h3>Unisex Hoodies</h3>
        <div className="flex gap-6 mb-10">
          <Product
            title='"Keep it Wild" Hoodie - Heather Navy'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            text={
              "Available in S-5XL. Also available in Athletic Heather and Black."
            }
            price="$65"
          ></Product>
          <Product
            title='"Keep it Wild" Hoodie - Athletic Heather (Grey)'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            text={
              "Available in S-5XL. Also available in Heather Navy and Black."
            }
            price="$65"
          ></Product>
          <Product
            title='"Keep it Wild" Hoodie - Black'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            text={
              "Available in S-5XL. Also available in Heather Navy and Athletic Heather."
            }
            price="$65"
          ></Product>
        </div>
        <h3>"Keep it Wild" Stickers and Pins</h3>
        <div className="flex gap-6 mb-10">
          <Product
            title='"Keep it Wild" Pin'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            text={'Approx. 2" diameter'}
            price="$3"
          ></Product>
          <Product
            title='"Keep it Wild" Sticker'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            text={'Approx. 2" diameter'}
            price="$3"
          ></Product>
        </div>
      </section>
    </main>
  );
}
