# React + TypeScript + Vite

# Backend

# Frontend

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
    parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Express you art with Sass

The `styles/` folder is organized to maintain a modular and scalable structure for our stylesheets and to import stylesheets, we no longer use the `@import` directive. Instead, we follow the new module system introduced by Sass.

In the new module system, we use the `@use` directive to import stylesheets. For example, to import a stylesheet named `variables.scss`, use the following code:

```
@use 'variables';
```

We also use the `@forward` directive to make stylesheets available for other modules to use. For example, to forward the `variables.scss` stylesheet, use the following code:

```
@forward 'variables';
```

By using `@use` and `@forward`, we ensure that stylesheets are only included once and avoid any potential conflicts or duplication.

For more information on the new module system in Sass, refer to the official Sass documentation or head into these handy links that will take you directly to documentation of `@use` and `@forward`.

- `@use`: https://sass-lang.com/documentation/at-rules/use/
- `@forward`: https://sass-lang.com/documentation/at-rules/forward/

## A Visual Representation of the Styles Folder Structure
```
styles/
|
|– abstracts/
|   |– _breakpoints.scss        # Sass Breakpoints
|   |– _colors.scss             # Sass Colors
|   |– _functions.scss          # Sass Functions
|   |– _index.scss              # @forward all your files from this folder here
|   |– _mixins.scss             # Sass Mixins
|   |– _variables.scss          # Sass Variables
|   …                           # Etc..
|
|– base/
|   |– _reset.scss              # Sass custom reset
|   |– _typography.scss         # Sass typography rules
|   …                           # Etc..
|
|– components/
|   |– inputs                   # Input collection
|      |– _button.scss          # Sass Buttons.scss
|
|	…					        # Etc..
|
|– layout/
|   |– _navbar.scss             # Sass Navbar
|   |– _root.scss               # Sass Root
|   …                           # Etc..
|
|– pages/
|   |– auth
|      |– components            # components folder
|         |– _auth-form.scss    # Sass component auth-form styles
|      |– _index.scss           # Sass authentication specific page styles
|
|   |– error boundary
|      |– _index.scss           # Sass error specific page styles
|
|   |– index
|      |– _index.scss           # Sass ( home / root ) specific page styles
|   …                           # Etc..
|
|– utilities/
|   |– _utility-template.scss   # Sass template -> copy me if you create a new utility
|   |– _visibility.scss         # Sass mobile or desktop
|   …                           # Etc..
|
|– main.scss                    # Main Sass file
```

## Diving Deeper into the Architecture of the Styles Folder Structure

### Abstract
The `abstracts/` folder gathers all Sass tools and helpers used across the project.
Every global like variables, functions or mixin should be put in here.

The `abstracts/_index.scss` then combines these ( helpers / tools ) with the use of @forward.
This means that you can reference `@use 'xx/abstract' as *;` and have access to everything within the base folder.

**word of caution**
You can not write `@use '../abstract/' as *;` inside your forwarded files, instead `@use '../specific-file/' as *;`

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own.
These are nothing but Sass helpers.

### Base
The `base/` folder serves as the repository for what we commonly refer to as the project's boilerplate code. Within this directory, you should establish stylesheets that defines standard styling for frequently used HTML elements, such as the reset file and typographic rules and more.

**Rule of thumb:** You can focus on both element and class selectors here, but keep in mind that these files should only globally affect your page.

### Components
***Notice that `components` are global and `page/components` should only relate to that page!***

The `components/` folder can be seen as lego, these are pieces that can be combined with another lego pieces to help you form a sort of structure. It can contains all kind of specific modules like a slider, button, link, a loader, a widget, and basically anything along those lines.

### Layout
The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

So you can think of this folder as visual piece that are used across all / almost all pages, where components are reusable blocks that can be scattered across your pages.

### Pages

If you have page-specific styles, then it is better to put them in a `pages/` folder, where each page should be designated its own folder where the folders name will have the name of that page, *reference the above structure*. The most common files or folders are:

 - `components/`
 - `_index.scss`

### Utilities

> Tip: separate your utility classes with the " | " symbol, for example: `class"container | utility-1 .."`.
   The symbol are not anything more then a visual divider between your classes and utilities.

The `utilities/` folder serves a distinct purpose in organizing and storing utility classes or helper styles that can be reused throughout the project. These helpers are not intended to be used within another `.scss` file as that is what the `abstract/` is made for.

These utility classes should provide quick and efficient styling solutions, allowing you to easily apply consistent styles across different components or elements.

By centralizing utility classes in a dedicated folder promotes code reusability, reduces duplication, and enhances the maintainability of the project. It also helps in keeping the main stylesheets cleaner and more focused on component-specific styles.

**There is template that you can copy and use when creating an utility**
```
/*
	* [Title]

	* Description:
 		This Scss file contains utility styles for [describe the purpose or component].

   	* Usage:
	   [Provide usage instructions for the utility styles in this file.]

	* Example:
	   [Provide an example on how the utility styles can be used.]
*/
```
Here's an explanation of each part of the comment:

- `Title`: This part of the comment should describe that the file contains utility styles and include the file's
   name for example.

- `Description`: In this section, briefly describe the purpose of the utility styles in the file. Explain what kind of elements or components the styles are meant for.

- `Usage`: Provide clear instructions on how to use the utility styles defined in the file. Explain which classes to apply and any additional information that users should be aware of.

- `Example`: Provide your intent of the utility class in all the ways you think can be useful. For example

```
/*
  Here is how the markup could look like:

  <element class="... | utility-class " >
    //.. content here
  </element>
*/
```

This makes it clear on how one would use it when trying to implement it in code!

### Main.scss
The main file `main.scss` should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@use` and comments.

***Hint:*** you do not need to add `_` infront of your file or the file extension `.scss` when importing your files, sass is smart enough to understand what you mean.

