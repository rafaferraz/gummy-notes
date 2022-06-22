type Header = {
  [key: string]: any;
};
type Config = {
  [key: string]: any;
};

export default interface IResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Header;
  config: Config;
  request?: any;
}
