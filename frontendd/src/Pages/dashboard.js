// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Dashbord() {
//     const [students , setStudents] = useState([])
//     useEffect(()=>{
//         getStudent()
//     }, [])

//     const getStudent = ()=>{
//         try {
//             const response = axios.get('http://localhost:8080/get/students')
//             console.log(response)
//             setStudents(response.data)
//         } catch (err) {
//             console.log(err)
//         }

//     }

//   return (
//     <div>
//         <div >
//         <table>
//       <tr >
//        <td >Student name</td>
//    <td>Id</td>
//       <td>File</td>
//       </tr>
//       <tbody>
//      {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.name}</td>
//               <td>{student.id}</td>
//               <td>{student._file}</td>
//             </tr>
//           ))}
//         </tbody>
                    

                   
//        </table>
//       </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../Components/Popup';

export default function Dashboard() {
    const [students, setStudents] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [currentStudent, setCurrentStudent] = useState({ name: '', id: '' });

    useEffect(() => {
        getStudent();
    }, []);

    const getStudent = async () => {
        try {
            const response = await axios.get('http://localhost:8080/get/students');
            setStudents(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const remStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/get/remove/${id}`);
            getStudent();
        } catch (err) {
            console.log(err);
        }
    };

    const handleEditClick = (student) => {
        setCurrentStudent({ name: student.name, id: student.id });
        setButtonPopup(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/post/update/${currentStudent.id}`, {
                name: currentStudent.name,
                id: currentStudent.id
            });

            if (response.data === 'Already Updated') {
                alert('Already Up to Date');
            } else {
                alert('Student Details Updated!');
                getStudent(); // Refresh the list to show the updated info
            }
            setButtonPopup(false); // Close the popup after updating
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Student name</th>
                        <th>Id</th>
                        <th>File</th>
                        <th>Remove/Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.id}</td>
                            <td>{student._file}</td>
                            <td>
                                <button onClick={() => remStudent(student.id)}>Delete Student</button>
                                <button onClick={() => handleEditClick(student)}>Edit Student</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {buttonPopup && (
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h1> Edit Student Details</h1>
                    <div>
                        <input
                            placeholder='Name'
                            value={currentStudent.name}
                            onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Student ID'
                            value={currentStudent.id}
                            onChange={(e) => setCurrentStudent({ ...currentStudent, id: e.target.value })}
                            disabled // Making ID input disabled to prevent ID change
                        />
                    </div>
                    <div>
                        <button type='submit' onClick={handleUpdate}> Submit </button>
                    </div>
                </Popup>
            )}
        </div>
    );
}


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Popup from '../Components/Popup'

// export default function Dashboard() {
//     const [students, setStudents] = useState([]);

//     useEffect(() => {
//         getStudent();
//     }, []);

//     const getStudent = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/get/students');
//             setStudents(response.data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const remStudent = async (id)=>{
//         try{
//             await axios.delete(`http://localhost:8080/get/remove/${id}`)
//             getStudent()
//         }
//         catch (err) {
//             console.log(err)
//         }
//     }

//     // const updateStudent = async (id)=>{
//     //     try{
//     //         console.log(await axios.put(`http://localhost:8080/get/update/${id}`))
//     //         getStudent()
//     //     }
//     //     catch (err){
//     //         console.log(err)
//     //     }
//     // }

//     // const editStudent = async (id)=>{
//     //     try {
//     //         await axios.put(`http://localhost:8080/get/update/${id}`)
//     //         getStudent()
//     //     } catch (err) {
            
//     //     }
//     // }

//     const [buttonPopup, setButtonPopup] = useState(false)

//     const [names, setNames] = useState('')
//     const [idd, setIdd] = useState('')

//     const handlesubmit2 = async(e) => {

//         console.log(names,idd)
//         e.preventDefault()

//         // const formData = new FormData()

//         // formData.append('name' , names)
//         // formData.append('id',idd)

//         axios.put(`http://localhost:8080/post/update/${idd}`, {names,idd})
//             .then(result =>{
//                 if(result.data === 'Already Updated'){
//                     alert('Already UptoDated')
//                     console.log(idd)
//                 }else{
//                     alert('Student Details Updated!')
//                 }
//             })
//             .catch(err=> console.log(err))

//     }

//     // const hand = async(idd)=>{
//     //     console.log(idd)
//     // }

//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Student name</th>
//                         <th>Id</th>
//                         <th>File</th>
//                         <th>Remove</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map((student) => (
//                         <tr key={student.id}>
//                             <td>{student.name}</td>
//                             <td>{student.id}</td>
//                             <td>{student._file}</td>
//                             <td>
//                                 <button onClick={() =>remStudent(student.id)}>Delete Student</button>
//                                 {/* <button onClick={()=> <Popup trigger={<button> Trigger </button>} position={'bottom center'}>
//                                     <div>
//                                         <div>
//                                         <input placeholder='name'/>
//                                         </div>
//                                         <div>
//                                             wefffwefwfsfsafswqhqeqerrhnedfawhwbxcvsvbgeah \n gsgsafwqtawgAVV
//                                         </div>
//                                     </div>
//                                 </Popup>}> Edit details</button> */}
                                
//                                 <button onClick={()=>setButtonPopup(true) }>Edit Students</button>
//                                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
//                                     <h1> Edit Student Details</h1>
//                                     <div>
//                                     <input placeholder='  Name' value={names} onChange={(e) => setNames(e.target.value)}/>
//                                     </div>
//                                     <div>
//                                     <input placeholder='  Student ID' value={idd} onChange={(e) => setIdd(e.target.value)}/>
//                                     </div>
//                                     <div>
//                                         <button type='submit' onClick={handlesubmit2}> Submit </button>
//                                     </div>
//                                 </Popup>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
