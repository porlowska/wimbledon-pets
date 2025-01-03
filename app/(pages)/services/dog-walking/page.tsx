import ServiceLayout from "@/app/_components/services/ServiceLayout";
import { services } from "@/app/_data/services";
import StructuredData from "@/app/_components/StructuredData";
import { Metadata } from "next";
import { servicesStructuredData } from "@/app/metadata/serviceStructuredData";
import servicesMetadata from "@/app/metadata/servicesMetadata";

export const metadata: Metadata = servicesMetadata.dogWalking;

const Walking = () => {
  return (
    <>
      <StructuredData data={servicesStructuredData.dogWalking} />
      <ServiceLayout service={services[2]} />
    </>
  );
};
export default Walking;
