import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RecipeItem} from "../../types/types.ts";

const RECIPE_URL = 'http://localhost:3001'
export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: RECIPE_URL
    }),
    endpoints: build => ({
        getRecipes: build.query<RecipeItem[], undefined>({
            query: () => ({
                url: 'recipes',
                params: {
                    _order: 'desc',
                    _sort: 'id'
                }
            }),
            providesTags: () => [{
                type: 'Recipe'
            }]
        }),
    })
})

export const {useGetRecipesQuery} = api
