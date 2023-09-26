import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";
import { DELETE_USER, UPDATE_USER } from "../../graphql/mutations/users";

export const useDeleteUser = () => {
    const { user } = useSelector((state: any) => state.auth);

    const [deleteUserFn, { data, loading, error }] = useMutation(DELETE_USER, {
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, deletedUser: data?.deleteUser, deleteUserFn }
}