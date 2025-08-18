import { getErrorMessage } from "@/lib/getErrorMessage";
import { isRedirectError } from "next/dist/client/components/redirect-error";

type Options<T> = {
  actionFn: () => Promise<T>;
};
const executeAction = async <T>({ actionFn }: Options<T>) => {
  try {
    await actionFn();
  } catch (error) {
    //whenever an error occurs, on next js server it causes a full redirection if
    //we dont handle it properly
    if (isRedirectError(error)) {
      throw error;
    }
    throw new Error(getErrorMessage(error));
  }
};

export { executeAction };
