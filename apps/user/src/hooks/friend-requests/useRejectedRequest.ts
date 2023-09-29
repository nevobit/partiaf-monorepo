import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { REJECTED_REQUEST, SEND_REQUEST } from "../../graphql/mutations";

export const useRejectedRequest = (recieverId?: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const [rejectedRequestFn, { data, loading, error }] = useMutation(REJECTED_REQUEST, {
      variables: { recieverId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, request: data?.rejectRequest, rejectedRequestFn }
}