export default function HeaderBox({type = 'title', title, subtext, user}: HeaderBoxProps){
	return (
		<div className="header-box">
			<h1 className="header-box-title">{title}&nbsp;
			{type === 'greeting' ? 
				<span className="text-bankGradient">{user}</span>
			: null}</h1>
			<p className="header-box-subtext">{subtext}</p>
		</div>
	)
}