import { useEthPrice } from "@components/hooks/useEthPrice"
import { useEffect, useState } from "react"


const useCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
    }, [])

    // console.log("Luan Soai Ca!")

    return count
}

const SimpleComponent = () => {
    // const count = useCounter()

    const { eth } = useEthPrice()
    return (
        <h1>Simple lỏw - {eth.data}</h1>
    )
}

export default function HooksPage() {
    // const count = useCounter()
    const { eth } = useEthPrice()

    return (
        <>
            {/* <h1>Itachi - {eth.data}</h1> */}
            <SimpleComponent />
        </>
    )
}