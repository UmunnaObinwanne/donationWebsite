import Container from "./Container";
interface ImageTextSectionProps {
  backgroundImage: string;
  title: any;
  description: string;
  buttonText: string;
  buttonLink?: string;
  backgroundColor?: string;
  textColor?: string;
}
const ImageTextSection = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink = "#",
  backgroundColor = "bg-black",
  textColor = "text-white",
}: ImageTextSectionProps) => {
  return (
    <>
      <Container>
        {/* Desktop version */}
        <div className="relative my-10 hidden h-[500px] max-w-6xl md:block">
          <div className="absolute inset-0">
            <img src={backgroundImage} alt="Background" className="h-full w-full object-cover" />
          </div>

          <div className="relative z-10 h-full">
            <div className={`${backgroundColor} ${textColor} clip-path-polygon h-full w-1/2 p-8`}>
              <div className="flex h-full flex-col justify-center p-10 text-justify">
                <h2 className="mb-4 text-3xl font-bold">{title}</h2>
                <p className="mb-8 text-lg">{description}</p>

                <a
                  href={buttonLink}
                  className={`inline-block w-fit border-2 border-white px-8 py-3 font-bold transition-colors hover:bg-white hover:text-black`}
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Mobile version */}
      <div className="relative h-[400px] max-w-6xl md:hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="Background" className="h-full w-full object-cover" />
        </div>

        {/* Overlapping text block */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div
            className={`${backgroundColor} ${textColor} mobile-arrow flex min-h-[120px] items-center px-7 py-10`}
          >
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>
      </div>
      <style>{`
        .clip-path-polygon {
          clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
        }
        .mobile-arrow {
          clip-path: polygon(
            0 20px,                /* start point */
            20px 20px,             /* move right to arrow start */
            40px 0,                /* arrow peak */
            60px 20px,             /* back to baseline */
            100% 20px,             /* continue to right edge */
            100% 100%,             /* bottom right */
            0 100%                 /* bottom left */
          );
        }
      `}</style>
    </>
  );
};
export default ImageTextSection;
