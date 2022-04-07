export type ITheme = {
  darkGrey: string;
  grey: string;
  white: string;
  milk: string;
  boxShadow: string;
  primary: string;
  secondary: string;
  tertiary: string;
  quinary: string;
  warning: string;
  success: string;
  danger: string;
};
type IConfig = {
  theme: any;
  baseUrl: string;
};

const theme: ITheme = {
  primary: "#f2911b",
  secondary: "#414770",
  tertiary: "#4d2d52",
  quinary: "#61988e",
  warning: "#efae37",
  success: "#64df27",
  danger: "#e24b4b",
  darkGrey: "#d8d8d8",
  grey: "#dfdfdf",
  white: "#fff",
  milk: "#f0f0f0",
  boxShadow: "0 2px 13px -4px #bbb",
};

const config: IConfig = { baseUrl: "http://192.168.0.177:80/api", theme };
export default config;
