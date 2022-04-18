const path = require('path');

const config = {
  stories: [
      {
        // 👇 The directory field sets the directory your stories
        directory: '../stories/components',
        // 👇 The titlePrefix field will generate automatic titles for your stories
        titlePrefix: 'Components',
        // 👇 Storybook will load all files that contain the stories extensio
        files: '**/*.stories.@(js|jsx|ts|tsx)',
      },
      {
        // 👇 The directory field sets the directory your stories
        directory: '../stories/utils',
        // 👇 The titlePrefix field will generate automatic titles for your stories
        titlePrefix: 'Utilities',
        // 👇 Storybook will load all files that contain the stories extensio
        files: '*.stories.mdx',
      },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    // "storybook-addon-pseudo-states"
  ],
  framework: "@storybook/html",
  core: { 
    builder: 'webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|ai|eps|mp4|mp3|wav|woff|woff2|pdf|eot|ttf|otf|webmanifest|xml)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        type: 'asset/resource'
      },
    );
    // Alias
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../design');

    return config;
  }
}

module.exports = config;