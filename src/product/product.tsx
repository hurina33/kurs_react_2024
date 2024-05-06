import React, {FC} from 'react';
import styles from './image.module.css';
export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string []
}

const Product:FC<IProductProps> =({id,title, description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} ) => {
    return (

        <div className={styles.textBox}>
            <h2> id - {id} tittle - {title} brand - {brand} </h2>
            <p> {description}</p>
            <h3> price - {price} discount - {discountPercentage}</h3>
            <h4> rating -  {rating} stock - {stock}  </h4>
            <h4>category - {category} </h4>
            <h5>thumbnail - {thumbnail}</h5>

            <div className={styles.imageBox}>
                {
                images.map((image,index) => <img className={styles.image} key={index} src={image} alt={title}/>)
            }
            </div>

        </div>
    );
};

export default Product;