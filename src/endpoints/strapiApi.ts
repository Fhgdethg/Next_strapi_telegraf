export async function fetcher(url: string, options: RequestInit | undefined = {}) {
  let response: any;
  const fullURL = `${process.env.STRAPI_URL}${url}`

  console.log(fullURL)

  if (!options)
    response = await fetch(fullURL);
  else response = await fetch(fullURL, options);


  return await response.json();
}