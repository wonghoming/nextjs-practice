import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`
const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`

class About extends Component {
	render() {
		return (
			<div>
				<Header />
				<p>This is the asdwerwe page</p>
				<Wrapper>
					<Title>Hello World, this is my first sstyled component!</Title>
				</Wrapper>
			</div>
		);
	}
}

export default About;
