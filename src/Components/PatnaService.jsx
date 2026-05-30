import ServicePageTemplate from "../Components/ServicePageTemplate";
import "./Placesservices.css"
export default function PatnaServices() {
  const services = [
    "Home Nursing",
    "Caretaker Services",
    "Old Age Care",
    "Post Surgery Care",
    "Baby Care",
    "Doctor Consultation",
  ];

  return (
    <ServicePageTemplate
      city="Patna"
      description="Reliable healthcare and nursing services in Patna for patients, senior citizens, and families."
      services={services}
      image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
    />
  );
}
