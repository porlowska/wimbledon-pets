import Button from "../Button";

type servicesProps = {
  service: {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    body: string[];
    subheading: string;
    href: any;
    icon: any;
  };
};
const ServiceLayout = ({ service }: servicesProps) => {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-secondary to-rose-100"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-secondary to-rose-100 xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-primary">
                {service.subheading}
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-secondary sm:text-5xl">
                {service.name}
              </h1>
            </div>
            <div className="mt-6 space-y-4 text-gray-700 text-lg">
              {service.body.slice(0, 3).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={service.name}
            src={service.imageSrc}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <div className="mb-10 space-y-2 text-gray-700 text-lg">
                {service.body.slice(3).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Button
                isLink={true}
                href={"/book-now"}
                text={"Book Now!"}
                variant={2}
              />
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                For new client free meet and greet is required before booking!
              </h2>
              <p className="mt-6">
                At Wimbledon Pets, we offer our customers the best quality care
                for their furry friends at prices tailored to the size of the
                dog and their specific needs. All of our staff are highly
                experienced and professional, providing the most trustworthy and
                reliable care. We understand that each dog is unique and that is
                why we customize our prices to meet the needs of each individual
                pup. Rest assured that when you come to us, you are getting the
                best quality service for your beloved pet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceLayout;
