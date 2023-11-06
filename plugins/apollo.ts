export default defineNuxtPlugin((nuxtApp) => {
    const { datoToken } = useRuntimeConfig();
    nuxtApp.hook('apollo:auth', ({ client, token }) => {
        // apply apollo client token
        token.value = datoToken
    })
})