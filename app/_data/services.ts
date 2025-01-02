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
    imageSrc: "/placeholders/dog-7.webp",
    icon: SiDatadog,
    body: [
      "Welcome to Wimbledon Pets, the ultimate destination for top-quality pet care services provided by our experienced and dedicated professionals.",
      "Our dog training program is designed to help your canine companion become well-behaved, obedient, and a joy to be around. Polly, our professional dog trainer, utilizes effective training techniques and positive reinforcement to address behavioral issues, teach essential commands, and strengthen the bond between you and your dog.",
      "Whether you have a new puppy or an adult dog with specific training requirements, Polly will tailor the training sessions to your pet's individual needs, ensuring remarkable progress and a harmonious relationship. In addition to dog training, we understand that your pets need a loving and safe environment when you're away on holiday or have work commitments.",
      " With our reliable holiday pet care services, we ensure that your pets receive the utmost attention, care, and companionship they deserve. From regular exercise and feeding to playtime and personalised attention, we will create a nurturing and secure environment, ensuring your pets feel at ease and loved throughout their stay.",
      "At Wimbledon Pets, we are committed to the well-being and happiness of your pets. Whether you require year-round dog training with Polly or holiday pet care with us, our team is dedicated to providing exceptional services tailored to your pets' specific needs.",
      "Contact Wimbledon Pets today to learn more about our services and give your furry friends the care and attention they deserve.",
    ],
    subheading: "",
  },
  {
    id: 1,
    name: "Dog Training",
    description: "Professional positive reinforcemnt training.",
    href: "/services/dog-training",
    imageSrc: "/services/training.webp",
    icon: GiJumpingDog,
    body: [
      "Are you looking to train your pup or dog?",
      "If so, our Dog Training program is the perfect solution. With tailored training for puppies and dogs of all ages, we are committed to helping you learn how to tackle unwanted behaviours while ensuring that you can successfully train your dog.",
      "Our services include both online or face-to-face sessions, as well as personalised advice on understanding canine language and communicating your expectations in an effective manner.",
      "Our trainers can provide a training which suits you and your dog the best.",
      "Polly - positive reinforcement training, choice based training, behaviour modifications.",
      "Jasper - balanced training, obedience training.",
      "Our Dog Training Service includes free initial consultation with a dedicated dog trainer, who  will assess the dog and listen to your individual goals, which you would like to achieve. You will receive an individually tailored trining plan for your dog, and access to our Trining Packages or you can choose to buy one of sessions. Each session will take 45-120min, depending on your dog's needs. ",
    ],
    subheading: "Online or face-2-face",
  },
  {
    id: 2,
    name: "Dog Walking",
    description: "Daily or occasional dog walking services.",
    href: "/services/dog-walking",
    imageSrc: "/services/walking.webp",
    icon: MdPets,
    body: [
      "We offer both individual and group dog walking services tailored to your pup's needs.",
      "Our experienced dog walkers provide one-on-one attention and a personalized experience, while our group walks offer a fun and social atmosphere. Our tailored service ensures that your furry family member gets the exercise, love, and attention they need.",
      "Our dog walking services are designed to fit seamlessly into your schedule and cater to your dog's unique personality and energy level. From energetic outdoor adventures to peaceful strolls in the park, we create a walk experience that’s just right for your pup.",
      "Safety is our top priority, so you can rest assured that every walk is handled with care. Our dog walkers are well-trained in handling various dog breeds and temperaments, ensuring a safe and enjoyable experience every time. With flexible scheduling options and regular updates, you'll know exactly how your dog’s day went. Let us help keep your dog happy, healthy, and excited for their next walk!",
    ],
    subheading: "Individual or Group Dog Walking",
  },
  {
    id: 3,
    name: "Pet & House Sitting",
    description: "Reliable pet and house sitting while you’re away.",
    href: "/services/house-sitting",
    imageSrc: "/services/sitting.webp",
    icon: FaHouseChimneyUser,
    body: [
      "We understand how difficult it can be to leave your beloved pet or home unattended when you need to travel. That’s why we offer a comprehensive pet and house sitting service that caters all your needs.",
      "Our goal is to make sure your home and pet are lovingly taken care of while you’re away. Our experience team of pet sitters work 365 days a year; providing care, attention, exercise, basic training and companionship for your four legged friends whenever you need it. Whether it’s for Christmas, Easter or any other occasion, we will ensure your pet is loved an looked after as if they were our own! ",
    ],
    subheading: "",
  },
  {
    id: 4,
    name: "Dog Boarding",
    description: "Safe, comfortable in house boarding for your dog.",
    href: "/services/dog-boarding",
    imageSrc: "/services/boarding.webp",
    icon: GiDogHouse,
    body: [
      "Are you looking for a secure, caring environment to board your pet while you’re away?",
      "We provide overnight stays in the homes of reliable and experienced sitters with a proven track record of providing tender loving care to those in their charge. Our service is available 365 days a year, so no matter the occasion – be it a holiday or a work trip – our pet boarding will ensure that your beloved fur baby receives all the love, care, and affection they deserve even when you’re away. ",
    ],
    subheading: "",
  },
];
