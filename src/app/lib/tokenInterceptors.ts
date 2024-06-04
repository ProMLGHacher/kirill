import store from "../store/store";
import { TokensBody, setTokensData } from "@/entities/tokens";
import { logOutThunk } from "@/features/logOut/model/logOut";
import { $api } from "@/shared/api/api";
import { isAxiosError } from "axios";

export const configureTokenInterceptors = () => {
    $api.interceptors.request.use(
        config => {
            if (!store.getState().tokensSlice.isAuthorized) {
                return config;
            }
            const token = store.getState().tokensSlice.accessToken;
            if (token) {
                config.headers.Authorization = `${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(new Error(error));
        }
    );

    $api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            const refToken = store.getState().tokensSlice.refreshToken
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                if (!refToken) {
                    store.dispatch(logOutThunk())
                    throw new Error('no refresh token')
                }

                try {

                    // Вызов API для обновления access и refresh токенов
                    const response = await $api.patch<TokensBody>('/api/restore-token', { value: refToken });
                    const { accessToken, refreshToken } = response.data;

                    store.dispatch(setTokensData({ accessToken, refreshToken }));

                    originalRequest.headers.Authorization = `${accessToken}`;
                    return $api(originalRequest);
                } catch (error) {
                    if (isAxiosError(error)) {
                        if (error.response?.status === 404) {
                            store.dispatch(logOutThunk())
                        }
                        if (error.response?.status === 400) {
                            alert('Нет доступа')
                        }
                    }
                    else {
                        store.dispatch(logOutThunk())
                    }
                }
            }

            return Promise.reject(error);
        }
    );
}