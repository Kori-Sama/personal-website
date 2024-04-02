"use client";

import { Button } from "@/components/ui/button";
import { useAlert } from "@/hook/useAlert";

const AboutPage = () => {
  const [setSuccess, AlertSuccess] = useAlert({
    message: "Login Success",
  });
  const [setError, AlertError] = useAlert({
    message: "Login Fail",
    type: "error",
  });

  return (
    <main className="flex gap-4 flex-col justify-center items-center h-screen">
      {/* <h1 className="text-[40px]">About</h1> */}
      <Button onClick={() => setSuccess(true)}>Success</Button>
      <Button onClick={() => setError(true)} variant="destructive">
        Error
      </Button>
      {AlertSuccess}
      {AlertError}
    </main>
  );
};

export default AboutPage;
