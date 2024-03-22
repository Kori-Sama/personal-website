import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "../../app/login/(form)/login-form";
import RegisterForm from "../../app/login/(form)/register-form";

const LoginTable = () => {
  return (
    <Tabs
      defaultValue="login"
      className="relative w-full rounded-md border-2 bg-primary-foreground/10 px-8 pb-8 pt-4 shadow-lg md:w-[420px]"
    >
      <TabsList className="mb-16 grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
};

export default LoginTable;
