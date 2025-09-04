import "./globals.css";

export const metadata = {
    title:"My App Test",
    description:"This app is for testing purposes only for now"
}


const RootLayout = ({children}) =>{
    return(
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout