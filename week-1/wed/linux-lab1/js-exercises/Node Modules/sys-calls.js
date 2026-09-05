const fs = require('fs');
const os = require('os');

fs.writeFile('sample.txt', 'Hello! This is my sample text file.', (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('sample.txt created successfully.');
    }
});

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});

fs.writeFile('output.txt', 'This is some sample data.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data written to output.txt');
    }
});

console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU cores:', os.cpus().length);

fs.writeFile(
    'system-info.txt',
    `Hostname: ${os.hostname()}
OS Platform: ${os.platform()}
CPU Information: ${JSON.stringify(os.cpus())}`,
    (err) => {
        if (err) {
            console.error('Error writing system information:', err);
        } else {
            console.log('System information written to system-info.txt');
        }
    }
);

const fsPromises = require('fs').promises;

async function readFileAndLogOSInfo() {
    try {
        const data = await fsPromises.readFile('output.txt', 'utf8');
        console.log('Data from file:', data);

        const platform = os.platform();
        console.log('OS Platform:', platform);
    } catch (error) {
        console.error('Error:', error);
    }
}

readFileAndLogOSInfo();