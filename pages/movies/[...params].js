// import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  // router in the component only works in the client side
  // const router = useRouter();
  // const [title, id] = router.query.params || [];

  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// get params from server before rendering
// context.params.params
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
