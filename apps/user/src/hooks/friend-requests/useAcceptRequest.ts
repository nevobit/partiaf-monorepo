import { useMutation } from "@apollo/client";
import { ACCEPT_REQUEST } from "../../graphql/mutations";
import { useSelector } from "react-redux";

export const useAcceptRequest = (id?: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const [acceptRequestFn, { data, loading, error }] = useMutation(ACCEPT_REQUEST, {
      variables: { id },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });


    // const { followUser } = data;

    return { isLoading: loading, error, accept: data?.acceptRequest, acceptRequestFn }
}