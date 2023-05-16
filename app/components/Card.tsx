"use client";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
  } from "@material-tailwind/react";
import Image from "next/image";
import figo from "../assets/puppyFigo.jpeg"

export default function BreedCard() {
  return (
    <Card  color='blue-gray'className="mt-[60px] mx-auto w-[300px] md:w-[500px]">
    <CardHeader className="relative md:h-[500px]">
      <Image src={figo}  className=""  alt="" />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" className="mb-2">
        UI/UX Review Check
      </Typography>
      <Typography>
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to &quot;Naviglio&quot; where you can enjoy the main night life
        in Barcelona.
      </Typography>
    </CardBody>
  </Card>

  )
}


{/* <div className="mt-20">
<Image className="w-[400px] m-auto" src={figo} alt="" />
<p className="text-center">Breed Info</p>
</div> */}