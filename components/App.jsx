'use client'

import { useSession } from 'next-auth/react'
import Login from './Login'


export default function App({ children }) {
    const { data: session } = useSession()

  return (
            <>          
            {session ? 
                <html lang="en">
                    <body>
                        <sidebar>
                          
                        </sidebar>
                        <main>
                            <h1>Ryanair</h1>
                            {children}
                        </main>
                    </body>
                </html> 
                : 
                <html lang="en">
                    <body>
                        <Login/>
                    </body>
                </html>     
            }
            </>
  )
}
