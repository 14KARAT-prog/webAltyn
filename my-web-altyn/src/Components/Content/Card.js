import React from "react";
import style from './Card.module.scss';
import {Link} from "react-router-dom";

const Card = ({id,name = '', city = '', company = ''}) => {
	return (
		<div className={style.card}>
			<div className={style.attribute}><span>ФИО:</span> {name}</div>
			<div className={style.attribute}><span>город:</span> {city}</div>
			<div className={style.attribute}>
				<div><span>компания:</span> {company}</div>
				<Link to={`/${id}/${name}`}>Подробнее</Link>
			</div>
		</div>
	)
}

export default Card;