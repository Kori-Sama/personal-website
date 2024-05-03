import { NextApiRequest } from "next";

export const POST = (req: NextApiRequest) => {
  const ip = req.query.ip;
  if (typeof ip !== "string") {
    return Response.json({ message: "Invalid IP" });
  }
  if (!isIpv4(ip)) {
    return Response.json({ message: "Invalid IP" });
  }
};

const isIpv4 = (ip: string) => {
  const ipv4Regex =
    /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return ipv4Regex.test(ip);
};
