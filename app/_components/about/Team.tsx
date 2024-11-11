"use client";
import { currentTeam, recommendedTeam } from "@/app/_data/team";
import Button from "../Button";
import PopModal from "./PopModal";
import { useState } from "react";

type teamProp = {
  variable: "current" | "recommended";
};
const Team = ({ variable }: teamProp) => {
  const [openPerson, setOpenPerson] = useState<string | null>(null);

  let team = currentTeam;
  let h2;
  let description;

  if (variable === "current") {
    team = currentTeam;
    h2 = "Meet out main team";
    description =
      "Our Main team associated with Wimbledon pets thatis ready to take care of your pet";
  } else if (variable === "recommended") {
    team = recommendedTeam;
    h2 = "Recommended pet sitters";
    description =
      "Other freelance pet careeres, that are recommended by Wimbledon Pets!";
  }

  return (
    <div className=" py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-34l text-balance font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {h2}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 xl:grid-cols-3 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {team.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-4 lg:flex-row align-middle"
            >
              <PopModal
                person={person}
                open={openPerson === person.name}
                onClose={() => setOpenPerson(null)}
              />
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              />
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-gray-600">{person.role}</p>
                <p className="text-base/7 text-gray-600">
                  Services: {person.service}
                </p>
                <p className="font-medium text-base/7 text-gray-600">
                  {person.features}
                </p>

                <Button
                  isLink={false}
                  text={"Read description"}
                  className="ring-1 ring-primary hover:bg-rose-100 rounded-full mt-6"
                  handleClick={() => setOpenPerson(person.name)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
