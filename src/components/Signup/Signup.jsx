import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useSignup } from '../../Hooks/useSignupHook';
import Modal from 'react-bootstrap/Modal';
import './Signup.css'

function Signup({showForm, setShowForm}) {
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

        const formData = new FormData()

        formData.append(img.name, img)

        await signup(name, last_name, email, pin, class_of, formData, signature)
    }

    return (
        <Modal
          show={showForm}
          size="lg"
          centered
        >
            <Modal.Body>
                <form onSubmit={handleSubmit} className={'signup_form_container mt-4'}>
                    <div className="form-group m-2">
                        <select className="form-control" onChange={(e)=>setClass_of(e.target.value)} value={class_of}>
                            <option>Select your class</option>
                            <option>June 2022</option>
                            <option>July 2022</option>
                            <option>August 2022</option>
                        </select>
                    </div>
                    <div className="col my-3 mx-2">
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" placeholder="First name"/>
                    </div>
                    <div className="col my-3 mx-2">
                        <input type="text" onChange={(e)=>setLast_name(e.target.value)} value={last_name} className="form-control" placeholder="Last name"/>
                    </div>
                    
                    <div className="form-group m-2">
                        <label>Email address</label>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" value={email} placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group m-2">
                        <label>PIN</label>
                        <input type="number" onChange={(e)=>setPin(e.target.value)} value={pin} className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-group my-4 mx-2">
                        <small>Upload your picture here...</small>
                        <label className='choose_file_input_label'>
                            {img ? <img src={img} alt={name + last_name + 'profilePicture'} className='image_preview'/> : <small>your picture</small>}
                            <input type="file" accept="image/*" onChange={(e)=>{setImg(URL.createObjectURL(e.target.files[0])); console.log(img)}} className='choose_file_input'/>
                        </label>
                    </div>
                    <button disabled={isLoading} type="submit" className="btn btn-secondary m-2">Submit</button>
                    {error && <Alert variant="danger">{error}</Alert>}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={()=>setShowForm(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default Signup