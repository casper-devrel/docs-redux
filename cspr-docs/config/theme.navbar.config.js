const globalConfig = require("../cfg-global");
console.log(globalConfig);
console.log(`globalConfig: ${globalConfig}`);


const routePrefix = globalConfig.routePrefix;
module.exports = {
    title: "",
    logo: {
        alt: "Casper Logo",
        src: "/icon/Casper_Wordmark_Red_RGB.png",
        srcDark: "/icon/Casper_Wordmark_White_RGB.png",
    },
    items: [
        //{
        //    to: `${routePrefix}/intro`,
        //    activeBasePath: `${routePrefix}/intro`,
        //    label: "Home",
        //    position: "left",
        //},
        //{
        //    to: `${routePrefix}/category/tutorial---basics`,
        //    activeBasePath: `${routePrefix}/category/tutorial---basics`,
        //    label: "Tutorial - Basics",
        //    position: "left",
        //},
        //{
        //    to: `${routePrefix}/category/tutorial---extras`,
        //    activeBasePath: `${routePrefix}/category/tutorial---extras`,
        //    label: "Tutorial - Extras",
        //    position: "left",
        //},
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
            type: "search",
            position: "right",
        },
        // {
        //     type: "docsVersionDropdown",
        //     position: "right",
        //     dropdownActiveClassDisabled: true,
        // },
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
            href: "https://github.com/casper-network/docs/blob/dev/README.md",
            label: "GitHub",
            position: "right",
        },
    ],
};
