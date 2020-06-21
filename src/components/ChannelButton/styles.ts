import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	padding: 8px 4px;
	border-radius: 4px;

	background-color: transparent;

	transition: background-color 0.2s;

	> div {
		display: flex;
		align-items: center;
	}

	> div span {
		font-size: 16px;
		margin-left: 4px;
		color: var(--senary);
	}

	div + div {
		display: none;
	}

	&.active, &:hover {
		background-color: var(--quinary);

		> div span {
			color: var(--white);
		}

		div + div {
		display: flex;
		}
	}


`;

export const HashtagIcon = styled(Hashtag)`
	width: 16px;
	height: 16px;
	color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
	width: 16px;
	height: 16px;
	color: var(--symbol);
	cursor: pointer;

	transition: color 0.2s;

	&:hover {
		color: var(--white);
	}
`;

export const SettingsIcon = styled(Settings)`
	margin-left: 4px;

	width: 16px;
	height: 16px;
	color: var(--symbol);
	cursor: pointer;

	transition: color 0.2s;

	&:hover {
		color: var(--white);
	}
`;

