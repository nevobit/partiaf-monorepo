import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { SEND_REQUEST } from "../../graphql/mutations";

export const useSendRequest = (reciverId: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const [sendRequestFn, { data, loading, error }] = useMutation(SEND_REQUEST, {
      variables: { reciverId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, request: data?.sendFriendRequest, sendRequestFn }
}