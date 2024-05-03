import { db } from "@/db";
import { desktopIp } from "@/db/schema";
import { eq } from "drizzle-orm";

export const GET = async () => {
  const { ip, updatedAt } = (await db.query.desktopIp.findFirst({
    columns: {
      ip: true,
      updatedAt: true,
    },
  }))!;
  return Response.json({ ip, updatedAt: updatedAt.toLocaleString("zh") });
};

export const POST = async (req: Request) => {
  const url = new URL(req.url);
  const ip = url.searchParams.get("ip");
  if (typeof ip !== "string" || !isIpv4(ip)) {
    return Response.json({ message: "Invalid IP" });
  }

  await db.update(desktopIp).set({ ip }).where(eq(desktopIp.id, 1));
  return Response.json({ message: "IP updated" });
};

const isIpv4 = (ip: string) => {
  const ipv4Regex =
    /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return ipv4Regex.test(ip);
};
