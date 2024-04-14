import React from 'react' 

const AddRoom = () => {
    const[newRoom, setNewRoom] = useState({
        photo : null,
        roomType : "",
        roomPrice : "",
    })

    const[imagePrev, setImagePreview] = useState("")
    const[successMessage, setSuccessMessage] = useState("")
    const[errorMessage, setErrorMessage] = useState("")


    
    return (
        <div>

        </div>
    )
}

export default AddRoom