import './globals.css'
import {Analytics} from "@vercel/analytics/react";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: 'Online Clock: The Exact Time on Your Screen! Easy to Use, Free!',
    description: 'Digital clock: the exact time with seconds filling the entire screen. Switch between digital or analog format, night mode.',
    icons: [
        {
            url: '/clock.png',
        }
        ],
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">|

        <body>{children}</body>
        <Analytics/>
        </html>
    )
}
