interface FooterLinks{
	content: string
	link?: URL
}
interface SectionLinks{
	group: string
	subsets: string[]
	collecttions: FooterLinks[]
}

/* function Section_links ({group, subsets}: SectionLinks) {
	return(
		<div className="flex flex-col mb-8">
			<span className="mb-3 font-extrabold uppercase">{group}</span>
			{subsets.map(sub => 
				<div>
					<a className="">{sub}</a>
				</div>
			)}
		</div>
	)
} */

function footer() {
    return(
    <div className="footer pl-8 pt-16 bg-purpleBg text-purpleTxt flex gap-x-28 gap-y-8 justify-center flex-row md:flex-col print:hidden">
		<div className="signature">
			<img src="/logo-search-grid-1x.png"/>
			2024
		</div>
		<div className="grid grid-cols-[repeat(4,200px)] md:grid-cols-2">
			{/* move Frameworks from the footer into the emphasized content */}
			<div className="section_links">
				<span className="section_links_title"> FRAMEWORK </span>
				<div><a className="section_links_link"> Electron </a></div>
				<div><a className="section_links_link"> Golang </a></div>
				<div><a className="section_links_link"> Python </a></div>
				<div><a className="section_links_link"> Kotlin </a></div>
				<div><a className="section_links_link"> Flutter </a></div>
			</div>
			<div className="section_links">
				<span className="section_links_title"> EDGING </span>
				<div><a className="section_links_link"> Fintech</a></div>
				<div><a className="section_links_link"> Smart Contract </a></div>
				<div><a className="section_links_link"> AI Chatbot </a></div>
				<div><a className="section_links_link"> Crypto Trading </a></div>
				<div><a className="section_links_link"> CAM service </a></div>
			</div>
			<div className="section_links">
				<span className="section_links_title"> REALISTIC </span>
				<div><a className="section_links_link"> Order </a></div>
				<div><a className="section_links_link"> Communication </a></div>
				<div><a className="section_links_link"> Media Process </a></div>
				<div><a className="section_links_link"> Transaction </a></div>
				<div><a className="section_links_link"> Storage </a></div>
			</div>
			<div className="section_links ">
				<span className="section_links_title"> SOCIAL</span>
				<div><a className="section_links_link"> Github </a></div>
				<div><a className="section_links_link"> Canva </a></div>
				<div><a className="section_links_link"> StackOverFlow </a></div>
				<div><a className="section_links_link"> Tech Blog </a></div>
			</div>
			<div className="section_links">
				<span className="section_links_title"> POSTS </span>
				<div><a className="section_links_link"> History </a></div>
				<div><a className="section_links_link"> Stories </a></div>
				<div><a className="section_links_link"> Contact </a></div>
				<div><a className="section_links_link"> Resources </a></div>
			</div>
			<div className="section_links"> {/* this should move into a graph/sketch in main page */}
				<span className="section_links_title"> IMPORTANCE </span>
				<div><a className="section_links_link"> Trending  </a></div>
				<div><a className="section_links_link"> Meticulous </a></div>
				<div><a className="section_links_link"> Financial </a></div>
				<div><a className="section_links_link"> Productivity </a></div>
			</div>
		</div>
    </div>
)}

export default footer