import LoginTableWithImage from "@/app/login/login-table-with-img";

const LoginPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-20">
      <h1 className="cursor-default text-[40px] font-bold ">KoriのWebsite</h1>
      <LoginTableWithImage />
      <div className="h-20" />
    </main>
  );
};

export default LoginPage;
