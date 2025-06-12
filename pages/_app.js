import '../styles/globals.css';
import { useRouter } from 'next/router'; // Add this import
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isV2 = router.pathname.startsWith('/v2');
  
  return (
    <>
      <Head>
        <title>CrankSmith V2 - Drivetrain Builder</title>
        <meta name="description" content="Next-generation bike configuration tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {isV2 && (
        <div style={{ 
          background: '#facc15', 
          color: '#000', 
          textAlign: 'center', 
          padding: '12px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          🚧 V2 Development Build - Things might break!
        </div>
      )}
      
      <Component {...pageProps} />
    </>
  );
}