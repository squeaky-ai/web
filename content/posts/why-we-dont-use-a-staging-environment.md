---
title: Why we don’t use a staging environment
tags:
  - Tips
  - Ideas
  - Culture
author:
  name: Lewis Monteith
  image: https://squeaky.ai/stallions/lewis.webp
category: Development
date: '2022-03-04T10:03:00Z'
draft: false
metaImage: https://squeaky.ai/blog/cat-in-space.webp
metaDescription: Do you need a staging environment? We've written this short blog post to share how an alternative approach is saving us time, and helping us ship better code.
slug: /development/why-we-dont-use-a-staging-environment
---

## Introduction

It’s common in the tech industry to create several pre-live environments, such as development, staging, and even team, or feature-level environments. There are lots of reasons for this, but mostly we rely on pre-production environments to help us test our latest changes before they end up in front of our users.

While there are obvious benefits to deploying to different environments, at Squeaky we’ve decided to take a different approach. We only have two environments: our laptops, and production. Once we merge into the main branch, it will be immediately deployed to production.

Perhaps that sounds unusual, but so far it’s outweighed the benefits of pre-live environments, and we believe it’s helping us to ship faster, and lower the number of issues on production. So, I thought I’d write this post to share why we think it works, and why you should consider it too.

## What’s wrong with staging environments?

In our experience, there are a number of problems with having pre-live environments, including, but not limited to:

### Pre-live environments are never at parity with production

More often than not, each environment uses different hardware, configurations, and software versions. Most companies are not prepared to pay for a staging environment identical to production, and it adds a lot of extra time and complexity to ensure that all services are synchronised with production.

This creates various problems, such as different load capabilities, different database behaviours, and unpredictable results due to poor test data. I’ve encountered these sorts of issue regularly during my career. For example, finding a bug in production that was ultimately due to a consistency issues with our database, when a record is written to one database node, and you attempt to read it from another node before it has had time to propagate. The user signed up, but upon redirection was presented with a 401 Unauthorised page as their record could not be found. We only ran a single node in staging due to the cost, and the bug was not caught until it was in production.

### There’s always a queue

Typically, multiple people use staging to validate their changes before release. This often leads to times when you can’t merge your code because someone else is testing code on staging, and they don’t want your changes to interfere with their validation. Not only that, but in the event that the person testing on staging encounters problems that need fixing, the entire pipeline is blocked until the problem is resolved.

This causes people to introduce a branching strategy, so that changes do not need to be rolled back, and hotfixes to production can bypass the changes waiting on staging. Branches are then constantly out of sync with each other, and problems often surface when you merge, rebase, and backfill hotfixes.

![Illustration showing complex branching strategies](https://squeaky.ai/blog/branching-strategy.webp)
*Branching strategies quickly become complex and time-consuming*

### Releases are too large

As queues slow down development and lead to multiple changes being bundled into larger releases, this leads to Big Bang releases where it is more likely you’ll introduce bugs, hard to isolate the culprit, and more difficult to roll back effectively.

### Poor ownership of changes

In larger codebases, when you merge changes into the main branch, there is a lengthy suite of tests and checks that run before it is deployed to staging. During this period, which could end up being hours, engineers will likely pick up another task. I’ve seen people merge, and then forget that their changes are on staging, more times than I can count. In the meantime, another engineer may have merged changes into main, and now there are multiple sets of changes waiting to be released.

This leads to a situation where issues are no longer isolated, the risk of the deployment to production has increased, and the developer may not even be aware that their changes are in production!

### People mistakenly let process replace accountability

By utilising a pre-production environment, you’re creating a situation where developers often merge code and “throw it over the fence”, either for them to tidy up later, or other members of the team to deal with. This practice discourages accountability, and leads to less complete test coverage.

## How we ship changes at Squeaky

When shipping at Squeaky our process resolves, or avoids, the issues mentioned above. There are various elements to our approach, but most importantly:

### We only merge code that is ready to go live

If we’re not confident that changes are ready to be in production, then we don’t merge them. This usually means we've written sufficient tests and have validated our changes in development.

### We have a flat branching strategy

All branches are cut from main, and all changes get merged back into main. Whenever a feature is ready to be merged, it is rebased and smoke-tested locally. If we ever have an issue in production, we always roll forward.

### High risk features are always feature flagged

If we are concerned that our changes may cause issues in production we ship them behind a feature flag. Sometimes this is because we’re uncertain about how a feature will behave under load, or it may be because we’re unsure how users will react to a change. Feature flags can be enabled on a per-user basis so we can monitor performance and gather feedback. Experimental features can be enabled by users in their account settings.

### Hands-on deployments

Whenever we deploy changes, we monitor the situation continuously until we are certain there are no issues. To help us do this, we have monitoring, logging, and alarms around all of our services. We also blue/green deploy, by draining and replacing a percentage of containers. This allows a subset of users to receive traffic from the new services while we validate.

## In conclusion

Dropping your staging environment in favour of true continuous integration and deployment can create a different mindset for shipping software. When there is no buffer for changes before they go live, you need to be confident that your changes are fit for production. You also need to be alert and take full ownership of any changes you make. You’ll reduce cost and complexity in your infrastructure, and you’ll simplify, and speed up your development lifecycle.
