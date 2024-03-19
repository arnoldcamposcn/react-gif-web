
import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    const onAddCategory = (newCategory) => {
        const filteredCategories = categories.filter(category => category !== newCategory);
        setCategories([newCategory, ...filteredCategories]);
    };

    const onRemoveCategory = (categoryToRemove) => {
        setCategories(categories.filter(category => category !== categoryToRemove));
    };

    const handleCategoryClick = (category) => {
        const filteredCategories = categories.filter(cat => cat !== category);
        setCategories([category, ...filteredCategories]);
    };

    return (
        <>
            <h1>¡Bienvenido a Gifs MkDev!</h1>
            <AddCategory onNewCategory={onAddCategory} />
            <div className="category-container">
                {categories.map((category) => (
                    <div key={category} className="category-item">
                        <button onClick={() => onRemoveCategory(category)}>X</button>
                        <a href="#" onClick={() => handleCategoryClick(category)}>{category}</a>
                    </div>
                ))}
            </div>
            <div className="gif-container">
                <GifGrid category={categories[0]} />
            </div>
            <footer className="footer">
            Desarrollado por <a href="https://www.linkedin.com/in/arnold-campos-1652a4286/" target="_blank" rel="noopener noreferrer">Arnold Campos</a>
            </footer>
        </>
    );
};

