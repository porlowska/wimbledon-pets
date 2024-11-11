import ServiceLayout from "@/app/_components/services/ServiceLayout";
import { services } from "@/app/_data/services";

const Boarding = () => {
  return <ServiceLayout service={services[4]} />;
};
export default Boarding;
