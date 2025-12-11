import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useToken = create(
  persist(
    (set) => ({
      accessToken: "",
      refreshToken: "",

      setAccessToken: (token) =>
        set((state) => ({ ...state, accessToken: token })),

      setRefreshToken: (token) =>
        set((state) => ({ ...state, refreshToken: token })),

      clearTokens: () =>
        set(() => ({
          accessToken: "",
          refreshToken: "",
        })),
    }),
    {
      name: "token-storage",
    }
  )
);