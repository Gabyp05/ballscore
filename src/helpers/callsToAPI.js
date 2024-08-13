export const fetchData = async (path, method = "GET") => {
  try {
    const URL = import.meta.env.VITE_URL_API;
    const VERSION = import.meta.env.VITE_API_VERSION;
    const KEY = import.meta.env.VITE_API_KEY;
    const HOST = import.meta.env.VITE_API_HOST;

    const headers = {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": HOST,
    };

    const options = { method, headers };

    const response = await fetch(`${URL}/${VERSION}/${path}`, options);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    let data = await response.json();
  
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
