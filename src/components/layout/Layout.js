import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div className="relative">
            <div className="flex flex-row">
                <div className="fixed z-[2] bottom-2 left-6 flex flex-row">
                    <Link to="/">
                        <img src="./img/hotline.png" />
                    </Link>
                    <Link  to="/">
                        <img src="./img/Website---eBacsi---final---cut_14.png" />
                    </Link>
                </div>
                <div className="fixed z-[2] bottom-4 right-6">
                    <Link  to="/">
                        <img src="./img/Website---eBacsi---final---cut_07.png" />
                    </Link>
                    <Link  to="/">
                        <img src="./img/Website---eBacsi---final---cut_10.png" />
                    </Link>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;