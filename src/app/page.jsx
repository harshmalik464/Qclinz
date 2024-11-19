"use client";
import React, { useEffect,useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

function MainComponent() {
  const [email, setEmail] = useState("");
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [partnerEmail, setPartnerEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setPartnerEmail("");
    setBusinessName("");
    setShowPartnerPopup(false);
  };
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    setIsModalOpen(
      showPartnerPopup ||
        showAboutPopup ||
        showPrivacyPopup ||
        showTermsPopup ||
        showContactPopup
    );
  }, [
    showPartnerPopup,
    showAboutPopup,
    showPrivacyPopup,
    showTermsPopup,
    showContactPopup,
  ]);

  useEffect(() => {
    const preventBouncyScroll = (e) => {
        if (e.target === document.body) {
            e.preventDefault();
        }
    };

    // Prevent default touch move behavior
    document.addEventListener('touchmove', preventBouncyScroll, { passive: false });

    return () => {
        document.removeEventListener('touchmove', preventBouncyScroll);
    };
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000078] via-[#1a237e] to-[#2563eb] font-poppins relative">
      <div className="scrollable">
      <div className="fixed inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>

        <div className="container mx-auto px-4 pt-4 sm:pt-8 pb-8 sm:pb-12">
          <header className="flex flex-col items-center mb-12 sm:mb-20 gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <img
                src="https://ucarecdn.com/213796d5-14bc-4465-899d-d595347f9aa3/-/format/auto/"
                alt="Qclinz logo"
                className="h-16 sm:h-24 mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              />
              <p className="text-white text-lg sm:text-xl font-semibold mb-4">
                WE CARE, YOU ENJOY
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <button
                onClick={() => setShowAboutPopup(true)}
                className="px-4 sm:px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                About Us
              </button>
              <button
                onClick={() => setShowPartnerPopup(true)}
                className="px-4 sm:px-6 py-2 rounded-full bg-white text-[#000078] hover:bg-[#8aa4ca] hover:text-white transition-all"
              >
                Partner with Us
              </button>
            </div>
            <div className="relative">
              <p className="text-4xl sm:text-7xl font-bold text-white/90 mt-8 mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
                We are coming soon
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </header>

          <div id="services" className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="flex-1 space-y-6 lg:space-y-10 w-full">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-4xl sm:text-7xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Simplify Your <br />
                    <span className="text-[#8aa4ca]">Laundry</span> Life
                  </h2>

                  <p className="text-base sm:text-xl text-white/90 max-w-xl">
                    Premium pick-up and delivery laundry services. We partner
                    with trusted local laundries to provide high-quality
                    washing, dry cleaning, and ironing, all at your fingertips.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 lg:space-y-6 w-full"
                >
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#000078] font-semibold hover:bg-[#8aa4ca] hover:text-white transition-all"
                    >
                      Join Waitlist
                    </button>
                  </div>
                  <p className="text-sm text-white/60">
                    Join 2,000+ others waiting for the launch
                  </p>
                </form>

                <div className="space-y-4">
                  <p className="text-sm text-white/80">
                    Questions? Contact us at hello@qclinz.com
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Our Services
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Experience hassle-free laundry with Qclinz. We offer premium
                    washing, dry cleaning, and ironing services through our
                    network of trusted local partners. Save time and enjoy life
                    while we handle your laundry needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-32 flex flex-col items-center gap-6 lg:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full max-w-4xl">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                  <i className="fas fa-tshirt text-3xl text-white mb-4"></i>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Premium Cleaning
                  </h3>
                  <p className="text-white/70">
                    Professional washing and dry cleaning services
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                  <i className="fas fa-truck text-3xl text-white mb-4"></i>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Pickup & Delivery
                  </h3>
                  <p className="text-white/70">Convenient doorstep service</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                  <i className="fas fa-star text-3xl text-white mb-4"></i>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Quality Care
                  </h3>
                  <p className="text-white/70">
                    Expert handling of all garments
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <p className="text-sm text-white">
                    Launching Soon in Your City
                  </p>
                </div>
                <p className="text-white/75">
                  Questions? Contact us at hello@qclinz.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setShowPrivacyPopup(true)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowTermsPopup(true)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => setShowContactPopup(true)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com/qclinz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="https://twitter.com/qclinz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="https://instagram.com/qclinz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
              <div className="text-white/50 text-sm">
                © 2024 Qclinz. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {showPartnerPopup && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 pointer-events-auto">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#000078]">
                  Partner with Us
                </h3>
                <button
                  onClick={() => setShowPartnerPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Business Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#000078]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="partnerEmail"
                    value={partnerEmail}
                    onChange={(e) => setPartnerEmail(e.target.value)}
                    placeholder="Business Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#000078]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#000078] text-white font-semibold hover:bg-[#8aa4ca] transition-all"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        {showAboutPopup && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 pointer-events-auto">
            <div className="bg-white rounded-2xl p-8 w-full max-w-2xl overflow-y-auto max-h-[90vh]">
              <div className="sticky top-0 right-0 bg-white pb-4 z-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-semibold text-[#000078] sticky top-0">
                    About Us
                  </h3>
                  <button
                    onClick={() => setShowAboutPopup(false)}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  At Qclinz, we're revolutionizing the way you handle your
                  laundry needs. Our mission is to simplify your daily life by
                  providing convenient, high-quality laundry services right at
                  your doorstep.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through our carefully curated network of trusted local laundry
                  partners, we ensure that your garments receive the best
                  possible care. From everyday washing to specialized dry
                  cleaning and precise ironing, our services are designed to
                  meet all your fabric care needs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What sets us apart is our commitment to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Premium quality service with attention to detail</li>
                  <li>
                    Convenient pickup and delivery at your preferred schedule
                  </li>
                  <li>Transparent pricing and reliable service</li>
                  <li>Eco-friendly cleaning options</li>
                  <li>Professional handling of all garment types</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Join thousands of satisfied customers who have discovered the
                  joy of hassle-free laundry care with Qclinz. Let us handle the
                  chores while you focus on what matters most to you.
                </p>
              </div>
            </div>
          </div>
        )}

        {showPrivacyPopup && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 pointer-events-auto">
            <div className="bg-white rounded-2xl p-8 w-full max-w-2xl overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#000078]">
                  Privacy Policy
                </h3>
                <button
                  onClick={() => setShowPrivacyPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Last updated: January 1, 2024</p>
                <p>
                  At Qclinz, we take your privacy seriously. This Privacy Policy
                  explains how we collect, use, and protect your personal
                  information.
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  Information We Collect
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Delivery addresses</li>
                  <li>Order history and preferences</li>
                  <li>Payment information</li>
                </ul>
                <h4 className="text-lg font-semibold mt-4">
                  How We Use Your Information
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and improve our services</li>
                  <li>To process your orders and payments</li>
                  <li>To communicate with you about your orders</li>
                  <li>
                    To send you marketing communications (with your consent)
                  </li>
                </ul>
                <h4 className="text-lg font-semibold mt-4">Data Security</h4>
                <p>
                  We implement appropriate security measures to protect your
                  personal information.
                </p>
              </div>
            </div>
          </div>
        )}

        {showTermsPopup && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 pointer-events-auto">
            <div className="bg-white rounded-2xl p-8 w-full max-w-2xl overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#000078]">
                  Terms of Service
                </h3>
                <button
                  onClick={() => setShowTermsPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Last updated: January 1, 2024</p>
                <h4 className="text-lg font-semibold mt-4">
                  1. Service Agreement
                </h4>
                <p>
                  By using Qclinz services, you agree to these terms and
                  conditions.
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  2. Service Description
                </h4>
                <p>
                  Qclinz provides laundry pickup, cleaning, and delivery
                  services through our partner network.
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  3. Pricing and Payment
                </h4>
                <p>
                  Prices are as listed in our app. Payment is required before
                  service completion.
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  4. Service Guarantee
                </h4>
                <p>
                  We strive to provide high-quality service and will address any
                  issues promptly.
                </p>
              </div>
            </div>
          </div>
        )}

        {showContactPopup && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 pointer-events-auto">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#000078]">
                  Contact Us
                </h3>
                <button
                  onClick={() => setShowContactPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-[#000078]"></i>
                    <p>hello@qclinz.com</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-phone text-[#000078]"></i>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-[#000078]"></i>
                    <p>123 Laundry Street, Clean City, ST 12345</p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <p className="text-sm text-gray-600">Business Hours:</p>
                  <p className="text-sm">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-sm">
                    Saturday - Sunday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default MainComponent;