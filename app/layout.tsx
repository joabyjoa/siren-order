import './globals.css'

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   console.log('NEXT_PUBLIC_API_MOCKING')
//   require('../mocks')
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
