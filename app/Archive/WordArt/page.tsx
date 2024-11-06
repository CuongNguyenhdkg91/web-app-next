const fonts = () => {
    return(
    <div>
        <div className="h-[400px]">
            <img className="object-cover h-full"
            src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1723581090%2Ffront%2Fnext-conf-2024%2Ftakeover.png&w=1920&q=75" />
            {/* <div className="h-[150px] bg-[green]"></div> */}
            {/* <div className="h-[150px] bg-[yellow]"></div> */}
        </div>
        <div >
            <a href = "https://design.tutsplus.com/articles/different-font-file-types-explained-ott-ttf-woff--cms-39047">Docs. Different Font File Types Explained (OTF, TTF, WOFF)</a>
            <p>SVG fonts are the latest font file type in the industry, allowing for transparencies and effects to be stored in the file. Preferred in Icon usage</p>
            <p> WOFF font cannot be installed on your system. Fonts are usually loaded from the users device with a limited number of fonts. Alternatively, designers can use a host, like Google Fonts or their own website, to load fonts </p>
            <p> Need UI and controller to compare and pick font for pages in website. Compare in tab image way</p>
        </div>
    </div>
    )
}

export default fonts