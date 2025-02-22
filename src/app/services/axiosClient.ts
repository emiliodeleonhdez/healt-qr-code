import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

class AxiosClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      //   timeout: timeout,
    });

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosInstance.get<T>(url, config);
    } catch (error) {
      throw error;
    }
  }

  public async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosInstance.post<T>(url, data, config);
    } catch (error) {
      throw error;
    }
  }

  // Otros métodos (PUT, DELETE, etc.) se pueden agregar de forma similar
}

export default AxiosClient;
