import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs";
  });
  return (
    <section className="my-10 space-y-5">
      <h3 className="text-3xl font-bold mb-5 text-center underline">Blogs</h3>
      <article className="space-y-5">
        <h4 className="text-xl font-semibold">
          What is an access token and refresh token?
        </h4>
        <p className="text-base font-normal">
          Access tokens and refresh tokens are two types of credentials that are
          used to access protected resources in applications. Access tokens are
          short-lived and are used to access resources that are not sensitive,
          such as public data or user profile information. Refresh tokens are
          long-lived and can be used to obtain new access tokens. When a user
          logs in to an application, the application will issue an access token
          to the user. The user can then use the access token to access
          protected resources. When the access token expires, the user can use
          the refresh token to obtain a new access token. Refresh tokens are
          typically stored in the user's browser or on the user's device. This
          allows the user to access protected resources without having to log in
          again.
        </p>
      </article>
      <article className="space-y-5">
        <h4 className="text-xl font-semibold">
          How do they work and where should we store them on the client-side?
        </h4>
        <p className="text-base font-normal">
          Access tokens and refresh tokens are used to authenticate users and
          grant them access to protected resources. Access tokens are
          short-lived and are used to access resources that are not sensitive,
          such as public data or user profile information. Refresh tokens are
          long-lived and can be used to obtain new access tokens. When a user
          logs in to an application, the application will issue an access token
          to the user. The user can then use the access token to access
          protected resources. When the access token expires, the user can use
          the refresh token to obtain a new access token.
        </p>
      </article>
      <article className="space-y-5">
        <h4 className="text-xl font-semibold">
          Compare SQL and NoSQL databases?
        </h4>
        <p className="text-base font-normal">
          SQL databases are relational databases that use Structured Query
          Language (SQL) to store and retrieve data. SQL databases are typically
          used for storing structured data, such as customer records or product
          inventory. SQL databases are scalable vertically, meaning that they
          can be scaled by increasing the capacity of the database server. SQL
          databases are less flexible than NoSQL databases, and they can be more
          expensive to set up and maintain. NoSQL databases are non-relational
          databases that do not use SQL to store and retrieve data. NoSQL
          databases are typically used for storing unstructured or
          semi-structured data, such as social media posts or sensor data. NoSQL
          databases are scalable horizontally, meaning that they can be scaled
          by adding more database servers. NoSQL databases are more flexible
          than SQL databases, and they can be less expensive to set up and
          maintain.
        </p>
      </article>
      <article className="space-y-5">
        <h4 className="text-xl font-semibold">
          What is MongoDB aggregate and how does it work ?
        </h4>
        <p className="text-base font-normal">
          MongoDB aggregate is a feature of the MongoDB database that allows you
          to perform complex operations on data. Aggregate operations are
          typically used to group data, calculate summary statistics, and
          perform other operations that are not possible with standard SQL
          queries. MongoDB aggregate operations are performed using a pipeline
          of stages. Each stage performs an operation on the input data, and the
          output of one stage is passed to the next stage. The pipeline can be
          as simple or complex as needed, and you can use any number of stages.
          Some of the most common aggregate stages include: $match: This stage
          filters the input data based on a condition. $group: This stage groups
          the input data by a value and calculates summary statistics. $project:
          This stage projects the input data into a new format. $sort: This
          stage sorts the input data by a value. $limit: This stage limits the
          number of documents returned by the pipeline. To use MongoDB
          aggregate, you need to use the aggregation framework. The aggregation
          framework provides a number of helper functions that make it easier to
          write aggregate pipelines.
        </p>
      </article>
      <article className="space-y-5">
        <h4 className="text-xl font-semibold">
          What is express js? What is Nest JS ?
        </h4>
        <p className="text-base font-normal">
          <strong className="font-bold">ExpressJs:</strong> Express is a minimal
          framework that provides a small set of features for building web
          applications. It is designed to be easy to use and extend, and it is
          used by a wide range of developers to build a variety of web
          applications. Express is a good choice for developers who want a
          simple and flexible framework. It is easy to learn and use, and it can
          be extended to meet the needs of most web applications.
          <br />
          <strong className="font-bold">NestJS:</strong> NestJS is a TypeScript
          framework that builds on top of Express and provides a more
          opinionated and robust set of features for building web applications.
          It includes features such as dependency injection, routing, and
          templating, and it is designed to be easy to test and scale. NestJS is
          a good choice for developers who want a more robust and opinionated
          framework. It provides a number of features that can help to improve
          the quality and performance of web applications.
        </p>
      </article>
    </section>
  );
};

export default Blogs;
