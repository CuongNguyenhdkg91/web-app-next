// slide frame
// motion media - ref dota2.com
// greeting introduction text
// some hot news (3) that source from any website and reprocess by function - record the datetime of reading
// plan on left side bar - ref. premierleague.com - can use the khenthuong list involving 2023 & 2024
// advertisment on right side bar - ref 24h.com.vn
// image collection in art style

// introduce about yourself

// image and media need to be added by hook and effect not by html link

// insert the document link to code into the element or use function event Onclick fetch link from database server can show list link to pick

// prepare a dark mode

const home = () => {
    return (
        <div> 
            <div className="grid grid-cols-2 grid-rows-2 mb-5 mt-5">
                <div className="col-start-2 justify-self-center">In Person & virtual </div>
                <div className="col-start-2 bg-blue text-white justify-self-center py-3 px-6 uppercase rounded-lg">get ticket</div>
            </div>
            
            <div>
                <a href="https://www.dota2.com" target="_blank">
                    <video autoPlay playsInline preload = "auto" loop>
                        <source type = "video/mp4" src = "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"></source>
                        <source type = "video/mp4" src="https://www.danieli.com/home-page-buy.mp4"></source>
                    </video>
                </a>
            </div>

            <div className="my-10">
                <a href="https://nextjs.org/conf" target="_blank"> {/* replace with own word when available */}
                    <img src = "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1723581090%2Ffront%2Fnext-conf-2024%2Ftakeover.png&w=1920&q=75" />
                </a>
            </div>
            
            <div className="flex flex-wrap m-10 gap-10 justify-center">
                <div className="w-1/4 md:w-full p-6 text-center border-solid border-2 rounded-md border-teal-100 hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <a href="https://stackoverflow.com/questions/65086108/next-js-link-vs-router-push-vs-a-tag" target="_blank">
                        <img src="https://spring.io/img/icons/reactive.svg" className="inline-flex items-center w-28 h-28"/>
                        <h2 className="text-2xl font-bold my-4">Event Driven</h2>
                        <p>Integrate with your enterprise. React to business events. Act on your streaming data in realtime.</p>
                    </a>
                </div>
                <div className="w-1/4 md:w-full p-10 text-center border-solid border-2 rounded-md border-teal-100 hover:shadow-xl shadow-slate-400 hover:animate-[riseUp_0.5s]">
                    <img src="https://spring.io/img/extra/cloud-1.svg" className="inline-flex items-center w-28 h-28"/>
                    <h2 className="text-2xl font-bold my-4">Cloud</h2>
                    <p>Grab edging technolgy in two way. Pull from the world and push your idea. Connect and scale your services, whatever your platform.</p>
                </div>
                <div className="w-1/4 md:w-full p-10 text-center border-solid border-2 rounded-md border-teal-100 hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <img src="https://spring.io/img/icons/batch.svg" className="inline-flex items-center w-28 h-28"/>
                    <h2 className="text-2xl font-bold my-4">App Code</h2>
                    <p>Create video, snapshot, description to introduce potential user. Time flows of thing already neutralize. Engage abstraction the state of world in programming approach</p>
                </div>
                <div className="w-1/4 md:w-full p-10 text-center border-solid border-2 rounded-md border-teal-100 hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <img src="https://www.anaconda.com/wp-content/uploads/2024/03/Visibility-and-governance_Anaconda-Capabilities-1536x1536.png" className="inline-flex items-center w-28 h-28"/>
                    <h2 className="text-2xl font-bold my-4">Public Sector</h2>
                    <p>Push new style of life. Evolve government operations and citizen engagement with secure data science and AI tools.</p>
                </div>
                <div className="w-1/4 md:w-full p-10 text-center border-solid border-2 rounded-md border-teal-100 hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <a href="https://www.anaconda.com" target="_blank">
                        <img src="https://www.anaconda.com/wp-content/uploads/2024/03/Financial-Industry_-Industry-1-1536x1536.png" className="inline-flex items-center w-28 h-28"/>
                        <h2 className="text-2xl font-bold my-4">Financial Services</h2>
                        <p>Revolutionize financial analytics and security with tailored AI solutions.</p>
                    </a>
                </div>
            </div>

            <div >
                <img src="https://captintructuyen.evnspc.vn/Images/FileHinh/ArticleN/Guest/2024/2/t20_hoangsa_anh-3-dien-mat-troi-mai-nha-cty-acom_20240211220101.jpg"/>
            </div>
        </div>
    )
}

export default home