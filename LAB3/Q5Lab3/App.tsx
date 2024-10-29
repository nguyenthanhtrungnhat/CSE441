import React, { useState } from 'react';
import ProductList from './productList';
import Add from './add';
import Detail from './Product_Detail';
('./Products/Product_Detail');
import Search from './Product_Search';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'ProductList', title: 'Products', icon: 'folder' },
    { key: 'Product_Add', title: 'Add', icon: 'folder' },
    { key: 'ProductSearch', title: 'Search', icon: 'image-search' },
    { key: 'Product_Detail', title: 'Detail', icon: 'account-card-details' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Add,
    ProductSearch: Search,
    Product_Detail: Detail,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      
      />
    </SafeAreaProvider>
  );
};

