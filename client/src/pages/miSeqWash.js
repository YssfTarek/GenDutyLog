import DutyDetails from "../components/DutyDetails"

export default function MiSeq() {

    return (
        <div className="container-fluid">
            <h2 className="text-primary text-center mt-3">MiSeq Wash</h2>
            <div className="container-fluid d-flex align-items-center justify-content-center text-center">
                <DutyDetails location = "miseqwash"/>
            </div>
        </div>
    )
}