import { useMutation, useQuery } from "@tanstack/react-query";
import { getApi, postApi } from "./requests";
import { queries } from "./queries";

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

export const useFetchGameDetails = ({ query = "" }) =>
  useQuery({
    queryKey: [queries.FETCH_GAME_DETAILS, query],
    queryFn: () => getApi(`/game`),
  });
