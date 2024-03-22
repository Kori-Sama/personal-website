import LoginTableWithImage from "@/app/login/login-table-with-img";

const LoginPage = () => {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center">
      <h1 className="absolute top-[17%] cursor-default text-[40px] font-bold lg:top-[13%]">
        KoriのWebsite
      </h1>
      <LoginTableWithImage />
    </main>
  );
};

export default LoginPage;
