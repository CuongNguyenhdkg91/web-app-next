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
            <div id="sec1" className="relative">
                <div className="h-[75vh] bg-[black]">
                    <div className="h-[78%]">
                        <a href="https://www.dota2.com" target="_blank">
                            <video autoPlay playsInline preload = "auto" loop className="object-cover w-screen h-full">
                                <source type = "video/mp4" src = "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"></source>
                                <source type = "video/mp4" src="https://www.danieli.com/home-page-buy.mp4"></source>
                            </video>
                        </a>
                    </div>
                </div>

                <div className="grid auto-cols-[minmax(auto,_2fr)] mb-5 mt-5 text-[white] font-['Reaver'] tracking-[5px] w-full absolute top-0">
                    <div className="col-start-2 py-2 text-3xl text-center uppercase"> Genuine Developers </div>
                    <div className="col-start-2 bg-blue text-white text-xl justify-self-center py-3 px-6 uppercase rounded-lg">Get in</div>
                </div>

                <div className="absolute bottom-0 w-full h-[25%] flex justify-around">
                    <a href="https://nextjs.org/conf" target="_blank"> {/* replace with own word when available */}
                        <img className="h-[20vh]"
                        src = "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1723581090%2Ffront%2Fnext-conf-2024%2Ftakeover.png&w=1920&q=75" />
                    </a>
                    <a href="#sec3"> {/* replace with own word when available */}
                        <img className="h-[20vh]"
                        src = "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1723581090%2Ffront%2Fnext-conf-2024%2Ftakeover.png&w=1920&q=75" />
                    </a>
                </div>
                
            </div>

            
            <div className="flex flex-wrap mx-auto px-8 max-w-[1200px] m-10 gap-16 justify-center font-['Radiance']"> {/* move href stack to hot Q&A */}
                <div className="w-[320px] md:w-full p-6 text-center border-solid border-2 rounded-md border-[rgb(204,251,241)] hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <a href="https://stackoverflow.com/questions/65086108/next-js-link-vs-router-push-vs-a-tag" target="_blank">
                        <img src="https://spring.io/img/icons/reactive.svg" className="inline-flex items-center w-28 h-28"/>
                        <h2 className="text-2xl font-bold my-4">Event Driven</h2>
                        <p>Integrate with your enterprise. React to business events. Act on your streaming data in realtime.</p>
                    </a>
                </div>
                <div className="w-[320px] md:w-full p-6 text-center border-solid border-2 rounded-md border-[rgb(204,251,241)] hover:shadow-xl shadow-slate-400 hover:animate-[riseUp_0.5s]">
                    <img src="https://spring.io/img/extra/cloud-1.svg" className="inline-flex items-center w-28 h-28"/>
                    <h2 className="text-2xl font-bold my-4">Cloud</h2>
                    <p>Grab edging technolgy in two way. Pull from the world and push your idea. Connect and scale your services, whatever your platform.</p>
                </div>
                <div className="w-[320px] md:w-full p-6 text-center border-solid border-2 rounded-md border-[rgb(204,251,241)] hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <a href="/Mechanics" target="_blank">
                        <img src="https://spring.io/img/icons/batch.svg" className="inline-flex items-center w-28 h-28"/>
                        <h2 className="text-2xl font-bold my-4">App Code</h2>
                        <p>Create video, snapshot to introduce. Practice trending mechanic & algorithm in programming features</p>
                    </a>
                </div>
                <div className="w-[320px] md:w-full p-6 text-center border-solid border-2 rounded-md border-[rgb(204,251,241)] hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <a href="#sec1">
                        <img src="https://www.anaconda.com/wp-content/uploads/2024/03/Visibility-and-governance_Anaconda-Capabilities-1536x1536.png" className="inline-flex items-center w-28 h-28"/>
                        <h2 className="text-2xl font-bold my-4">Public Sector</h2>
                        <p>Push new style of life. Evolve government operations and citizen engagement with secure data science and AI tools.</p>
                    </a>
                </div>
                <div id="sec2" className="w-[320px] md:w-full p-6 text-center border-solid border-2 rounded-md border-[rgb(204,251,241)] hover:shadow-xl shadow-slate-400 hover:-translate-y-1 transition-all">
                    <a href="https://www.anaconda.com" target="_blank">
                        <img src="https://www.anaconda.com/wp-content/uploads/2024/03/Financial-Industry_-Industry-1-1536x1536.png" className="inline-flex items-center w-28 h-28"/>
                        <h2 className="text-2xl font-bold my-4">Financial Services</h2>
                        <p>Revolutionize financial analytics and security with tailored AI solutions.</p>
                    </a>
                </div>
            </div>

            <div id="sec3" className="relative w-full h-[1600px] bg-center bg-cover bg-no-repeat bg-[url('https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5310e054-6284-4048-add2-8fea3efcba5e_1457x1536.gif')]">
                <a href="#sec2" className="absolute bottom-0 right-0">&lt;</a>
            </div>
        </div>
    )
}

export default home