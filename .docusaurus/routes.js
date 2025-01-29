import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog', 'afb'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', '807'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post', '45e'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post', '432'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post', '3a1'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', 'a23'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus', '6ed'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook', '620'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello', '7b1'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola', 'a82'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome', '8fe'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', 'afc'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', 'eb2'),
    routes: [
      {
        path: '/documentation/docs/AWS API Gateway/congratulations',
        component: ComponentCreator('/documentation/docs/AWS API Gateway/congratulations', 'b28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/AWS API Gateway/pre-requisites',
        component: ComponentCreator('/documentation/docs/AWS API Gateway/pre-requisites', 'cc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/AWS API Gateway/setup-api-gateway',
        component: ComponentCreator('/documentation/docs/AWS API Gateway/setup-api-gateway', 'b14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/aws-api-gateway',
        component: ComponentCreator('/documentation/docs/category/aws-api-gateway', '9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/lambda---eligibility-api',
        component: ComponentCreator('/documentation/docs/category/lambda---eligibility-api', '438'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/lambda---getting-started',
        component: ComponentCreator('/documentation/docs/category/lambda---getting-started', '122'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/lambda---localization-api',
        component: ComponentCreator('/documentation/docs/category/lambda---localization-api', '02f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/lambda---profile-api',
        component: ComponentCreator('/documentation/docs/category/lambda---profile-api', '90a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/lambda---validation-api',
        component: ComponentCreator('/documentation/docs/category/lambda---validation-api', 'd3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/react-ui',
        component: ComponentCreator('/documentation/docs/category/react-ui', 'aca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Eligibility API/congratulations',
        component: ComponentCreator('/documentation/docs/Eligibility API/congratulations', '0e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Eligibility API/create-eligibility-api',
        component: ComponentCreator('/documentation/docs/Eligibility API/create-eligibility-api', '171'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Eligibility API/pre-requisites',
        component: ComponentCreator('/documentation/docs/Eligibility API/pre-requisites', 'a25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/intro',
        component: ComponentCreator('/documentation/docs/intro', '9e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Intro to Lambdas/congratulations',
        component: ComponentCreator('/documentation/docs/Intro to Lambdas/congratulations', '820'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Intro to Lambdas/create-a-lambda',
        component: ComponentCreator('/documentation/docs/Intro to Lambdas/create-a-lambda', '6ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Intro to Lambdas/create-a-nodejs-project',
        component: ComponentCreator('/documentation/docs/Intro to Lambdas/create-a-nodejs-project', '6ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Intro to Lambdas/deploy-your-app',
        component: ComponentCreator('/documentation/docs/Intro to Lambdas/deploy-your-app', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Intro to Lambdas/setup-environment',
        component: ComponentCreator('/documentation/docs/Intro to Lambdas/setup-environment', '463'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Intro to Lambdas/setup-handler',
        component: ComponentCreator('/documentation/docs/Intro to Lambdas/setup-handler', '061'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Localization API/congratulations',
        component: ComponentCreator('/documentation/docs/Localization API/congratulations', '6a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Localization API/create-localization-api',
        component: ComponentCreator('/documentation/docs/Localization API/create-localization-api', '3d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Localization API/pre-requisites',
        component: ComponentCreator('/documentation/docs/Localization API/pre-requisites', '1af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Profile API/congratulations',
        component: ComponentCreator('/documentation/docs/Profile API/congratulations', '1c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Profile API/create-profile-api',
        component: ComponentCreator('/documentation/docs/Profile API/create-profile-api', 'ddf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Profile API/pre-requisites',
        component: ComponentCreator('/documentation/docs/Profile API/pre-requisites', '868'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/React UI/manage-docs-versions',
        component: ComponentCreator('/documentation/docs/React UI/manage-docs-versions', '746'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/React UI/translate-your-site',
        component: ComponentCreator('/documentation/docs/React UI/translate-your-site', '4ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Validation API/congratulations',
        component: ComponentCreator('/documentation/docs/Validation API/congratulations', 'a3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Validation API/create-validation-api',
        component: ComponentCreator('/documentation/docs/Validation API/create-validation-api', '601'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/Validation API/pre-requisites',
        component: ComponentCreator('/documentation/docs/Validation API/pre-requisites', 'a96'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '135'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
