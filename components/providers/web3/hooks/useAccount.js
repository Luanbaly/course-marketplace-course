
import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
    "0x67f2b94b8e51a973e39b17a79df15dee7c1f11483617daeddc07e7fbe98abef4": true,
    "25f52d1a2f9f8fde91a5b732c25bb89ffaf92644ede52867714ab9e90acb67be": true 
}

export const handler = (web3, provider) => () => {

    
    const { data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/accounts" : null,
        async () => {
        const accounts = await web3.eth.getAccounts()
        const account = accounts[0]

        if (!account) {
            throw new Error("Cannot retreive an account. Please refresh the browser.")
        }
        
        return account
        }
    )

    useEffect(() => {

        const mutator = accounts => mutate(accounts[0] ?? null)
        provider?.on("accountsChanged", mutator)

        return () => {
            provider?.removeListener("accountsChanged", mutator)
        }
    }, [provider])
    

    return {
        data,
        isAdmin: (
            data && 
            adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate, 
        ...rest
    }
}