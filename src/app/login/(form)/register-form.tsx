import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessageOccupation,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldWrapper } from "./form-utils";
import { useRouter } from "next/navigation";
import { handleRegister } from "./actions";
import SubmitButton from "@/components/button/submit-button";
import { useUser } from "@/store/user";
import { useState } from "react";

const formSchema = z
  .object({
    username: z.string().min(1, {
      message: "Username is required",
    }),
    password: z.string().min(6, {
      message: "At least 6 characters long",
    }),
    confirm: z.string().min(6, {
      message: "At least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords must match",
    path: ["confirm"],
  });

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirm: "",
    },
  });
  const setUser = useUser((state) => state.setUserInfo);
  const [pending, setPending] = useState(false);
  return (
    <Form {...form}>
      <form
        onSubmit={() => {
          setPending(true);
        }}
        action={async () => {
          const isValidate = await form.trigger();
          if (!isValidate) return;
          const values = form.getValues();
          const message = await handleRegister(values);
          if ("id" in message) {
            setUser(message.id, message.username);
            router.push("/");
          } else {
            form.setError("username", {
              type: "manual",
              message: message.message,
            });
          }
          setPending(false);
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
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FieldWrapper icon="confirm">
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    {...field}
                  />
                </FormControl>
              </FieldWrapper>
              <FormMessageOccupation />
            </FormItem>
          )}
        />
        <SubmitButton pending={pending} />
      </form>
    </Form>
  );
};
export default RegisterForm;
