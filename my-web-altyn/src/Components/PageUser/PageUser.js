import React, {useState} from "react";
import {useParams} from "react-router-dom";
import './PageUser.scss';

const PageUser = ({userList}) => {
	const [readOnly, setReadOnly] = useState('readonly');

	const {id} = useParams();
	const user = userList.find(item => item.id === Number(id));

	const handleEdit = () => {
		if (readOnly === 'readonly') {
			setReadOnly('');
		} else {
			setReadOnly('readonly');
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const inputArr = event.target.parentElement.childNodes;
		let examination = true;
		let dataUser = {};

		inputArr.forEach(item => {
			if (item.tagName === "DIV" && item.innerText !== 'Comment') {
				if (item.lastChild.value === '') {
					item.lastChild.classList.add('error')
					examination = false;
					return examination;
				}
			}
		})
		if (!examination) {
			return;
		}
		inputArr.forEach(item => {
			if (item.tagName === 'DIV') {
				dataUser[item.lastChild.id] = item.lastChild.value;
			}
		})

		const jsonDataUser = JSON.stringify(dataUser)
		console.log(jsonDataUser);
	}

	const handleChange = (event) => {
		event.target.classList.remove('error');
	}

	return (
		<main>
			<div className={'header'}>
				<h2>Профиль пользователя</h2>
				<button onClick={() => handleEdit()}>Редактировать</button>
			</div>
			<form>
				<div className={'field'}>
					<label htmlFor={'name'}>Name</label>
					<input type={'text'} id={'name'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.name} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'username'}>User name</label>
					<input type={'text'} id={'username'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.username} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'email'}>E-mail</label>
					<input type={'text'} id={'email'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.email} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'street'}>Street</label>
					<input type={'text'} id={'street'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.address.street} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'city'}>City</label>
					<input type={'text'} id={'city'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.address.city} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'zipcode'}>Zip code</label>
					<input type={'text'} id={'zipcode'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.address.zipcode} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'phone'}>Phone</label>
					<input type={'text'} id={'phone'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.phone} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'website'}>Website</label>
					<input type={'text'} id={'website'}
						   onChange={(event) => handleChange(event)}
						   defaultValue={user.website} readOnly={readOnly} />
				</div>
				<div className={'field'}>
					<label htmlFor={'comment'}>Comment</label>
					<textarea id={'comment'} readOnly={readOnly} ></textarea>
				</div>
				<button className={readOnly} type={'submit'} onClick={(event) => handleSubmit(event)}>
					Отправить
				</button>
			</form>
		</main>
	)
}

export default PageUser;