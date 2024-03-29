import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <div className="container sm: mx-auto">

            <h1 className="text-white font-bold text-3xl md:text-4xl text-center border-b-2 pb-5">GifExpertApp</h1>

                <AddCategory
                    onNewCategory={ (value) => onAddCategory(value)}
                />

            {   
                categories.map( (category) => (

                    <GifGrid
                        key={ category } 
                        category={ category }
                    />

                ))
            }

        </div>
    );
}
 
export default GifExpertApp;