"use client"

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/react-hooks';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const client = new ApolloClient({
	uri: "http://localhost:3000/api/graphql",
	cache: new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          keyArgs: false,
          merge(existing, incoming, { args }) {
			const _offset = args?.get("offset")
			const offset = typeof _offset === "number" ? _offset : 0;
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
            }
            return merged;
          },
        },
      },
    },
  },
})});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen max-h-screen flex-col items-center pb-4`}
			>
				<ApolloProvider client={client}>
					{/* <SiteHeader /> */}

					<div className="grow container">{children}</div>
					{/* <Toaster /> */}
				</ApolloProvider>
			</body>
		</html>
	);
}
