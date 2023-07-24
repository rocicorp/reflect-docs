import { Sandpack } from '@codesandbox/sandpack-react'
import { monokaiPro } from '@codesandbox/sandpack-themes'


export default function Sandbox() {
  return <Sandpack 
    options={{
      showTabs: true,
      showLineNumbers: true,
      layout: "console", // preview | tests | console
    }}
    template="node"
    theme={monokaiPro}
  />
}