import React from "react";

const DualBannerSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 🔴 Left Banner */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/bannerleft.webp"
              alt="Mixer Grinder"
              className="w-full h-100 md:h-56 lg:h-64 object-cover"
            />
          </div>

          {/* 🟡 Right Banner */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/bannerright.webp"
              alt="Juicer"
              className="w-full h-100 md:h-56 lg:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualBannerSection;