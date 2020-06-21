import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton'

const ServerList: React.FC = () => {
	return (
		<Container>
		<ServerButton isHome />
		<Separator />

		<ServerButton />
		<ServerButton hasNotifications />
		<ServerButton mentions={3} />

		{Array.from(Array(15).keys()).map((n) => (
			<ServerButton
				key={n}
			/>
		))}
	</Container>
	);
};

export default ServerList;
