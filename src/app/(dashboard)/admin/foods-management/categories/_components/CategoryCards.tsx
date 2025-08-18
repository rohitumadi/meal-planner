"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCategoryQueries } from "../_services/useCategoryQueries";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { useDeleteCategory } from "../_services/useCategoryMutation";

type Props = {};
const CategoryCards = (props: Props) => {
  const { isLoading, categories, error } = useCategoryQueries();
  const { deleteCategory, isDeletingCategory } = useDeleteCategory();
  function handleDeleteCategory(id: string) {
    deleteCategory(id);
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories?.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item?.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button className="cursor-pointer" variant="ghost" size={"icon"}>
              <Edit />
            </Button>
            <Button
              className="cursor-pointer"
              variant="ghost"
              size={"icon"}
              onClick={() => handleDeleteCategory(item.id)}
            >
              <Trash />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default CategoryCards;
