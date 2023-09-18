export default function Home() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center text-center" style={{height: "100vh"}}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="btn btn-primary my-1" href="/cleanroom"><h2>Clean Room</h2></a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-primary my-1" href="/miseqwash"><h2>MiSeq Wash</h2></a>
                    </li>
                </ul>            
            </div>
        </div>
    )
}