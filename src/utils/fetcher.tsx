import axios from "axios";
import Toast from "./Toast";

export type Args = {
  url: string;
  method?: "get" | "post" | "patch" | "delete" | string;
  data?: any;
  successToast?: string;
  errorToast?: string; //mesage when error
  abortRequest?: boolean;
  noErrorToast?: boolean;
};

let controller = new AbortController();

let lastFetch: number;
export const fetcher = async ({
  url,
  method = "get",
  data = null,
  successToast = "", // text to display on success
  errorToast,
  noErrorToast,
  abortRequest = false,
}: Args) => {
  const devUrl = "http://localhost:5000/api";
  // axios.defaults.baseURL = devUrl;
  axios.defaults.baseURL = process.env.api || devUrl;
  if (abortRequest) {
    const now = Date.now();

    if (now - lastFetch < 1000) {
      controller.abort("multiple requests");
      controller = new AbortController();
    }
    lastFetch = Date.now();
  }
  try {
    const res = await axios({
      url: url,
      method,
      data,
      signal: controller.signal,
      withCredentials: true,
    });
    if (successToast) {
      Toast(successToast, "success");
    }

    return res.data;
  } catch (e: any) {
    if (e.message === "Network Error") {
      Toast("حدث خطا بالاتصال في الشبكه", "error");
      return;
    }
    if (noErrorToast) return null;
    if (e.message === "canceled") return null;
    if (e.response?.data?.name === "custom") {
      Toast(e.response.data.message, "error");
    } else {
      Toast(errorToast ?? "حدث خطا برجاء المحاولة لاحقا", "error");
    }
    // if (abortRequest) return;

    return null;
  }
};
