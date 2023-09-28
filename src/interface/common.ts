export type IChildrenCoponent = { children: React.ReactNode };

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export interface IResponseSuccess {
  data: any;
  meta?: IMeta;
}

export type IResponseError = {
  statusCode: number;
  message: string;
  errorMessages: IErrorMessage[];
};

export type IErrorMessage = {
  path: string | number;
  message: string;
};
