import { create } from "zustand";

export type CommentType = {
  content: string;
  createdAt: Date;
  id: number;
  user: {
    id: number;
    name: string;
  };
};

interface CommentState {
  comments: CommentType[];
  setComments: (comments: CommentType[]) => void;
  addComment: (comment: CommentType) => void;
}

export const useComments = create<CommentState>()((set) => ({
  comments: [],
  setComments: (comments) => {
    set({ comments });
  },
  addComment: (comment) => {
    set((state) => ({ comments: [comment, ...state.comments] }));
  },
}));
