import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { getSortedPostsData } from "../lib/pages";
import { attributes, react as HomeContent } from '../content/home.md';

export async function getStaticProps() {
  let allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData: JSON.parse(JSON.stringify(allPostsData))
    },
  };
}

const Home = () => {
  let { title, date} = attributes;
  return (
    <>
      <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {/* Need to setup [id]pages for routes / pages */}
              {/* maybe make some kinda structural design and start making that from scratch? */}
                {/* <Link href={`/posts/${id}`}>{title}</Link> */}
            </li>
          ))}
        </ul>
        </ul>
        
      </article>
    </>
  )
}

export default Home;