'use client'
import { Select, Option } from "@material-tailwind/react";

export default function SelectBreed() {
	return (
        <div className="w-[250px] md:w-[400px] mx-auto mt-[100px] mb-[100px]">
		<Select  className="" color="teal" label="Select Breed">
			<Option value="1"> French Poodle</Option>
			<Option value="2">Golden Retriver</Option>
			<Option value="3"> German Shepard</Option>
		</Select>
        </div>
	);
}
