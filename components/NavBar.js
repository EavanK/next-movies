import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  /*
  3 most common ways to use style modules (having 2 className)
  for examples

    1. using backticks 
        `${styles.link} 
        ${router.pathname === "/" ? styles.active : ""}`

    2. using an array with join method
        [styles.link,
        router.pathname === "/about" ? styles.active : ""].join(" ")

    ***
    3. using styled JSX -> styles are scoped only the component
        <style jsx>{` nav { backgroud-color: tomato }`}</style>

        ***if you want to apply styled JSX globally -> <style jsx global>{``}</style>
  */

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>

      <style jsx>{`
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
