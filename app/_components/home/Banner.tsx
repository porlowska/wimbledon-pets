"use client";
import Button from "../Button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-whiteish">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row lg:items-center lg:gap-x-10 lg:px-8 lg:py-30">
        {/** Header Text */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 text-pretty text-7xl font-semibold tracking-tight text-primary sm:text-5xl">
            Wimbledon <span className="text-secondary">Pets</span>
          </h1>
          <p className="mt-8 text-pretty text-4xl font-medium text-primary sm:text-xl">
            Welcomes You with open paws when you can't be there
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Button
              isLink={true}
              href={"/book-now"}
              text="Book Now!"
              variant={2}
            />
            <Button
              isLink={true}
              href={"/services"}
              text="Explore our services"
              variant={1}
            />
          </div>
        </div>

        <div className="mt-10 sm:mt-24 lg:mt-0 shrink lg:shrink-0 lg:grow">
          <Image
            src="/doggos.png"
            alt="picture of happy dogs"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
