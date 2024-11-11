import Banner from "@/app/_components/about/Banner";
import Team from "@/app/_components/about/Team";

const About = () => {
  return (
    <div>
      <Banner />
      <Team variable="current" />
      <Team variable="recommended" />
    </div>
  );
};
export default About;
