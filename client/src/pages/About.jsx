import { useSelector } from "react-redux";

const About = () => {
  const { userData } = useSelector((state) => state.user);
  console.log(userData);
  return <div>about</div>;
};

export default About;
