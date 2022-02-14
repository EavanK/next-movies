import Layout from "../components/Layout";
import "../styles/globals.css";

/* 
Next will call this _app.js file first ({Component, pageProps})
*/
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
