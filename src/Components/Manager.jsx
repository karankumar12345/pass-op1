// import React, { useEffect, useRef, useState } from "react";
// import "./manger.css";
// import { v4 as uuidv4 } from 'uuid';
// // import React from "react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// function Manager() {
//   const ref = useRef();
//   const [form, setForm] = useState({ site: "", username: "", password: "" });
//   const [passwordArray, setPasswordArray] = useState([]);
//   const getPassword=async()=>{
//     let req=await fetch("http://localhost:8080/")
//     // let passwords = localStorage.getItem("passwords");
//     let passwords = await req.json()

//     console.log(passwords)
//       setPasswordArray(passwords);

//   }
//   useEffect(() => {
//     getPassword()

//   }, []);
//   // const showpassword = () => {
//   //   if (
//   //     ref.current.src ==
//   //     "https://icon-library.com/images/icon-eye/icon-eye-8.jpg"
//   //   ) {
//   //     ref.current.src =
//   //       "https://tse2.mm.bing.net/th?id=OIP.GlNKorhe2IUnJS85kNM1GgHaD5&pid=Api&P=0&h=220";
//   //     ref.current.className = "h-5 p-1";
//   //   } else {
//   //     ref.current.src =
//   //       "https://icon-library.com/images/icon-eye/icon-eye-8.jpg";
//   //     ref.current.className = "h-8 p-1 ";
//   //   }
//   // };
//   const showpassword = () => {
//     const passwordInput = document.getElementById("passwordInput");
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         // ref.current.src("https://icon-library.com/images/icon-eye/icon-eye-8.jpg")
//         // Change input type to text to show password
//     } else {
//         passwordInput.type = "password"; 
//         // Change input type back to password to hide password
//         // ref.current.src( "https://tse2.mm.bing.net/th?id=OIP.GlNKorhe2IUnJS85kNM1GgHaD5&pid=Api&P=0&h=220")
//     }
// };



//   const savepassword = async () => {
//     try {
//         // Send POST request to server
//         let res = await fetch("http://localhost:8080/", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ ...form, id: uuidv4() })
//         });
//         if (res.ok) {
//             // Password successfully saved to the server
//             setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
//             // Optionally clear form fields
//             // setForm({ site: "", username: "", password: "" });
//         } else {
//             // Handle server error
//             console.error('Error saving password:', res.statusText);
//             // Display an error message to the user
//         }
//     } catch (error) {
//         console.error('Error saving password:', error);
//         // Handle network error
//         // Display an error message to the user
//     }
// };
// // const savepassword = async () => {
// //   try {
// //       // Send a POST request to the server to save the password
// //       const res = await fetch("http://localhost:8080/", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(form) // Send the form data to the server
// //       });

// //       if (res.ok) {
// //           // If the request is successful, retrieve the saved password data from the response
// //           const savedPassword = await res.json();

// //           // Update the passwordArray state with the saved password
// //           setPasswordArray([...passwordArray, savedPassword]);

// //           // Reset the form fields
// //           setForm({ site: "", username: "", password: "" });

// //           // Display a success message
// //           toast.success('Password saved successfully!');
// //       } else {
// //           // If the request is not successful, throw an error
// //           throw new Error('Failed to save password');
// //       }
// //   } catch (error) {
// //       // Catch any errors that occur during the save operation
// //       console.error('Error saving password:', error);
// //       toast.error('Error saving password. Please try again later.');
// //   }
// // };








// const deletePassword = async (id) => {
// // eslint-disable-next-line no-restricted-globals
// let c = confirm("Do you want to delete the password?");

//   try {
//       if (c) {
//           // Make DELETE request to server
//           let res = await fetch(`http://localhost:8080/`, {
//               method: "DELETE",
//               headers: { "Content-Type": "application/json" },
//           });
//           if (res.ok) {
//               // Password successfully deleted from the server
//               setPasswordArray(passwordArray.filter(item => item.id !== id));
//               toast('🦄 Delete ', {
//                   position: "top-right",
//                   autoClose: 5000,
//                   hideProgressBar: false,
//                   closeOnClick: true,
//                   pauseOnHover: true,
//                   draggable: true,
//                   progress: undefined,
//                   theme: "light",
//                   transition: "Bounce"
//               });
//           } else {
//               // Handle server error
//               console.error('Error deleting password:', res.statusText);
//               // Display an error message to the user
//           }
//       }
//   } catch (error) {
//       console.error('Error deleting password:', error);
//       // Handle network error
//       // Display an error message to the user
//   }
// };



// const editPassword = (id) => {
//   // Find the password to be edited by its ID
//   const passwordToEdit = passwordArray.find(item => item.id === id);
//   if (passwordToEdit) {
//       // Populate the form fields with the data of the password to be edited
//       setForm({ ...passwordToEdit });
//       // Remove the password being edited from the passwordArray
//       setPasswordArray(passwordArray.filter(item => item.id !== id));
//   }
// };


//   const handlechange = (e) => {
//     // Assuming form is an array or an object
//     setForm({ ...form, [e.target.name]: e.target.value });
    
//   };
//   const copyText = (text) => {
//     toast('🦄 Copied ', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: "Bounce"
//       });
//     navigator.clipboard.writeText(text);
//   };

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         transition="Bounce"
//       />
//       {/* Same as */}
//       <ToastContainer />
//       <div class="boxing">
//         <div className="mx-auto bg-slate-80  mycontainer">
//           <h1 className="font-bold text-2xl  text-center ">
//             <span className="text-green-700"> &lt;</span>
//             PassOP  
         
//             <span className="text-green-700"> /&gt;</span>
//             <div className="h-1000px w-1000px">
//             <lord-icon
//     src="https://cdn.lordicon.com/jxjfjyri.json"
//     trigger="hover"
//     // style="width:1150px;height:1150px"
//     >
// </lord-icon>
//         </div>
//           </h1>
//           <p className="text-lg text-center">Your own password manager </p>

//           <div className="flex flex-col p-4 text-black gap-8 items-center">
//             <input
//               name="site"
//               onChange={handlechange}
//               value={form.site}
//               placeholder="Enter Website URL"
//               className="rounded-full border border-green-500 w-full p-4 py-1"
//               type="text"
//             />

//             <div className="flex w-full justify-between gap-3">
//               <input
//                 name="username"
//                 onChange={handlechange}
//                 value={form.username}
//                 placeholder="Enter Username"
//                 className="rounded-full border border-green-500 w-full p-4 py-1"
//                 type="text"
//               />
//               <div className="relative ">
//                 <input
//                 id="passwordInput"
//                   name="password"
//                   onChange={handlechange}
//                   value={form.password}
//                   placeholder="Enter PassWord"
//                   className="rounded-full border border-green-500  p-4 py-1"
//                   type="text"
//                 />
//               <span
//     className="absolute right-[5px] top-[6px] cursor-pointer"
//     onClick={showpassword}
// >
// <lord-icon
//     src="https://cdn.lordicon.com/fmjvulyw.json"
//     trigger="hover"
//     // tyle="width:250px;height:250px"
//     >
// </lord-icon>
// </span>
//               </div>
//             </div>
//             <button
//               onClick={savepassword}
//               className=" w-fit flex gap-2 justify-center text-lg py-2 px-4 rounded-full bg-green-500 text-white hover:bg-red-400"
//             >
//               <lord-icon
//                 src="https://cdn.lordicon.com/hqymfzvj.json"
//                 trigger="hover"
//               ></lord-icon>
//               Add Password
//             </button>
//           </div>
//         </div>
//         <div className="passwords">
//           <h2>Your Password</h2>

//           <table className="table-auto w-full rounded-xl overflow-hidden">
//             <thead className="bg-green-600">
//               <tr>
//                 <th className="py-2 text-center">Site</th>
//                 <th className="py-2 text-center">UserName</th>
//                 <th className="py-2 text-center">Password</th>
//                 <th className="py-2 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody className="bg-green-100 text-black">
//               {passwordArray.map((item, index) => (
//                 <tr key={index}>
//                   <td className="flex items-center justify-center py-2 text-center">
//                     <a href={item.site}>{item.site}</a>
//                     <lord-icon
//                       onClick={() => copyText(item.site)}
//                       src="https://cdn.lordicon.com/lyrrgrsl.json"
//                       trigger="hover"
//                       role="button"
//                       tabIndex="0"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         marginLeft: "5px",
//                       }}
//                     ></lord-icon>
//                   </td>
//                   <td className="  py-2 text-center">
//                    <div className="flex justify-center items-center ">
                
//                     <span> {item.username}</span>
                
//                  <div className="lordiconcopy size-7 cursor-pointer"    onClick={() => copyText(item.username)} >
//                  <lord-icon
                  
//                       src="https://cdn.lordicon.com/lyrrgrsl.json"
//                       trigger="hover"
//                       role="button"
//                       tabIndex="0"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         marginLeft: "5px",
//                       }}
//                     ></lord-icon>
//                  </div>
//                  </div>
//                   </td>
//                   <td className="  py-2 text-center">
//                    <div className="flex justify-center items-center ">
                
//                     <span>     {item.password}</span>
                
//               <div className="mx-1">
//                     <lord-icon
//                       onClick={() => copyText(item.password)}
//                       src="https://cdn.lordicon.com/lyrrgrsl.json"
//                       trigger="hover"
//                       role="button"
//                       tabIndex="0"
//                       style={{
//                         width: "24px",
//                         height: "24px",
//                         marginLeft: "5px",
//                       }}
//                     ></lord-icon>
//                     </div>
//                     </div>
//                   </td>
//                   <td className="  py-2 text-center">
//                   <div className="flex justify-center items-center ">
//               <div className="mx-1" onClick={()=>{editPassword(item.id)}}>
//               <lord-icon
//     src="https://cdn.lordicon.com/wuvorxbv.json"
//     trigger="hover"
//     // style="width:250px;height:250px"
//     >
// </lord-icon>
//               </div>
//               <div className="mx-1" onClick={()=>{deletePassword(item.id)}}>

            
//                     <lord-icon
//     src="https://cdn.lordicon.com/skkahier.json"
//     trigger="hover"
//     // style="width:250px;height:250px"
//     >
// </lord-icon>
// </div>
// </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Manager;



import React, { useEffect, useRef, useState } from "react";
import "./manger.css";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Manager() {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getPassword = async () => {
    let req = await fetch("http://localhost:8080/");
    let passwords = await req.json();
    setPasswordArray(passwords);
  };

  useEffect(() => {
    getPassword();
  }, []);

  const showPassword = () => {
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  const savePassword = async () => {
    try {
      let res = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, id: uuidv4() })
      });
      if (res.ok) {
        let savedPassword = await res.json();
        setPasswordArray([...passwordArray, savedPassword]);
        setForm({ site: "", username: "", password: "" });
        toast.success('Password saved successfully!');
      } else {
        throw new Error('Failed to save password');
      }
    } catch (error) {
      console.error('Error saving password:', error);
      toast.error('Error saving password. Please try again later.');
    }
  };
  //   const savePassword = async() => {
  //   setPasswordArray([...passwordArray,{...form,id:uuidv4()}]);
  //   let res=await fetch("http://http://localhost:8080/",{method:"POST",headers:{"Content-Type":"application/json"},
  //   // localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form,id:uuidv4()}]));
  //   // setForm({site: "", username: "", password: ""})
  // body:JSON.stringify({...form,id:uuidv4()})})
  // };

  const deletePassword = async (id) => {
    let c = window.confirm("Do you want to delete the password?");
    if (!c) return;
    try {
      let res = await fetch(`http://localhost:8080/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        setPasswordArray(passwordArray.filter(item => item.id !== id));
        toast('🦄 Delete ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: "Bounce"
        });
      } else {
        console.error('Error deleting password:', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting password:', error);
    }
  };

  const editPassword = (id) => {
    const passwordToEdit = passwordArray.find(item => item.id === id);
    if (passwordToEdit) {
      setForm({ ...passwordToEdit });
      setPasswordArray(passwordArray.filter(item => item.id !== id));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast('🦄 Copied ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce"
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <div className="boxing">
        <div className="mx-auto bg-slate-80 mycontainer">
          <h1 className="font-bold text-2xl text-center">
            <span className="text-green-700"> &lt;</span>
            PassOP  
            <span className="text-green-700"> /&gt;</span>
            <div className="h-1000px w-1000px">
              <lord-icon
                src="https://cdn.lordicon.com/jxjfjyri.json"
                trigger="hover"
              >
              </lord-icon>
            </div>
          </h1>
          <p className="text-lg text-center">Your own password manager</p>

          <div className="flex flex-col p-4 text-black gap-8 items-center">
            <input
              name="site"
              onChange={handleChange}
              value={form.site}
              placeholder="Enter Website URL"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
            />

            <div className="flex w-full justify-between gap-3">
              <input
                name="username"
                onChange={handleChange}
                value={form.username}
                placeholder="Enter Username"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
              />
              <div className="relative">
                <input
                  id="passwordInput"
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                  placeholder="Enter Password"
                  className="rounded-full border border-green-500 p-4 py-1"
                  type="text"
                />
                <span
                  className="absolute right-[5px] top-[6px] cursor-pointer"
                  onClick={showPassword}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                  >
                  </lord-icon>
                </span>
              </div>
            </div>
            <button
              onClick={savePassword}
              className="w-fit flex gap-2 justify-center text-lg py-2 px-4 rounded-full bg-green-500 text-white hover:bg-red-400"
            >
              <lord-icon
                src="https://cdn.lordicon.com/hqymfzvj.json"
                trigger="hover"
              >
              </lord-icon>
              Add Password
            </button>
          </div>
        </div>
      
        <div className="passwords">
  <h2 className="text-center text-lg font-semibold">Your Password</h2>

  <div className="overflow-x-auto flex justify-center">
    <table className="table-auto w-full  rounded-xl">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="py-2 px-4 text-center">Site</th>
          <th className="py-2 px-4 text-center">UserName</th>
          <th className="py-2 px-4 text-center">Password</th>
          <th className="py-2 px-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="bg-green-100 text-black">
        {passwordArray.map((item, index) => (
          <tr key={index}>
            <td className="py-2 px-4 text-center">
            <div className="flex justify-center items-center">
              <a href={item.site}>{item.site}</a>
              <lord-icon
                onClick={() => copyText(item.site)}
                src="https://cdn.lordicon.com/lyrrgrsl.json"
                trigger="hover"
                role="button"
                tabIndex="0"
                className="inline-block w-6 h-6 ml-2 cursor-pointer"
              />
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center items-center">
                <span>{item.username}</span>
                <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.username)}>
                  <lord-icon
                    src="https://cdn.lordicon.com/lyrrgrsl.json"
                    trigger="hover"
                    role="button"
                    tabIndex="0"
                    className="w-6 h-6 ml-2 cursor-pointer"
                  />
                </div>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center items-center">
                <span>{item.password}</span>
                <div className="mx-1" onClick={() => copyText(item.password)}>
                  <lord-icon
                    src="https://cdn.lordicon.com/lyrrgrsl.json"
                    trigger="hover"
                    role="button"
                    tabIndex="0"
                    className="w-6 h-6 ml-2 cursor-pointer"
                  />
                </div>
              </div>
            </td>
            <td className="py-2 px-4 text-center">
              <div className="flex justify-center items-center">
                <div className="mx-1" onClick={() => editPassword(item.id)}>
                  <lord-icon
                    src="https://cdn.lordicon.com/wuvorxbv.json"
                    trigger="hover"
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
                <div className="mx-1" onClick={() => deletePassword(item.id)}>
                  <lord-icon
                    src="https://cdn.lordicon.com/skkahier.json"
                    trigger="hover"
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

</div>
    </>
  );
}

export default Manager;
















//   const deletePassword = async(id) => {
//     // alert("delete")
//   // eslint-disable-next-line no-restricted-globals
// let c = confirm("do you want to delete a password ");

//     if(c){
//       setPasswordArray(passwordArray.filter(item=>item.id!==id));
//       // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
//       let res=await fetch("http://http://localhost:8080/",{method:"DELETE",headers:{"Content-Type":"application/json"},

//     body:JSON.stringify({id})})
//       toast('🦄 Delete ', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: "Bounce"
//         });
//     }


//   };
  // const savepassword = async() => {
  //   setPasswordArray([...passwordArray,{...form,id:uuidv4()}]);
  //   let res=await fetch("http://http://localhost:8080/",{method:"POST",headers:{"Content-Type":"application/json"},
  //   // localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form,id:uuidv4()}]));
  //   // setForm({site: "", username: "", password: ""})
  // body:JSON.stringify({...form,id:uuidv4()})})
  // };