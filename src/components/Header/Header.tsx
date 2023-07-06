import {FC} from "react";
import {Container} from "../../UI/Container/Container.tsx";
import styles from './index.module.scss'
import {useAppSelector} from "../../hooks/redux.ts";
import {AiFillHeart} from "react-icons/ai";

export const Header: FC = () => {
    const recipeCount = useAppSelector(store => store.favorites.items.length)

    return (
        <Container>
            <span className={styles.recipeCount}><AiFillHeart/> {recipeCount} шт.</span>
        </Container>
    );
};

