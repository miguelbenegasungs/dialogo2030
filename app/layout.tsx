import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from "next/script";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Miguel Benegas | Candidato a Decano IDEI - UNGS',
  description: 'Ingeniería aplicada a la gestión. Formar profesionales preparados para la industria del futuro. Campaña para Decano del Instituto de Industria.',
  generator: 'v0.app',
  keywords: ['Miguel Benegas', 'IDEI', 'UNGS', 'Decano', 'Instituto de Industria', 'Ingeniería', 'Universidad'],
  openGraph: {
    title: 'Miguel Benegas | Candidato a Decano IDEI',
    description: 'Ingeniería aplicada a la gestión. Formar profesionales preparados para la industria del futuro.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1B365D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

            <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-5EYLWXVL7K"
      strategy="afterInteractive"
    /> 

<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x1hokjvmc8");
</script>

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5EYLWXVL7K');
      `}
    </Script>
    
    
      </body>
    </html>
  )
}
