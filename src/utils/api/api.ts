import { useMutation, useQuery } from "@tanstack/react-query";
import { queries } from "./queries";
import { postApi } from "./requests";

export const loginFormMutation = () =>
  useMutation({
    mutationFn: (payload) => {
      return postApi("/accounts/login/", payload);
    },
    onSuccess: (data) => {
      // toast.success("Subscription Success", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      console.log("Successful");
    },
    onError: (error: any) => {
      console.log("error message", error);
    },
  });

export const registerFormMutation = () => {
  useMutation({
    mutationFn: (payload) => {
      return postApi("/accounts/register/", payload);
    },
    onSuccess: (data) => {
      console.log("successful");
    },
    onError: (error: any) => {
      console.log("Error message", error);
    },
  });
};
