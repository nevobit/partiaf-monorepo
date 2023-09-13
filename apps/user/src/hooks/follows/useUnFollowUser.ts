import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER, UNFOLLOW_USER } from "../../graphql/mutations/follows";

export const useUnFollowUser = (followId: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const [unfollowUserFn, { data, loading, error }] = useMutation(UNFOLLOW_USER, {
      variables: { followId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, unfollow: data?.followUser, unfollowUserFn }
}