import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface LoginResult {
  data: {
    login: string;
    pub_key: string;
  } | null;
  status: number | null;
}

export const getUser = async (): Promise<LoginResult> => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: "api/user_data",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка при получении данных. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
