const TOKEN = 'token';

export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = (): void => {
  localStorage.getItem(TOKEN);
};

export const clearToken = (): void => {
  localStorage.removeItem(TOKEN);
};
