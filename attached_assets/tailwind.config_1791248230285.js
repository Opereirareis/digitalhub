tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
                details: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#0D0320',      /* Fundo Imersivo (Base Violeta) */
                    black: '#000000',     /* Preto Puro */
                    abyss: '#001B3D',     /* Azul Abissal (Rodapés) */

                    card: '#18181B',      /* Card Principal */
                    cardHover: '#211E2A', /* Card Secundário */
                    highlight: '#0F1D41', /* Blocos de destaque */
                    night: '#0A1A3B',     /* Azul Noturno */

                    purple: '#805AD5',    /* Roxo Marca */
                    blue: '#0054A3',      /* Azul Ação - Mev */
                    blueHover: '#004AAD',
                    lightBlue: '#BAE6FD', /* Azul Claro - Detalhes */

                    green: '#25D366',     /* WhatsApp */

                    text: '#FFFFFF',      /* Branco Absoluto */
                    gray: '#A1A1AA'       /* Texto Secundário */
                }
            }
        }
    }
}
