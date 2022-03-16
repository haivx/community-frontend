import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";
import qs from "query-string";
import { CONFIG_APP } from "@/constants";

const instance: AxiosRequestConfig = {
  baseURL: CONFIG_APP.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  paramsSerializer(params) {
    return qs.stringify(params);
  },
};

export const noAuthInstace: AxiosInstance = axios.create(instance);
const authInstace = axios.create(instance);

authInstace.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorResponse = (error || {}).response || {};
    if (errorResponse.status === 403) {
      window.location.href = "/forbidden";
    }

    return Promise.reject(error);
  }
);

export const postAuth = (
  url: string,
  data?: object,
  params?: object,
  headers?: AxiosRequestHeaders
): Promise<AxiosResponse<any>> => {
  return authInstace.request({
    url,
    method: "POST",
    data,
    params,
    headers,
  });
};

export const getAuth = (
  url: string,
  params?: object,
  headers?: AxiosRequestHeaders
): Promise<AxiosResponse<any>> => {
  return authInstace.request({
    url,
    method: "GET",
    params,
    headers,
  });
};

export const putAuth = (
  url: string,
  data?: object,
  params?: object,
  headers?: AxiosRequestHeaders
): Promise<AxiosResponse<any>> => {
  return authInstace.request({
    url,
    method: "PUT",
    params,
    data,
    headers,
  });
};

export const deleteAuth = (
  url: string,
  params?: object,
  headers?: AxiosRequestHeaders
): Promise<AxiosResponse<any>> => {
  return authInstace.request({
    url,
    method: "DELETE",
    params,
    headers,
  });
};

export default {
  authInstace,
  noAuthInstace,
  postAuth,
  getAuth,
  putAuth,
  deleteAuth,
};
