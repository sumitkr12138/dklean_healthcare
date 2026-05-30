import ServicePageTemplate from "../Components/ServicePageTemplate";
import "./Placesservices.css";
export default function DelhiServices() {
  const services = [
    "Home Nursing",
    "Patient Care",
    "Elder Care",
    "Medical Attendant",
    "Physiotherapy",
    "ICU Care at Home",
  ];

  return (
    <ServicePageTemplate
      city="Delhi"
      description="Professional home healthcare and patient support services in Delhi with trained healthcare experts."
      services={services}
      image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
    />
  );
}
