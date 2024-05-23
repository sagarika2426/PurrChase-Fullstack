// import { IconButton } from "@mui/material";
import { useState } from "react";
import SortIcon from '@mui/icons-material/Sort';
// import Products from "./Products";

const SortProducts = function ({products, setSortedProducts}) {

    const [selectedOption, setSelectedOption] = useState("")

    const handleSort = (event) => {
        const {value} = event.target;
        setSelectedOption(value);

        if(value === "Recommended"){
            const sorted = products.slice().sort((a,b) => b.ratings - a.ratings);
            console.log(sorted)
            setSortedProducts(sorted);
        }
        else if(value === "price-asc"){
            const sorted = products.slice().sort((a,b) => a.price - b.price);
            console.log(sorted)
            setSortedProducts(sorted);
        }
        else if(value == "price-desc"){
            const sorted = products.slice().sort((a,b) => b.price - a.price);
            setSortedProducts(sorted);
        }
    }
    return (
        <div className="mx-auto">
          <div className="flex justify-center border-gray-400 border rounded-md">
            <div className="relative">
              <SortIcon
                className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
              <select
                className="py-2 border rounded appearance-none pl-12 text-sm px-2"
                value={selectedOption}
                onChange={handleSort}
                // style={{ width: "150px" }}
              >
                <option value="" className="text-sm">Sort By</option>
                <option value="price-asc" className="text-sm">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="Recommended">Recommended</option>
              </select>
            </div>
          </div>
        </div>
      );
}

export default SortProducts;