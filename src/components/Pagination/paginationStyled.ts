import styled from "styled-components";

export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    height: 3rem;
    align-items: center;
    user-select: none;
    margin: 0.5rem 0;
    padding: 0;
  }
  .active > a {
    background-color: green;
    color: white;
    &:hover {
      background-color: green;
    }
  }
  .pageLink {
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    color: blue;
    padding: 0.5rem;
    margin: 0.2rem;
    cursor: pointer;
    &:hover {
      background-color: #ff8e53;
    }
  }
  .previous {
    cursor: pointer;
    color: blue;
  }
  .next {
    cursor: pointer;
    color: blue;
  }
  .pagination > li {
    list-style-type: none;
  }
  .disabled {
    opacity: 0.5;
    cursor: default;
    color: grey;
  }
`;
