import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const formSchema = z.object({
    email: z.string().email().min(1, "Email Address is required").max(50),
    password: z.string().min(1, "Password is required"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutateAsync: login } = useLogin();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    login(values);
  };

  return (
    <div className="flex">
      <div className="w-3/5 bg-[url(src/assets/bg.svg)] h-screen relative flex flex-col justify-center">
        <div className="text-white ml-[9.813rem]">
          <h3 className="text-[2.5rem] font-bold">GoFinance</h3>
          <p className="text-lg font-medium">Lorem ipsum dolor sit amet</p>
          <Button className="bg-[#0575E6] rounded-[1.875rem] mt-2.5 cursor-pointer">
            Read More
          </Button>
        </div>

        <img
          src="src/assets/bg-aksen.svg"
          alt="aksen"
          className="absolute bottom-0 top-auto h-[12.5rem]"
        />
      </div>

      <div className="w-2/5 flex justify-center">
        <div className="m-auto">
          <div className="mb-10">
            <h3 className="text-[1.625rem] font-bold">Hello Again!</h3>
            <p className="text-lg">Welcome Back</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email Adress"
                        className="rounded-[1.875rem] h-[3.75rem] w-[19.188rem] border-[#EEEEEE]"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        className="rounded-[1.875rem] h-[3.75rem] w-[19.188rem] border-[#EEEEEE]"
                        type="password"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="bg-[#0575E6] rounded-[1.875rem] mt-2.5 cursor-pointer text-white h-[3.75rem] w-[19.188rem]"
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>

          <p className="mt-4 text-center opacity-70 text-sm cursor-pointer">
            Fogot Password
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
