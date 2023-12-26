import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 max-container padding-container relative w-full overflow-hidden rounded-3xl">
        <Image
          src="/camp.jpeg"
          alt="map"
          width={50}
          height={50}
          className=" rounded-full mb4 mt5"
        />
        <h3 className="text-white bold-20 md:bold-32 ">Travel with us</h3>
        <p className="text-white regular-14 xl:regular-16 mt-5 ">
          and get exclusive offers and discounts on all our products.
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to the best place
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the Camp Area application you will no longer get lost and
            get lost again, because we already support offline maps when there
            is no internet connection in the field.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full rounded-3xl">
        <Image
          src="/guide.jpeg"
          alt="guide"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-6xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="rounded-full"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-ful flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">50 min</p>
              </div>
              <p className="bold-20 mt-2">Bath </p>
            </div>
            <div className="flex w-ful flex-col">
            <p className="regular-16 text-gray-20">Start track</p>
            <h4 className="bold-20 mt-2 whitespace-nowrap ">london</h4>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide
