import Button from "../Button";
import { MdPets } from "react-icons/md";

const stats = [
  { id: 1, name: "Professional", icon: MdPets },
  { id: 2, name: "Trustworthy", icon: MdPets },
  { id: 3, name: "DBS checked and insured", icon: MdPets },
];
const AboutSection = () => {
  return (
    <div className="px-6  sm:px-6  lg:px-8 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Your pet deserves to be spoiled!
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
          If you’re searching for a reliable, experienced and trustworthy Dog
          Trainer or Pet Carer, look no further. We’ll take care of your beloved
          pet as if they were our own — with love, kindness and endless
          patience.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            isLink={true}
            text="Explore our services"
            variant={2}
            href={"/services"}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center p-4 mt-8 gap-3  ">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-y-3 border-l border-white/10 pl-6"
            >
              <div>
                <stat.icon
                  aria-hidden="true"
                  className="h-8 w-8 text-primary mr-2"
                />
              </div>

              <p className="text-md/6">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
