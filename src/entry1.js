import(
    './chunk' /* webpackChunkName: "my_chunk" */
    ).then(({ default: fn }) => {
    fn()
})
