const path = require('path')

module.exports = async ({ config, mode }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            {
                loader: "sass-resources-loader",
                options: {
                    resources: "./src/styles/globals.scss",
                },
            },
        ],
        include: path.resolve(__dirname, "../"),
    });

    return config;
};