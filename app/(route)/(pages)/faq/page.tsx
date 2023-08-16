"use client"

import Body from "@/components/ui/body"
import Info from "./components/info"
import Label from "./components/label"


const FAQ = () => {
  return (
    <Body>
      <div className="flex lg:flex-row flex-col py-8 lg:space-x-8 lg:space-y-0 space-y-6">
        <Info />
        <Label />
      </div>
    </Body>
  )
}

export default FAQ
