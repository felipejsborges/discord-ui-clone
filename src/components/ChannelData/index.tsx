import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ServerName: React.FC = () => {
	const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	useEffect(() => {
		const div = messagesRef.current;

		if (div) {
			div.scrollTop = div.scrollHeight;
		}
	}, [messagesRef])

	return (
		<Container>
			<Messages ref={messagesRef}>
				{Array.from(Array(15).keys()).map((n) => (
					<ChannelMessage
						key={n}
						author="userName"
						date="12/12/2020"
						content="User message content."
					/>
				))}

				<ChannelMessage
					author="botName"
					date="11/11/2020"
					content={
						<>
							<Mention>@userName</Mention>, bot message content.
						</>
					}
					hasMention
					isBot
				/>
			</Messages>

			<InputWrapper>
				<Input type="text" placeholder="Conversar em #channel-name" />
				<InputIcon />
			</InputWrapper>
		</Container>
	);
};

export default ServerName;
