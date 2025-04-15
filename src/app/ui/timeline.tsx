import Button from "./button";

export default function Timeline() {
  return (
    <section
      id="history"
      className="md:grid md:grid-cols-12 gap-6 max-w-3xl rounded-2xl"
    >
      <div className="col-start-2 col-end-12">
        <div className="pb-5 max-w-lg">
          <h2 className="">Tin Can Hill Throughout History...</h2>
          <p>
            Tin Can Hill and Yellowknife have a very long and vibrant history.
            Click on the link below to read the full history.
          </p>
          <Button
            href="https://drive.google.com/file/d/1EL5rUZ6xAXShNla2t58HjrkZCDcMhf9Q/view?usp=drivesdk"
            text="Read Here"
            className="btn-neutral"
            target="_blank"
          />
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-5">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono text-info-content">
                10 000 Years Ago
              </time>
              <div className="text-lg font-black pb-1 pt-2">
                The First People of Yellowknife
              </div>
              Human history on this continent began at least 10,000 years ago,
              with Indigenous cultures migrating to North America.
              Archaeological evidence and oral stories reveal the rich heritage
              of the Dene people in the Yellowknife region.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono text-info-content pb-3 ">1934</time>
              <div className="text-lg font-black pb-1 pt-2">
                Prospectors and the Discovery of Gold
              </div>
              Klondike-bound prospectors and Johnny Baker&apos;s gold discovery
              sparked a staking rush around Yellowknife Bay. Tin Can Hill played
              a pivotal role in the early exploration and staking of claims- it
              hosted exploration camps, transportation corridors, and there were
              docks along its shores. It was also a favourite playground for
              kids from the mining camp and the Yellowknife townsite. The first
              road linking the new town of Yellowknife and Con Mine traversed
              Tin Can Hill. It played a crucial role in transportation during
              the early years of settlement.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono text-info-content pb-3 ">1971</time>
              <div className="text-lg font-black pb-1 pt-2">
                Conservation and Cleanup Efforts
              </div>
              Early conservation efforts tried to reverse some of the damage
              caused by legacy exploration and development, such as the Ecology
              North cleanup in 1971. For example, Ecology North&apos;s 1971
              &quot;Ajax&quot; project was a large scale cleanup of old garbage
              dumps from the mining era. Efforts like this set the stage for a
              new perception of the Hill as an area deserving of environmental
              stewardship.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono text-info-content pb-3 ">1985</time>
              <div className="text-lg font-black pb-1 pt-2">
                City Residential and Mine Exploration Proposals
              </div>
              City Residential and Mine Exploration Proposals Between 1985 and
              1989, the City proposed residential development on Tin Can Hill.
              Citizen opposition convinced the City to drop its development
              plans and the Hill remained an undeveloped green space.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono text-info-content pb-3 ">2000</time>
              <div className="text-lg font-black pb-1 pt-2">
                Tin Can Hill in the 21st Century
              </div>
              There was little development on the Hill. The CBC Radio tower was
              constructed during this period.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono text-info-content pb-3 ">2004</time>
              <div className="text-lg font-black pb-1 pt-2">
                Residential Development
              </div>
              The disconnect between residents desires to protect the Hill and
              the City of Yellowknife&apos;s development agendas continued. In
              2004, City Council&apos;s vote in favor of residential development
              on Tin Can Hill sparked ongoing debates.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono text-info-content pb-3 ">2008</time>
              <div className="text-lg font-black pb-1 pt-2">
                Development Discussions Continue
              </div>
              In 2008-2009, discussions on Tin Can Hill development resumed,
              with concerns about urban sprawl and cost of living motivating
              supporters of development. City Councillor Mark Heyck led
              preservation efforts and City Council decided to remove references
              to residential development from the General Plan. Meanwhile,
              residential projects on the hill&apos;s periphery were approved.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono text-info-content pb-3 ">2011</time>
              <div className="text-lg font-black pb-1 pt-2">
                Water Treatment Plant Construction
              </div>
              Federal requirements for a new water treatment plant in
              Yellowknife led to the first significant development on Tin Can
              Hill. The construction, carved into a small portion of the Hill
              and upgraded road access, raising concerns about visual impact and
              potential future development.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono text-info-content pb-3 ">2012</time>
              <div className="text-lg font-black pb-1 pt-2">
                Rezoning Success and Designations
              </div>
              In January 2012, Tin Can Hill was successfully rezoned from
              &quot;Growth Management&quot; to &quot;Parks and Recreation&quot;
              by a pro-preservation City Council. It was also designated as an
              &quot;off-leash dog park,&quot; and received some park-like
              amenities, including trash cans and a boardwalk.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono text-info-content pb-3">2022</time>
              <div className="text-lg font-black pb-1 pt-2">
                Aurora College Proposal
              </div>
              In 2022, a proposal for a polytechnical university campus and
              residence reignited the development controversy. The Government of
              the Northwest Territories chose Tin Can Hill as the location for
              this project. Yellowknife City Council signed an MOU with the
              territorial government that signalled its willingness to consider
              future transfer of the land for the university campus.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-circle-fill text-info"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono text-info-content pb-3 ">2023</time>
              <div className="text-lg font-black pb-1 pt-2">
                The Formation of the Tin Can Hill Conservation Committee
              </div>
              The Tin Can Hill Conservation Committee was formed in response to
              the proposed choice of location for the campus. The TCHCC
              successfully made the future of the Hill an issue in the 2023
              territorial election, with most Yellowknife candidates opposing
              development of a University campus on the Hill. The TCHCC
              continues its efforts to raise awareness of the Hill&apos;s key
              services to Yellowknife, and works to obtain permanent
              protection of the Hill, through more stringent city zoning, and,
              eventually, as a Territorial Park.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
