import { MdPets } from "react-icons/md";
import { GiDogHouse, GiJumpingDog } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import { FaHouseChimneyUser } from "react-icons/fa6";

export const services = [
  {
    id: 0,
    name: "All Services",
    description: "All services we provide at Wimbledon Pets",
    href: "/services",
    imageSrc: "/example.png",
    icon: SiDatadog,
  },
  {
    id: 1,
    name: "Dog Training",
    description: "Professional positive reinforcemnt training.",
    href: "/services/dog-training",
    imageSrc: "/example.png",
    icon: GiJumpingDog,
  },
  {
    id: 2,
    name: "Dog Walking",
    description: "Daily or occasional dog walking services.",
    href: "/services/dog-walking",
    imageSrc: "/example.png",
    icon: MdPets,
  },
  {
    id: 3,
    name: "Pet & House Sitting",
    description: "Reliable pet and house sitting while you’re away.",
    href: "/services/house-sitting",
    imageSrc: "/example.png",
    icon: FaHouseChimneyUser,
  },
  {
    id: 4,
    name: "Dog Boarding",
    description: "Safe, comfortable in house boarding for your dog.",
    href: "/services/dog-boarding",
    imageSrc: "/example.png",
    icon: GiDogHouse,
  },
];
