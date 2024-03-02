import { useRef } from "react";


function Search(props) {
    const fkey = useRef()

    const getName = () => {
        let name = fkey.current.value
        props.handler(name)
    }
    return (
        <div className="row">
            <div className="clo-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group mt-2 md-4">
                            <div className="input-group">
                                <input type="search"  ref={fkey} className="form-control" placeholder="Enter Artist Name Here" />
                                <button onClick={() => getName()} className="btn btn-success">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search