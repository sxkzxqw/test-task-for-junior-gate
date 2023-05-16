'use client'
import React, { FC, useState } from 'react';
import styles from './Card.module.scss'
import { TData } from '@/app/page';

type TCard = {
    card: TData
}

const Card: FC<TCard> = ({ card }) => {
    const [activeColor, setActiveColor] = useState<string>('#EE4444');
    const handleSubmit = (activeColor: string, id: number, name: string) => {
        console.log({
            name: name,
            id: id,
            color: activeColor,
        })
    }
    return (
        <li className={styles.card}>
            <img src={card.images[activeColor]} alt={card.name} className={styles.card__image} />
            <div className={styles.card__info}>
                {card.price
                    ? <p className={styles.card__price}>{`$ ${card.price}`}</p>
                    : <p className={styles.card__price}>{`$ Free`}</p>
                }
                <p className={styles.card__name}>{card.name}</p>
                <p className={styles.card__description}>{card.description}</p>
            </div>
            <form className={styles.card__form}>
                <p className={styles.card__form_title}>Choose your colour</p>
                <fieldset className={styles.card__form_inputs}>
                    {card.colors.map((color) => {
                        return (
                            <button type='button'
                                className={color === activeColor ? `${styles.input__button} ${styles.input__button_type_active}` : `${styles.input__button}`}
                                style={{ background: `${color}` }}
                                key={color}
                                onClick={() => {
                                    setActiveColor(color);
                                }}
                            ></button>
                        )
                    })}
                </fieldset>
                <div className={styles.buttons}>
                    <button type="button" className={styles.button} onClick={() => {
                        handleSubmit(activeColor, card.id, card.name);
                    }}>
                        Add to cart
                    </button>
                    <button type="submit" className={`${styles.button} ${styles.button_type_submit}`} onClick={(e) => { e.preventDefault(); handleSubmit(activeColor, card.id, card.name) }}>
                        Buy now
                    </button>
                </div>
            </form>
            <p className={styles.reviews}>Read reviews</p>
        </li>
    );
};

export default Card;