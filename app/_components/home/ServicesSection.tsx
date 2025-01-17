import { services } from "@/app/_data/services";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4 overflow-hidden">
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {services.slice(1).map((service) => (
          <div key={service.id} className="group relative">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <img
                alt={`${service.name} service picture`}
                src={service.imageSrc}
                className="object-cover object-center"
              />
              <div
                aria-label={`Learn more about ${service.name}`}
                className="flex items-end p-4 opacity-0 group-hover:opacity-100"
              >
                <Link
                  href={service.href}
                  className="w-full rounded-full bg-secondary bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-whiteish backdrop-blur backdrop-filter"
                >
                  {service.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
