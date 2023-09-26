import { useMutation, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";
import { GET_FOLLOWERS, IS_FOLLOW } from "../../graphql/queries/follows";
import { GET_FRIENDS } from "../../graphql/queries/friend-requests";

export const useGetFriends = (uuid?: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const {data, loading, error, refetch} = useQuery(GET_FRIENDS, {
      variables: { uuid },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, friends: data?.getFriends, refetch }
}