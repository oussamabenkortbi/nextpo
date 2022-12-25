// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["react-native-web"]);

module.exports = withPlugins([withTM, withExpo], {
	distDir: 'build',
	reactStrictMode: true,
	swcMinify: true,
	// Note: This experimental feature is required to use NextJS Image in SSG mode.
	// See https://nextjs.org/docs/messages/export-image-api for different workarounds.
	images: {
		unoptimized: true,
	},
});