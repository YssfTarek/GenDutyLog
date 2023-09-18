import DutyDetails from "../components/DutyDetails"

export default function CleanRoom() {

    return (
        <div className="container-fluid">
            <h2 className="text-primary text-center mt-3">Clean Room</h2>
            <div className="container-fluid d-flex align-items-center justify-content-center text-center">
                <DutyDetails location = "cleanroom"/>
            </div>
        </div>
    )
}