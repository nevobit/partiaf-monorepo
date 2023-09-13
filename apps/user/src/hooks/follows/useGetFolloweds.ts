import { useMutation, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";
import { GET_FOLLOWEDS, GET_FOLLOWERS, IS_FOLLOW } from "../../graphql/queries/follows";

export const useGetFolloweds = (uuid: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const {data, loading, error,refetch, stopPolling, startPolling} = useQuery(GET_FOLLOWEDS, {
      variables: { uuid },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, stopPolling, startPolling, followeds: data?.getFolloweds, refetch }
}