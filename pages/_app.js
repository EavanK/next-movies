import NavBar from "../components/NavBar";
import "../styles/globals.css";

/* 
Next will call this _app.js file first ({Component, pageProps})
*/
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </>
  );
}
