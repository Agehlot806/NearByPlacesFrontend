// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Particles from './particles'
// import { Link } from 'react-router-dom'

// function resetpassword(props) {
//     const [newPassword, setNewPassword] = useState(""); 

//     useEffect(() => {
//         // Check if the token is valid
//         const token = props.match.params.token;
//         axios
//           .get(`/api/check-token/${token}`)
//           .then((response) => {
//             console.log(response);
//           })
//           .catch((error) => {
//             console.log(error);
//             // Redirect the user to a login page
//             // props.history.push("/login");
//           });
//       }, [props]);
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
    
//         // Make an API request to reset the password
//         const token = props.match.params.token;
//         axios
//           .post(`https://nearbyplaceadminpanner.onrender.com/api/v1/resetpassword/:token${token}`, { newPassword })
//           .then((response) => {
//             console.log(response);
//             // Redirect the user to a success page
//             props.history.push("/reset-password-success");
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };
//     return (
//         <>
//             <Particles />
//             <div className='login-area section-padding'>
//                 <div className='container'>
//                     <div className='row justify-content-center'>
//                         <div className='col-lg-6'>
//                             <div className='login-box mt-5 mb-5'>
//                                 <form onSubmit={handleSubmit}>

//                                     <div className='text-center'>
//                                         <h3 className="animate-charcter">Reset Your New Password</h3>
//                                     </div>
//                                     <div className="form-group">
//                                         <input type="password" className="form-control" placeholder="Enter New Password"
//                                          value={newPassword}
//                                          onChange={(event) => setNewPassword(event.target.value)}/>
//                                     </div>
//                                     <button type="submit" className="login-btn">Submit</button>
//                                     <div className="additional-link"><Link to="/">Login Now</Link></div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default resetpassword