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

// import Image from "next/image";
// import Button from "./Button";

// const Hero = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8 py-10 lg:py-20 pb-32">
//       <div className="w-full lg:w-1/2 relative">
//         <div className="w-full h-full absolute top-0 left-0 bg-hero-map bg-cover bg-no-repeat rounded-lg" />

//         <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//           <Image
//             src="/camp.jpeg"
//             alt="camp"
//             width={50}
//             height={50}
//             className="w-10 lg:w-20 mb-4 lg:mb-8"
//           />

//           <h1 className="text-4xl lg:text-7xl font-bold mb-6 lg:mb-10">
//             Dream Camp Area
//           </h1>

//           <p className="text-base lg:text-lg mb-6 lg:mb-10 text-gray-300 max-w-lg">
//             The best place for your next adventure. We can help you on an
//             adventure around the world in just one app.
//           </p>

//           <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
//             <div className="flex items-center gap-2">
//               {[...Array(5)].map((_, index) => (
//                 <Image
//                   key={index}
//                   src="/star.jpeg"
//                   alt="star"
//                   width={20}
//                   height={20}
//                   className="w-5"
//                 />
//               ))}
//             </div>

//             <p className="font-bold text-base lg:text-lg text-gray-300">
//               100%
//               <span className="ml-1 text-gray-300">Trusted</span>
//             </p>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8">
//             <Button
//               type="button"
//               title="Get Started"
//               variant="btn_green"
//               full
//             />
//             <Button
//               type="button"
//               title="Learn More"
//               variant="btn_dark_green"
//               full
//             />
//           </div>
//         </div>
//       </div>

//       <div className="w-full lg:w-1/2 flex items-center justify-center">
//         <div className="w-3/4">
//           <div className="relative">
//             <Image
//               src="/camp.jpeg"
//               alt="camp"
//               width={260}
//               height={260}
//               className="rounded-3xl"
//             />

//             <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-75 text-white p-4 rounded-lg">
//               <div className="flex items-center mb-2">
//                 <Image
//                   src="/location.jpeg"
//                   alt="location"
//                   width={20}
//                   height={20}
//                   className="w-5 rounded-full"
//                 />
//                 <p className="font-bold ml-2">Location</p>
//               </div>
//               <p className="text-white">Bath</p>

//               <div className="flex justify-between mt-4">
//                 <div className="flex flex-col">
//                   <p className="font-bold">Distance</p>
//                   <p className="text-white">100mi</p>
//                 </div>
//                 <div className="flex flex-col">
//                   <p className="font-bold">Elevation</p>
//                   <p className="text-white">3km</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
