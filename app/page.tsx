import AboutSection from "./_components/home/AboutSection";
import Banner from "./_components/home/Banner";
import ReviewsSection from "./_components/home/ReviewsSection";
import ServicesSection from "./_components/home/ServicesSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-100">
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
      </div>
    </div>
  );
}
