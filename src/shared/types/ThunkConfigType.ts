import { RootState } from "@/app/store/store";

export type ThunkConfig<T = string> = { state: RootState, rejectValue: T }