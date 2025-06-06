"use client";
import { motion } from "framer-motion";
import { slideInBtm } from "@/app/animations/animations";
import { featuredTestimonial, testimonials } from "../../_data/testimonials";
import Trustpilot from "../Trustpilot";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ReviewsSection = () => {
  return (
    <div className="relative isolate pb-32 pt-24 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-secondary to-secondary"
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
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-secondary to-secondary xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-secondary">
            Testimonials
          </h2>
          <p className="my-6 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            What Our{" "}
            <span className="text-primary hover:underline hover:underline-offset-8">
              Happy
            </span>{" "}
            Clients Say
          </p>
          <Trustpilot leaveReview={false} rating={4.5} reviews={15} />
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-16 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <motion.figure
            className="rounded-2xl bg-whiteish shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
            variants={slideInBtm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <blockquote className="p-6 text-lg tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.comment}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt={`${featuredTestimonial.author.pet} - picture of the pet`}
                src={featuredTestimonial.author.imageUrl}
                className="h-16 w-16 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.owner}
                </div>
                <div className="text-gray-600">{`Pet name: ${featuredTestimonial.author.pet}`}</div>
              </div>
              <p>{featuredTestimonial.date}</p>
            </figcaption>
          </motion.figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <motion.figure
                      key={testimonial.author.pet}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      variants={slideInBtm}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.7 }}
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.comment}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-2 justify-between">
                        <div className="items-center flex gap-x-2 ">
                          <img
                            alt={`${testimonial.author.pet} - picture of the pet`}
                            src={testimonial.author.imageUrl}
                            className="h-16 w-16 rounded-full bg-gray-50"
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.owner}
                            </div>
                            <div className="text-gray-600">{`Pet: ${testimonial.author.pet}`}</div>
                          </div>
                        </div>
                        <p>{testimonial.date}</p>
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
