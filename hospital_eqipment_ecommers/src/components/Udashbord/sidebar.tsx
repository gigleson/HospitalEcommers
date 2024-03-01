// import React from "react";
// import { Link } from "react-router-dom";

// interface AdminSidebarProps {
//   activePage: string;
// }

// const SidebarMenu: React.FC<AdminSidebarProps> = ({ activePage }) => {
//   return (
//     <>
//       <div>
//         <div>
//           <div>
//             <h1>The Candle Library</h1>
//           </div>
//           <div>
//             <ul>
//               <Link to={"/category"}>
//                 <li className={`sidebar-list-item ${activePage === "/category" ? "active" : ""}`}>
//                   <span>Category Icon</span>
//                   <a>Category</a>
//                 </li>
//               </Link>

//               <Link to={"/product"}>
//                 <li className={`sidebar-list-item ${activePage === "/product" ? "active" : ""}`}>
//                   <span>Product Icon</span>
//                   <a>Products</a>
//                 </li>
//               </Link>
//             </ul>
//           </div>

//           <div>
//             <button type={"button"}>
//               <span>Logout Icon</span>
//               Log Out
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SidebarMenu;
import React from "react";
import { Link ,useNavigate} from "react-router-dom";

interface AdminSidebarProps {
  activePage: string;
}

const SidebarMenu: React.FC<AdminSidebarProps> = ({ activePage }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white h-screen w-64">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Dashbord</h1>

        <ul>
        
          <Link to="/ot ">
            <li className={`sidebar-list-item ${activePage === "/orders" ? "active" : ""}`}>
              <span className="mr-2">📋</span>
              your Orders
            </li>
          </Link>
        </ul>
      </div>

      <div className="mt-auto p-4">
        <button
          type="button" 
          className="flex items-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={()=>navigate("/") }
        >
          <span className="mr-2">🚪</span>
          Log Out
          
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;

