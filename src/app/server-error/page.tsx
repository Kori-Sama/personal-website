"use client";

import { useSearchParams } from "next/navigation";

const ServerError = () => {
  const searchParams = useSearchParams();
  const err = searchParams.get("err");

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-[2.5rem]">500 - Internal Server Error</h1>
      <p className="text-muted-foreground">{err ?? "Unknown Error😱"}</p>
    </main>
  );
};

export default ServerError;
