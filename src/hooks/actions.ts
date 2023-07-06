import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {favoritesActions} from '../store/favorites/favorites.slice.ts'
import {useMemo} from "react";

const actions = {
    ...favoritesActions
}
export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}