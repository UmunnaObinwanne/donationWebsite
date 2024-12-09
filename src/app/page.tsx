import ImageTextSection from "@/components/ui/ImageTextDivs";
import WhatWeDoSection from "./../components/Frontpage/WhatWeDoSection";
import HeroComponent from "./../components/ui/HeroComponent";
import PostList from "@/components/BlogPosts/Blog";

export default function HomePage() {
  return (
    <div className="flex flex-col px-4">
      <HeroComponent
        backgroundImage="/images/demolished-city-russian-s-war-ukraine.jpg"
        backgroundAlt="Palestine and Lebanon Emergency"
        mainTitle={{
          line1: "PALESTINE AND",
          line2: "LEBANON",
          line3: "EMERGENCY",
        }}
        mainTitleMobile="PALESTINE AND LEBANON EMERGENCY"
        subTitle={{
          line1: "PLEASE SUPPORT OUR",
          line2: "URGENT RESPONSE",
        }}
        ctaButton={{
          text: "DONATE NOW",
          link: "/donate",
        }}
        colorScheme={{
          mainTitleBg: "bg-white",
          mainTitleText: "text-black",
          subTitleBg: "bg-red-600",
          subTitleText: "text-white",
          buttonBg: "bg-white",
          buttonText: "text-red-500",
          buttonHoverBg: "hover:bg-black",
          buttonHoverText: "hover:text-white",
        }}
      />
      <WhatWeDoSection />
      <div className="flex flex-col gap-5 md:gap-0">
        <ImageTextSection
          backgroundImage="/images/demolished-city-russian-s-war-ukraine.jpg"
          title={
            <>
              <span className="hidden md:inline">
                TAKE ACTION: THE UK
                <br />
                NOT BE AN ALLY
                <br />
                TO ATROCITIES
              </span>
              <span className="md:hidden">TAKE ACTION: THE UK NOT BE AN ALLY TO ATROCITIES</span>
            </>
          }
          description="The ceasefire in Lebanon offers a glimmer of hope, but Palestinians in Gaza are still facing extermination. Now is the time to amplify our efforts to protect Palestinians. They cannot be forgotten."
          buttonText="Learn More"
          backgroundColor="bg-custom-blue"
          textColor="text-white"
        />
        <ImageTextSection
          backgroundImage="/images/demolished-city-russian-s-war-ukraine.jpg"
          title={
            <>
              <span className="hidden md:inline">
                HOW IS MAP
                <br />
                RESPONDING TO THE
                <br />
                EMERGENCY IN GAZA
                <br />
                AND LEBANON?
              </span>
              <span className="md:hidden">
                HOW IS MAP RESPONDING TO THE EMERGENCY IN GAZA AND LEBANON?
              </span>
            </>
          }
          description="MAP's teams are responding to growing health and humanitarian needs in Gaza, Lebanon and the West Bank. Read more about how your support is helping us save lives.."
          buttonText="Learn More"
          backgroundColor="bg-black"
          textColor="text-white"
        />
        <ImageTextSection
          backgroundImage="/images/demolished-city-russian-s-war-ukraine.jpg"
          title={
            <>
              <span className="hidden md:inline">
                TAKE ACTION: THE UK
                <br />
                NOT BE AN ALLY
                <br />
                TO ATROCITIES
              </span>
              <div className="md:hidden">TAKE ACTION: THE UK NOT BE AN ALLY TO ATROCITIES LOL</div>
            </>
          }
          description="The ceasefire in Lebanon offers a glimmer of hope, but Palestinians in Gaza are still facing extermination. Now is the time to amplify our efforts to protect Palestinians. They cannot be forgotten."
          buttonText="Learn More"
          backgroundColor="bg-custom-blue"
          textColor="text-white"
          />
          
        </div>

      <PostList />
    </div>
  );
}
