const cfgPath = process.env.NODE_ENV ? `./env/.${process.env.NODE_ENV}.env` : `.env`;
console.debug(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
console.debug(`cfgPath: ${cfgPath}`);
require("dotenv").config({ path: cfgPath });

const docsOnlyMode = process.env.DOCS_MODE == "true";
const routePrefix = docsOnlyMode ? "/docs/" : "";
console.debug(`docsOnlyMode: ${docsOnlyMode}`);
console.debug(`routePrefix: ${routePrefix}`);
const projectName = "docs-redux";
const url = (!process.env.URL) ? 'http://localhost' : process.env.URL;
const baseUrl = docsOnlyMode ? "/" : `/${projectName}`;
console.debug(`url: ${url}`);
console.debug(`baseUrl: ${baseUrl}`);

const globalConfig = {
    cfgPath : cfgPath,
    docsOnlyMode: docsOnlyMode,
    routePrefix: routePrefix,
    projectName : projectName,
    siteUrl: url,
    baseUrl: baseUrl
}
export default globalConfig;