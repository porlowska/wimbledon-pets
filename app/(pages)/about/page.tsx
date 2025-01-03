import Banner from "@/app/_components/about/Banner";
import Team from "@/app/_components/about/Team";
import StructuredData from "@/app/_components/StructuredData";
import { Metadata } from "next";
import { organizationStructuredData } from "@/app/metadata/organisationStructuredData";
import globalMetadata from "@/app/metadata/globalMetadata";

export const metadata: Metadata = globalMetadata.about;

const About = () => {
  return (
    <>
      <StructuredData data={organizationStructuredData.about} />
      <Banner />
      <Team variable="current" />
      <Team variable="recommended" />
    </>
  );
};
export default About;
