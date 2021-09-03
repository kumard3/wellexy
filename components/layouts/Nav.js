import { Button, Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import {
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import HeaderSearch from "../search/header";

export default function Nav() {
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
            <Button type="primary" size="large">
              Login
            </Button>
            <Button size="large">Signup</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
