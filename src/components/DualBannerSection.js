import React from "react";
import "./DualBannerSection.css";

const DualBannerSection = () => {
  return (
    <section className="dual-banner-section py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left Banner */}
          <div className="col-md-6">
            <div className="banner-box red-theme h-100">
              <img
                src="/bannerleft.webp"
                alt="Mixer Grinder"
                className="img-fluid rounded w-100"
              />
            </div>
          </div>

          {/* Right Banner */}
          <div className="col-md-6">
            <div className="banner-box yellow-theme h-100">
              <img
                src="/bannerright.webp"
                alt="Juicer"
                className="img-fluid rounded w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualBannerSection;
