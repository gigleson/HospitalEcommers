// import React, { useEffect, useState } from "react";
// import SidebarMenu from "./sidebar.tsx";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// const AdminProduct = () => {
//     const [search, setSearch] = useState('');
//     const navigate = useNavigate();

//     // Add Items modal
//     const [modal, setModal] = useState(false);

//     const toggleItemModal = () => {
//         if (modal) {
//             reset(); // Reset the form
//         }
//         setModal(!modal); // Toggle the modal
//     };

//     if (modal) {
//         document.body.classList.add('active-modal');
//     } else {
//         document.body.classList.remove('active-modal');
//     }

//     // GSAP cdn for animation
//     useEffect(() => {
//         if (modal) {
//             // Add your GSAP animation here if needed
//         }
//     }, [modal]);

//     const location = useLocation(); // Use useLocation to get the current location
//     const currentLocation = location.pathname;

//     const { register, handleSubmit, formState, reset } = useForm();
//     const { errors } = formState;

//     const useApiCall = useMutation({
//         mutationKey: ["POST_ITEM_DATA"],
//         mutationFn: (payload) => axios.post("http://localhost:8080/product/save", payload),
//         onSuccess: () => {
//             reset();
//             refetch();
//         }
//     });

//     const onSubmit = (value) => {
//         const fd = new FormData();
//         fd.append("itemName", value?.productName);
//         fd.append("itemPrice", value?.productPrice);
//         fd.append("categoryId", value?.categoryId);
//         fd.append("itemImage", value?.productImage[0]);
//         useApiCall.mutate(fd);
//     };

//     const { data, refetch } = useQuery({
//         queryKey: ["GET_ITEM_DATA"],
//         queryFn: () => axios.get("http://localhost:8081/product/getAll")
//     });

//     const filteredItemData = data?.data.filter((product) =>
//         product.productName.toLowerCase().includes(search.toLowerCase()) ||
//         product.id.toString().includes(search.toLowerCase()) ||
//         product.category?.name.toLowerCase().includes(search.toLowerCase())
//     );

//     const deleteByIdApi = useMutation({
//         mutationKey: ["DELETE_ITEM_BY_ID"],
//         mutationFn: (id) => axios.delete("http://localhost:8081/product/delete/" + id),
//         onSuccess: () => refetch()
//     });

//     return (
//         <div>
//             <div className={"add-item-page"}>
//                 <div className={"itempage-left"}>
//                     <SidebarMenu activePage={currentLocation} />
//                 </div>

//                 <div className={"itempage-right"}>
//                     <header className={"itempage-header"}>
//                         <h1>Products</h1>

//                         <div className={"search-wrapper2"}>
//                             <span>Search</span>
//                             <input type={"search"} placeholder={"Search Products"} value={search} onChange={(e) => setSearch(e.target.value)} />
//                         </div>
//                     </header>

//                     <div className={"item-main-content"}>
//                         <div className={"i-main-content"}>
//                             <div className={"btn3"}>
//                                 <button type={"button"} onClick={toggleItemModal}><span>Add</span></button>
//                             </div>

//                             <div className={"table-container3"}>
//                                 <div className={"card-body3"}>
//                                     <table className={"table-bordered3"}>
//                                         <thead>
//                                             <tr>
//                                                 <th className={"id-box3"}>Id</th>
//                                                 <th className={"name-box3"}>Name</th>
//                                                 <th className={"category-box3"}>Category</th>
//                                                 <th className={"image-box3"}>Image</th>
//                                                 <th className={"price-box3"}>Price</th>
//                                                 <th className={"action-box3"}>Action</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredItemData
//                                                 ?.sort((a, b) => a.id - b.id)
//                                                 .map((i) => {
//                                                     return (
//                                                         <tr key={i?.id}>
//                                                             <td>{i?.id}</td>
//                                                             <td>{i?.productName}</td>
//                                                             <td>{i?.category?.name}</td>
//                                                             <td style={{ display: "flex", justifyContent: "center" }}>
//                                                                 <img src={'data:image/jpeg;base64,' + i?.productImage} width={"45px"} alt="product-img" />
//                                                             </td>
//                                                             <td>{i?.productPrice}</td>
//                                                             <td>
//                                                                 <button className={"edit-btn3"} onClick={() => {
//                                                                     navigate("/editItem/" + i?.id);
//                                                                 }}>Edit
//                                                                 </button>
//                                                                 <button className={"delete-btn3"} onClick={() => {
//                                                                     if (window.confirm("Are you sure you want to delete this category?")) {
//                                                                         deleteByIdApi.mutate(i?.id);
//                                                                     }
//                                                                 }}>Delete
//                                                                 </button>
//                                                             </td>
//                                                         </tr>
//                                                     )
//                                                 })
//                                             }
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {modal && (
//                 <div className="add-item-modal">
//                     <div onClick={toggleItemModal} className="add-item-overlay"></div>
//                     <div className="add-item-modal-content">
//                         <h2>Add Item</h2>
//                         <button className="close-add-item-btn" onClick={toggleItemModal}>
//                             Close
//                         </button>

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className={"select-category"}>
//                                 <label>Category</label>
//                                 <select id={"category-option"} {...register("categoryId", { required: true })}>
//                                     <option>Select a Category</option>
//                                     {data &&
//                                         data.data.map((category) => (
//                                             <option key={category.id} value={category.id}>
//                                                 {category.name}
//                                             </option>
//                                         ))}
//                                 </select>
//                             </div>
//                             <div className={"item-name"}>
//                                 <label>Item Name</label>
//                                 <input type={"text"} placeholder={"Enter item Name"} {...register("productName", { required: "Item Name is required!!" })} />
                             
//                             </div>
//                             <div className={"item-price"}>
//                                 <label>Price</label>
//                                 <input type={"number"} placeholder={"Enter the Price"} {...register("productPrice", { required: "Price is required!!" })} />
                            
//                             </div>
//                             <div className={"item-image"}>
//                                 <label>Image</label>
//                                 <span>
//                                     <input type={"file"} {...register("productImage", { required: "Item Image is required!!" })} />
                                   
//                                 </span>
//                             </div>

//                             <div className={"item-name-add-btn"}>
//                                 <button type={"submit"}>Add</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminProduct;
// import React, { useEffect, useState } from "react";
// import SidebarMenu from "./sidebar.tsx";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// const AdminProduct = () => {
//   const [search, setSearch] = useState('');
//   const navigate = useNavigate();

//   // Add Items modal
//   const [modal, setModal] = useState(false);

//   const toggleItemModal = () => {
//     if (modal) {
//       reset(); // Reset the form
//     }
//     setModal(!modal); // Toggle the modal
//   };

//   if (modal) {
//     document.body.classList.add('active-modal');
//   } else {
//     document.body.classList.remove('active-modal');
//   }

//   // GSAP cdn for animation
//   useEffect(() => {
//     if (modal) {
//       // Add your GSAP animation here if needed
//     }
//   }, [modal]);

//   const location = useLocation(); // Use useLocation to get the current location
//   const currentLocation = location.pathname;

//   const { register, handleSubmit, formState, reset } = useForm();
//   const { errors } = formState;

//   const useApiCall = useMutation({
//     mutationKey: ["POST_ITEM_DATA"],
//     mutationFn: (payload) => axios.post("http://localhost:8082/product/save", payload),
//     onSuccess: () => {
//       reset();
//       refetch();
//     }
//   });

//   // const onSubmit = (value) => {
//   //   // const fd = new FormData();
//   //   // fd.append("itemName", value?.productName);
//   //   // fd.append("itemPrice", value?.productPrice);
//   //   // fd.append("categoryId", value?.categoryId);
//   //   // fd.append("itemImage", value?.productImage[0]);
//   //   // useApiCall.mutate(fd);
//   // };

//   const { data, refetch } = useQuery({
//     queryKey: ["GET_ITEM_DATA"],
//     queryFn: () => axios.get("http://localhost:8082/product/getAll")
//   });

//   const filteredItemData = data?.data.filter((product) =>
//     product.productName.toLowerCase().includes(search.toLowerCase()) ||
//     product.id.toString().includes(search.toLowerCase()) ||
//     product.category?.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const deleteByIdApi = useMutation({
//     mutationKey: ["DELETE_ITEM_BY_ID"],
//     mutationFn: (id) => axios.delete("http://localhost:8082/product/delete/" + id),
//     onSuccess: () => refetch()
//   });

//   const [categories, setCategories] = useState([]);

//   const fetchCategories = async () => {
//       try {
//           const response = await axios.get('http://localhost:8082/category/getAll');
//           setCategories(response.data);
//           console.log('Fetched Categories:', response.data);
//       } catch (error) {
//           console.error('Error fetching categories:', error);
//       }
//   };


//   useEffect(() => {
//       fetchCategories();
//   }, []);

  
//   const [dummyData, setDummyData] = useState([
//     {
//       id: 1,
//       productName: "Dummy Product 1",
//       category: { name: "Category A" },
//       productImage: "dummy_image_1",
//       productPrice: 19.99,
//     },
//     {
//       id: 2,
//       productName: "Dummy Product 2",
//       category: { name: "Category B" },
//       productImage: "dummy_image_2",
//       productPrice: 29.99,
//     },
//     // Add more dummy data as needed
//   ]);
//   const onSubmit = (value) => {
//     // Create a new dummy item based on the form values
//     const newDummyItem = {
//       id: dummyData.length + 1,
//       productName: value.productName,
//       category: { name: categories.find((c) => c.id === Number(value.categoryId))?.name || "Unknown Category" },
//       productImage: "dummy_image_new",
//       productPrice: Number(value.productPrice),
//     };
  
//     // Update the dummy data directly
//     setDummyData([...dummyData, newDummyItem]);
    
//     // Close the modal
//     toggleItemModal();
//   };
  


//   return (
//     <div className="flex h-screen">
//       <SidebarMenu />

//       <div className="flex-grow overflow-hidden">
//         <div className={"add-item-page"}>
//           <header className={"itempage-header"}>
//             <h1 className="text-2xl font-semibold">Products</h1>

//             <div className={"search-wrapper2"}>
//               <span>Search</span>
//               <input type={"search"} placeholder={"Search Products"} value={search} onChange={(e) => setSearch(e.target.value)} />
//             </div>
//           </header>

//           <div className={"item-main-content"}>
//             <div className={"i-main-content"}>
//               <div className={"btn3"}>
//                 <button type={"button"} onClick={toggleItemModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
//                   <span>Add</span>
//                 </button>
//               </div>

//               <div className={"table-container3"}>
//                 <div className={"card-body3"}>
//                   <table className={"table-bordered3 w-full"}>
//                     <thead>
//                       <tr>
//                         <th className={"id-box3"}>Id</th>
//                         <th className={"name-box3"}>Name</th>
//                         <th className={"category-box3"}>Category</th>
//                         <th className={"image-box3"}>Image</th>
//                         <th className={"price-box3"}>Price</th>
//                         <th className={"action-box3"}>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredItemData
//                         ?.sort((a, b) => a.id - b.id)
//                         .map((i) => {
//                           return (
//                             <tr key={i?.id}>
//                               <td>{i?.id}</td>
//                               <td>{i?.productName}</td>
//                               <td>{i?.category?.name}</td>
//                               <td style={{ display: "flex", justifyContent: "center" }}>
//                                 <img src={'data:image/jpeg;base64,' + i?.productImage} width={"45px"} alt="product-img" className="rounded-md" />
//                               </td>
//                               <td>{i?.productPrice}</td>
//                               <td>
//                                 <button className={"edit-btn3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md"} onClick={() => navigate("/editItem/" + i?.id)}>
//                                   Edit
//                                 </button>
//                                 <button className={"delete-btn3 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"} onClick={() => {
//                                   if (window.confirm("Are you sure you want to delete this category?")) {
//                                     deleteByIdApi.mutate(i?.id);
//                                   }
//                                 }}>
//                                   Delete
//                                 </button>
//                               </td>
//                             </tr>
//                           )
//                         })
//                       }
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {modal && (
//           <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
//             <div onClick={toggleItemModal} className="add-item-overlay fixed inset-0 bg-black opacity-50"></div>
//             <div className="add-item-modal-content fixed z-10">
//               <h2 className="text-2xl font-semibold">Add Item</h2>
//               <button className="close-add-item-btn" onClick={toggleItemModal}>
//                 Close
//               </button>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className={"select-category mb-4"}>
//                   <label className="block text-sm font-medium text-gray-600">Category</label>
//                   <select id={"category-option"} {...register("categoryId", { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400">
//                     <option>Select a Category</option>
//                     {categories &&
//                       categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.name}
//                         </option>
//                       ))}
//                   </select>
//                   {errors.categoryId && <span className="text-red-500 text-sm">Category is required!!</span>}
//                 </div>
//                 <div className={"item-name mb-4"}>
//                   <label className="block text-sm font-medium text-gray-600">Item Name</label>
//                   <input type={"text"} placeholder={"Enter item Name"} {...register("productName", { required: "Item Name is required!!" })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
//                   {errors.productName && <span className="text-red-500 text-sm">{errors.productName.message}</span>}
//                 </div>
//                 <div className={"item-price mb-4"}>
//                   <label className="block text-sm font-medium text-gray-600">Price</label>
//                   <input type={"number"} placeholder={"Enter the Price"} {...register("productPrice", { required: "Price is required!!" })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
//                   {errors.productPrice && <span className="text-red-500 text-sm">{errors.productPrice.message}</span>}
//                 </div>
//                 <div className={"item-image mb-4"}>
//                   <label className="block text-sm font-medium text-gray-600">Image</label>
//                   <span>
//                     <input type={"file"} {...register("productImage", { required: "Item Image is required!!" })} className="focus:outline-none" />
//                   </span>
//                   {errors.productImage && <span className="text-red-500 text-sm">{errors.productImage.message}</span>}
//                 </div>

//                 <div className={"item-name-add-btn"}>
//                   <button type={"submit"} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
//                     Add
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProduct;



import React, { useEffect, useState } from "react";
import SidebarMenu from "./sidebar.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminProduct = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Add Items modal
  const [modal, setModal] = useState(false);

  const toggleItemModal = () => {
    if (modal) {
      reset(); // Reset the form
    }
    setModal(!modal); // Toggle the modal
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // GSAP cdn for animation
  useEffect(() => {
    if (modal) {
      // Add your GSAP animation here if needed
    }
  }, [modal]);

  const location = useLocation(); // Use useLocation to get the current location
  const currentLocation = location.pathname;

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      // Simulate fetching categories (replace with your actual logic)
      const dummyCategories = [
        { id: 1, name: "Masks " },
        { id: 2, name: "Gloves" },
        // Add more dummy categories as needed
      ];
      setCategories(dummyCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [dummyData, setDummyData] = useState([
   
    // Add more dummy data as needed
  ]);

  const onSubmit = (value) => {
    // Create a new dummy item based on the form values
    const newDummyItem = {
      id: dummyData.length + 1,
      productName: value.productName,
      category: { name: categories.find((c) => c.id === Number(value.categoryId))?.name || "Unknown Category" },
      productImage: "dummy_image_new",
      productPrice: Number(value.productPrice),
    };

    // Update the dummy data directly
    setDummyData([...dummyData, newDummyItem]);

    // Close the modal
    toggleItemModal();
  };

  const onDelete = (id) => {
    // Filter out the item with the specified id
    const updatedDummyData = dummyData.filter((item) => item.id !== id);

    // Update the dummy data
    setDummyData(updatedDummyData);
  };

  return (
    <div className="flex h-screen">
      <SidebarMenu />

      <div className="flex-grow overflow-hidden">
        <div className={"add-item-page"}>
          <header className={"itempage-header"}>
            <h1 className="text-2xl font-semibold">Products</h1>

            <div className={"search-wrapper2"}>
              <span>Search</span>
              <input type={"search"} placeholder={"Search Products"} value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </header>

          <div className={"item-main-content"}>
            <div className={"i-main-content"}>
              <div className={"btn3"}>
                <button type={"button"} onClick={toggleItemModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  <span>Add</span>
                </button>
              </div>

              <div className={"table-container3"}>
                <div className={"card-body3"}>
                  <table className={"table-bordered3 w-full"}>
                    <thead>
                      <tr>
                        <th className={"id-box3"}>Id</th>
                        <th className={"name-box3"}>Name</th>
                        <th className={"category-box3"}>Category</th>
                        <th className={"image-box3"}>Image</th>
                        <th className={"price-box3"}>Price</th>
                        <th className={"action-box3"}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyData
                        ?.sort((a, b) => a.id - b.id)
                        .map((i) => {
                          return (
                            <tr key={i?.id}>
                              <td>{i?.id}</td>
                              <td>{i?.productName}</td>
                              <td>{i?.category?.name}</td>
                              <td style={{ display: "flex", justifyContent: "center" }}>
                                {/* Adjust as per your actual image rendering logic */}
                                <img src={i?.productImage} width={"45px"} alt="product-img" className="rounded-md" />
                              </td>
                              <td>{i?.productPrice}</td>
                              <td>
                                <button className={"edit-btn3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md"} onClick={() => navigate("/editItem/" + i?.id)}>
                                  Edit
                                </button>
                                <button className={"delete-btn3 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"} onClick={() => onDelete(i?.id)}>
                                  Delete
                                </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {modal && (
          <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
            <div onClick={toggleItemModal} className="add-item-overlay fixed inset-0 bg-black opacity-50"></div>
            <div className="add-item-modal-content fixed z-10">
              <h2 className="text-2xl font-semibold">Add Item</h2>
              <button className="close-add-item-btn" onClick={toggleItemModal}>
                Close
              </button>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"select-category mb-4"}>
                  <label className="block text-sm font-medium text-gray-600">Category</label>
                  <select id={"category-option"} {...register("categoryId", { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400">
                    <option>Select a Category</option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                  {errors.categoryId && <span className="text-red-500 text-sm">Category is required!!</span>}
                </div>
                <div className={"item-name mb-4"}>
                  <label className="block text-sm font-medium text-gray-600">Item Name</label>
                  <input type={"text"} placeholder={"Enter item Name"} {...register("productName", { required: "Item Name is required!!" })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
                  {errors.productName && <span className="text-red-500 text-sm">{errors.productName.message}</span>}
                </div>
                <div className={"item-price mb-4"}>
                  <label className="block text-sm font-medium text-gray-600">Price</label>
                  <input type={"number"} placeholder={"Enter the Price"} {...register("productPrice", { required: "Price is required!!" })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
                  {errors.productPrice && <span className="text-red-500 text-sm">{errors.productPrice.message}</span>}
                </div>
                <div className={"item-image mb-4"}>
                  <label className="block text-sm font-medium text-gray-600">Image</label>
                  <span>
                    <input type={"file"} {...register("productImage", { required: "Item Image is required!!" })} className="focus:outline-none" />
                  </span>
                  {errors.productImage && <span className="text-red-500 text-sm">{errors.productImage.message}</span>}
                </div>

                <div className={"item-name-add-btn"}>
                  <button type={"submit"} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProduct;



