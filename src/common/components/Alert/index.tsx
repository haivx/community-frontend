import { toast } from 'react-toastify'
import { TypeOptions } from 'react-toastify/dist/types'

interface AlertType {
  message: string | string[]
  type: TypeOptions
}

const Alert = ({ message, type }: AlertType) => {
  if (Array.isArray(message)) {
    message.forEach((errMsg: string) => {
      toast[type as Exclude<TypeOptions, 'default'>](errMsg)
    })
  } else if(typeof message === "string") {
    toast[type as Exclude<TypeOptions, 'default'>](message)
  } else {
    toast.error("Something went wrong!")
  }
}

export default Alert
