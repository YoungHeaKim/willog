export interface PickerResponse {
  value: number;
  label: string;
}

export type ValueOf<T> = T[keyof T];
