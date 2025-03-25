import Banner from "../ui/banner";
import Button from "../ui/button";
import Form from "../ui/form";

export default function Support() {
  return (
    <main>
      <Banner
        title="Support"
        body="We appreciate any contribution to the cause, no matter how big or small."
        className="bg-primary text-primary-content"
      />

      <section className="grid grid-cols-12 gap-6 mb-12">
        <div className="flex flex-col items-stretch gap-6 col-span-full sm:col-start-1 sm:col-span-full lg:col-start-3 lg:col-span-8  2xl:col-start-4 2xl:col-span-6">
          <h2 className="pb-0">How You Can Help</h2>
          <div className="flex flex-col sm:flex-row sm:h-60">
            <h3 className="sm:min-w-1/3 sm:p-5 py-1 px-3 h-full bg-base-300  sm:h-auto rounded-sm rounded-b-none sm:rounded-r-none sm:rounded-bl-sm">
              Sign the Petition
            </h3>
            <div className="flex flex-col justify-between rounded-sm rounded-t-none sm:rounded-l-none sm:rounded-tr-sm p-3 sm:p-5 h-fit sm:h-full bg-base-200">
              <p className="lg:max-w-5/6">
                Take less than a minute to sign our petition to tell the City of
                Yellowknife that Tin Can Hill must be protected from all
                development. Your signature can help preserve our green space
                for future generations!
              </p>
              <Button
                href="https://www.change.org/p/protect-tin-can-hill-recreation-area-from-development-in-yellowknife"
                text="Sign Now!"
                className="btn-info w-fit self-end"
                target="_blank"
              ></Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:h-60">
            <h3 className="sm:min-w-1/3 sm:p-5 py-1 px-3 h-full bg-base-300  sm:h-auto rounded-sm rounded-b-none sm:rounded-r-none sm:rounded-bl-sm">
              Grab Some Merch
            </h3>
            <div className="flex flex-col justify-between rounded-sm rounded-t-none sm:rounded-l-none sm:rounded-tr-sm p-3 sm:p-5 h-fit sm:h-full bg-base-200">
              <p className="lg:max-w-5/6">
                Check out our locally designed and made swag. All proceeds
                contribute to educational materials and TCHCC activities
                including promoting the long term protection of the Hill.
              </p>
              <Button
                href="/shop"
                text="Shop Here"
                className="btn-info w-fit self-end"
              ></Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:h-60">
            <h3 className="sm:min-w-1/3 sm:p-5 py-1 px-3 h-full bg-base-300  sm:h-auto rounded-sm rounded-b-none sm:rounded-r-none sm:rounded-bl-sm">
              Join Our Facebook Group
            </h3>
            <div className="flex flex-col justify-between rounded-sm rounded-t-none sm:rounded-l-none sm:rounded-tr-sm p-3 sm:p-5 h-fit sm:h-full bg-base-200">
              <p className="lg:max-w-5/6">
                Join our Facebook group to view the latest news and to share
                your adventures on the hill!
              </p>
              <Button
                href="https://www.facebook.com/groups/tincanhill"
                text="Join Today"
                className="btn-info w-fit self-end"
                target="_blank"
              ></Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:h-60">
            <h3 className="sm:min-w-1/3 sm:p-5 py-1 px-3 h-full bg-base-300  sm:h-auto rounded-sm rounded-b-none sm:rounded-r-none sm:rounded-bl-sm">
              Join our Mailing List
            </h3>
            <div className="flex flex-col justify-between rounded-sm rounded-t-none sm:rounded-l-none sm:rounded-tr-sm p-3 sm:p-5 h-fit sm:h-full bg-base-200">
              <p className="lg:max-w-5/6">
                Keep up to date with the latest news on Tin Can Hill, TCHCC
                events, and so much more, curated by our very own Vicky
                Johnston.
              </p>
              <Button
                href="#support-form"
                text="Sign Up"
                className="btn-info w-fit self-end"
              ></Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:h-60">
            <h3 className="sm:min-w-1/3 sm:p-5 py-1 px-3 h-full bg-base-300  sm:h-auto rounded-sm rounded-b-none sm:rounded-r-none sm:rounded-bl-sm">
              Join the Team!
            </h3>
            <div className="flex flex-col justify-between rounded-sm rounded-t-none sm:rounded-l-none sm:rounded-tr-sm p-3 sm:p-5 h-fit sm:h-full bg-base-200">
              <p className="lg:max-w-5/6">
                We welcome all Yellowknifers or those who are passionate about
                protecting Tin Can Hill to join the team. Get in contact to
                learn more and join our team.
              </p>
              <Button
                href="#support-form"
                text="Contact Us"
                className="btn-info w-fit self-end"
              ></Button>
            </div>
          </div>
        </div>
      </section>
      <Form id="support-form"></Form>
    </main>
  );
}
