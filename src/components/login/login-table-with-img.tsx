import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import Image from "next/image";
import sideImg from "@/assets/sideImg.png";

const LoginTableWithImage = () => {
  return (
    <div className="flex rounded-md border-2 shadow-lg shadow-gray-400 dark:shadow-gray-900">
      <Tabs
        defaultValue="login"
        className="relative w-screen bg-primary-foreground/10 px-8 pb-8 pt-4 align-middle md:h-[448px] md:w-[420px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </div>
      </Tabs>
      <Image
        src={sideImg}
        alt="Image"
        className="h-auto w-0 rounded-r-md object-cover md:h-[448px] md:w-auto"
      />
    </div>
  );
};

export default LoginTableWithImage;
