import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface RegisterResult {
  token: string | null;
  status: number | null;
}

export const registerUser = async (
  login: string,
  password: string
): Promise<RegisterResult> => {
  const loginData = { login, password };

  try {
    const response = await ApiClient({
      data: loginData,
      method: "POST",
      url: "api/register",
    });

    const { data, status } = response;
    if (status === 200) {
      const token = data;

      localStorage.setItem("jwtToken", token);
      return { token, status };
    } else {
      console.error(`Ошибка при регистрации. Статус: ${status}`);
      return { token: null, status };
    }
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { token: null, status: errorStatus };
  }
};
