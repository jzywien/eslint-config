const fs = require('fs/promises');
const { expect } = require('chai');
const { ESLint } = require('eslint');

(async () => {
    const lintConfigFile = 'index.js';
    try {
        const linter = new ESLint({ overrideConfigFile: lintConfigFile });
        const configFile = await fs.readFile(lintConfigFile, 'utf-8');
        const [lintResult] = await linter.lintText(configFile);

        expect(lintResult.warningCount).equal(0);
        expect(lintResult.errorCount).equal(0);
        expect(lintResult.fatalErrorCount).equal(0);
        expect(lintResult.messages.length).equal(0);
    } catch (e) {
        console.error(e);
    }
})();
