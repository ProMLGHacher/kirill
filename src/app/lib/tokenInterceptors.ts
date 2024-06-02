import store from "@/app/store/store";
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
            return Promise.reject(error);
        }
    );

    $api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const refToken = store.getState().tokensSlice.refreshToken

                    // Вызов API для обновления access и refresh токенов
                    const response = await $api.post<TokensBody>('/api/token', { value: refToken });
                    const { acsessToken, refreshToken } = response.data;

                    store.dispatch(setTokensData({ acsessToken, refreshToken }));

                    originalRequest.headers.Authorization = `${acsessToken}`;
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
                        alert('Ошибка обновления токенов')
                    }
                }
            }

            return Promise.reject(error);
        }
    );
}