import React from "react";

import { useProducts } from "../hooks/useProducts";

import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainer";

const Home = () => {
  const { products, loading } = useProducts();
    <ItemListContainerComponent products={products} />
};

export default Home;