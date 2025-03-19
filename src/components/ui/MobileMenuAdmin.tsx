"use client";

import React, { useState } from "react";
import Hamburger from "../icons/Hamburger";
import Link from "next/link";

interface MobileMenuProps {
    categories: {
        id: string;
        name: string;
    }[];
}

function MobileMenuAdmin({ categories }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                id="hamburger-button"
                className="sm:hidden focus:outline-none"
                aria-label="Abrir menú"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Hamburger />
            </button>
            {isOpen && (
                <div className="sm:hidden absolute top-12 left-0 right-0 bg-black pb-1">
                    <nav className="flex flex-col font-medium text-center items-center gap-1">
                        {categories.map(category => (
                            <Link
                                key={category.id}
                                href={`/${category.id}`}
                                className="text-white hover:text-blue-400 p-1 font-light"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </nav>
                </div >
            )
            }
        </>
    );
}

export default MobileMenuAdmin;