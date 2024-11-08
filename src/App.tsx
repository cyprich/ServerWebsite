import Header from "./Header.tsx";
import PlayerSection from "./PlayerSection.tsx";

function App() {
	return (
		<>
			<Header/>
			<div className={"bg-color-500 p-16 h-screen flex flex-col items-center"}>
				<h2 className={"font-bold pb-8"}>Vitaj na našom úžasnom Minecraft Serveríku!</h2>
				<PlayerSection/>
			</div>
		</>
	)
}

export default App
