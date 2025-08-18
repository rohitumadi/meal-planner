import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryFn } from "./categoryMutation";
import { toast } from "sonner";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending: isDeletingCategory } = useMutation(
    {
      mutationFn: deleteCategoryFn,
      onSuccess: (data) => {
        toast.success(`Category deleted`);
        queryClient.invalidateQueries({ queryKey: ["categories"] });
      },

      onError: (err: Error) => {
        console.log(err.message);
        toast.error("There was an error while deleting Category");
      },
    },
  );
  return { deleteCategory, isDeletingCategory };
};
