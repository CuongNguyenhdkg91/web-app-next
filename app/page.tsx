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
import Image from "next/image"

const home = () => {
    return (
        <div> 
            <div className="grid grid-cols-2 grid-rows-2 mb-5 mt-5">
                <div className="col-start-2 justify-self-center"> Genuine Developers </div>
                <div className="col-start-2 bg-blue text-white justify-self-center py-3 px-6 uppercase rounded-lg">Get in</div>
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
            
            <div className="flex flex-wrap m-10 gap-10 justify-center"> {/* move href stack to hot Q&A */}
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
                    <a href="/Mechanics" target="_blank">
                        <img src="https://spring.io/img/icons/batch.svg" className="inline-flex items-center w-28 h-28"/>
                        <h2 className="text-2xl font-bold my-4">App Code</h2>
                        <p>Create video, snapshot to introduce. Practice trending mechanic & algorithm in programming features</p>
                    </a>
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

            <div>
                <img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5310e054-6284-4048-add2-8fea3efcba5e_1457x1536.gif" />
            </div>
        </div>
    )
}

export default home