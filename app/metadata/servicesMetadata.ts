import { servicesStructuredData } from "./serviceStructuredData";


const servicesMetadata = {
  allServices: {
    title: "Our Pet Care Services in Wimbledon, London | Wimbledon Pets",
    description:
      "Explore the range of pet care services offered by Wimbledon Pets in Wimbledon, London, including dog walking, boarding, training, and sitting.",
    openGraph: {
      title: "Our Pet Care Services in Wimbledon, London | Wimbledon Pets",
      description:
        "Discover premium pet care services in Wimbledon, London, with Wimbledon Pets. Dog walking, training, boarding, and sitting services for your furry friends.",
      url: "https://wimbledon-pets.co.uk/services",
      images: [
        {
          url: "/team/polly.webp",
          width: 1200,
          height: 800,
          alt: "Wimbledon Pets - Our Services",
        },
      ],
    },
    structuredData: servicesStructuredData.allServices,
  },
  dogBoarding: {
    title: "Dog Boarding in Wimbledon, London | Wimbledon Pets",
    description:
      "Reliable and loving dog boarding services in Wimbledon, London. Your pets are cared for like family while you're away.",
    openGraph: {
      title: "Dog Boarding in Wimbledon, London | Wimbledon Pets",
      description:
        "Looking for trusted dog boarding services in Wimbledon, London? Wimbledon Pets provides a safe and loving home for your pets.",
      url: "https://wimbledon-pets.co.uk/services/dog-boarding",
      images: [
        {
          url: "/services/boarding.webp",
          width: 1200,
          height: 800,
          alt: "Dog Boarding at Wimbledon Pets",
        },
      ],
    },
    structuredData: servicesStructuredData.dogBoarding,
  },
  dogTraining: {
    title: "Dog Training in Wimbledon, London | Wimbledon Pets",
    description:
      "Professional dog training services in Wimbledon, London. Teach your dog good behavior and new tricks with Wimbledon Pets.",
    openGraph: {
      title: "Dog Training in Wimbledon, London | Wimbledon Pets",
      description:
        "Looking for professional dog training services in Wimbledon, London? Wimbledon Pets helps your furry friend learn new skills.",
      url: "https://wimbledon-pets.co.uk/services/dog-training",
      images: [
        {
          url: "/services/training.webp",
          width: 1200,
          height: 800,
          alt: "Dog Training at Wimbledon Pets",
        },
      ],
    },
    structuredData: servicesStructuredData.dogTraining,
  },
  dogWalking: {
    title: "Dog Walking in Wimbledon, London | Wimbledon Pets",
    description:
      "Keep your dog happy, healthy, and active with our professional dog walking services in Wimbledon, London.",
    openGraph: {
      title: "Dog Walking in Wimbledon, London | Wimbledon Pets",
      description:
        "Looking for reliable dog walking services in Wimbledon, London? Wimbledon Pets is your trusted partner for your dog's exercise needs.",
      url: "https://wimbledon-pets.co.uk/services/dog-walking",
      images: [
        {
          url: "/services/walking.webp",
          width: 1200,
          height: 800,
          alt: "Dog Walking at Wimbledon Pets",
        },
      ],
    },
    structuredData: servicesStructuredData.dogWalking,
  },
  petSitting: {
    title: "Pet Sitting in Wimbledon, London | Wimbledon Pets",
    description:
      "Trustworthy and caring pet sitting services in Wimbledon, London. Your pets receive personalized care while you're away.",
    openGraph: {
      title: "Pet Sitting in Wimbledon, London | Wimbledon Pets",
      description:
        "Looking for trusted pet sitting services in Wimbledon, London? Wimbledon Pets provides personalized care for your furry family members.",
      url: "https://wimbledon-pets.co.uk/services/pet-sitting",
      images: [
        {
          url: "/services/sitting.webp",
          width: 1200,
          height: 800,
          alt: "Pet Sitting at Wimbledon Pets",
        },
      ],
    },
    structuredData: servicesStructuredData.petSitting,
  },
};

export default servicesMetadata;
