import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Image, CardFooter, Button, Link } from "@nextui-org/react"


export default function GuitarDetails() {

    const { id } = useParams()
    console.log('ioidid', id)

    const [guitar, setGuitar] = useState()

    async function handleFetch() {
        const url = `https://flaskapi.ttguitarnoob.cloud/guitars/${id}`
        const options = {
            method: "GET"
        }

        try {
            console.log("fetching at url", url)
            const response = await fetch(url, options)
            console.log('resposnse', response)
            const data = await response.json()
            console.log('what we puttin in dtate', data[0])
            setGuitar(data[0])
        } catch (err) {
            console.log('something terrible happened when fetching', err)
        }
    }

    useEffect(() => {
        handleFetch()
        console.log('things', guitar)
    }, [])

    return (
        <section>
            {guitar &&

                <section className="details-section">
                    <div>
                        <h2 className="guitar-name">{guitar.name}</h2>
                        <h2>Description</h2>
                        <p>{guitar.description}</p>
                        <h2>Top Wood</h2>
                        <p>{guitar.top_wood}</p>
                        <h2>Back and Sides Wood</h2>
                        <p>{guitar.back_sides_wood}</p>
                        <h2>Neck Wood</h2>
                        <p>{guitar.neck_wood}</p>
                        <h2>Shape</h2>
                        <p>{guitar.shape}</p>
                        <h2>Construction Details</h2>
                        <p> {guitar.construction}</p>

                    </div>
                    <div>
                        {guitar.photos && guitar.photos.map((onePhoto, index) => (
                            <div>
                                <Card isFooterBlurred className="w-[250px] h-[250px] col-span-12 sm:col-span-7">
                                    <Image
                                        removeWrapper
                                        alt="Relaxing app background"
                                        className="z-0 w-full h-full object-cover"
                                        src={onePhoto}
                                    />
                                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                        <div className="flex flex-grow gap-2 items-center">
                                            <div className="flex flex-col">

                                                
                                            </div>
                                        </div>
                                        <Button radius="full" size="sm">Expand Photo</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* <h2>Name</h2>
                    <p>{guitar.name}</p>
                    <h2>Description</h2>
                    <p>{guitar.description}</p>
                    <h2>Top Wood</h2>
                    <p>{guitar.top_wood}</p>
                    <h2>Back and Sides Wood</h2>
                    <p>{guitar.back_sides_wood}</p>
                    <h2>Neck Wood</h2>
                    <p>{guitar.neck_wood}</p>
                    <h2>Shape</h2>
                    <p>{guitar.shape}</p>
                    <h2>Construction Details</h2>
                    <p> {guitar.construction}</p> */}
                    {/* <div className="carousel-container">
                        <Carousel
                            autoPlay
                            infiniteLoop
                        >
                            {guitar.photos && guitar.photos.map((onePhoto, index) => (
                                <div>
                                    <img src={onePhoto} />
                                    <p className="legend">{`${guitar.name} Image ${index + 1}`}</p>
                                </div>
                            ))}
                        </Carousel>
                    </div> */}
                </section>
            }
        </section>
    )
}