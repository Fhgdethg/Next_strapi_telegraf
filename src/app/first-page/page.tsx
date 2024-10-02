import HomePage from "@/pages/HomePage";

export default function Home({params}: {
  params: {
    lang: string | undefined
  }
}) {
  return (
    <HomePage lang={params.lang}/>
  );
}
