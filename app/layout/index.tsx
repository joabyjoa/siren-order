import './globals.css'
import { StyledComponentsRegistry } from '~/lib/styled-components'
import { Header } from './Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
