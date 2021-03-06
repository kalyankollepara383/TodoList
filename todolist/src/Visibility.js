
const Visibility=(props)=>{

    return(
        <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={props.checked}
            onChange={(e)=>props.callback(e.target.checked)}
            />
            <label className="form-check-label">Show{props.description}</label>
        </div>
    )
}

export default Visibility