import React, { useEffect, useState } from "react";
import {
  AnimatedHeading,
	BodyContainer,
	Dot,
	DotsContainer,
	HeadingsContainer,
	StyledAnimatedIcon,
} from "./Body.styled";
import { StyledText } from "../utils/Text.styled";
import { HEADINGS } from "../utils/texts";
import Tiles from "../tiles/Tiles";
import { AnimatePresence } from "framer-motion";

const Body = () => {
	const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
		const id = setInterval(
			() =>
				setCurrentHeadingIndex((currentIndex) =>
					currentIndex + 1 < 4 ? currentIndex + 1 : 0
				),
			4000
		);

		return () => {
			clearInterval(id);
		};
	}, [currentHeadingIndex]);

	return (
		<BodyContainer>
			<HeadingsContainer>
				<StyledText fontSize="xLarge">Get your next</StyledText>
				<AnimatePresence>
						{HEADINGS.map(
							(heading, index) =>
									heading.index === currentHeadingIndex && (
									<AnimatedHeading
										initial={{ y: "50%", opacity: 0, scale: 0.5 }}
										animate={{ y: 0, opacity: 1, scale: 1 }}
										exit={{
											y: "-50%",
											opacity: 0,
											transition: { duration: 1, ease: "easeInOut" },
										}}
										transition={{ duration: 1, ease: "easeInOut" }}
										key={index}
									>
										<StyledText fontSize="xLarge" color={heading.color}>
											{heading.name}
										</StyledText>
									</AnimatedHeading>
								)
						)}
				</AnimatePresence>
				<DotsContainer>
					{HEADINGS.map(({ index: headingIndex, color }, index) => (
						<Dot
							bgColor={headingIndex === currentHeadingIndex ? color : null}
							onClick={() => setCurrentHeadingIndex(index)}
						/>
					))}
				</DotsContainer>
			</HeadingsContainer>
			<Tiles currentHeadingIndex={currentHeadingIndex} />
			<StyledAnimatedIcon
				size={50}
				bgColor={HEADINGS[currentHeadingIndex].color}
			/>
		</BodyContainer>
	);
};

export default Body;
