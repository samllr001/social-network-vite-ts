import styled from "styled-components";

export const SCMainPage = styled.div`
  display: grid;
  grid-template-areas: "L M R";
  grid-template-columns: minmax(300px, 360px) auto minmax(300px, 360px);
  gap: 30px;

  .LeftSide {
    grid-area: L;

    .Navbar {
      margin-bottom: 20px;
    }
  }

  .Main {
    grid-area: M;
  }

  .RightSide {
    grid-area: R;

    .List {
      margin-bottom: 20px;
    }
  }


@media (max-width: 1440px) {
  .MainPage {
    grid-template-areas: "L M";
    grid-template-columns: 290px auto;

    .RightSide {
      display: none;
    }
  }
}

@media (max-width: 730px) {
  .MainPage {
    display: block;

    .LeftSide {
      display: none;
    }
  }
}
`