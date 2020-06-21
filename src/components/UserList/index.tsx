import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
	nickname: string;
	isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
	return (
		<User>
			<Avatar className={isBot ? 'bot' : ''} />
			<strong>{nickname}</strong>
			{isBot && <span>Bot</span>}
		</User>
	)
}

const UserList: React.FC = () => {
	return (
		<Container>
			<Role>Online - X</Role>
			{Array.from(Array(4).keys()).map((n) => (
				<UserRow nickname="Carlos João"
					key={n}
				/>
			))}

			<Role>Offline - Y</Role>
			<UserRow nickname="Carlos Marcos" isBot />
			{Array.from(Array(15).keys()).map((n) => (
				<UserRow nickname="Carlos João Filho Junior"
					key={n}
				/>
			))}
		</Container>
	);
};

export default UserList;
