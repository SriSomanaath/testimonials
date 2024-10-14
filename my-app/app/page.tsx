import Feed from "@/components/Feed/Feed";
import PremiumTestimonials from "@/components/PremiumTestimonials/PremiumTestimonials";
import PrimaryTestimonials from "@/components/PrimaryTestimonials/PrimaryTestimonials";
import SecoundaryTestimonials from "@/components/SecoundaryTestimonials/SecoundaryTestimonials";

export default function Home() {
  return (
    <div>
      <PremiumTestimonials />
      <div className="container flex">
        <div>
          <PrimaryTestimonials />
          <SecoundaryTestimonials />
        </div>
        <div className="sticky-feed">
          <Feed />          
        </div>
      </div>
    </div>
  );
}
