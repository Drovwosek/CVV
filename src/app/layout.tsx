import type {Metadata} from "next"

export const metadata: Metadata = {
	title: "CV",
	description: "Generated by create next app",
}

const RootLayout = ({
    children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
	<body>
	{children}
	</body>
	</html>
)

export default RootLayout