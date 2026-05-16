const { ESLint } = require("eslint");

(async function main() {
  const eslint = new ESLint();
  const results = await eslint.lintFiles(["src/**/*.tsx", "src/**/*.ts"]);
  
  for (const result of results) {
    const errors = result.messages.filter(m => m.severity === 2);
    if (errors.length > 0) {
      console.log(result.filePath);
      for (const msg of errors) {
        console.log(`  ${msg.line}:${msg.column} - ${msg.ruleId}: ${msg.message}`);
      }
    }
  }
})().catch(console.error);
