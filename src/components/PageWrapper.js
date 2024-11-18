import Header from "./Header"
import Footer from "./Footer"
import { Layout } from "antd"
import { memo } from "react"
export default function PageWrapper({ children }) {
    return <div>
        <Header />
        <div style={{ flex: 1 }}>
            {children}
        </div>
        <Footer />
    </div>
}