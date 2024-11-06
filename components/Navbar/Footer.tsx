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
    <div className="footer px-4 pt-16 bg-purpleBg text-purpleTxt flex gap-y-8 justify-evenly flex-row md:flex-col print:hidden">
		<div >
			<img src="/logoMC.png"/>
			<span className="text-[40pt] text-[#a9955a]">2024</span>
			<br></br>
			<span className="text-[20pt] text-[#d0c1a2]">
			"Self move for identity"
			</span>
		</div>
		<div>
			<div className="w-[750px] tbl:w-max grid grid-cols-[repeat(4,1fr)] gap-x-8 tbl:grid-cols-2"> 
				{/* move Frameworks from the footer into the emphasized content */}
				<div className="section_links">
					<span className="section_links_title"> FRAMEWORK </span>
					<div><a className="section_links_link"> Docker </a></div>
					<div><a className="section_links_link"> Golang </a></div>
					<div><a className="section_links_link"> Kotlin </a></div>
					<div><a className="section_links_link"> Python </a></div>
					<div><a className="section_links_link"> Electron </a></div>
					<div><a className="section_links_link"> Flutter </a></div>
				</div>
				<div className="section_links">
					<span className="section_links_title"> EDGING </span>
					<div><a className="section_links_link"> AI Image Create </a></div>				
					<div><a className="section_links_link"> AI Chatbot </a></div>
					<div><a className="section_links_link"> Fintech</a></div>
					<div><a className="section_links_link"> Crypto Trading </a></div>
					<div><a className="section_links_link"> Smart Contract </a></div>
				</div>
				<div className="section_links">
					<span className="section_links_title"> REALISTIC </span>
					<div><a className="section_links_link"> Order </a></div>
					<div><a className="section_links_link"> Communicate </a></div>
					<div><a className="section_links_link"> Media Process </a></div>
					<div><a className="section_links_link"> Transaction </a></div>
					<div><a className="section_links_link"> Storage </a></div>
					<div><a className="section_links_link"> CAM service </a></div>		{/* 3D printing */}		
				</div>
				<div className="section_links ">
					<span className="section_links_title"> SOCIAL</span>
					<div><a className="section_links_link"> Github </a></div>
					<div><a className="section_links_link"> Canva </a></div>
					<div><a className="section_links_link"> Stack-OverFlow </a></div>
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
    </div>
)}

export default footer