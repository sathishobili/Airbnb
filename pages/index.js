import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'


export default function Home({exploreData,cardData}) {
  return (
    <div className="">
      <Head>
        <title>Sathish Obili AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl pd-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(({img,location,distance},index) => (
            <SmallCard
              key={index}
              img={img}
              location={location}
              distance={distance}
            />
          ))}
          </div>
        </section>


         <section className="pt-8">
          <h2 className="text-4xl py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardData?.map(({img,title},index) => (
              <MediumCard key={index} img={img} title={title}/>
          ))}
          </div>
        </section>

       </main>
   
   
    </div>
  )
}





export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
    
  const cardData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());
  // console.log(cardData)
  return {
    props: {exploreData,cardData}, // will be passed to the page component as props
  }

}