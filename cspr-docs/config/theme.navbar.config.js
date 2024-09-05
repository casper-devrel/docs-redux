const globalConfig = require("../global.config");
let routePrefix = globalConfig.routePrefix;
// const baseUrl = globalConfig.baseUrl;
// if (baseUrl && baseUrl !== "/") { routePrefix = `${baseUrl}/${routePrefix}`; }
console.log(`routePrefix: ${routePrefix}`);
module.exports = {
    title: "",
    logo: {
        alt: "Casper Logo",
        src: "/icon/Casper_Wordmark_Red_RGB.png",
        srcDark: "/icon/Casper_Wordmark_Red_RGB.png",
    },
    items: [
        {
            type: "docsVersion",
            to: `${routePrefix}/concepts`,
            activeBasePath: `${routePrefix}/concepts`,
            label: "Concepts",
            position: "left",
        },
        {
            type: "docsVersion",
            to: `/developers`,
            activeBasePath: `${routePrefix}/developers`,
            label: "Developers",
            position: "left",
        },
        {
            type: "docsVersion",
            to: `${routePrefix}/operators`,
            activeBasePath: `${routePrefix}/operators`,
            label: "Operators",
            position: "left",
        },
        {
            type: "docsVersion",
            to: `${routePrefix}/users`,
            activeBasePath: `${routePrefix}/users`,
            label: "Users",
            position: "left",
        },
        {
            type: "docsVersion",
            to: `${routePrefix}/resources`,
            activeBasePath: `${routePrefix}/resources`,
            label: "Resources",
            position: "left",
        },
        {
            to: `https://github.com/casper-devrel/docs-redux/issues/new?assignees=&labels=docs-v2-feedback&projects=&template=feedback.yml&title=Docs+Feedback`,
            label: "Feedback",
            position: "right",
        },
        {
            to: 'blog/tags/condor', 
            label: 'Condor', 
            position: 'right' 
        },
        { 
            to: 'blog', 
            label: 'Blog', 
            position: 'right' 
        },
        {
            type: "search",
            position: "right",
        },
        {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
        },
        {
            href: "https://support.casperlabs.io/",
            label: "Support",
            position: "right",
        },
        {
            href: "https://discord.com/invite/casperblockchain",
            label: "Chat",
            position: "right",
        },
        {
            href: "https://github.com/casper-devrel/docs-redux",
            label: "GitHub",
            position: "right",
        },
    ],
};
