import React, { useContext } from 'react'
import { createContext,useState } from 'react'

export const FilterContext = createContext();


const FilterContextProvider = ({children})=>{
  const [search,setSearch] = useState("");
  const [sort,setSort] = useState("");
  const [category,setCategory] = useState("");
  const [type,setType] = useState("");
  
  const value = {
    search,
    setSearch,
    sort,
    setSort,
    category,
    setCategory,
    type,
    setType
  };
  return(
  <FilterContext.Provider value={value}>
    {children}
  </FilterContext.Provider>
  );

}

export default FilterContextProvider;
