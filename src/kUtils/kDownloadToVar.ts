import axios from "axios";

export default async function kDownloadToVar(URL: string) {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error);
    reportError(error);
    return "ERR: " + error;
  }
}
