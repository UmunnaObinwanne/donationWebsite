import React from "react";

interface HeroProps {
  backgroundImage: any;
  backgroundAlt: string;
  mainTitle: {
    line1: string;
    line2: string;
    line3: string;
  };
  mainTitleMobile?: string;
  subTitle?: {
    line1: string;
    line2: string;
  };
  ctaButton?: {
    text: string;
    onClick?: () => void;
    link?: string;
  };
  textAlignment?: "left" | "center";
  colorScheme?: {
    mainTitleBg?: string;
    mainTitleText?: string;
    subTitleBg?: string;
    subTitleText?: string;
    buttonBg?: string;
    buttonText?: string;
    buttonHoverBg?: string;
    buttonHoverText?: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  backgroundAlt,
  mainTitle,
  mainTitleMobile,
  subTitle,
  ctaButton,
  textAlignment = "left",
  colorScheme = {
    mainTitleBg: "bg-white",
    mainTitleText: "text-black",
    subTitleBg: "bg-red-600",
    subTitleText: "text-white",
    buttonBg: "bg-white",
    buttonText: "text-red-500",
    buttonHoverBg: "hover:bg-black",
    buttonHoverText: "hover:text-white",
  },
}) => {
  const alignmentClasses = textAlignment === "center" ? "md:px-0 text-center" : "md:pl-80";

  return (
    <div className="relative h-screen max-h-[700px] w-full">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Text Container */}
      <div className="absolute inset-0 flex flex-col justify-center gap-10">
        <div className={`w-full px-6 ${alignmentClasses}`}>
          <h1 className="inline-block">
            <span
              className={`${colorScheme.mainTitleBg} ${colorScheme.mainTitleText} box-decoration-break-clone inline items-start p-6 px-1 py-1 text-3xl font-bold md:text-6xl md:leading-[1.2]`}
            >
              <span className="md:hidden">{mainTitleMobile}</span>
              <span className="hidden md:inline">
                {mainTitle.line1}
                <br />
                {mainTitle.line2}
                <br />
                {mainTitle.line3}
              </span>
            </span>
          </h1>
        </div>

        {subTitle && (
          <div className={`w-full px-6 ${alignmentClasses}`}>
            <h1
              className={`${colorScheme.subTitleBg} ${colorScheme.subTitleText} box-decoration-break-clone inline px-2 py-1 text-2xl font-bold leading-[1.2] md:text-4xl`}
            >
              {subTitle.line1}
              <br />
              {subTitle.line2}
            </h1>
          </div>
        )}

        {ctaButton && (
          <div className={`w-full px-6 ${alignmentClasses}`}>
            {ctaButton.link ? (
              <a
                href={ctaButton.link}
                className={`${colorScheme.buttonBg} ${colorScheme.buttonHoverBg} ${colorScheme.buttonText} ${colorScheme.buttonHoverText} inline-block px-8 py-3 text-xl font-bold transition-colors`}
              >
                {ctaButton.text}
              </a>
            ) : (
              <button
                onClick={ctaButton.onClick}
                className={`${colorScheme.buttonBg} ${colorScheme.buttonHoverBg} ${colorScheme.buttonText} ${colorScheme.buttonHoverText} px-8 py-3 text-xl font-bold transition-colors`}
              >
                {ctaButton.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
