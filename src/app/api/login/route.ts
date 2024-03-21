import { Bad, Ok } from "@/lib/api/response";

/**
 * Login API
 */
export const PATCH = async (req: Request) => {
  const { username, password } = await req.json();
  return Ok({ message: "success" });
};

/**
 * Register API
 */
export const POST = async (req: Request) => {
  const { username, password } = await req.json();
  return Ok({ message: "success" });
};
