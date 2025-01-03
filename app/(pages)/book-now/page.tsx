import ContactForm from "@/app/_components/form/Form";
import SocialLinks from "@/app/_components/SocialLinks";
import { companyData } from "@/app/_data/socials";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import StructuredData from "@/app/_components/StructuredData";
import { Metadata } from "next";
import { organizationStructuredData } from "@/app/metadata/organisationStructuredData";
import globalMetadata from "@/app/metadata/globalMetadata";

export const metadata: Metadata = globalMetadata.book;


const BookNow = () => {
  return (
    <>
      <StructuredData data={organizationStructuredData.book} />
      <div className="relative isolate ">
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-pretty text-6xl font-semibold tracking-tight text-secondary sm:text-5xl">
                Book Now!
              </h2>
              <p className="mt-6 text-lg/8 text-gray-900">
                To book: Call us, WhatsApp us, iMessage us, or contact our team
                via the form!
                <br />
                Anyting urgent or less than 24h in advance please call!
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-900">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <FaMapMarkerAlt
                      aria-hidden="true"
                      className="h-6 w-6 hover:text-secondary text-primary"
                    />
                  </dt>
                  <dd>{companyData.location}</dd>
                </div>

                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">e-mail</span>
                    <FaEnvelope
                      aria-hidden="true"
                      className="h-6 w-6 hover:text-secondary text-primary"
                    />
                  </dt>
                  <dd>
                    <a href={`mailto:${companyData.email}`}>
                      {companyData.email}
                    </a>
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <FaPhoneAlt
                      aria-hidden="true"
                      className="h-6 w-6 hover:text-secondary text-primary"
                    />
                  </dt>
                  <dd>
                    <a href={`tel:${companyData.phone[1]}`}>
                      {companyData.phone[0]}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4"></div>
                <SocialLinks
                  iconClassName={"pt-6 text-primary hover:text-secondary"}
                />
              </dl>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default BookNow;
