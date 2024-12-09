import Container from "../../components/ui/Container";

const WhatWeDoSection = () => {
  return (
    <div className="relative -mt-1 flex min-h-[400px] w-full items-center bg-custom-gray">
      {" "}
      {/* Added min-height and flex centering */}
      <Container>
        <div className="p-6">
          <div className="max-w-2xl space-y-6 font-bold md:text-3xl">
            <p className="text-xl leading-relaxed text-gray-700">
              Medical Aid for Palestinians (MAP) works for the health and dignity of Palestinians
              living under occupation and as refugees.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              We provide immediate medical aid to those in great need, while also developing local
              capacity and skills to ensure the long-term development of the Palestinian healthcare
              system.
            </p>
          </div>

          <div>
            <button className="mt-4 border-2 bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-black md:text-xl">
              Learn more about what we do
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDoSection;
