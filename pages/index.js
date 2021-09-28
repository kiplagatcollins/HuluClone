import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <body className="bg-[#06202A] text-gray-300">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={results}/>
    </body>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending}`)
    .then( (res)=>res.json())
  return {
    props:{
      results: request.results,
    }
  }
}
