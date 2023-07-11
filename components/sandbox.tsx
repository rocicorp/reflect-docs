import { Sandpack } from '@codesandbox/sandpack-react'
import { monokaiPro } from '@codesandbox/sandpack-themes'
import styles from './sandbox.module.css'


export default function Sandbox() {
  return <Sandpack template="react" theme={monokaiPro} />
}