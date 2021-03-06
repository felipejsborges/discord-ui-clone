import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
	grid-area: CD;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: var(--primary);
`;

export const Messages = styled.div`
	padding: 16px 0;

	display: flex;
	flex-direction: column;

	max-height: calc(100vh - 48px - 64px);
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

export const InputWrapper = styled.div`
	width: 100%;
	padding: 0 16px;
`;

export const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 8px 0 48px;
	border-radius: 8px;
	color: var(--white);
	background-color: var(--chat-input);
	position: relative;

	&::placeholder {
		color: var(--gray);
	}

	~ svg {
		position: relative;
		top: -50%;
		left: 8px;
		transition: 180ms ease-in-out;
	}
`;

export const InputIcon = styled(AlternateEmail)`
	width: 24px;
	height: 24px;
	color: var(--gray);
`;
