import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCards from '../components/SmallCards'
import MediumCards from '../components/MediumCards'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({gettingData,cardData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
        <Banner />

        <main className='max-w-7xl  px-8 sm:px-16'>
          <section className='pt-5'>
            <h2 className='text-4xl font-bold'>Explore Nearby</h2>

            {/* {foundata.map((item) => (
              <h1>{item.location}</h1>
            }

            
            {/* <h1>{jsonData.location}</h1> */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {gettingData.map((item) => (
              <SmallCards
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
            </div>
          </section>

          <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
            {cardData.map((item) => (
              <MediumCards
                key={item.img}
                img={item.img}
                title={item.title}
              />
            ))}
            </div>
          </section>

          <LargeCard 
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />

          <Footer />
        </main>
    </div>
  )
}

export async function getServerSideProps() {
  const gettingData = await fetch('https://jsonkeeper.com/b/4G1G')
  .then(
    (res) => res.json()
  )


  const cardData = await fetch('https://links.papareact.com/zp1')
  .then(
    (res) => res.json()
  )

  return {
    props: {
      gettingData,
      cardData
    }
  }
}
