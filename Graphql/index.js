import { request, gql } from 'graphql-request';


export const categories=gql`
query GetGategories {
    categories {
      name
      slug
    }
}
`;



export const posts=gql`
query MyQuery {
  postsConnection {
    edges {
      cursor
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}
`;


export const details= gql`
query GetPostDetails($slug : String!) {
  post(where: {slug: $slug}) {
    title
    excerpt
    featuredImage {
      url
    }
    author{
      name
      bio
      photo {
        url
      }
    }
    createdAt
    slug
    content {
      raw
    }
    categories {
      name
      slug
    }
  }
}
`;

export const similarPosts=gql`
query GetPostDetails($slug: String!, $categories: [String!]) {
  posts(
    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
    last: 3
  ) {
    title
    featuredImage {
      url
    }
    createdAt
    slug
  }
}
`;


export const adjacentPosts=gql`
query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
  next:posts(
    first: 1
    orderBy: createdAt_ASC
    where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
  ) {
    title
    featuredImage {
      url
    }
    createdAt
    slug
  }
  previous:posts(
    first: 1
    orderBy: createdAt_DESC
    where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
  ) {
    title
    featuredImage {
      url
    }
    createdAt
    slug
  }
}
`;

export const categoryPost=gql`
query GetCategoryPost($slug: String!) {
  postsConnection(where: {categories_some: {slug: $slug}}) {
    edges {
      cursor
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}
`;
export const featuredPosts= gql`
query GetCategoryPost() {
  posts(where: {featuredPost: true}) {
    author {
      name
      photo {
        url
      }
    }
    featuredImage {
      url
    }
    title
    slug
    createdAt
  }
}   
`;