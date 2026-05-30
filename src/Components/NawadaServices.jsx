import ServicePageTemplate from "../Components/ServicePageTemplate";
import "./Placesservices.css";
export default function NawadaServices() {
  const services = [
    "Patient Care",
    "Home Care",
    "Nursing Assistance",
    "Elderly Support",
    "Emergency Healthcare",
    "Health Monitoring",
  ];

  return (
    <ServicePageTemplate
      city="Nawada"
      description="Trusted and affordable healthcare services in Nawada with experienced healthcare professionals."
      services={services}
      image="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
    />
  );
}
