module.exports = {
	preset: "ts-jest",
	displayName: {
		name: "Testing",
		color: "magenta",
	},
	rootDir: "./src",
	modulePaths: [`src`],
	globals: {
		"ts-jest": {
			isolatedModules: true,
			tsconfig: "tsconfig.jest.json",
		},
	},
	transform: {
		".+\\.(png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
		"^.+\\.(j|t)sx?$": "babel-jest",
	},
	moduleDirectories: ["node_modules", "src"],
}
