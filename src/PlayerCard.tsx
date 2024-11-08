import * as React from "react";

interface PlayerCardProps {
	name: string;
	imagePath: string;
}


const PlayerCard: React.FC<PlayerCardProps> = ({name, imagePath}) => {
	return (
		<div className={"p-8 border rounded-2xl"}>
			<p>{name}</p>
			<img src={imagePath} alt=""/>
		</div>
	);
};

export default PlayerCard;