import axios from "axios";

export default async function kDownloadToVar(URL: string) {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    return error;
  }
}
