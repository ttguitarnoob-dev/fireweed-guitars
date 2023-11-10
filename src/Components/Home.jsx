
import HomeBio from "./HomeBio"
import BgImage from "./UI Elements/BgImage"

export default function Home() {

    return (
        <section>
            <h1>HOOOOME</h1>
            <a href="/guitars"><button>GUITARS</button></a>
            <a href="/about"><button>ABOUT</button></a>
            <BgImage imgPath="https://wallpapercave.com/wp/wp2465235.jpg" />
            <HomeBio
                imgPath="https://picsum.photos/400"
                bgColor="#302e29"
                title = "BIOOOO"
                text = "There is so much to say in this bio but none of it is coming to mind because whenever there is something good to say I have nothing to say but whenever there is nothing good to say I have tons to say so it makes no sense but I'm saying so much right now but not actually saying anything It's an incredible ability I have and I have no idea why I capitalized ITS"


            />
        </section>
    )
}