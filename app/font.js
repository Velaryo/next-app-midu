import { Space_Grotesk as SpaceGrotesk } from '@next/font/google'

export const font = SpaceGrotesk({
    weight: ['400', '700'],
    // latin, sino va a traer de todos
    // x ejemplo, del cirilico
    subsets: ['latin'],
    // nombre de var. como en CSS
    variable: '--font-grotesk',
})
