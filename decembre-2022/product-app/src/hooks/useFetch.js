import { useState, useEffect } from "react"
import { getData } from "../api/Api"

export default function useFetch(url) {
    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const [status, setStatus] = useState("idle")//Set the initial status as “idle.”
    useEffect(() => {
        let doUpdate = true
        setStatus("loading")//Just before sending a request, set the status to “loading.”
        setData(undefined)
        setError(null)
        getData(url)
            .then((data) => {
                if (doUpdate) {
                    setData(data)
                    setStatus("success")//If the data comes back successfully, set the status to “success.”
                }
            })
            .catch((error) => {
                if (doUpdate) {
                    setError(error)
                    setStatus("error")//If there was a problem fetching, set the status to “error.”
                }
            })
        return () => doUpdate = false
    }, [url])
    return { data, status, error }
}