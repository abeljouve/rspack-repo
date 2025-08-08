import {defineConfig} from "@rspack/cli";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

export default defineConfig({
    target: 'web',
    entry: {
        'test-image': './src/image.svg',
        'main': './src/main.scss'
    },
    output: {
        clean: true,
        filename: '[name].js',
        assetModuleFilename: '[name][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                type: 'css',
                use: [
                    {
                        loader: 'builtin:lightningcss-loader',
                    }
                ],
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                loader: ImageMinimizerPlugin.loader,
                enforce: 'pre',
                options: {
                    minimizer: [
                        {
                            implementation: ImageMinimizerPlugin.svgoMinify,
                        }
                    ]
                }
            }
        ]
    },
    experiments: {
        css: true,
    },
});
