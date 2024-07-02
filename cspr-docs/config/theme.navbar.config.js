const docsOnlyMode = process.env.DOCS_MODE || true;
const routePrefix = !docsOnlyMode ? "docs" : "";

module.exports = {
    title: "",
    logo: {
        alt: "Casper Logo",
        src: "/icon/Casper_Wordmark_Red_RGB.png",
        srcDark: "/icon/Casper_Wordmark_White_RGB.png",
    },
    items: [
        {
            to: `${routePrefix}/intro.md`,
            activeBasePath: `${routePrefix}/intro.md`,
            label: "Home",
            position: "left",
        },
        {
            to: `${routePrefix}/tutorial-extras`,
            activeBasePath: `${routePrefix}/tutorial-extras`,
            label: "Tutorial - Extras",
            position: "left",
        },
        {
            to: `${routePrefix}/tutorial-basics`,
            activeBasePath: `${routePrefix}/tutorial-basics`,
            label: "Tutorial - Basics",
            position: "left",
        },
        // {
        //     to: `${routePrefix}/concepts`,
        //     activeBasePath: `${routePrefix}/concepts`,
        //     label: "Concepts",
        //     position: "left",
        // },
        // {
        //     to: `${routePrefix}/developers`,
        //     activeBasePath: `${routePrefix}/developers`,
        //     label: "Developers",
        //     position: "left",
        // },
        // {
        //     to: `${routePrefix}/operators`,
        //     activeBasePath: `${routePrefix}/operators`,
        //     label: "Operators",
        //     position: "left",
        // },
        // {
        //     to: `${routePrefix}/users`,
        //     activeBasePath: `${routePrefix}/users`,
        //     label: "Users",
        //     position: "left",
        // },
        // {
        //     to: `${routePrefix}/resources`,
        //     activeBasePath: `${routePrefix}/resources`,
        //     label: "Resources",
        //     position: "left",
        // },
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
            href: "https://github.com/casper-network/docs/blob/dev/README.md",
            label: "GitHub",
            position: "right",
        },
    ],
};
