import Link from "next/link";
import { SiTrustpilot } from "react-icons/si";

type TrustpilotProps = {
  leaveReview: boolean;
  rating: number;
  reviews: number;
};
const Trustpilot = ({ leaveReview, rating, reviews }: TrustpilotProps) => {
  const stars = rating * 20;

  return (
    <>
      {leaveReview ? (
        <Link
          href="https://uk.trustpilot.com/evaluate/wimbledon-pets.co.uk"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-x-2 border border-primary text-gray-900 font-semibold px-4 py-2 rounded-xl hover:bg-rose-50 transition w-64 text-md"
        >
          <span>Review us on</span>
          <SiTrustpilot size={30} className="text-primary" />
          <span>Trustpilot</span>
        </Link>
      ) : (
        <Link
          href="https://uk.trustpilot.com/review/wimbledon-pets.co.uk"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 p-4 border-t border-b border-primary cursor-pointer hover:bg-rose-50 transition">
            <span className="font-semibold text-black text-xl my-1">
              Excellent
            </span>

            <div
              className="flex space-x-1 p-2 gap-2 my-1"
              style={{
                background: `linear-gradient(to right, #16a34a ${stars}%, #d1d5db ${stars}%)`,
              }}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <SiTrustpilot key={index} size={20} className="text-whiteish" />
              ))}
            </div>
            <div className="flex items-center gap-1 my-1">
              <span className="text-black font-bold">{reviews}</span>
              <span className="text-black">reviews on</span>
              <div className="flex items-center text-primary font-semibold">
                <SiTrustpilot size={30} className="mr-1 text-primary" />{" "}
                Trustpilot
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default Trustpilot;
