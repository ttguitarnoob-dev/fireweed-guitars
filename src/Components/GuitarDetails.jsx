import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Image, CardFooter, Button, Link, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tab } from "@nextui-org/react"


export default function GuitarDetails() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

                    <div className="details-container">
                        <h2 className="guitar-name">{guitar.name}</h2>
                        <div className="photos-button">
                            <Button onPress={onOpen} radius="full" size="lg">View Full-Size Photos</Button>
                        </div>
                        <div className="description">
                            <p className="text-xl">{guitar.description}</p>
                        </div>
                        <Table hideHeader>
                            <TableHeader>
                                <TableColumn>Thing</TableColumn>
                                <TableColumn>Value</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Top Wood:</TableCell>
                                    <TableCell>{guitar.top_wood}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Back/Sides Wood:</TableCell>
                                    <TableCell>{guitar.back_sides_wood}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Neck Wood:</TableCell>
                                    <TableCell>{guitar.neck_wood}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Shape:</TableCell>
                                    <TableCell>{guitar.shape}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Construction Details:</TableCell>
                                    <TableCell>{guitar.construction}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        {/* <h2 className="guitar-name">{guitar.name}</h2>
                        <div className="photos-button">
                            <Button onPress={onOpen} radius="full" size="lg">View Full-Size Photos</Button>
                        </div>
                        <div className="description">
                            <p className="text-xl">{guitar.description}</p>
                        </div>
                        <div className="guitar-details">
                            <h2 className="font-medium">Top Wood:&nbsp;&nbsp;</h2>
                            <p>{guitar.top_wood}</p>
                           
                        </div>
                        <hr></hr>
                        <div className="guitar-details">
                            <h2 className="font-medium">Back/Sides Wood:&nbsp;</h2>
                            <p>{guitar.back_sides_wood}</p>
                        </div>
                        <hr></hr>
                        <div className="guitar-details">
                            <h2 className="font-medium">Neck Wood:&nbsp;&nbsp;</h2>
                            <p>{guitar.neck_wood}</p>
                        </div>
                        <hr></hr>
                        <div className="guitar-details">
                            <h2 className="font-medium">Shape:&nbsp;&nbsp;</h2>
                            <p>{guitar.shape}</p>
                        </div>
                        <hr></hr>
                        <div className="guitar-details">
                            <h2 style={{marginRight: "1rem"}} className="font-medium">Construction Details:&nbsp;</h2>
                            <p> {guitar.construction}</p>
                        </div>
                        <hr></hr> */}
                    </div>

                    <div className="guitar-gallery">

                        {guitar.photos && guitar.photos.map((onePhoto, index) => (
                            <div key={index} className="guitar-card">
                                <Card className="w-[250px] h-[250px] col-span-12 sm:col-span-7">
                                    <Image
                                        removeWrapper
                                        alt="awesome guitar"
                                        className="z-0 w-full h-full object-cover"
                                        src={onePhoto}
                                    />
                                </Card>
                            </div>
                        ))}
                        <Modal size="4xl" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">{guitar.name}</ModalHeader>
                                        <ModalBody>
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
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
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