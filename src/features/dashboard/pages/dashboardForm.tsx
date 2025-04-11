import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import useGetDashboardDetail from "../hooks/useGetDashboardDetail";
import { useEffect, useState } from "react";
import useCreateDashboard from "../hooks/useCreateDashboard";
import useUpdateDashboard from "../hooks/useUpdateDashboard";

const DashboardForm = () => {
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    year: z.string().min(1, "Year is required"),
    color: z.string().min(1, "Color is required"),
    pantone_value: z.string().min(1, "Pantone Value is required"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      year: "",
      color: "",
      pantone_value: "",
    },
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetDashboardDetail(id!);
  const { mutateAsync: create } = useCreateDashboard();
  const { mutateAsync: updated } = useUpdateDashboard();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setTitle(id ? "Edit Item" : "Create New Item");
  }, []);

  useEffect(() => {
    if (data) {
      form.reset(data.data.data);
    }
  }, [data]);

  const onSubmit = (_: z.infer<typeof formSchema>) => {
    if (id) {
      updated(id);
    } else {
      create();
    }
  };

  const cancelHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="p-4 m-4 bg-white">
      <h2 className="text-3xl font-bold mb-7">{title}</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input type="number" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pantone_value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pantone Value</FormLabel>
                <FormControl>
                  <Input {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2 justify-end">
            <Button
              className="border border-[#0571E1] rouded text-[#0571E1] cursor-pointer"
              onClick={cancelHandler}
            >
              Cancel
            </Button>

            <Button className="border bg-[#0571E1] rouded text-white cursor-pointer">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DashboardForm;
