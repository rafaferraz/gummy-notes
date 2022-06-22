import IResponse from './i.response';

export default interface IHttpClient {
  readonly baseResourceUrl: string;
  post<T = unknown, R = IResponse<T>>(url: string, data: unknown, config?: unknown): Promise<R>;
  get<T = unknown, R = IResponse<T>>(url: string, config?: unknown): Promise<R>;
  put<T = unknown, R = IResponse<T>>(url: string, data: unknown, config?: unknown): Promise<R>;
  patch<T = unknown, R = IResponse<T>>(url: string, data: unknown, config?: unknown): Promise<R>;
  delete<T = unknown, R = IResponse<T>>(url: string, config?: unknown): Promise<R>;
}
