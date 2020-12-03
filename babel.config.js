module.exports = api => {
    const isTest = api.env("test");

    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties",
            ["babel-plugin-styled-components", { ssr: !isTest, displayName: !isTest }]
        ]
    }
}