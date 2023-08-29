import { Result } from "@partiaf/entities";

export interface State<T> {
  result: Result<T>;
  loading: boolean;
  error: string | undefined;
  success: boolean;
}