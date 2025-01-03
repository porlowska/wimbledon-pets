export const servicesStructuredData = {
  allServices: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wimbledon Pets - Pet Care Services in Wimbledon, London",
    description:
      "Providing premium dog care services in Wimbledon, London, including dog walking, boarding, training, and sitting.",
    url: "https://wimbledon-pets.co.uk/services",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wimbledon",
      addressRegion: "London",
      addressCountry: "GB",
    },
  },
  dogBoarding: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dog Boarding Services in Wimbledon, London",
    description:
      "Reliable and loving dog boarding services in Wimbledon, London. Your pets are cared for like family while you're away.",
    provider: {
      "@type": "LocalBusiness",
      name: "Wimbledon Pets",
      url: "https://wimbledon-pets.co.uk",
    },
    areaServed: {
      "@type": "Place",
      name: "Wimbledon, London",
    },
    offers: {
      "@type": "Offer",
      price: "70.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://wimbledon-pets.co.uk/services/dog-boarding",
    },
  },
  dogTraining: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dog Training Services in Wimbledon, London",
    description:
      "Professional dog training services in Wimbledon, London. Teach your furry friend good behavior and new tricks.",
    provider: {
      "@type": "LocalBusiness",
      name: "Wimbledon Pets",
      url: "https://wimbledon-pets.co.uk",
    },
    areaServed: {
      "@type": "Place",
      name: "Wimbledon, London",
    },
    offers: {
      "@type": "Offer",
      price: "50.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://wimbledon-pets.co.uk/services/dog-training",
    },
  },
  dogWalking: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dog Walking Services in Wimbledon, London",
    description:
      "Professional dog walking services in Wimbledon, London. Keep your dog happy, healthy, and active.",
    provider: {
      "@type": "LocalBusiness",
      name: "Wimbledon Pets",
      url: "https://wimbledon-pets.co.uk",
    },
    areaServed: {
      "@type": "Place",
      name: "Wimbledon, London",
    },
    offers: {
      "@type": "Offer",
      price: "20.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://wimbledon-pets.co.uk/services/dog-walking",
    },
  },
  petSitting: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pet Sitting Services in London",
    description:
      "Trustworthy and caring pet and houes sitting services in London. Your pets receive personalized care in your absence.",
    provider: {
      "@type": "LocalBusiness",
      name: "Wimbledon Pets",
      url: "https://wimbledon-pets.co.uk",
    },
    areaServed: {
      "@type": "Place",
      name: "London",
    },
    offers: {
      "@type": "Offer",
      price: "85.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://wimbledon-pets.co.uk/services/pet-sitting",
    },
  },
};
