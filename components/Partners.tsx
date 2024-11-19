import React from "react";

interface Partner {
  id: number;
  src: string;
  alt: string;
}

const PartnersSection: React.FC = () => {
  const partners: Partner[] = [
    { id: 1, src: "/10.png", alt: "DSI Logo" },
    { id: 2, src: "/11.png", alt: "Gurtec Logo" },
    { id: 3, src: "/12.png", alt: "Muller Beltex Logo" },
    { id: 4, src: "/13.png", alt: "DCL Logo" },
    { id: 5, src: "/14.png", alt: "MLT Group Logo" },
    { id: 6, src: "/15.png", alt: "Chemulc Logo" },
    { id: 8, src: "/17.png", alt: "Gurtec Logo" },
    { id: 9, src: "/18.png", alt: "Muller Beltex Logo" },
    { id: 10, src: "/19.png", alt: "DCL Logo" },
  ];

  return (
    <div
    className="relative text-center py-12"
    style={{
        background: "linear-gradient(to right, #5d8551, #207408)", // Gradient colors
        clipPath: "ellipse(90% 100% at 50% 0%)", // Wide circle at the bottom
    }}
    >      
      <h2 className="text-white text-5xl font-bold mb-8">Our Partners</h2>
      <div className="overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="w-44 flex justify-center items-center">
              <img
                src={partner.src}
                alt={partner.alt}
                className="object-contain h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
