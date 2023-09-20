import { useState, useEffect } from "react"
import {format } from "date-fns"

export default function DutyDetails ({location}) {
    const [ duties, setDuties ] = useState(null)
    useEffect(() => {
        async function fetchDuties() {
            const response = await fetch (`https://gen-duty-log.uc.r.appspot.com/api/duties/${location}`)
            const json = await response.json()

            if (response.ok) {
                setDuties(json)
            }
        }
        fetchDuties()
    }, [location])

    return (
        <table className="table table-striped table-bordered mt-3 w-50">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Activity Type</th>
                </tr>
            </thead>
            <tbody>
            {duties && duties.map((duty) => (
                <tr key={duty._id}>
                    <td >{duty.name}</td>
                    <td>{format(new Date(duty.createdAt),"dd/MM/yyyy hh:mm aaa")}</td>
                    <td>{duty.type}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}