import createExpoWebpackConfigAsync from "@expo/webpack-config";
import path from "path";

export default async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, 'node_modules/react-router-native')],
  });
  
  return config;
}
