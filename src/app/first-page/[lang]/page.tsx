import HomePage from "@/pages/HomePage";

export default function FirstPage({params}: {
  params: {
    lang: string | undefined
  }
}) {
  return (
    <HomePage lang={params.lang}/>
  );
}
