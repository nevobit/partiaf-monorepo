import { useMutation, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";
import { IS_FOLLOW } from "../../graphql/queries/follows";
import { IS_FRIEND, IS_REQUEST } from "../../graphql/queries/friend-requests";

export const useIsFriend = (reciverId: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const {data, loading, error,refetch} = useQuery(IS_FRIEND, {
      variables: { reciverId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    console.log(data)
    // const { followUser } = data;

    return { isLoading: loading, error, isFriend: data?.isFriend, refetch }
}