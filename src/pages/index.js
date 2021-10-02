import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutOne from "../components/layout/LayoutOne";
import FieldActivity from "../components/other/FieldActivity";
import Container from "../components/other/Container";
import BannerOne from "../components/sections/banner/BannerOne";
import DowOne from "../components/sections/dale-of-week/DowOne";
import DowTwo from "../components/sections/dale-of-week/DowTwo";
import HeroSliderOne from "../components/sections/hero-slider/HeroSliderOne";
import IntroductionOne from "../components/sections/introduction/IntroductionOne";
import IntroductionTwo from "../components/sections/introduction/IntroductionTwo";
import IntroductionFour from "../components/sections/introduction/IntroductionFour";
import ProductGrid from "../components/sections/product-thumb/ProductGrid";
import ProductTab from "../components/sections/product-thumb/ProductTab";
import categories from "../data/categories.json";
import bannerData from "../data/sections/banner.json";
import dowOneData from "../data/sections/dale-of-week.json";
import heroslideData from "../data/sections/hero-slider.json";
import introductionOneData from "../data/sections/introduction.json";
import * as shopActions from "../redux/actions/shopActions";

export default function Home() {
  const dispatch = useDispatch();
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    featuredProducts: "",
    saleProducts: "",
    bestSellerProducts: "",
  });
  const shopState = useSelector((state) => state.shopReducer);
  const {
    products,
    saleProducts,
    featuredProducts,
    bestSellerProducts,
    daleProducts,
  } = shopState;
  const {
    fetchSaleProductsRequest,
    fetchFeaturedProductsRequest,
    fetchBestSellerProductsRequest,
    fetchProductsRequest,
  } = shopActions;
  useEffect(() => {
    dispatch(fetchProductsRequest({ limit: 10, sort: {} }));
    dispatch(fetchFeaturedProductsRequest({ limit: 12 }));
    dispatch(fetchSaleProductsRequest({ limit: 6 }));
    dispatch(fetchBestSellerProductsRequest({ limit: 6 }));
  }, []);
  useEffect(() => {
    dispatch(
      fetchFeaturedProductsRequest({
        limit: 12,
        category: currentProductTabsCategory.featuredProducts,
      })
    );
  }, [currentProductTabsCategory.featuredProducts]);
  useEffect(() => {
    dispatch(
      fetchSaleProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.saleProducts,
      })
    );
  }, [currentProductTabsCategory.saleProducts]);
  useEffect(() => {
    dispatch(
      fetchBestSellerProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.bestSellerProducts,
      })
    );
  }, [currentProductTabsCategory.bestSellerProducts]);

  return (
    <LayoutOne title="Mai Thạch Đại Phát">
      <HeroSliderOne containerFluid data={heroslideData.one} />
      <IntroductionTwo />
      {/* <Container fluid>
        <ProductTab
          data={featuredProducts}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              featuredProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerTitle="Featured Product"
          productClassName="-borderless"
          productCol={{ xs: 12, sm: 8, lg: 6, xl: 4 }}
        />
      </Container> */}
      <Container fluid>
        <FieldActivity className="-bordered" containerFluid />
      </Container>
      <DowTwo countdownLast={100000000} />
      <Container fluid>
        {/* <ProductTab
          data={bestSellerProducts}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              bestSellerProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerType="row"
          headerTitle="Best seller"
          productClassName="-borderless"
          productCol={{ xs: 12, sm: 8, lg: 6, xl: 4 }}
        />
        <ProductTab
          data={saleProducts}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              saleProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerType="row"
          headerTitle="Featured Products"
          productClassName="-borderless"
          productCol={{ xs: 12, sm: 8, lg: 6, xl: 4 }}
        /> */}
        {/* <IntroductionOne data={introductionOneData.one} /> */}
        <DowOne data={dowOneData.one} countdownLast={100000000} />
      </Container>
      <IntroductionFour />
      {/* <BannerOne data={bannerData.one} /> */}
    </LayoutOne>
  );
}
