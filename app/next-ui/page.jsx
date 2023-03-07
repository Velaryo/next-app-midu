'use client'

import { Tooltip, Button } from "@nextui-org/react";

export default function NextUItest () {
    return (<Tooltip content={"Developers love Next.js"}>
    <Button auto flat>
      Do hover here
    </Button>
  </Tooltip>)

}

