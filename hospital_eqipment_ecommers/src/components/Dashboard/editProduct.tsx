// import React from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { useMutation } from "@tanstack/react-query";
// import SidebarMenu from "./sidebar.tsx";

// const EditProduct = () => {
//     const navigate = useNavigate();

//     const useApiCall = useMutation({
//         mutationKey: ["POST_ITEM_MANAGEITEM"],
//         mutationFn: (payload: any) => axios.post("http://localhost:8080/item/save", payload),
//         onSuccess: () => {
//             reset();
//             navigate("/ManageItem");
//         }
//     });

//     const onSubmit = (value: any) => {
//         const fd = new FormData();
//         fd.append("productName", value?.itemName);
//         fd.append("price", value?.itemPrice);
//         fd.append("categoryId", value?.categoryId);
//         useApiCall.mutate(fd);
//     };

//     const { pk_id } = useParams();

//     const { data: getItemByIdApi } = useQuery({
//         queryKey: ["GET_BY_ID_CATEGORY_API"],
//         queryFn() {
//             return axios.get("http://localhost:8080/item/findById/" + pk_id);
//         },
//         enabled: !!pk_id
//     });

//     const { register, handleSubmit, formState, reset } = useForm({ values: getItemByIdApi?.data });
//     const { errors } = formState;

//     const location = useLocation(); // Use useLocation to get the current location
//     const currentLocation = location.pathname;

//     return (
//         <>
//             <SidebarMenu activePage={currentLocation} />
//             <div className="add-item-modal">
//                 <div className="add-item-modal-content">
//                     <h2>Edit Item</h2>

//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className={"select-category"}>
//                             {/*<label>Category : {filteredItemData?.category?.name}</label>*/}
//                         </div>
//                         <div className={"item-name"}>
//                             <label>Item Name</label>
//                             <input type={"text"} placeholder={"Enter item Name"} {...register("itemName", { required: "Item Name is required!!" })} />
                            
//                         </div>
//                         <div className={"item-price"}>
//                             <label>Price</label>
//                             <input type={"number"} placeholder={"Enter the Price"} {...register("itemPrice", { required: "Price is required!!" })} />
                            
//                         </div>

//                         <div className={"item-name-add-btn"}>
//                             <button type={"submit"}>Edit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default EditProduct;
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import SidebarMenu from "./sidebar.tsx";

const EditProduct = () => {
  const navigate = useNavigate();

  const useApiCall = useMutation({
    mutationKey: ["POST_ITEM_MANAGEITEM"],
    mutationFn: (payload) => axios.post("http://localhost:8080/item/save", payload),
    onSuccess: () => {
      reset();
      navigate("/ManageItem");
    },
  });

  const onSubmit = (value) => {
    const fd = new FormData();
    fd.append("productName", value?.itemName);
    fd.append("price", value?.itemPrice);
    fd.append("categoryId", value?.categoryId);
    // useApiCall.mutate(fd);
  };

  const { pk_id } = useParams();

  const { data: getItemByIdApi } = useQuery({
    queryKey: ["GET_BY_ID_CATEGORY_API"],
    queryFn() {
      return axios.get("http://localhost:8080/item/findById/" + pk_id);
    },
    enabled: !!pk_id,
  });

  const { register, handleSubmit, formState, reset } = useForm({ values: getItemByIdApi?.data });
  const { errors } = formState;

  const location = useLocation(); // Use useLocation to get the current location
  const currentLocation = location.pathname;

  return (
    <>
      <SidebarMenu activePage={currentLocation} />
      <div className="flex items-center justify-center h-screen bg-gray-300">
        <div className="bg-white shadow-md p-8 rounded-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">Edit Item</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Render your form inputs here with Tailwind CSS styling */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600">Item Name</label>
              <input
                type="text"
                placeholder="Enter item Name"
                {...register("itemName", { required: "Item Name is required!!" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600">Price</label>
              <input
                type="number"
                placeholder="Enter the Price"
                {...register("itemPrice", { required: "Price is required!!" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;

