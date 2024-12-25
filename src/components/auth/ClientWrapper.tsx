"use client";

import { useEffect } from "react";
import { useStore } from "@/store";
import { User } from "@/schemas";

const ClientWrapper = ({ user, children }: { user: User; children: React.ReactNode }) => {
    const setUser = useStore((state) => state.setUser);

    useEffect(() => {
        setUser(user);
    }, [setUser, user]);

    return <>{children}</>;
};

export default ClientWrapper;