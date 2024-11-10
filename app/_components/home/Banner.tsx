"use client";
import Button from "../Button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-b from-primary from-75% to-whiteish to-75% p-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row lg:items-center lg:gap-x-10 lg:px-8 lg:py-30">
        {/** Header Text */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-4 text-pretty font-semibold tracking-tight text-whiteish md:text-4xl lg:text-7xl text-5xl">
            Wimbledon <span className="text-secondary">Pets</span>
          </h1>
          <p className="mt-8 text-pretty  font-medium text-whiteish md:text-4xl text-xl">
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
              className="bg-rose-200 text-black hover:rose-400 focus-visible:outline-secondary text-nowrap"
            />
          </div>
        </div>

        <div className="mt-12 sm:mt-24 lg:mt-0 shrink lg:shrink-0 lg:grow">
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
