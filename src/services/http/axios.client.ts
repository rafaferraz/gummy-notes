import axios, { AxiosInstance } from 'axios';
import IHttpClient from './i.client';
import IResponse from './i.response';

export default class AxiosHttpClient implements IHttpClient {
  _instance: AxiosInstance;
  constructor(readonly baseResourceUrl: string) {
    this._instance = axios.create({
      baseURL: baseResourceUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  post<T = unknown, R = IResponse<T>>(url: string, data: any, config?: any): Promise<R> {
    return this._instance.post<T, R, unknown>(url, data, config);
  }
  get<T = unknown, R = IResponse<T>>(url: string, config?: any): Promise<R> {
    return this._instance.get<T, R, unknown>(url, config);
  }
  put<T = unknown, R = IResponse<T>>(url: string, data: any, config?: any): Promise<R> {
    return this._instance.put<T, R, unknown>(url, data, config);
  }
  patch<T = unknown, R = IResponse<T>>(url: string, data: any, config?: any): Promise<R> {
    return this._instance.patch<T, R, unknown>(url, data, config);
  }
  delete<T = unknown, R = IResponse<T>>(url: string, config?: any): Promise<R> {
    return this._instance.delete<T, R, unknown>(url, config);
  }
}
