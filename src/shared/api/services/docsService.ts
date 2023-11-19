import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface DocsResult {
  status: number | null;
}

interface DocsGetResult {
  data: any
  status: number | null;
}

export const docsPost = async (
  pasport: string,
  inn: string
): Promise<DocsResult> => {
  const loginData = { pasport, inn };

  try {
    const response = await ApiClient({
      data: loginData,
      method: "POST",
      url: "api/crap",
    });

    const { status } = response;
    if (status === 200) {
      return { status };
    } else {
      console.error(`Ошибка при входе. Статус: ${status}`);
      return { status };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { status: errorStatus };
  }
};

export const docsGet = async (): Promise<DocsGetResult> => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: "api/crap",
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка при входе. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
