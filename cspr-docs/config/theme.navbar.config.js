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
            to: `${routePrefix}/concepts`,
            activeBasePath: `${routePrefix}/concepts`,
            label: "Concepts",
            position: "left",
        },
        {
            to: `${routePrefix}/developers`,
            activeBasePath: `${routePrefix}/developers`,
            label: "Developers",
            position: "left",
        },
        {
            to: `${routePrefix}/operators`,
            activeBasePath: `${routePrefix}/operators`,
            label: "Operators",
            position: "left",
        },
        {
            to: `${routePrefix}/users`,
            activeBasePath: `${routePrefix}/users`,
            label: "Users",
            position: "left",
        },
        {
            to: `${routePrefix}/resources`,
            activeBasePath: `${routePrefix}/resources`,
            label: "Resources",
            position: "left",
        },
        {
            to: `https://github.com/casper-devrel/docs-redux/issues`,
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
