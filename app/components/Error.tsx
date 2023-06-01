import { useState } from "react";

import { Alert} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline"

export default function Error() {
   const [open, setOpen] = useState(true)
  return (
      <div className="flex w-full flex-col gap-2">
  
         <Alert open={open} onClose={()=> setOpen(false)}
         color="red"
         icon={
           <InformationCircleIcon
             strokeWidth={2}
             className="h-6 w-6"
          />
         }
         >
         Oops, something went wrong, please try again!
          </Alert>
           </div>
  )
}
