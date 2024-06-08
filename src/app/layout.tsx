import './globals.css'


export const metadata = {
  title: 'Luiz Dev.',
  description: "Portfólio!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
