import { useMutation } from "@apollo/client";
import { ACCEPT_REQUEST, CANCEL_REQUEST } from "../../graphql/mutations";
import { useSelector } from "react-redux";

export const useCancelRequest = (recieverId?: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const [cancelRequestFn, { data, loading, error }] = useMutation(CANCEL_REQUEST, {
      variables: { recieverId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });


    // const { followUser } = data;

    return { isLoading: loading, error, accept: data?.cancelRequest, cancelRequestFn }
}