import {api} from "./api.ts";

export const recipeApi = api.injectEndpoints({
    endpoints: build => ({
        createRecipe: build.mutation({
            query: (recipe) => ({
                body: recipe,
                url: 'recipes',
                method: 'POST',
                params: {
                    _order: 'desc',
                    _sort: 'id'
                }
            }),
            invalidatesTags: () => [{
                type: 'Recipe'
            }]
        })
    })
})

export const {useCreateRecipeMutation} = recipeApi