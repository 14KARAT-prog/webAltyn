import React from "react";
import './Content.scss';
import Card from './Card';

const Content = ({userList}) => {
	return (
		<main>
			<h2>Список пользователей</h2>
			{userList && userList.map((item) => {
				return (<Card
					key = {item.id}
					id = {item.id}
					name = {item.name}
					city = {item.address.city}
					company = {item.company.name}
				/>)
			})}
			<div className={'count'}>Найдено {userList.length} пользователей</div>
		</main>
	)
}

export default Content;