import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface HistoryResult {
  data: {
    who: string[];
    amount: number;
    type: "outgoing" | "incoming" | "refill";
  } | null;
  status: number | null;
}

export const getHistory = async (): Promise<HistoryResult> => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: "api/history",
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
