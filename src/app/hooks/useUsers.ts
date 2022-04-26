import React from "react";
import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endPoint = "https://graphqlzero.almansi.me/api";
const useUsers = () => {
  return useQuery("users", async () => {
    const res = await request(
      endPoint,
      gql`
        query {
          users {
            data {
              id
              name
              username
              email
              phone
              website
              address {
                street
              }
            }
          }
        }
      `
    );
    return res;
  });
};

export default useUsers;
