import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../utils/baseQuery'

interface IRegisterUserPayload{
    name: string;
    email:string;
    phone_number: string;
    password: string;
    user_city: string;
}
interface IRegisterUserResponse {
    status: number;
    user_id: number;
}


interface ILoginUserResponse extends IRegisterUserResponse{ }
interface ILoginUserPayload{
    email: string;
    password: string;
}

interface IGetUserResponse{
    status: number;
    message: {
        mail: string;
        phone_number: string;
        user_id: number;
        name: string;
        reg_date:string;
        city: string;
    };
}


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserPayload, IRegisterUserResponse>(
        {
      query:(payload)=>({
        url: "registration",
        method: "POST",
        body: payload,
      }),
    }
    ),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
        query:(payload)=>({
          url: "login",
          method: "POST",
          body: payload,
        }),
    }),
     getUser: builder.query<IGetUserResponse, string>({
        query:(userid)=> `/user?user_id=${userid}`,
    }),
  }),
});


export const { useRegisterUserMutation, useLoginUserMutation, useGetUserQuery } = authApi;



