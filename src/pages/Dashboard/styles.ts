import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;

	grid-template-columns: 72px 224px auto 224px;
	grid-template-rows: 48px auto 54px;

	grid-template-areas:
		'SL SN CI CI'
		'SL CL CD UL'
		'SL UI CD UL'
		/* SL - Server List */
		/* SN - Server Name */
		/* CI - Channel Info */
		/* CL - Channel List */
		/* CD - Channel Data */
		/* UL - User List */
		/* UI - User Info */
	;

	height: 100vh;
`;
