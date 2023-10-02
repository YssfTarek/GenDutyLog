import { useEffect, useState } from "react";

export default function AddDuty({location}) {
    const [ type, setType ] = useState(location)
        
    if (type === "cleanroom")
    {setType("Decontamination")}

    const [ name, setName ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ button, setButton ] = useState(false)
    const [loading, setLoading ] = useState(false)
    
    async function handleSubmit(e){
        e.preventDefault()
        const update = {name, location, type}
        setButton(true)
        setLoading(true)
        const response = await fetch (`https://gen-duty-log-400812.uc.r.appspot.com/api/duties/update/${location}`, {
            method: "POST",
            body: JSON.stringify(update),
            headers: {
                "Content-Type" : "application/json"
            }
        })

        const json = response.json()

        if (!response.ok) {
            setMessage(`A problem occured: ${json.error}`)
        }

        if(response.ok) {
            setButton(true)
            setName("")
            setMessage("Action has been successfully updated")
            setLoading(false)
        }
    }
    
    return(
        <div className="p-3 m-2 border w-50 h-50 justify-content-center align-items-center text-center">
            <h2 className="Text-primary text-center m-3">Please enter your name to sign</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" placeholder="Please enter your name" aria-label="default input example" onChange = {(e) => setName(e.target.value)} value = {name}/>
                {location !== "cleanroom" && 
                    <select className="form-select" aria-label="Dropdown menu" onChange={(e) => setType(e.target.value)} value = {type}>
                        <option value = "PostRun/Template">Post Run/ Template</option>
                        <option value = "PostRun">Post Run</option>
                        <option value = "Maintenance">Maintenance</option>
                        <option value = "StandBy">Stand By</option>
                    </select>
                }
                <button className="btn btn-primary m-3" type="submit" disabled = {button}>Update</button>
                {loading ? <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                : <p className="text-primary">{message}</p>
            }
            </form>
        </div>
    )
}