import { useState } from "react";
import axios, { AxiosResponse } from "axios";

import Background from "./components/Background";
import Display from "./components/Display";
import Input from "./components/Input";
import Map from "./components/Map";

import { IP } from "../types";
import useFetchIP from "./hooks/useFetchIP";
import { isDomainOrIpAddress } from "./config/utils";

const App = () => {
  const [query, setQuery] = useState("");

  const { data, loading, setData } = useFetchIP<IP>(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_IPIFY_API_KEY
    }`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: AxiosResponse = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_IPIFY_API_KEY
      }&${isDomainOrIpAddress(query)}=${query}&domain=${query}`
    );

    if (response.statusText !== "OK") {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    setData(response.data);
  };

  return (
    <main>
      <section>
        <div className="relative">
          <Background />
          <div className="absolute top-8 left-[50%] translate-x-[-50%] w-full px-4 flex flex-col items-center z-50">
            <h1 className="text-white text-2xl md:text-3xl mb-7">
              IP Address Tracker
            </h1>
            <Input
              query={query}
              setQuery={setQuery}
              handleSubmit={handleSubmit}
            />
            <Display data={data} loading={loading} />
          </div>
        </div>

        <div>
          <Map data={data} />
        </div>
      </section>
    </main>
  );
};

export default App;
