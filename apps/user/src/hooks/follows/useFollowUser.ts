import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";

export const useFollowUser = (followId: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const [followUserFn, { data, loading, error }] = useMutation(FOLLOW_USER, {
      variables: { followId },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, follow: data?.followUser, followUserFn }
}