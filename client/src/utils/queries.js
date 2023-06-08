import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      description
      image
      price
      Tag {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_TAGS = gql`
  {
    tags {
      _id
      name
    }
  }
`;

export const SORTED_PRODUCT = gql`
  query sortedProduct($name: String) {
    sortedProduct(name: $name) {
      products {
        _id
        name
        description
        image
        price
        Tag {
          name
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;