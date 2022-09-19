import { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault()

        console.log(email, pin)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
            <div className="col">
                <input type="text" className="form-control" placeholder="First name"/>
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder="Last name"/>
            </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" value={email} placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">PIN</label>
                <input type="password" onChange={(e)=>setPin(e.target.value)} value={pin} className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Signup