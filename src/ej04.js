const fs = require('fs');

getCurrentFilenames();
console.log("\nFile Contents of archivo-entrada.txt:",
	fs.readFileSync("archivo-entrada.txt", "utf8"));

fs.copyFile("archivo-entrada.txt", "archivo-salida.txt", (err) => {
	if (err) {
		console.log("Error Found:", err);
	}
	else {

		getCurrentFilenames();
		console.log("\nFile Contents of copied_file:",
			fs.readFileSync("archivo-salida.txt", "utf8"));
	}
});

function getCurrentFilenames() {
	console.log("\nCurrent filenames:");
	fs.readdirSync(__dirname).forEach(file => {
		console.log(file);
	});
}
