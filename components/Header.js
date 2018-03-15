import Link from "next/link";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Nav = styled.a`
  font-size: 1em;
	color: ${props => props.red ? "red" : "black"};
	text-decoration: underline;
	&:hover {
		color: green;
		cursor: pointer;
	};
	@media (max-width: 700px) {
		color: white;
	}
`;
const NavBar = styled.div`
	border: 1px solid blue;
	color: black;
	padding: 10px;
	width: 200px;
	display: flex;
	justify-content: space-around;
	animation: ${rotate360} 5s linear infinite;
	@media (max-width: 700px) {
		background-color: blue;
	}
`;

const Index = () => (
		<NavBar>
			<Link href="/">
				<Nav red>Home</Nav>
			</Link>
			<Link href="/about">
				<Nav>About</Nav>
			</Link>
		</NavBar>
);

export default Index;
