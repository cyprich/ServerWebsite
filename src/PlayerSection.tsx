import PlayerCard from "./PlayerCard.tsx";

const PlayerSection = () => {
	return (
		<>
			<h3 className={"pb-4"}>Sme traja skibidiózni hráči</h3>
			<div className={"flex gap-8"}>
				<PlayerCard name={"YungCypo"} imagePath={""}/>
				<PlayerCard name={"Adushkaaa"} imagePath={""}/>
				<PlayerCard name={"Pacholicek2810"} imagePath={""}/>
			</div>
		</>
	);
};

export default PlayerSection;