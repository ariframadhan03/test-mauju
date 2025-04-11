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
import LeftSide from "../../../components/ui/leftSide";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const formSchema = z.object({
    fullName: z.string().min(1, "Password is required"),
    email: z.string().email().min(1, "Email Address is required").max(50),
    password: z.string().min(1, "Password is required"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  const { mutateAsync: register } = useRegister();
  const navigate = useNavigate();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    register(values);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex">
      <LeftSide />

      <div className="w-2/5 flex justify-center mt-20 md:mt-0">
        <div className="m-auto">
          <div className="mb-10">
            <h3 className="text-[1.625rem] font-bold">Hello!</h3>
            <p className="text-lg">Sign Up to Get Started</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
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
                Register
              </Button>
            </form>
          </Form>

          <p
            className="mt-4 text-center opacity-70 text-sm cursor-pointer"
            onClick={goToLogin}
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
