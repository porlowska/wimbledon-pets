import ServicesSection from "@/app/_components/home/ServicesSection";
import ServiceLayout from "@/app/_components/services/ServiceLayout";
import { services } from "@/app/_data/services";

const Services = () => {
  return (
    <>
      <ServiceLayout service={services[0]} />
      <ServicesSection/>
    </>
  );
};
export default Services;
