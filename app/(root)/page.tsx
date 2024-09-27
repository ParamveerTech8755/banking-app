import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import RightSidebar from "@/components/RightSidebar"
export default function HomePage(){

	const loggedIn = {
		firstName: "Paramveer",
		lastName: "Singh",
		email: "paramveerpuru@gmail.com"
	};

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox 
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and manage your account & transactions efficiently."
					/>
					<TotalBalanceBox 
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar 
			user={loggedIn}
			transactions={[]}
			banks={[{name: "HDFC", currentBalance: 600}, {name: "Kotak", curentBalance: 500}]}
			/>
		</section>
	);
}