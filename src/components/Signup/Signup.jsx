import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useSignup } from '../../Hooks/useSignupHook';
import './Signup.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [class_of, setClass_of] = useState('');
    const [img, setImg] = useState('');

    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const signature = name + ' ' + last_name;
        await signup(name, last_name, email, pin, class_of, img, signature)
    }

    return (
        <form onSubmit={handleSubmit} className="signup_form_container">
            <div className="form-row">
                <div className="form-group">
                    <select className="form-control" onChange={(e)=>setClass_of(e.target.value)} value={class_of}>
                        <option>Select your class</option>
                        <option>June 2022</option>
                        <option>July 2022</option>
                        <option>August 2022</option>
                    </select>
                </div>
                <div className="col">
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                    <input type="text" onChange={(e)=>setLast_name(e.target.value)} value={last_name} className="form-control" placeholder="Last name"/>
                </div>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" value={email} placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>PIN</label>
                <input type="number" onChange={(e)=>setPin(e.target.value)} value={pin} className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label>Upload your picture here...</label>
                <input type="file" onChange={(e)=>setImg(e.target.value)} value={img} className="form-control-file"/>
                <small className="form-text text-muted">This will be your face.</small>
            </div>
            <button disabled={isLoading} type="submit" className="btn btn-primary">Submit</button>
            {error && <Alert variant="danger">{error}</Alert>}
        </form>
    )
}

export default Signup