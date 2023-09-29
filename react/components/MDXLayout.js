import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

const components = {
    Link,
}

const MDXLayout = ({ children }) => {
    return (
        <MDXProvider components={components}>
            <div className="mdx-content"> { children }</div>
        </ MDXProvider>
    )
}

export default MDXLayout;