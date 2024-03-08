// import useState from React
// import axios from 'axios'

// import React, { useState } from 'react'

// export default function AddStudent() {


//     const [name, setName] = useState('')
//     const [id, setId] = useState('')
//     const [doc, setDoc] =useState('')

//     const handleSubmit = ()=>{

//         console.log(name,id,doc)

//         const formData = new FormData()
//        // formData.append(`file`, doc)

//         console.log([...FormData])
//         // e.preventDefault()

//         // axios.post('http://localhost:8080/post/db', {name, id})
//         // .then(result => {
//         //     console.log(result)
//         //     if(result.data ==='Already Added'){
//         //         alert("Already added!")
//         //     }else{
//         //         alert('Student Added Successfully!')
//         //     }
//         // })
//         // .catch(err => console.log(err))
//     }



//   return (
//     <div className='srudent container'>
//         <div className='Student heading'> Add Student</div>
        
//         <input value={name} onChange={(e)=>setName(e.target.value)}/>
//         <input value={id} onChange={(e)=>setId(e.target.value)}/>
//         <input type='file' onChange={(e)=>setDoc(e.target.files)}/>

//         <button type='submit' onClick={handleSubmit}> Submit </button>
//     </div>
//   )
// }



// // import useState from React
// import axios from axios

// import React, { useState } from 'react'

// export default function AddStudent() {


//     const [name, setName] = useState('')
//     const [id, setId] = useState('')

//     const handleSubmit = ()=>{

//         console.log(name,id)
//         e.preventDefault()

//         axios.post('http://localhost:8080/post/db', {name, id})
//         .then(result => {
//             console.log(result)
//             if(result.data ==='Already Added'){
//                 alert("Already added!")
//             }else{
//                 alert('Student Added Successfully!')
//             }
//         })
//         .catch(err => console.log(err))
//     }



//   return (
//     <div className='srudent container'>
//         <div className='Student heading'> Add Student</div>
//         {/* <form className='studentform' onSubmit={handleSubmit}>

//             <div class = 'form group'>
//                 <lable> Student Name </lable>
//                 <input type='text' class='form controll' placeholder='  Enter Name' onChange={(e)=>setName(e.target.value)}/>

//             </div>

//             <div class = 'form group'>
//                 <lable> Student Id </lable>
//                 <input type='text' class='form controll' placeholder='  Enter Id' onChange={(e)=>setId(e.target.value)}/>

//             </div>

//             <button type='submit' onClick={handleSubmit}/>

//         </form> */}

//         <input value={name} onChange={(e)=>setName(e.target.value)}/>
//         <input value={id} onChange={(e)=>setId(e.target.value)}/>
//         <button type='submit' onClick={handleSubmit}> Submit </button>
//     </div>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is imported
import './add_student.css';

export default function AddStudent() {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [doc, setDoc] = useState(null); // Initialize as null for no file initially

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form default action correctly

        console.log(name, id, doc);

        const formData = new FormData();
        if (doc) {
            formData.append('file', doc); // Append the file if it exists
        }

        // Attempt to send both formData and JSON in the same request is not straightforward.
        // You need to append all fields to formData if you want to send them together.
        formData.append('name', name);
        formData.append('id', id);

        // For demonstration, just logging the formData keys (This won't show file content or values)
        for (let key of formData.keys()) {
            console.log(key);
        }

        // When sending formData, you don't need to specify content-type, axios will set it automatically
        axios.post('http://localhost:8080/post/dbb', formData)
         .then(result => {
             console.log(result.data);
             if(result.data === 'Already Added'){
                alert("Already added!");
             } else {
                alert('Student Added Successfully!');
             }
         })
         .catch(err => console.log(err));
    };

    return (
        <div className='student-container'>
            <div className='Student-heading'> Add Student</div>
            
            <div className='input'>
            <input placeholder=' Enter Student Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            
            <div className='input'>
            <input placeholder=' Enter Student ID' value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            {/* Ensure you are setting doc to the first file selected */}
            <div className='input'>
            <input type='file' onChange={(e) => setDoc(e.target.files[0])}/>
            </div>
            <button className='submit' type='submit' onClick={handleSubmit}> Submit </button>
        </div>
    );
}