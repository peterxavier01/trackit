import { IP } from "../../types";

interface DisplayProps {
  data: IP | null;
  loading: boolean;
}

const Display: React.FC<DisplayProps> = ({ data, loading }) => {
  if (!data) {
    return (
      <section className="bg-white px-8 h-40 drop-shadow rounded-xl w-full md:max-w-6xl" />
    );
  }

  return (
    <section className="bg-white px-8 h-full drop-shadow rounded-xl w-full md:max-w-6xl">
      <div className="flex flex-col text-center md:text-left md:flex-row items-stretch gap-8 lg:gap-24 py-10 md:divide-x">
        <div className="md:pl-4 lg:pl-8 first:md:pl-0 w-full">
          <p className="text-dark-gray text-xs select-none tracking-wider uppercase font-medium mb-2">
            ip address
          </p>
          <p className="text-very-dark-gray font-medium text-xl sm:text-2xl">
            {loading ? "..." : data.ip}
          </p>
        </div>

        <div className="md:pl-4 lg:pl-8 first:md:pl-0 w-full">
          <p className="text-dark-gray text-xs select-none tracking-wider uppercase font-medium mb-2">
            location
          </p>
          <p className="text-very-dark-gray font-medium text-xl sm:text-2xl">
            {data.location.city}, {data.location.country} {data.as.asn}
          </p>
        </div>

        <div className="md:pl-4 lg:pl-8 first:md:pl-0 w-full">
          <p className="text-dark-gray text-xs select-none tracking-wider uppercase font-medium mb-2">
            timezone
          </p>
          <p className="text-very-dark-gray font-medium text-xl sm:text-2xl">
            UTC {loading ? "..." : data.location.timezone}
          </p>
        </div>

        <div className="md:pl-4 lg:pl-8 first:md:pl-0 w-full">
          <p className="text-dark-gray text-xs select-none tracking-wider uppercase font-medium mb-2">
            isp
          </p>
          <p className="text-very-dark-gray font-medium text-xl sm:text-2xl">
            {loading ? "..." : data.isp}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Display;
