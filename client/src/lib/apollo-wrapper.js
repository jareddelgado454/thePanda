"use client"
import { ApolloLink, HttpLink } from '@apollo/client'
import {
    ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient()
{

    const httpLink = new HttpLink({
        uri: "https://gulfhzjdj5g6fix5vlanmqmope.appsync-api.us-east-1.amazonaws.com/graphql",
        headers: {
            'x-api-key' : 'da2-b4oselcykzcdpg6hnbmn6w6znm'
        }
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: typeof window === "undefined" ? ApolloLink.from([
            new SSRMultipartLink({
                stripDefer: true,
            }),
            httpLink
        ]): httpLink
            
    });
}

export function ApolloWrapper({children})
{
    return <ApolloNextAppProvider
        makeClient={makeClient}
    >
        {children}
    </ApolloNextAppProvider>
}