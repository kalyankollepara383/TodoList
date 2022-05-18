const Completedtodo = (props) => {
    console.log(props.items)
    return (
        <>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr><th>Description</th><th>Done</th></tr>
                </thead>
                <tbody>{
                    props.items.map(item => <tr key={item.action}>
                        <td>{item.action}</td>
                        <td><input type="checkbox" checked={item.done}></input></td>
                    </tr>
                    )
                }</tbody>
            </table>

        </>
    )
}

export default Completedtodo