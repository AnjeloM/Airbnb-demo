import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargCared from "@/components/LargCared";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default async function Airbnb() {
  const airbnbData = await getPostsData();
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      {/* Maina */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby Place</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {airbnbData?.exploreData?.map(
              ({ img, distance, location }, index) => (
                <SmallCard
                  key={index}
                  img={img}
                  location={location}
                  distance={distance}
                />
              )
            )}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {airbnbData?.liveAnywhere?.map(({ img, title }, index) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargCared
          img="https://cdnb.artstation.com/p/assets/images/images/054/804/799/large/enfthusiast-40-the-mykonos-aisland.jpg"
          title={"The Greatest Outdoors"}
          description={"Wishlists curated by Airbnb"}
          buttonText={"Get Inspired"}
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getPostsData() {
  const resExploreData = await fetch(
    "https://mockjsondata.onrender.com/nearbyPlace"
  );
  const exploreData = await resExploreData.json();

  const resLiveAnywhere = await fetch(
    "https://mockjsondata.onrender.com/liveAnywhere"
  );
  const liveAnywhere = await resLiveAnywhere.json();

  return { exploreData: exploreData, liveAnywhere: liveAnywhere };
}
