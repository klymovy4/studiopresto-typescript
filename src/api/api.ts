import axios from "../axios/axios";
import { AxiosResponse } from "axios";

export async function GET<T>(params: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(params);
    return response.data;
  } catch (error) {
    // Handle error
    throw error as Error;
  }
}
