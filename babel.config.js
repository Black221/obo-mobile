process.env.TAMAGUI_TARGET = "native";

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    plugins: [
      ["module-resolver", {
        "alias": {
          "@assets": "./assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@hooks": "./src/hooks",
          "@navigation": "./src/navigation",
          "@utils": "./src/utils",
          "@constants": "./src/constants",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],[
        "transform-inline-environment-variables", 
        {include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"]}
      ],[
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
