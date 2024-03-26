import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FieldWrapper } from "./form-utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessageOccupation,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { handleLogin } from "./actions";
import SubmitButton from "@/components/button/submit-button";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(6, {
    message: "At least 6 characters long",
  }),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form
        action={async () => {
          const isValidate = await form.trigger();
          if (!isValidate) return;
          const values = form.getValues();
          const message = await handleLogin(values);
          if (message.type === "ok") {
            router.push("/");
          } else if (message.type === "bad") {
            console.error(message.message);
            form.setError("username", {
              type: "manual",
              message: message.message,
            });
          } else {
            console.error(message.message);
          }
        }}
        className="flex flex-col items-center space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FieldWrapper icon="username">
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
              </FieldWrapper>
              <FormMessageOccupation />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FieldWrapper icon="password">
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </FieldWrapper>
              <FormMessageOccupation />
            </FormItem>
          )}
        />

        <SubmitButton />
      </form>
    </Form>
  );
};
export default LoginForm;