"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";

const RestaurantHeader = () => {
    const [details, setDetails] = useState({});
    const router = useRouter();
    const pathName = usePathname();
    useEffect(() => {
        let data = localStorage.getItem("restaurantUser");
        if (!data && pathName == "/restaurant/dashboard") {
            router.push("/restaurant");
        } 
        else if(data && pathName == "/restaurant" ){
            router.push("/restaurant/dashboard");
        }
        else {
            setDetails(JSON.parse(data));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("restaurantUser");
        router.push("/restaurant");
    }
    return (
        <header>
            <div className="top-header">
                <div className="logo">
                    <img
                        src="src/app/_components/Delivery-PNG-HD.png"
                        alt="logo"
                    />
                    <ul>
                        <li>
                            <Link href="#home">Home</Link>
                        </li>
                        {details && details.name ? (
                            <span className="flex">
                                <li>
                                    <Link href="#menu" className="mr-5">Profile</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={logout}>LogOut</Link>
                                </li>
                            </span>
                        ) : (
                            <li>
                                <Link href="#login/signup">Login/SignUp</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default RestaurantHeader;
