import Link from "next/link";

const RestaurantHeader = () => {
    return (
        <header>
            <div className="top-header">
            <div className="logo">
                <img src="src/app/_components/Delivery-PNG-HD.png" alt="logo" />
                <ul>
                    <li>
                        <Link href="#home">Home</Link>
                    </li>
                    <li>
                        <Link href="#menu">Menu</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    );
};

export default RestaurantHeader;
