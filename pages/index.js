import Head from "next/head";
import Script from "next/script";
import { attributes, react as HomeContent } from '../content/home.md';

// export class Home extends Component {
//   render() {
    
    
//   }
// }

export const Home = () => {
  let { title, cats, extra } = attributes;
  return (
    <>
      <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
        <img src={extra} />
      </article>
    </>
  )
}
