import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface LoginResult {
  token: string | null;
  status: number | null;
}

export const loginUser = async (
  login: string,
  password: string
): Promise<LoginResult> => {
  const loginData = { login, password };

  try {
    const response = await ApiClient({
      data: loginData,
      method: "POST",
      url: "api/login",
    });

    const { data, status } = response;
    if (status === 200) {
      const token = data;

      localStorage.setItem("jwtToken", token);
      return { token, status };
    } else {
      console.error(`Ошибка при входе. Статус: ${status}`);
      return { token: null, status };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { token: null, status: errorStatus };
  }
};
