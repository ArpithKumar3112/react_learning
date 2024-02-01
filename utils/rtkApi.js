import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi=createApi({
    reducerPath:"rtkApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.942643&lng=77.582947&restaurantId="}),
    endpoints:(builder)=>({
        getIcon:builder.query({
            query:(id)=>`${id}`,
        }),
    }),
});

export const {useGetIconQuery}=rtkApi;