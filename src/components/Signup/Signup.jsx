import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useSignup } from '../../Hooks/useSignupHook';
import Modal from 'react-bootstrap/Modal';
import './Signup.css'
import { useEffect } from 'react';

function Signup({showForm, closeForm, setModalInfo}) {
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [class_of, setClass_of] = useState('');
    const [img, setImg] = useState('');
    const [imgLoading, setImgLoading] = useState(false);
    const [imgError, setImgError] = useState(null)

    const {signup, error, isLoading, success} = useSignup()

    useEffect(()=>{
        if(success){
            closeForm()
            setModalInfo(success)
        }
    }, [success, closeForm, setModalInfo])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const signature = name + ' ' + last_name;
        await signup(name, last_name, email, pin, class_of, img, signature)
    }

    const postDetails = async(pics)=>{
        setImgError(null)
        if(!pics){
            return setImgError('no picture was selected')
        }
        if (pics.type === 'image/jpeg' || pics.type === 'image/png' || pics.type === 'image/jpg') {

            setImgLoading(true)

            const data = new FormData();
            data.append('file', pics);
            data.append('upload_preset', 'notezipper');
            data.append('cloud_name', 'dhfxuh3vq');

            const response = await fetch("https://api.cloudinary.com/v1_1/dhfxuh3vq/image/upload", {
                method:"POST",
                body: data
            })
            
            const json = await response.json()

            if (response.ok){
                setImgLoading(false)
                setImg(json.url.toString())
            }
            if (!response.ok){
                setImgLoading(false)
                setImgError('Try another picture')
            }

        } else {
            setImgError('.png, .jpg, .jpeg files only')
        }
        setImgLoading(false)
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
                    <div className="form-group my-4 mx-2 d-flex flex-column align-items-center justify-content-center">
                        <small>Upload your picture here...</small>
                        <label className='choose_file_input_label d-flex align-items-center justify-content-center' onChange={(e)=>postDetails(e.target.files[0])}>
                            {img ? <img src={img} alt={!imgError ? (name + last_name + 'profile picture') : '-'} className='image_preview'/> : <small className='picture_text'>your picture</small>}
                            {imgLoading && <div className='loading_img_div d-flex justify-content-center align-items-center'>
                                <div className="spinner-grow text-light" role="status"></div>
                            </div>}
                            {imgError && <div className='img_error_div'><small>{imgError}</small></div>}
                            <input type="file" accept="image/*" onChange={(e)=> setImg(URL.createObjectURL(e.target.files[0]))} className='choose_file_input'/>
                        </label>
                    </div>
                    <button disabled={isLoading} type="submit" className="btn btn-secondary m-2">Submit</button>
                    {error && <Alert variant="danger">{error}</Alert>}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={closeForm}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default Signup