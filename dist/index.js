/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./app/styles/styles.css\");\n/* harmony import */ var _images_pok_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pok.png */ \"./app/images/pok.png\");\n\r\n\r\n\r\n//========================================================================\r\n\r\nasync function catchPokemon(username, ID) {\r\n  const headersObj = {\r\n    username: username,\r\n  };\r\n  try {\r\n    const response = await axios.put(\r\n      `/pokemon/catch/${ID}`,\r\n      {},\r\n      {\r\n        headers: headersObj,\r\n      }\r\n    );\r\n    return response.data;\r\n  } catch (error) {\r\n    return false;\r\n  }\r\n}\r\n\r\nasync function relesePokemon(username, ID) {\r\n  const headersObj = {\r\n    username: username,\r\n  };\r\n  try {\r\n    const response = await axios.delete(`/pokemon/release/${ID}`, {\r\n      headers: headersObj,\r\n    });\r\n    return response.data;\r\n  } catch (error) {\r\n    return false;\r\n  }\r\n}\r\n\r\nasync function getUsersPokemons(username) {\r\n  const headersObj = {\r\n    username: username,\r\n  };\r\n  try {\r\n    const response = await axios.get(\"/pokemon/\", {\r\n      headers: headersObj,\r\n    });\r\n    return response.data;\r\n  } catch (error) {\r\n    return false;\r\n  }\r\n}\r\n\r\nasync function getPokemonInfoId(username, id) {\r\n  const headersObj = {\r\n    username: username,\r\n  };\r\n  try {\r\n    const response = await axios.get(`/pokemon/get/${id}`, {\r\n      headers: headersObj,\r\n    });\r\n    return response.data;\r\n  } catch (error) {\r\n    return false;\r\n  }\r\n}\r\n\r\nasync function getPokemonInfoName(username, name) {\r\n  const headersObj = {\r\n    username: username,\r\n  };\r\n  try {\r\n    const response = await axios.get(`/pokemon/query?query=${name}`, {\r\n      headers: headersObj,\r\n    });\r\n    return response.data;\r\n  } catch (error) {\r\n    console.log(error.response.data);\r\n    //return error.data;\r\n  }\r\n}\r\n\r\n//=========================================================================\r\n\r\ndocument\r\n  .querySelector(\"#caught_pokemons_btn\")\r\n  .addEventListener(\"click\", OnFindPokemonsClick);\r\ndocument\r\n  .querySelector(\"#search_by_id_btn\")\r\n  .addEventListener(\"click\", OnSearchIdClick);\r\ndocument\r\n  .querySelector(\"#search_by_name_btn\")\r\n  .addEventListener(\"click\", OnSearchNameClick);\r\ndocument.querySelector(\"#catch_btn\").addEventListener(\"click\", OnCatchClick);\r\ndocument.querySelector(\"#relese_btn\").addEventListener(\"click\", OnReleseClick);\r\n\r\n// ===================================\r\n// ======= Event Handlers ============\r\n// ===================================\r\n\r\nasync function OnFindPokemonsClick() {\r\n  clearValidtions();\r\n  let usernameInput = document.querySelector(\"#username\");\r\n  if (usernameInput.value === \"\") {\r\n    addError(\"username\", \"User name cant be null\");\r\n  } else {\r\n    let pokemonsArray = await getUsersPokemons(usernameInput.value);\r\n    if (pokemonsArray) {\r\n      createPokemonList(pokemonsArray);\r\n    } else {\r\n      addError(\"username\", \"User name is not exsits\");\r\n    }\r\n  }\r\n  //activate();\r\n  // Find pokemons by user name (input)\r\n}\r\n\r\nasync function OnSearchIdClick() {\r\n  clearValidtions();\r\n  let flag = true;\r\n  let usernameInput = document.querySelector(\"#username\");\r\n  if (usernameInput.value === \"\") {\r\n    addError(\"username\", \"User name cant be null\");\r\n    flag = false;\r\n  }\r\n  let idInput = document.querySelector(\"#findPokemonId\");\r\n  if (idInput.value === \"\") {\r\n    addError(\"findPokemonId\", \"ID cant be null\");\r\n    flag = false;\r\n  }\r\n  if (flag) {\r\n    let pokemon = await getPokemonInfoId(usernameInput.value, idInput.value);\r\n    if (pokemon) {\r\n      deleteExsitedCard();\r\n      createCard(\r\n        pokemon.name,\r\n        pokemon.height,\r\n        pokemon.weight,\r\n        pokemon.front_pic,\r\n        pokemon.back_pic,\r\n        pokemon.abilities,\r\n        pokemon.types\r\n      );\r\n    } else {\r\n      addError(\"findPokemonId\", \"Couldnt find pokemon\");\r\n    }\r\n  }\r\n}\r\n\r\nasync function OnSearchNameClick() {\r\n  clearValidtions();\r\n  let flag = true;\r\n  let usernameInput = document.querySelector(\"#username\");\r\n  if (usernameInput.value === \"\") {\r\n    addError(\"username\", \"User name cant be null\");\r\n    flag = false;\r\n  }\r\n  let nameInput = document.querySelector(\"#findPokemonName\");\r\n  let x = nameInput.value.toString();\r\n  if (nameInput.value === \"\") {\r\n    addError(\"findPokemonName\", \"Name cant be null\");\r\n    flag = false;\r\n  } else if (!/^[a-zA-Z]+$/.test(x)) {\r\n    addError(\"findPokemonName\", \"Name is not valid\");\r\n    flag = false;\r\n  }\r\n  if (flag) {\r\n    let pokemon = await getPokemonInfoName(\r\n      usernameInput.value,\r\n      nameInput.value\r\n    );\r\n    if (pokemon) {\r\n      deleteExsitedCard();\r\n      createCard(\r\n        pokemon.name,\r\n        pokemon.height,\r\n        pokemon.weight,\r\n        pokemon.front_pic,\r\n        pokemon.back_pic,\r\n        pokemon.abilities,\r\n        pokemon.types\r\n      );\r\n    } else {\r\n      addError(\"findPokemonName\", \"Couldnt find pokemon\");\r\n    }\r\n  }\r\n}\r\n\r\nasync function OnCatchClick() {\r\n  clearValidtions();\r\n  let flag = true;\r\n  let usernameInput = document.querySelector(\"#username\");\r\n  if (usernameInput.value === \"\") {\r\n    addError(\"username\", \"User name cant be null\");\r\n    flag = false;\r\n  }\r\n  let idInputCatch = document.querySelector(\"#catchID\");\r\n  if (idInputCatch.value === \"\") {\r\n    addError(\"catchID\", \"ID cant be null\");\r\n    flag = false;\r\n  }\r\n  if (flag) {\r\n    let pokeon = await catchPokemon(usernameInput.value, idInputCatch.value);\r\n    if (pokeon) {\r\n      idInputCatch.classList.add(\"is-valid\");\r\n      document.getElementById(\"catchIDSuccess\").innerHTML = `captured!`;\r\n    } else {\r\n      addError(\"catchID\", \"could not catch\");\r\n    }\r\n  }\r\n}\r\n\r\nasync function OnReleseClick() {\r\n  clearValidtions();\r\n  let flag = true;\r\n  let usernameInput = document.querySelector(\"#username\");\r\n  if (usernameInput.value === \"\") {\r\n    addError(\"username\", \"User name cant be null\");\r\n    flag = false;\r\n  }\r\n  let idInputRelese = document.querySelector(\"#releseID\");\r\n  if (idInputRelese.value === \"\") {\r\n    addError(\"releseID\", \"ID cant be null\");\r\n    flag = false;\r\n  }\r\n  if (flag) {\r\n    let pokeon = await relesePokemon(usernameInput.value, idInputRelese.value);\r\n    if (pokeon) {\r\n      idInputRelese.classList.add(\"is-valid\");\r\n      document.getElementById(\"releseIDSuccess\").innerHTML = `relesed!`;\r\n    } else {\r\n      addError(\"releseID\", \"Havn't caught, cant release\");\r\n    }\r\n  }\r\n}\r\n\r\nfunction onMouseEnterImg(event, backImgUrl) {\r\n  event.target.src = backImgUrl;\r\n}\r\n\r\nfunction onMouseLeaveImg(event, imgUrl) {\r\n  event.target.src = imgUrl;\r\n}\r\n\r\n// ===================================\r\n// ======= DOM Functions =============\r\n// ===================================\r\n\r\nfunction clearValidtions() {\r\n  document.getElementById(\"username\").classList.remove(\"is-invalid\");\r\n  document.getElementById(\"findPokemonId\").classList.remove(\"is-invalid\");\r\n  document.getElementById(\"findPokemonName\").classList.remove(\"is-invalid\");\r\n  document.getElementById(\"catchID\").classList.remove(\"is-invalid\");\r\n  document.getElementById(\"releseID\").classList.remove(\"is-invalid\");\r\n  document.getElementById(\"catchID\").classList.remove(\"is-valid\");\r\n  document.getElementById(\"releseID\").classList.remove(\"is-valid\");\r\n}\r\n\r\nfunction deleteExsitedCard() {\r\n  if (document.querySelector(\"#liveCard\") !== null) {\r\n    document.querySelector(\"#liveCard\").remove();\r\n  }\r\n}\r\n\r\nfunction addError(inputId, message) {\r\n  document.querySelector(`#${inputId}`).classList.add(\"is-invalid\");\r\n  document.querySelector(`#${inputId}Error`).innerHTML = message;\r\n}\r\n\r\nfunction createCard(\r\n  name,\r\n  Hieght,\r\n  Wieght,\r\n  imgUrl,\r\n  backImgUrl,\r\n  abilities,\r\n  types\r\n) {\r\n  // Big Image - can turn on hover\r\n  /////////////////////////////////\r\n  let img = createElement(\r\n    \"img\",\r\n    [],\r\n    [\"card-img-top\"],\r\n    {\r\n      id: \"pokImg\",\r\n      src: imgUrl,\r\n      alt: \"Card image cap\",\r\n    },\r\n    {\r\n      mouseenter: (event) => {\r\n        onMouseEnterImg(event, backImgUrl);\r\n      },\r\n      mouseleave: (event) => {\r\n        onMouseLeaveImg(event, imgUrl);\r\n      },\r\n    }\r\n  );\r\n\r\n  // Card types - first\r\n  ////////////////////////\r\n  let typesArray = [];\r\n  types.forEach((type) => {\r\n    typesArray.push(\r\n      createElement(\"p\", [`Type: ${type}`], [\"card-text\"], {\r\n        type: \"button\",\r\n        style: \"margin-left:4px\",\r\n      })\r\n    );\r\n  });\r\n\r\n  let title = createElement(\r\n    \"h5\",\r\n    [name.charAt(0).toUpperCase() + name.slice(1)],\r\n    [\"card-title\"]\r\n  );\r\n\r\n  let typesDiv = createElement(\"div\", [title, ...typesArray], [\"card-body\"]);\r\n\r\n  // Card info - second\r\n  ////////////////////////\r\n  let li1 = createElement(\"li\", [`Weight: ${Wieght} Kg`], [\"list-group-item\"]);\r\n  let li2 = createElement(\"li\", [`Height: ${Hieght} m`], [\"list-group-item\"]);\r\n  let listInfo = createElement(\r\n    \"ul\",\r\n    [li1, li2],\r\n    [\"list-group\", \"list-group-flush\"]\r\n  );\r\n\r\n  // Card ability - third\r\n  ////////////////////////////\r\n  let abilityArray = [];\r\n  abilities.forEach((ability) => {\r\n    abilityArray.push(\r\n      createElement(\"p\", [`ability: ${ability}`], [\"card-text\"])\r\n    );\r\n  });\r\n  let abilitiesDiv = createElement(\"div\", [...abilityArray], [\"card-body\"]);\r\n\r\n  // Main div\r\n  //////////////////////\r\n  let mainDiv = createElement(\r\n    \"div\",\r\n    [img, typesDiv, listInfo, abilitiesDiv],\r\n    [\"card\", \"mt-5\", \"mb-5\"],\r\n    {\r\n      style: \"width: 18rem; margin: auto\",\r\n      id: \"liveCard\",\r\n    }\r\n  );\r\n\r\n  document.querySelector(\"body\").append(mainDiv);\r\n}\r\n\r\nfunction createPokemonList(pokimonNames) {\r\n  let modalBody = document.querySelector(\"#modalBody\");\r\n  modalBody.innerHTML = \"\";\r\n  let pokimonsArray = [];\r\n  pokimonNames.forEach((pokimon) => {\r\n    pokimonsArray.push(\r\n      createElement(\"li\", [pokimon.name], [], {\r\n        style: \"cursor:pointer\",\r\n        \"data-dismiss\": \"modal\",\r\n      })\r\n    );\r\n  });\r\n  let typesUl = createElement(\"ul\", [...pokimonsArray]);\r\n  modalBody.append(typesUl);\r\n}\r\n\r\nfunction createElement(\r\n  tagName,\r\n  children = [],\r\n  classes = [],\r\n  attributes = {},\r\n  eventListeners = {}\r\n) {\r\n  const myElement = document.createElement(tagName);\r\n\r\n  children.map((child) => {\r\n    myElement.append(child);\r\n    return child;\r\n  });\r\n\r\n  classes.map((cls) => {\r\n    myElement.classList.add(cls);\r\n    return cls;\r\n  });\r\n\r\n  Object.entries(attributes).map(([attr, value]) => {\r\n    myElement.setAttribute(attr, value);\r\n    return attr;\r\n  });\r\n\r\n  Object.entries(eventListeners).map(([listener, handler]) => {\r\n    myElement.addEventListener(listener, handler, true);\r\n    return [listener, handler];\r\n  });\r\n\r\n  return myElement;\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".headtitle {\\r\\n  color: blue;\\r\\n  text-align: center;\\r\\n}\\r\\n.form-div {\\r\\n  margin: auto;\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  width: 2%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./app/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/styles/styles.css":
/*!*******************************!*\
  !*** ./app/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./app/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./app/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./app/images/pok.png":
/*!****************************!*\
  !*** ./app/images/pok.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/pok.png\";\n\n//# sourceURL=webpack://calc/./app/images/pok.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;