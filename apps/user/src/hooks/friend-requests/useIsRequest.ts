import { useMutation, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";
import { IS_FOLLOW } from "../../graphql/queries/follows";
import { IS_REQUEST } from "../../graphql/queries/friend-requests";

export const useIsRequest = (reciverId: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const {data, loading, error,refetch} = useQuery(IS_REQUEST, {
      variables: { reciverId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, isRequest: data?.isRequest, refetch }
}