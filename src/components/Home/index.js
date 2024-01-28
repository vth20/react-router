import { useEffect } from "react";
import { useAppLogics } from "../../store/app.store/app.selector";
import Image from "../Image";
const Home = () => {
  const { onGetNewsfeed, newsfeed } = useAppLogics();
  useEffect(() => {
    onGetNewsfeed({ limit: 5 });
  }, []);
  return (
    <>
      <h1>THIS IS HOME PAGE</h1>;
      {newsfeed?.map((img) => {
        return <Image src={img.url} title={img.title} />;
      })}
    </>
  );
};

export default Home;
