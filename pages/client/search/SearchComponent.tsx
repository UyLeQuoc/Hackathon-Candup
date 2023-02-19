import React, { useState } from 'react'

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event : any) => {
    setSearchTerm(event.target.value);
  };

  // const filteredProducts = productList.filter(product =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    
  )
}

export default SearchComponent