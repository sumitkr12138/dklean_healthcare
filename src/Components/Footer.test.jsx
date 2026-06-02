import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Footer Component", () => {
  it("renders the footer with correct structure", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Dklean HealthCare/i)).toBeInTheDocument();
  });

  it("displays organization description", () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByText(/A registered NGO offering blood tests/i),
    ).toBeInTheDocument();
  });

  it("renders Quick Links section", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
  });

  it("renders Home link", () => {
    renderWithRouter(<Footer />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("renders Delhi Services link", () => {
    renderWithRouter(<Footer />);
    const delhiLink = screen.getByRole("link", { name: /delhi services/i });
    expect(delhiLink).toBeInTheDocument();
  });

  it("renders Patna Services link", () => {
    renderWithRouter(<Footer />);
    const patnaLink = screen.getByRole("link", { name: /patna services/i });
    expect(patnaLink).toBeInTheDocument();
  });

  it("renders Nawada Services link", () => {
    renderWithRouter(<Footer />);
    const nawadaLink = screen.getByRole("link", { name: /nawada services/i });
    expect(nawadaLink).toBeInTheDocument();
  });

  it("renders Contact Us link", () => {
    renderWithRouter(<Footer />);
    const contactLink = screen.getByRole("link", { name: /contact us/i });
    expect(contactLink).toBeInTheDocument();
  });

  it("renders Legal section", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Legal")).toBeInTheDocument();
  });

  it("renders Cancellation & Refund Policy link", () => {
    renderWithRouter(<Footer />);
    const cancelLink = screen.getByRole("link", {
      name: /cancellation & refund policy/i,
    });
    expect(cancelLink).toBeInTheDocument();
  });

  it("renders Privacy Policy link", () => {
    renderWithRouter(<Footer />);
    const privacyLink = screen.getByRole("link", { name: /privacy policy/i });
    expect(privacyLink).toBeInTheDocument();
  });

  it("renders Shipping Delivery link", () => {
    renderWithRouter(<Footer />);
    const shippingLink = screen.getByRole("link", {
      name: /shipping delivery/i,
    });
    expect(shippingLink).toBeInTheDocument();
  });

  it("renders Terms & Conditions link", () => {
    renderWithRouter(<Footer />);
    const termsLink = screen.getByRole("link", {
      name: /terms & conditions/i,
    });
    expect(termsLink).toBeInTheDocument();
  });

  it("renders Contact section", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders email address", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("dkleanhealthcare@gmail.com")).toBeInTheDocument();
  });

  it("renders WhatsApp booking button", () => {
    renderWithRouter(<Footer />);
    const whatsappBtn = screen.getByText(/book on whatsapp/i);
    expect(whatsappBtn).toBeInTheDocument();
  });

  it("renders Facebook link", () => {
    renderWithRouter(<Footer />);
    const facebookLink = document.querySelector(
      'a[href="https://www.facebook.com/profile.php?id=61577631624839"]',
    );
    expect(facebookLink).toBeInTheDocument();
  });

  it("renders Instagram link", () => {
    renderWithRouter(<Footer />);
    const instagramLink = document.querySelector(
      'a[href="https://www.instagram.com/dkleanhealthcare_trust_ngo/"]',
    );
    expect(instagramLink).toBeInTheDocument();
  });

  it("renders copyright text with current year", () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument();
  });

  it("renders YouTube link", () => {
    renderWithRouter(<Footer />);
    const youtubeLink = screen.getByText("YouTube");
    expect(youtubeLink).toBeInTheDocument();
  });

  it("contains correct WhatsApp href", () => {
    renderWithRouter(<Footer />);
    const whatsappLink = document.querySelector(
      'a[href="https://wa.me/919355647906"]',
    );
    expect(whatsappLink).toBeInTheDocument();
  });
});
