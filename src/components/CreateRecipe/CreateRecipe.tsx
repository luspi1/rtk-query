import {FC, FormEvent, useState} from "react";

import styles from './index.module.scss'
import {useCreateRecipeMutation} from "../../store/api/recipe.api.ts";


const defaultRecipe = {
    title: '',
    img: '',
    description: ''
}

export const CreateRecipe: FC = () => {
    const [recipe, setRecipe] = useState(defaultRecipe)

    const [createRecipe] = useCreateRecipeMutation()


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecipe(recipe)
            .then(() => {
                setRecipe(defaultRecipe)
            })
    }

    return (
        <div className={styles.createRecipe}>
            <h2>Create your recipe!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Recipe name' name='title'
                       value={recipe.title}
                       onChange={e => setRecipe({
                           ...recipe,
                           title: e.target.value
                       })}/>
                <input type="text" placeholder='Recipe image' name='title'
                       value={recipe.img}
                       onChange={e => setRecipe({
                           ...recipe,
                           img: e.target.value
                       })}/>
                <textarea placeholder='Recipe description' name='description'
                          value={recipe.description}
                          onChange={e => setRecipe({
                              ...recipe,
                              description: e.target.value
                          })}/>
                <button type='submit'>Create</button>
            </form>
        </div>

    );
};

