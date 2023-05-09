# Capture - A Marketplace for Photographers & Filmmakers

Capture is a marketplace for cameras, lenses, bags, lighting & more.
It is an online e-commerce web application built on React/TypeScript, Firebase Auth & Firestore, Redux Saga, React Router, and Styled Components. 

This is a project in process to practice and apply new learnings during my unemployment journey. This is not an official e-commerce website. 

Why Redux Saga? 

To handle asynchronous operations such as making API calls, handling side effects, and managing data flow. It provides a way to write and manage async logic as a series of generators, which can be easier to reason about and test compared to traditional promise-based approaches. 

Why switch to Apollo Client? 

As data fetching begin to grow, Apollo Client simplifies the process of fetching data by providing a declarative query capabilities. It also provides the ability to retrieve and update data easily and ensures that components have access to the most up to date data. With Redux, we need to manage the state ourselves and handle complex data normalization and updates. In addition, Apollo Client automatically caches responses; meaning if we make the same query call, it can return the data from the cache instead of making another network request. This caching mechanism improves performance and reduces the need for additional API calls. 