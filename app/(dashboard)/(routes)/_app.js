// _app.js or _app.tsx
import { ClerkProvider } from "@clerk/nextjs";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
