import { useMutation, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";
import { IS_FOLLOW } from "../../graphql/queries/follows";

export const useIsfollowUser = (followId: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const {data, loading, error,refetch} = useQuery(IS_FOLLOW, {
      variables: { followId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, isFollow: data?.isFollowUser, refetch }
}