import { status } from "../constants";

export const Ok = (data: any) => {
  return new Response(JSON.stringify(data), {
    status: status.OK,
  });
};

export const Bad = (message: string) => {
  return new Response(JSON.stringify({ message }), {
    status: status.BAD_REQUEST,
  });
};

export const Error = (message: string) => {
  return new Response(JSON.stringify({ message }), {
    status: status.SERVER_ERROR,
  });
};
