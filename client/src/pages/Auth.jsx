import { useState } from "react";
import Login from "../component/login.jsx";
import SignUp from "../component/SignUp.jsx";

const Auth = () => {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto min-h-screen px-8 bg-gray-50">
            {/* Logo or Information Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MyApp</h1>
                <p className="text-gray-600 text-lg max-w-md">
                    Explore the world of seamless authentication. Log in or sign up to start your journey with us.
                </p>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                {/* Tab Section */}
                <section className="shadow-xl w-full max-w-lg bg-white rounded-lg">
                    <ul className="flex border-b text-center">
                        <li
                            className={`w-1/2 py-4 text-lg font-medium cursor-pointer transition-all ${
                                activeTab === "login"
                                    ? "border-b-4 border-black "
                                    : "text-gray-500 hover:text-blue-500"
                            }`}
                            onClick={() => setActiveTab("login")}
                        >
                            Login
                        </li>
                        <li
                            className={`w-1/2 py-4 text-lg font-medium cursor-pointer transition-all ${
                                activeTab === "signup"
                                    ? "border-b-4 border-black "
                                    : "text-gray-500 hover:text-blue-500"
                            }`}
                            onClick={() => setActiveTab("signup")}
                        >
                            Sign Up
                        </li>
                    </ul>
                </section>

                {/* Content Section */}
                <div className="bg-white shadow-md rounded-lg max-w-lg w-full p-8 mt-8">
                    {activeTab === "login" && <Login />}
                    {activeTab === "signup" && <SignUp />}
                </div>
            </div>
        </div>
    );
};

export default Auth;
