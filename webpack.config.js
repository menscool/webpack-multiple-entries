const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {DefinePlugin} = require('webpack');

// const replaceDashToCamelCase = (str) => str
//     .split('-')
//     .map((chunk, index) => index === 0 ? chunk : chunk.charAt(0).toUpperCase() + chunk.slice(1))
//     .join('')

const projects = [
    'project-blue',
    'project-green',
    // 'project-purple',
    // 'project-red',
    // 'project-yellow',
];

const entry = {};

const devServer = {
    contentBase: [],
    contentBasePublicPath: [],
    openPage: 'project-blue',
    compress: true,
    port: 9000
}

const htmlWebpackPlugins = [];

const copyPluginConfig = {
    patterns: []
};

projects.forEach(projectName => {
    const projectBuildPath = path.resolve(__dirname, 'build', 'modules', projectName)

    entry[projectName] = path.resolve(__dirname, 'src', 'projects', projectName)

    devServer.contentBase.push(projectBuildPath)
    devServer.contentBasePublicPath.push(`/modules/${projectName}`)

    htmlWebpackPlugins.push(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'common', 'index.html'),
        filename: path.resolve(`${projectBuildPath}/index.html`)
    }))

    copyPluginConfig.patterns.push({
        from: path.resolve(__dirname, 'src', 'common', 'assets'),
        to: path.resolve(projectBuildPath, 'assets')
    })
    copyPluginConfig.patterns.push({
        from: path.resolve(__dirname, 'src', 'common', 'images'),
        to: path.resolve(projectBuildPath, 'images')
    })
})

const config = {
    entry,
    output: {
        path: path.resolve(__dirname, 'build', 'modules'),
        filename: '[name]/main.js'
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer,
    plugins: [
        ...htmlWebpackPlugins,
        new CopyPlugin(copyPluginConfig),
        new DefinePlugin({
            PROJECTS: JSON.stringify(projects)
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}

fs.writeFileSync('wp-config.json', JSON.stringify(config, null, 2))

module.exports = config;
