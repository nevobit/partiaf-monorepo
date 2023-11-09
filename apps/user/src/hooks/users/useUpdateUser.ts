import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { FOLLOW_USER } from "../../graphql/mutations/follows";
import { UPDATE_USER } from "../../graphql/mutations/users";

export const useUpdateUser = (info: any) => {
    const { user } = useSelector((state: any) => state.auth);

    const [updateUserFn, { data, loading, error }] = useMutation(UPDATE_USER, {
      variables: { 
        data: info
       },
      context: {
        headers: {
          authorization: user?.token ? `Bearer ${user?.token}` : '',
        },
      },
    });

    // const { followUser } = data;

    return { isLoading: loading, error, updatedUser: data?.updateUser, updateUserFn }
}