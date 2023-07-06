import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RecipeItem} from '../../types/types.ts'


type InitialState = {
    items: RecipeItem[]
}

const initialState: InitialState = {
    items: []
}
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, action: PayloadAction<RecipeItem>) => {
            const recipeItem = action.payload
            const isExists = state.items.some((recipe) => recipe.id === recipeItem.id)
            if (isExists) {
                state.items = state.items.filter((recipe) => {
                    return recipe.id !== recipeItem.id
                })

            } else {
                state.items.push(recipeItem)
            }
        }
    }
})

export const favoritesActions = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer