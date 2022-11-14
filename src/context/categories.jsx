import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase.js'

export const CategoryContext = createContext({
    categoriesMap: {},
})

export const CategoryProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            
            setCategoriesMap(categoryMap)
        }
        getCategoryMap()
    }, [])

    const value = { categoriesMap }
    return (
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}