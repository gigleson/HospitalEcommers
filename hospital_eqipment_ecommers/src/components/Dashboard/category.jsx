  import React, { useEffect, useState } from "react";
  import SidebarMenu from "./sidebar.tsx";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import axios from "axios";
  import { useMutation, useQuery } from "@tanstack/react-query";

  const Category = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const location = useLocation();
    const currentLocation = location.pathname;

    const [modal1, setModal] = useState(false);
    const toggleCatgModal = () => {
      setModal(!modal1);
    };

    useEffect(() => {
      // Animation logic can be omitted without gsap
    }, [modal1]);

    const useApiCall = useMutation({
      mutationKey: ["POST_CATEGORY_MANAGECATEGORY"],
      mutationFn: async (payload) => {
        try {
          const response = await axios.post(
            "http://localhost:8082/category/save",
            payload
          );
          return response.data;
        } catch (error) {
          console.error("Error:", error);
          throw error;
        }
      },
      onSuccess: () => {
        notify();
        reset();
        refetch();
      },
    });

    const onSubmit = (value) => {
      useApiCall.mutate(value);
    };

    const { register, handleSubmit, formState, reset } = useForm();
    const { errors } = formState;

    const { data, refetch } = useQuery({
      queryKey: ["GETDATA"],
      queryFn: async () => {
        try {
          const response = await axios.get(
            "http://localhost:8082/category/getAll"
          );
          return response.data;
        } catch (error) {
          console.error("Error:", error);
          throw error;
        }
      },
    });

    const categories = data || [];
    const filteredData = categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );

    const deleteByIdApi = useMutation({
      mutationKey: ["DELETE_BY_ID"],
      mutationFn: async (id) => {
        try {
          await axios.delete(`http://localhost:8082/category/delete/${id}`);
          refetch();
        } catch (error) {
          console.error("Error:", error);
          throw error;
        }
      },
    });

    const notify = () => {
      // Notification logic can be omitted without react-toastify
    };

    return (
      <section className="flex">
        <div className="w-64">
          <SidebarMenu activePage={currentLocation} />
        </div>

        <div className="flex-1 p-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Manage Category</h1>

            <div className="relative">
              <input
                type="search"
                placeholder="Search Category"
                className="border px-4 py-2 rounded focus:outline-none focus:border-blue-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="absolute right-3 top-2 text-gray-500">🔍</span>
            </div>
          </header>

          <div className="flex">
            <div className="w-1/2 mr-8">
              <button
                type="button"
                onClick={toggleCatgModal}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                <span className="mr-2">➕</span>
                Add
              </button>

              <div className="mt-4 table-container">
                <div className="card-body">
                  <table className="table-bordered w-full">
                    <thead>
                      <tr>
                        <th className="id-box">ID</th>
                        <th className="name-box">Category Name</th>
                        <th className="edit-box">Edit</th>
                        <th className="delete-box">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((category) => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.name}</td>
                          <td>
                            <button
                              className="edit-btn"
                              onClick={() => {
                                navigate("/edit/" + category.id);
                                console.log(category.id);
                              }}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              className="delete-btn"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you want to delete this category?"
                                  )
                                ) {
                                  deleteByIdApi.mutate(category.id);
                                }
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {modal1 && (
          <div className="add-category-modal">
            <div
              onClick={toggleCatgModal}
              className="add-category-overlay"
            ></div>
            <div className="add-category-modal-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add Category</h2>
                <button
                  className="close-add-category-btn"
                  onClick={() => {
                    toggleCatgModal();
                    reset();
                  }}
                >
                  Close
                </button>
                <div className="category-name">
                  <label>Category Name</label>
                  <input
                    type="text"
                    placeholder="Enter Category Name"
                    {...register("name", { required: "Category Name is required!!" })}
                    className="border px-4 py-2 rounded focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div className="category-name-add-btn">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    );
  };

  export default Category;
