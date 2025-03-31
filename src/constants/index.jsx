import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import LaptopImage from "@/assets/laptop-image.jpg";
import SmartImage from "@/assets/smart-image.jpg";
import WirelessImage from "@/assets/wireless-image.jpg";
import WatchImage from "@/assets/watch-image.jpg";
import BluetoothImage from "@/assets/speaker-image.jpg";
import MonitorImage from "@/assets/monitor-image.jpg";
import KeyboardImage from "@/assets/keyboard-image.jpg";
import MouseImage from "@/assets/mouse-image.jpg";
import CameraImage from "@/assets/camera-image.jpg";
import ChairImage from "@/assets/chair-image.jpg";


export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/customers",
            },
            {
                label: "New customer",
                icon: UserPlus,
                path: "/new-customer",
            },
            {
                label: "Verified customers",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products",
            },
            {
                label: "New product",
                icon: PackagePlus,
                path: "/new-product",
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Ryan Andrei",
        email: "ryanobedientes@gmail.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 2,
        name: "Ryan Andrei",
        email: "ryanobedientes@gmail.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Ryan Andrei",
        email: "ryanobedientes@gmail.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Ryan Andrei",
        email: "ryanobedientes@gmail.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Ryan Andrei",
        email: "ryanobedientes@gmail.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "Ryan",
        email: "ryanobedientes@gmail.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Ryan Andrei",
        email: "ryanobedientes@gmail.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Wireless Headphones",
        image: WirelessImage,
        description: "High-quality noise-canceling wireless headphones.",
        price: 399.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Smartphone",
        image: SmartImage,
        description: "Latest smartphone with excellent camera features.",
        price: 29799.99,
        status: "Out Of Stock",
        rating: 4.9,
    },
    {
        number: 3,
        name: "Gaming Laptop",
        image: LaptopImage,
        description: "Powerful gaming laptop with high-end graphics.",
        price: 41299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Smartwatch",
        image: WatchImage,
        description: "Smartwatch with fitness tracking features.",
        price: 5199.99,
        status: "Out of Stock",
        rating: 4.6,
    },
    {
        number: 5,
        name: "Bluetooth Speaker",
        image: BluetoothImage,
        description: "Bluetooth speaker with deep bass sound.",
        price: 459.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 6,
        name: "4K Monitor",
        image: MonitorImage,
        description: "Ultra HD 4K monitor with stunning color accuracy.",
        price: 4399.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 7,
        name: "Mechanical Keyboard",
        image: KeyboardImage,
        description: "Mechanical keyboard with customizable RGB lighting.",
        price: 789.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Gaming Mouse",
        image: MouseImage,
        description: "Ergonomic wireless mouse with precision tracking.",
        price: 449.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Camera",
        image: CameraImage,
        description: "Waterproof action camera with 4K video recording.",
        price: 2249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "Gaming Chair",
        image: ChairImage,
        description: "Portable 2TB external hard drive for data storage.",
        price: 579.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];
