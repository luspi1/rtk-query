import {FC, MouseEventHandler} from 'react'

import styles from './index.module.scss'
import {useAppSelector} from "../../hooks/redux.ts";

type RecipeItemProps = {
    title: string,
    description: string,
    img: string,
    id: number,
    onClickRecipe?: MouseEventHandler<HTMLButtonElement>
}
export const RecipeItem: FC<RecipeItemProps> = ({title, description, img, onClickRecipe, id}) => {

    const recipes = useAppSelector(store => store.favorites.items)

    const isExistRecipe = recipes.some(recipe => recipe.id === id)

    return (
        <div className={styles.recipeItem}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onClickRecipe}>
                {
                    isExistRecipe ? 'Remove from ' : 'Add to '
                }favorites
            </button>
        </div>
    )
}

