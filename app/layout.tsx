"use client"

import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>asdf</title>
            </head>
            <body>{children}</body>
        </html>
    )
}