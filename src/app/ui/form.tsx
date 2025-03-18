export default function Form() {
  return (
    <section>
      <div className="">
        <div className="flex items-center justify-center flex-col lg:flex-row-reverse lg:gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Join Us!</h1>
            <p className="pb-6 max-w-md">
              If you would you like to be apart of our team&apos;s protection efforts
              or if you&apos;d just like to be added to our distribution list sign up
              now!
            </p>
          </div>

          <form action="" id="join-form">
            <fieldset
              form="join-form"
              className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
            >
              <legend className="hidden">Join our Mailing List</legend>

              <label className="fieldset-label" htmlFor="name-input">
                Name
              </label>
              <input
                id="name-input"
                type="text"
                className="input"
                placeholder=""
                form="join-form"
              />

              <label className="fieldset-label" htmlFor="member-input">
                Choose a Member Level
              </label>
              <select
                id="member-input"
                className="select validator"
                required
                form=""
                defaultValue=""
              >
                <option disabled value="" className="">
                  Membership Level
                </option>
                <option value="Mailing List">Mailing List</option>
                <option value="Active Member">Active Member</option>
              </select>
              <div className="validator-hint hidden">Required</div>

              <p className="fieldset-label pb-0">Email</p>
              <div className="join">
                <div>
                  <label className="input validator join-item" htmlFor="email-input">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input
                      form="join-form"
                      id="email-input"
                      type="email"
                      placeholder="mail@site.com"
                      required
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>
                </div>
                <button className="border-0 btn btn-neutral join-item">Join</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
