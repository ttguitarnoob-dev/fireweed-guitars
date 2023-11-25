import { Card, Image, CardFooter, Button, Link } from "@nextui-org/react"

export default function CardInfoSection({ imgPath, bgColor, text, title, id }) {

    function pickColor() {
        if (bgColor % 2 == 0) {
            return "linear-gradient(225deg, rgba(40,38,33,1) 17%, rgba(80,77,68,1) 76%, rgba(33,33,32,1) 100%)"
        } else {
            return "linear-gradient(310deg, rgba(15,17,19,1) 17%, rgba(73,78,84,1) 100%)"
        }
    }



    return (
        <section className="home-bio" style={{ background: pickColor() }}>
            <>
                <div>
                    <Card isFooterBlurred className="w-[360px] h-[360px] col-span-12 sm:col-span-7">
                        <Image
                            isZoomed
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover"
                            src={imgPath}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <div className="flex flex-col">

                                    <p className="text-tiny text-white/60">{title}</p>
                                </div>
                            </div>
                            <Link href={`/guitars/${id}`}><Button radius="full" size="sm">See Guitar Details</Button></Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="text-paragraph">
                    {title && <h2 className="font-medium text-2xl">{title}</h2>}
                    <p>{text}</p>
                </div>

            </>
        </section>
    )
}