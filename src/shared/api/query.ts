import { type BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constantsMap } from '../model';

export const baseQuery = fetchBaseQuery({
  baseUrl: constantsMap.shared.config.apiUrl,
}) as BaseQueryFn;
