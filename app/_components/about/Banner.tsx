import Button from "../Button";

const Banner = () => {
  return (
    <main>
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-b from-primary to-primary opacity-50"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-30 lg:px-8 lg:pt-10">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative md:pt-20  w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-pretty text-lg font-semibold tracking-tight text-secondary">
                  About us
                </h1>
                <p className="mt-2 text-pretty text-5xl font-medium text-black sm:max-w-md lg:max-w-none">
                  At <span className="text-secondary">Wimbledon Pets</span>, we
                  put our love for pets into everything that we do.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    isLink={true}
                    href={"/services"}
                    text="Explore our services"
                    variant={1}
                  />
                </div>
                <div className="mt-14 md:pt-20 pt-8 relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h3 className="text-pretty text-lg font-semibold tracking-tight text-secondary">
                    Our Story
                  </h3>
                  <p className="mt-2 text-pretty text-xl text-black sm:max-w-md lg:max-w-none">
                    We strive to provide the highest quality pet care service.
                    We are dedicated to providing a safe and comfortable
                    environment for your furry friends. With our love and
                    passion for pets of all shapes, sizes and breeds, we are
                    able to provide a unique set of skills and dedication to the
                    care of your pets.
                  </p>
                  <p className="mt-6 text-pretty text-xl text-black sm:max-w-md lg:max-w-none">
                    We understand that your pets are as much a part of the
                    family as anyone else, and we strive to make sure that they
                    are properly taken care of. So come to Wimbledon Pets, and
                    let us show you our passion and dedication for your furry
                    friends.
                  </p>
                </div>
              </div>

              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      alt=""
                      src="/placeholders/dog-7.webp"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      alt=""
                      src="/placeholders/dog-1.webp"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="/placeholders/dog-2.webp"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      alt=""
                      src="/placeholders/dog-3.webp"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="/placeholders/dog-4.webp"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Banner;
