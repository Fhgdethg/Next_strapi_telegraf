import {fetcher} from "@/endpoints/strapiApi";
import React from "react";

interface IHomePageProps {
  lang: string | undefined;
}

const HomePage: any = async ({lang}: any) => {
  const testData = await fetcher(`/api/test3s?locale=${lang || 'en'}`);

  return (
    <main>
      {testData.data !== null && testData.data.map((elem: any) => (
        <div key={elem.id}>
          <p>
            {elem.title}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={elem.image} alt={elem.image} />
        </div>
      ))}
    </main>
  );
}

export default HomePage;
