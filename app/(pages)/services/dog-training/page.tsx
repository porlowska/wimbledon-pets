import ServiceLayout from "@/app/_components/services/ServiceLayout";
import { services } from "@/app/_data/services";
import StructuredData from "@/app/_components/StructuredData";
import { Metadata } from "next";
import { servicesStructuredData } from "@/app/metadata/serviceStructuredData";
import servicesMetadata from "@/app/metadata/servicesMetadata";

export const metadata: Metadata = servicesMetadata.dogTraining;

const Training = () => {
  return (
    <>
      <StructuredData data={servicesStructuredData.dogTraining} />
      <ServiceLayout service={services[1]} />
    </>
  );
};
export default Training;
