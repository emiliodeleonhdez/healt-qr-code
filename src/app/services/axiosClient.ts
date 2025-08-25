import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

class AxiosClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => config,
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error)
    );
  }

  private normalize(url: string) {
    if (/^https?:\/\//i.test(url)) return url;
    return url.startsWith('/') ? url : `/${url}`;
  }

  public get<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(this.normalize(url), config);
  }

  public post<T>(url: string, data: unknown, config?: AxiosRequestConfig) {
    return this.axiosInstance.post<T>(this.normalize(url), data, config);
  }
}

export default AxiosClient;
