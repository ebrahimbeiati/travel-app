import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
interface CampProps {
  backgroundImage: string;
  title: string;
  description: string;
  subtitle: string;
  peopleJoined: string;
}
const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`} style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-start justify-between p-6 lg:px-20 lg:py-10 h-full w-full bg-black/50 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/map.jpeg" alt="map" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-white">{subtitle}</h3>
            <h1 className="text-white">{title}</h1>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt="people"
                width={30}
                height={30}
                className="rounded-full inline-block h-10 w-10 "
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section className="2xl:max-container  relative  flex flex-col py-10 lg:py-20 xl:mb-20">
          <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
            
       <CampSite
          backgroundImage="/camping1.jpeg" 
          title="Camp 1"
          description="Description for Camp 1."
          subtitle="Camp Area 1"
          peopleJoined="10,000+"
        />
        <CampSite
          backgroundImage="/camping2.jpeg"
          title="Camp 2"
          description="Description for Camp 2."
          subtitle="Camp Area 2"
          peopleJoined="15,000+"
        />
        </div>

      <div className="flexEnd mt-9 px-6 lg:-m-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h3 className="text-white bold-20 md:bold-32 ">Join our community</h3>
          <p className="text-white regular-14 xl:regular-16 mt-5 ">
            and get exclusive offers and discounts on all our products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
