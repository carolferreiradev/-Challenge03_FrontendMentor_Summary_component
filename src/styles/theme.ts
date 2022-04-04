import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        blue: {
            "900": "hsl(223, 47%, 23%)",
            "800": "hsl(224, 23%, 55%)",
            "700": "hsl(245, 75%, 52%)",
            "600": "hsl(225, 100%, 94%)",
            "500": "hsl(225, 100%, 98%)",
        }
    },
    fonts: {
        heading: 'Red Hat Display',
        body: 'Red Hat Display'
    },
    styles:{
        global:{
            body:{
                bg:'blue.600',
                color:'blue.800'
            }
        }
    }
})