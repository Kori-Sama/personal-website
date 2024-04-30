import { create } from "zustand";

interface UserState {
  userInfo: UserInfo;
  setUserInfo: (id: number, name: string) => void;
}

export type UserInfo = {
  id: number;
  username: string;
};

export const useUser = create<UserState>((set) => ({
  userInfo: { id: 0, username: "No Login" },
  setUserInfo: (id, name) => {
    set({ userInfo: { id, username: name } });
  },
}));
