import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import useGetDashboard from "../hooks/useGetDashboard";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog";
import useDeleteDashboard from "../hooks/useDeleteDashboard";

const Dashboard = () => {
  const { data } = useGetDashboard();
  const [list, setList] = useState<IDashboardData[]>([]);
  const [masterList, setMasterList] = useState<IDashboardData[]>([]);
  const navigate = useNavigate();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const { mutateAsync: deleteAction } = useDeleteDashboard();

  useEffect(() => {
    if (data) {
      setList(data.data.data);
      setMasterList(data.data.data);
    }
  }, [data]);

  const editHandler = (id: number) => {
    navigate(`${id}`);
  };

  const deleteHandler = () => {
    deleteAction(selectedId);
  };

  const openConfirmationModal = (id: number) => {
    setIsConfirmationModalOpen(true);
    setSelectedId(id);
  };

  const createHandler = () => {
    navigate("form");
  };

  const filterByNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key: string = e.currentTarget.value;
    const filteredData = masterList.filter((master) =>
      master.name.toLowerCase().includes(key.toLowerCase())
    );

    setList(filteredData);
  };

  return (
    <>
      <AlertDialog
        open={isConfirmationModalOpen}
        onOpenChange={setIsConfirmationModalOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              dashboard data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deleteHandler}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="pt-[4rem] px-[1rem] md:pt-[7rem] md:px-[4rem] lg:pt-[10rem] lg:px-[7rem] bg-white">
        <div className="flex justify-between">
          <Input
            type="search"
            className="w-1/2"
            placeholder="Search by name..."
            onChange={filterByNameHandler}
          />

          <Button
            className="border bg-[#0571E1] rouded text-white cursor-pointer mb-4"
            onClick={createHandler}
          >
            New Item
          </Button>
        </div>

        <Table className="bg-white">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Pantone Value</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((value: IDashboardData) => (
              <TableRow key={value.id}>
                <TableCell className="font-medium">{value.name}</TableCell>
                <TableCell>{value.color}</TableCell>
                <TableCell>{value.pantone_value}</TableCell>
                <TableCell>{value.year}</TableCell>
                <TableCell className="flex justify-end gap-1">
                  <img
                    src="/src/assets/edit.svg"
                    alt="edit"
                    className="cursor-pointer"
                    onClick={() => editHandler(value.id)}
                  />
                  <img
                    src="/src/assets/delete.svg"
                    alt="delete"
                    className="cursor-pointer"
                    onClick={() => openConfirmationModal(value.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
