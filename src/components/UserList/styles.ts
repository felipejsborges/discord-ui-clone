import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
	grid-area: UL;
	display: flex;
	flex-direction: column;

	padding: 4px 16px;
	background-color: var(--secondary);

	max-height: 100%;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--tertiary);
		border-radius: 4px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--secondary);
	}
`;

export const Role = styled.div`
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 500;
	color: var(--gray);

	margin-top: 16px;
`;

export const User = styled.div`
	margin-top: 4px;
	padding: 4px;

	display: flex;
	align-items: center;

	cursor: pointer;

	border-radius: 4px;
	background: transparent;

	transition: background 0.2s;
	&:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	> strong {
		margin-left: 8px;
		font-weight: 500;
		font-size: 14px;
		color: var(--white);
		opacity: 0.7;

		/* creating 'User name too b...' */
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	> span {
		margin-left: 8px;
		background-color: var(--discord);
		color: var(--white);
		border-radius: 4px;
		padding: 4px;

		text-transform: uppercase;
		font-weight: bold;
		font-size: 12px;
	}
`;

export const Avatar = styled.div`
	flex-shrink: 0;

	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: var(--primary);

	&.bot {
		background-color: var(--mention-detail)
	}
`;

