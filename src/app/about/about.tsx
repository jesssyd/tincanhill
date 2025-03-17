export default function AboutUs() {
  return (
    <section className="max-w-3xl">
      <div className="container">
        <h2>About</h2>
        <div className="flex flex-col gap-6">
          <div>
            <h3>Who We Are</h3>
            <p>
              We are a team of people based out of the NWT who love Tin Can Hill
              for all it has to offer. We are dedicated to preserving Tin Can
              Hill as undeveloped greenspace for people to enjoy for generations
              to come.
            </p>
          </div>
          <div className="rtl">
            <h3>Our Mission</h3>
            <p>Our mission is to secure permanent protection of Tin Can Hill. We believe that by preserving this land as recreational green space, we can create a legacy for future generations of Yellowknifers and visitors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
