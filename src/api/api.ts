import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import showNotification from "../components/Notification/Notification";

export async function GET<T>(params: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(params);
    return response.data;
  } catch (error) {
    // Handle error
    showNotification({
      type: "error",
      message: "Something went wrong, reload the page!",
    });
    throw error as Error;
  }
}
