    // import { useEffect } from "react";
    // import { useLocation, useNavigate, useParams } from "react-router-dom";
    // import { useMutation, useQuery } from "@tanstack/react-query";
    // import axios from "axios";
    // import { useForm } from "react-hook-form";
    // import SidebarMenu from "./sidebar.tsx";

    // const EditCategory = () => {
    //     const navigate = useNavigate();
    //     const { pk_id } = useParams();
    //     const location = useLocation();
    //     const currentLocation = location.pathname;

    //     const { register, handleSubmit, formState, reset } = useForm();
    //     const { errors } = formState;

    //     const useApiCall = useMutation({
    //         mutationKey: ["POST_CATEGORY_MANAGECATEGORY"],
    //         mutationFn: (payload) => axios.post("http://localhost:8081/category/updateCategory", payload),
    //         onSuccess: () => {
    //             reset();
    //             navigate("/category");
    //         },
    //         onError: (error) => {
    //             console.error("Mutation Error:", error);
    //         },
    //     });

    //     const onSubmit = (data) => {
    //         useApiCall.mutate(data);
    //     };

    //     const { data: categoryData } = useQuery({
    //         queryKey: ["GET_BY_ID_CATEGORY_API", pk_id],
    //         queryFn: () => axios.get(`http://localhost:8081/category/updateCategory/findById/${pk_id}`),
    //         enabled: !!pk_id,
    //     });

    //     useEffect(() => {
    //         if (categoryData) {
    //             reset(categoryData);
    //         }
    //     }, [categoryData, reset]);

    //     return (
    //         <>
    //             <SidebarMenu activePage={currentLocation} />
    //             <div className="edit-category-modal">
    //                 <div className="edit-category-modal-content">
    //                     <form onSubmit={handleSubmit(onSubmit)}>
    //                         <h2>Edit Category</h2>
    //                         <div className={"category-id-number"}>
    //                             <label>ID: {pk_id}</label>
    //                         </div>
    //                         <div className={"category-name2"}>
    //                             <label>Category Name</label>
    //                             <input type={"text"} placeholder={"Enter Category Name"} {...register("name", { required: "Category Name is required!!" })} />
    //                             <h6 style={{ paddingLeft: "3px" }}>{errors?.name?.message}</h6>
    //                         </div>
    //                         <div className={"category-name-add-btn2"}>
    //                             <button type={"submit"}>Update</button>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // };

    // export default EditCategory;
