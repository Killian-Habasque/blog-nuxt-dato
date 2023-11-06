import { graphqlEndpoint } from './cms';

const isProd = process.env.NETLIFY_ENV === 'production';
const isServer = process.server;

export default {
    httpEndpoint: graphqlEndpoint,
    httpLinkOptions: {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...(!isServer && !isProd && { 'X-Include-Drafts': 'true' }),
            ...(isServer ? {} : { Authorization: `Bearer ${process.env.NUXT_DATO_TOKEN}` }),
        },
    },
    connectToDevTools: false,
    defaultOptions: {},
    inMemoryCacheOptions: {},
    tokenName: 'apollo:my-app.token',
    tokenStorage: 'cookie',
    authType: 'Bearer',
    authHeader: 'Authorization',
};