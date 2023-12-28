import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />
      <div className="flex flex-col relative z-20 xl:w-1/2 gap-6">
        <Image
          src="/camp.jpeg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        <h1 className="bold-52 lg:bold-88">Dream Camp Area</h1>

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          The best place for your next adventure. We can help you on an
          adventure around the world in just one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2 ">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.jpeg"
                  alt="star"
                  width={20}
                  height={20}
                  className="w-5"
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-gray-30">
            100%
            <span className="regular-16 lg:regular-20 ml-1 text-gray-30">
              Trusted
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button type="button" title="Get Started" variant="btn_green" full />
          <Button
            type="button"
            title="Learn More"
            variant="btn_dark_green"
            full
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 w-[260px] flex flex-col gap-8 rounded-3xl bg-gray-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20 ">Location</p>
              <Image
                src="/location.jpeg"
                alt="location"
                width={20}
                height={20}
                className="w-5 rounded-full"
              />
            </div>
            <p className="bold-16 block text-white">Bath</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20 ">Distance</p>
              <p className="bold-16 block text-white ">100mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20 ">Elevation</p>
              <p className="bold-16 block text-white ">3km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
