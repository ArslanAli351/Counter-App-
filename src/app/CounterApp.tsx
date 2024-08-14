import { useState } from "react"
type Counttype = {
    countnum: number
}
export default function Count({ countnum }: Counttype) {
    const [inputval, setinputval]: number = useState('');
    const [Add, setAdd] = useState(countnum)
    const [ShowError, setShowError] = useState(false);

    if (inputval === '' && Add !== 0) {
        const f = setTimeout(() => {
            setShowError(true)
        },)
    }

    const buttonHandle = () => {
        setAdd(Add + parseInt(inputval))
    }
    const buttonHandl = () => {
        setAdd(Add - parseInt(inputval))
    }
    const valueHandler = (event: any) => {
        setinputval(event.target.value);
    }

    const buttonHandler = () => {
        setAdd(parseInt(inputval));

    }
    return (<div style={{ backgroundColor: '#4e92cd', textAlign: 'center', height: '600px', position: 'fixed', width: '100%', margin: 'auto' }}>
        <div style={{ marginTop: '150px', border: '1px solid #f2f1e1', width: '50%', height: '280px', backgroundColor: '#ece8da', margin: 'auto', borderRadius: '50px', boxShadow: '10px 10px 5px #d9c99c' }}>
            <h1> Counter App</h1>
            <input
                type="number"
                value={inputval}
                onChange={valueHandler}
            />
            <h1>{Add}</h1>
            <button onClick={buttonHandle} >Add</button>
            <button onClick={buttonHandl} >munes</button>
            {ShowError && <h2 style={{ color: "red" }}>Please Type Number and Refresh page</h2>}


        </div></div>)
}


