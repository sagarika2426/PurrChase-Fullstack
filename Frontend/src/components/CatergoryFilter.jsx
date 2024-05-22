// function CategoryFilter({ handleFilter }) {
//     // const categories = ["Food", "Liter Supplies", "Toys"];
//     const categories = [{name: "Food", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106723160-min.png?v=1708956095"},
//         {name: "Liter Supplies", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106723556-min.png?v=1708956095"},
//         {name: "Toys", img: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106723557-min.png?v=1708956095"}
//     ]

//     return(
//         <div className="flex border border-gray-100 m-2 p-2 bg-orange-100">
//       {categories.map((category) => (
//         // <button
//         //   key={category}
//         //   className="bg-blue-300  rounded-md w-full m-1 px-2 py-2 hover:bg-blue-400"
//         //   onClick={() => handleFilter(category)}
//         // >
//         //   {category}
//         // </button>
//         <div key={category}
//         className="w-full m-1 hover:bg-blue-400"
//         onClick={() => handleFilter(category.name)}>
//             <img src={category.img}/>


//         </div>
//       ))}
//     </div>

//     )
// }

// export default  CategoryFilter;