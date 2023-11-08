import { useQuery } from "@apollo/client";
import { GET_STORE_BY_ID } from "../../graphql/queries/users";
import { useSelector } from "react-redux";

export const useStoreById = (store: string) => {
    const { user } = useSelector((state: any) => state.auth);

    const { data, loading, error } = useQuery(GET_STORE_BY_ID, {
        variables: { getStoreByIdId: store },
        context: {
          headers: {
            authorization: user.token ? `Bearer ${user.token}` : "",
          },
        },
      });

      return { store: data.getStoreById, isLoading: loading, error };
}