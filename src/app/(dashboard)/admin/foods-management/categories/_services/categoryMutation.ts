"use server";

import db from "@/lib/db";
import { executeAction } from "@/lib/executeActions";

export const deleteCategory = async (id: string) => {
  await executeAction({
    actionFn: () =>
      db.category.delete({
        where: { id },
      }),
  });
};
