webpackHotUpdate("main",{

/***/ "./src/components/StyledComponents.js":
/*!********************************************!*\
  !*** ./src/components/StyledComponents.js ***!
  \********************************************/
/*! exports provided: Nav, NavLink, NavTitle, UnderNavbarDiv, Span, Label, H2, Form, Section, Button, FilterButton, ContainerTitleAndFilter, SortButton, FilterLink, FilterSpan, SpacerDiv, MainTitle, Title, FridgeTitle, Postit, DeleteButton, RemoveButton, Input, Textarea, StyledLink, Card, UserCard, UserName, UserDeleteButton, Innerbox, ContainerScroll, ContainerFridgedetails, ContainerFridgeInside, Container, HomeImg, LogoImg, AddImg, Cleanlist, Li, Select, SmallFridge, ButtonContainer, GroupButton, GroupDeleteButton, Center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTitle", function() { return NavTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderNavbarDiv", function() { return UnderNavbarDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterButton", function() { return FilterButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerTitleAndFilter", function() { return ContainerTitleAndFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortButton", function() { return SortButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLink", function() { return FilterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSpan", function() { return FilterSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerDiv", function() { return SpacerDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return MainTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgeTitle", function() { return FridgeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postit", function() { return Postit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveButton", function() { return RemoveButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCard", function() { return UserCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserName", function() { return UserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteButton", function() { return UserDeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Innerbox", function() { return Innerbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerScroll", function() { return ContainerScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerFridgedetails", function() { return ContainerFridgedetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerFridgeInside", function() { return ContainerFridgeInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeImg", function() { return HomeImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImg", function() { return LogoImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImg", function() { return AddImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cleanlist", function() { return Cleanlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallFridge", function() { return SmallFridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupButton", function() { return GroupButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDeleteButton", function() { return GroupDeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
  position: fixed;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #5cb1ab;
  padding: 1vh;
`;
const NavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  color: white;
  font-size: 1em;
  padding: 1vw;
  text-decoration: none;
`;
const NavTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-family: "Lobster";
  padding: 0.5vw;
  font-size: 2em;
`;
const UnderNavbarDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: 15vh;
`;
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-size: 1.2em;
  font-family: "Lobster";
  font-weight: lighter;
  color: darkgray;
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  width: 70vw;
  @media (min-width: 769px) {
    width: 50vw;
  }
`;
const H2 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
padding: 3vw
  width: 70vw;
  text-align: center;
`;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form`
  display: flex:
  flex-direction: column;
  padding: 5vh 0 2vh 0;
  align-items: flex-start;
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: 3vh;
  font-size: 1em;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  padding: 1vw;
  font-size: 0.9em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: #5cb1ab;
  color: white;
  margin-top: 3vh;

  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 769px) {
    width: 12vw;
    font-size: 0.7em;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;
const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  padding: 1vw;
  font-size: 0.8em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: #5cb1ab;
  color: white;
  margin-top: 3vh;
  @media (min-width: 321px) {
    width: 50vw;
  }
  @media (min-width: 426px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 30vw;
  }
`;
const ContainerTitleAndFilter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0vw;
`;
const SortButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 30px;
  height: 30px;
  background-image: url(/sort-icon.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const FilterLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  width: 30px;
  height: 30px;
  margin: 3vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #414042;

  @media (min-width: 321px) {
    width: 100px;
  }
`;
const FilterSpan = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  display: none;
  @media (min-width: 321px) {
    display: block;
  }
`;
const SpacerDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 30px;
  height: 30px;
  margin: 3vh;

  @media (min-width: 321px) {
    width: 100px;
  }
`;
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
  font-size: 2em;
  font-family: "Lobster";
  padding: 2vh;
  color: #414042;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
  font-size: 5vh;
  font-family: "Lobster";
  padding: 2vh;
  color: #414042;
`;
const FridgeTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 2vh;
  font-weight: lightest;
  transform: rotate(-15deg);
  line-height: 70%;
  font-family: "Lobster";
  word-wrap: break-word;
  text-indent: 0.5em;
  padding: 0.5vh;
  height: 5vh;
  width: 5vw;
  @media (min-width: 320px) {
    width: 15vw;
    line-height: 80%;
  }
  @media (min-width: 426px) {
    width: 10vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
  }
  @media (min-width: 1025px) {
    width: 5vw;
    height: 7vh;
  }
`;
const Postit = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url(/postit.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 15vw;
  height: 8vh;
  margin: 0 auto;

  @media (min-width: 426px) {
    width: 10vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
  }
  @media (min-width: 1025px) {
    width: 5vw;
    height: 7vh;
  }
`;
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  padding: 1vw;
  font-size: 0.9em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: #f05050;
  color: white;
  margin: 3vh 0;
  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 769px) {
    width: 12vw;
    font-size: 0.7em;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;
const RemoveButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(DeleteButton)`
  margin-top: 0vh;
  width: 25vw;
  padding: 1vw;
  font-size: 0.8em;
  @media (min-width: 321px) {
    width: 20vw;
  }
  @media (min-width: 376px) {
    width: 20vw;
  }
  @media (min-width: 426px) {
    width: 13vw;
    padding: 0.8vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
    padding: 0.5vw;
  }
  @media (min-width: 1025px) {
    width: 8vw;
  }
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  padding: 1.5vh;
  width: 50vw;
  border-radius: 5px;
`;
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].textarea`
  padding: 1.5vh;
  width: 60vw;
  height: 20vh;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 769px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 35vw;
  }
`;
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  text-decoration: none;
  color: black;
  font-size: 1em;
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
`;
const UserCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  padding: 2vh;
  @media (min-width: 376px) {
    width: 65vw;
  }
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 769px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 30vw;
  }
`;
const UserName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex: 1;
`;
const UserDeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex: 1;
`;
const Innerbox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  border-bottom: 3px double grey;
  border-bottom-style: double;
  width: 35%;
`;
const ContainerScroll = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  background-color: rgb(242, 249, 250);
  height: 80vh;
  width: 100vw;
  overflow-y: auto;
  border-radius: 45px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border: solid transparent;
  border-width: 70px 15px 40px 15px;
  border-image-source: url(/FridgyFridge.png);
  border-image-slice: 120;
  padding: 10vw;
`;
const ContainerFridgedetails = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/FridgyFridge.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin: 0 auto;
  width: 90vw;
  height: 70vh;
  max-width: 1000px;
  border-radius: 45px;
`;
const ContainerFridgeInside = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  background-color: rgb(242, 249, 250);
  overflow-y: auto;
  padding: 10px;
  width: 95%;
  height: 95%;
  border-radius: 45px;
  border: solid transparent;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border-width: 0px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0vw;
`;
const HomeImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  height: 40vh;
`;
const LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 70px;
`;
const AddImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  padding-top: 3vh;
  width: 40px;
`;
const Cleanlist = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
  list-style-type: none;
  margin: 0vw auto;
  padding: 0vw;
  font-size: 1em;
  text-align: center;
  width: 75vw;
`;
const Li = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  list-style-type: none;
  margin: 0vw auto;
  padding: 0vw;
  font-size: 1em;
  text-align: center;
  width: 50vw;
`;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select`
  width: 52%;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  font-size: 1em;
  margin: 1vw;
  outline: 0;
  padding: 1.8vh;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  @media (min-width: 426px) {
    width: 40%;
  }
  @media (min-width: 769px) {
    width: 35%;
    padding: 2.3vh;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
`;
const SmallFridge = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url("/FridgyFridge.png");
  background-repeat: no-repeat;
  background-size: 35vw;
  margin: 2vh 2vw;
  padding-top: 3vh;
  height: 45vh;
  width: 35vw;
  @media (min-width: 321px) {
    height: 50vh;
    margin: 2vh 3vw;
  }
  @media (min-width: 376px) {
    height: 55vh;
  }
  @media (min-width: 426px) {
    background-size: 15vw;
    height: 45vh;
    width: 15vw;
  }
  @media (min-width: 769px) {
    background-size: 12vw;
    height: 50vh;
    width: 12vw;
  }
  @media (min-width: 1025px) {
    height: 52vh;
  }
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 5vh;
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 1025px) {
    width: 40vw;
  }
`;
const GroupButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button)`
  width: 25vw;
  height: 11vh;
  @media (min-width: 769px) {
    height: 8vh;
  }
`;
const GroupDeleteButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(DeleteButton)`
  width: 25vw;
  height: 11vh;
  @media (min-width: 769px) {
    height: 8vh;
  }
`;
const Center = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin: 0 auto;
`;

/***/ })

})
//# sourceMappingURL=main.8d82904be6c9f7aecd0b.hot-update.js.map