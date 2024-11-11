import { tc } from "@/app/_data/tc";
const Terms = () => {
  return (
    <div className=" px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-900">
        <p className="text-xl font-semibold text-secondary">
          Terms and Conditions
        </p>
        <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Terms and Conditions of bookings with Wimbledon
        </h1>
        {tc.map((term) => (
          <div key={term.id} className="mt-8">
            <h3 className="text-2xl font-semibold text-primary">
              {term.id}.{term.title}
            </h3>

            <ul className="mt-4 space-y-4">
              {term.body.map((text, index) => (
                <li key={index} className="text-gray-900">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
