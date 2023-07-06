import {FC} from 'react'
import {RecipeItem} from '../../components/RecipeItem/RecipeItem.tsx'
import {Container} from '../../UI/Container/Container.tsx'

import styles from './index.module.scss'
import {useActions} from "../../hooks/actions.ts";
import {Header} from "../../components/Header/Header.tsx";
import {useGetRecipesQuery} from "../../store/api/api.ts";
import {CreateRecipe} from "../../components/CreateRecipe/CreateRecipe.tsx";

export const Home: FC = () => {

    const {toggleFavorites} = useActions()
    const {data: recipeData, isLoading} = useGetRecipesQuery(undefined)


    return (
        <div className={styles.homePage}>
            <Header/>
            <Container>
                {isLoading && <h2>Loading...</h2>}
                <div className={styles.recipeList}>
                    {
                        recipeData?.map(recipe => (
                            <RecipeItem key={recipe.id}
                                        onClickRecipe={() => toggleFavorites(recipe)} {...recipe} />
                        ))
                    }
                </div>
                <CreateRecipe/>
            </Container>
        </div>
    )
}

