import React, { useContext, useState, useEffect } from "react";

import { Button, Col, Row } from "antd";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import HeaderSearch from "../search/header";
import ls from 'local-storage'

import { useRouter } from "next/router";
// import { useSnackbar } from "notistack";
import axios from "axios";
import { Store } from "../../utils/Store";
import { getError } from "../../utils/error";

export default function Nav() {
  const router = useRouter();
  // const { state, dispatch }  = useContext(Store);
  // const { cart, userInfo } = state;

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);

  // const  enqueueSnackbar  = useSnackbar();

  // const fetchCategories = async () => {
  //   try {
  //     const { data } = await axios.get(`/api/products/categories`);
  //     setCategories(data);
  //   } catch (err) {
  //     enqueueSnackbar(getError(err), { variant: "error" });
  //   }
  // };

  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    ls.remove("userInfo");
    ls.remove("cartItems");
    router.push("/");
  };
  return (
    <div className="sticky top-0 bg-white border-b border-gray-300">
      <Row className="p-4">
        <Col span={3}>
          <div className="flex justify-center items-center">
            <Link href="/">
              <Image src="/logo.png" width={150} height={30} alt="logo" />
            </Link>
          </div>
        </Col>
        <Col span={3}>
          <div className="flex justify-center">
            <Button
              href="/offers"
              size="large"
              className="text-blue-800 mx-auto"
            >
              <span className="font-bold">💰 Offers</span>
            </Button>
          </div>
        </Col>
        <Col span={9}>
          <HeaderSearch />
        </Col>
        <Col flex="auto">
          <div className="flex justify-around items-center">
            <Link href="/help">
              <h4 className="font-bold text-md cursor-pointer hover:text-green-600">
                Need Help?
              </h4>
            </Link>
            <Link href="/cart">
              <ShoppingCartOutlined className="text-3xl hover:text-green-600" />
            </Link>
            <div className="flex w-[12rem] justify-around">
              <Button type="primary" size="large">
                Login
              </Button>
              <Button size="large">Signup</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
