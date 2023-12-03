import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import { useNavigate } from "react-router-dom";

export function MyApp() {
    const navigate = useNavigate();
        const handleLogoClick = () => {
        navigate("./");
    };
    return (
        <>
          <ShellBar
            logo={<img src="logo512.png" />}
            profile={
              <Avatar>
                <img src="AVATAR1.png" />
              </Avatar>
            }
            primaryTitle="My App"
            onLogoClick={handleLogoClick}
          >
            <ShellBarItem icon={addIcon} text="Add" />
          </ShellBar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </>
      );      
}

