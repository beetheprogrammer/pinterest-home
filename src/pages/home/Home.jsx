import React from "react";
import { HomeContainer } from "./Home.styled";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";

const Home = () => {
	return (
		<HomeContainer>
			<>
				<Header />
				<Body />
			</>
			<Footer />
		</HomeContainer>
	);
};

export default Home;
