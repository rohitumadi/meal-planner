import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./categoryQueries";

export const useCategoryQueries = () => {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return {
    isLoading,
    categories,
    error,
  };
};
