"use client";
import Button from "../Button";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/app/animations/animations";

export default function Banner() {
  return (
    <div className="bg-whiteish overflow-hidden">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-whiteish lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-28 sm:py-36 lg:px-8 lg:py-52 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-pretty text-5xl font-bold tracking-tight text-primary sm:text-7xl">
                  Wimbledon <span className="text-secondary">Pets</span>
                </h1>
                <p className="ml-2 mt-8 text-pretty text-lg  text-primary sm:text-xl/8">
                  Welcomes You with open paws when you can't be there! <br></br>
                  Pet care services in safe and comfortable environment,
                  servicing London.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    isLink={true}
                    href={"/book-now"}
                    text="Book Now!"
                    variant={2}
                    className="text-nowrap"
                  />
                  <Button
                    isLink={true}
                    href={"/services"}
                    text="Explore our services"
                    variant={1}
                    className="text-nowrap"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="bg-whiteish lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
          whileHover={zoomIn}
        >
          <img
            alt="founder with one of dogs"
            src="/team/polly.webp"
            className="aspect-[1/1] md:aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
