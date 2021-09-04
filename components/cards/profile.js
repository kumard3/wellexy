import { Dropdown, Menu, message } from "antd";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default function ProfileCard() {
  return (
    <div>
      <Dropdown overlay={menu}>
        <div className="cursor-pointer flex items-center">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unique-boy-names-edmond-1564113059.jpg?crop=0.667xw:1.00xh;0.199xw,0&resize=640:*"
            alt="profile img"
            width="40px"
            height="40px"
            className="rounded-full mx-2"
          />
          <h3 className="text-md">Shubham Raj</h3>
        </div>
      </Dropdown>
    </div>
  );
}
