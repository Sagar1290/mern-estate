import { app } from "../../firebase.config.js";

const Home = () => {
  console.log(app);
  console.log();
  return (
    <div className="min-h-[1200px]">
      Home working: {`${import.meta.env.VITE_WORKING}`}
    </div>
  );
};

export default Home;
