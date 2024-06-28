import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { AuthClient } from "@dfinity/auth-client";

function Landing() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const authClient = await AuthClient.create();
            if (await authClient.isAuthenticated()) {
                setIsAuthenticated(true);
                navigate("/user");
            }
        };
        checkAuth();
    }, []);

    const handleLogin = async () => {
        const authClient = await AuthClient.create();
        await authClient.login({
            identityProvider: "https://identity.ic0.app/#authorize",
            onSuccess: () => {
                setIsAuthenticated(true);
                navigate("/user");
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <Header />
            <Body handleLogin={handleLogin} />
            <Footer />
        </div>
    );
}

export default Landing;
