//header

import { Button, Dropdown, MenuProps, Space } from "antd";
import styles from "./index.module.less";
import { useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import logo from "@/public/imgs/logo.svg";

const title = import.meta.env.SYSTEM_TITLE;
const HeaderConent = () => {
  const theme = localStorage.getItem("theme") || "light";
  const onClick = (theme) => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.setAttribute("theme", theme);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className={styles.light} onClick={() => onClick("light")}>
          Light
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className={styles.dark} onClick={() => onClick("dark")}>
          Dark
        </div>
      ),
    },
  ];

  useEffect(() => {
    onClick(theme);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="" className={styles.logo} />
        <label className={styles.title}>{title}</label>
      </div>
      <div className={styles.right} id="theme">
        <Dropdown
          menu={{ items }}
          getPopupContainer={() => document.getElementById("theme")}
          overlayClassName={styles.dropdown}
          trigger={["click"]}
        >
          <Button className={styles.button}>
            <Space>
              Theme
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderConent;
