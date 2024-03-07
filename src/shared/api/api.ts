import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './query';
import type { PostProps } from '@/entities/post';

export const postsApi = createApi({
  tagTypes: ['users'],
  reducerPath: 'postsApi',
  baseQuery: baseQuery,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getPostsList: builder.query<PostProps[], { limit: number }>({
      query: ({ limit }) => `/posts?_limit=${limit}`,
      providesTags: ['users'],
      transformErrorResponse: (response: { data: PostProps[] }) => {
        return response.data;
      },
    }),
    getPostById: builder.query<PostProps, number>({
      query: (id) => `/posts/${id}`,
      providesTags: ['users'],
      transformErrorResponse: (response: { data: PostProps }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetPostsListQuery, useGetPostByIdQuery } = postsApi;
