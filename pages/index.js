import Layout from "../components/layout";
import Link from "next/link";

export default function IndexPage() {
  return (
    <Layout>
      <article>
        <h2>It's Official.</h2>

        <p>
          It is with great excitement that we can finally and officially open
          the Oakland Pump Track! What started as a mid-ride conversation four
          years ago has finally come to fruition, and Oakland has a place for
          everyone, from first time to experienced riders to come together,
          enhance their skills, and have some fun. This project could not have
          been completed without hundreds of hours of volunteer time, the
          support of City of Oakland staff, donations of dirt and equipment from
          Silverado Contractors and Herc Rentals, and over $16k in donations
          from the mountain bike community. Every penny of that money was spent
          on permits, insurance, tools, and equipment needed to make this track
          a reality. Thank you all so much for all the effort and patience as we
          learned the ins and outs of getting a public pump track built, not to
          mention fires, pandemic, and everything else 2020 had to throw at us.
          With all that behind us, we hope that everyone enjoys the track!
        </p>

        <h2>The Rules</h2>

        <p>
          <ol>
            <li>Have fun!</li>
            <li>Treat others with respect</li>
            <li>Max of 4 riders on the track at once</li>
            <li>Do not ride on top of berms</li>
            <li>
              <b>NO RIDING IN THE WET!</b>
            </li>
            <li>Do not add to or modify the track</li>
          </ol>
        </p>

        <h2>Next Steps</h2>

        <p>
          The track has been built! But, it's going to need some love and care
          to keep it fun. Dirt tracks degrade over time and we will continue to
          have volunteer days to keep things in shape. We may also need to
          conduct some future fundraisers to pay for things like getting water
          to the site. Stay tuned to @OaklandPumpTrack on Instagram, facebook,
          and our soon to be setup website:{" "}
          <Link href="https://oaklandpumptrack.org">oaklandpumptrack.org</Link>.
        </p>

        <p>
          <b>Pass it on.</b>
        </p>

        <p>🤘 Morgan, Ryan, Kevin, Mike, Johnny, Rich and the BTCEB</p>
      </article>
    </Layout>
  );
}
