// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React & Serverless",
  tagline: "React , DynamoDb, NodeJS, Lambdas",
  url: "https://github.com",
  baseUrl: "/documentation/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mern-training-revamped", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // // Even if you don't use internalization, you can use this field to set useful
  // // metadata like html lang. For example, if your site is Chinese, you may want
  // // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Home",
        logo: {
          alt: "Home Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Intro",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/api", label: "API", position: "left" },
          {
            href: "https://github.com/mern-training-revamped/documentation",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Serverless",
                href: "https://www.serverless.com/framework/docs/getting-started",
              },
              {
                label: "AWS Lambda",
                href: "https://aws.amazon.com/lambda/",
              },
              {
                label: "AWS Lambda",
                href: "https://aws.amazon.com/dynamodb/",
              },
              {
                label: "NodeJS",
                href: "https://nodejs.org/en/",
              },
            ],
          },
          {
            title: "Additional Resources",
            items: [
              {
                label: "Learn NodeJS",
                href: "https://www.codecademy.com/learn/learn-node-js",
              },
              {
                label: "Cloudfront",
                href: "https://www.amazonaws.cn/en/cloudfront/",
              },
              {
                label: "API Gateway",
                href: "https://www.amazonaws.cn/en/api-gateway/",
              },
              {
                label: "Terraform",
                href: "https://www.terraform.io/",
              },
              {
                label: "Postman",
                href: "https://www.postman.com/downloads/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/mern-training-revamped/documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
