// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyD1XE98Q09O6O7FZGqFLagCWTUeh0ZoAH8",
		authDomain: "metadata-url.firebaseapp.com",
		databaseURL: "https://metadata-url.firebaseio.com",
		projectId: "metadata-url",
		storageBucket: "metadata-url.appspot.com",
		messagingSenderId: "1028200523928"
	}
};
