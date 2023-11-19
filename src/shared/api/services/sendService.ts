import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface SendResult {
  status: number | null;
}

export const sendCript = async (
  to: string,
  amount: number
): Promise<SendResult> => {
  const loginData = { to, amount };

  try {
    const response = await ApiClient({
      data: loginData,
      method: "POST",
      url: "api/send",
    });

    const { status } = response;
    if (status === 200) {
      return { status };
    } else {
      console.error(`Ошибка при переводе валюты. Статус: ${status}`);
      return { status };
    }
  } catch (error) {
    console.error("Ошибка при переводе валюты:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { status: errorStatus };
  }
};
