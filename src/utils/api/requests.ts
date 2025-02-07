import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MAIN_URL,
});
export const getApi = async (url: string, config?: any) => {
  try {
    const response = await axiosInstance.get(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      ...config,
    });
    const data = response.data;

    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ERR_BAD_REQUEST") throw error.response?.data.message;
      throw error.message;
    }
    throw error;
  }
};

const getFormData = (payload: any): FormData => {
  let data = new FormData();

  for (const key in payload) {
    data.append(key, payload[key]);
  }
  return data;
};

export const postApi = async (
  url: string,
  payload?: any,
  config?: any,
  isFormData: boolean = true
) => {
  let formData;

  if (isFormData) {
    formData = getFormData(payload);
  } else {
    formData = payload;
  }

  let headers;

  if (isFormData) {
    headers = { "Content-Type": "application/x-www-form-urlencoded" };
  } else {
    headers = { "Content-Type": "application/json" };
  }

  try {
    const response = await axiosInstance.post(url, formData, {
      headers,
      ...config,
    });

    console.log("Response Headers:", response.headers); // Debug response headers
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.headers); // Debug error headers
      throw error;
    }
    throw error;
  }
};
