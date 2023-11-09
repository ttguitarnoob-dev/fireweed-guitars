export default function HomeBio({ imgPath, bgColor }) {


    return (
        <section className="home-bio" style={{ backgroundColor: bgColor }}>
            <div className="text-paragraph">
                <h2>BIOOOO</h2>
                <p>There is so much to say in this bio but none of it is coming to mind because whenever there is something good to say I have nothing to say but whenever there is nothing good to say I have tons to say so it makes no sense but I'm saying so much right now but not actually saying anything It's an incredible ability I have and I have no idea why I capitalized ITS</p>
            </div>
            <div>
                <img src={imgPath} alt="bio" style={{borderRadius: "2rem", maxWidth: "90vw"}}></img>
            </div>
        </section>
    )
}