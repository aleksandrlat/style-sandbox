# SCSS + CSS Modules Example

## Running this example

```bash
yarn
yarn dev
```

Open `dist/index.html` in your browser.

## Setup

In the webpack config we setup the `css-loader` to turn on modules.

```js
{
  loader: "css-loader",
  options: {
    localsConvention: 'camelCase',
    modules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]"
    },
    importLoaders: 1
  }
}
```

`localIdentName` lets us configure the unique class names that get used in the output. This example is a little over the top with details, which could make debugging a little easier, by default it is just a hash.

`localsConvention` being set to camelCase allows the css to be written with dashed, but will allow us to use camelCase versions in the JS import.

```
{
  loader: "sass-loader",
  options: {
    sassOptions: {
      includePaths: [path.resolve("src", "stylesheets")]
    }
  }
}
```

Setting up sass is pretty straight forward. The one thing I like to do though is make it so I can include my "helpers" file from where ever I am in the project without having to specify a path. Thats why I make `src/stylesheets` part of that `includePaths`.

I generally put this in every SCSS file at the top so have access to the all the fonts, colors and mixins.

```scss
@import "helpers";
```

# Importing (S)CSS

In the index file for the app you can see a css reset and a SCSS file imported.

```
import "./stylesheets/reset.css"
import "./stylesheets/main.scss"
```

These don't assign to a variable since they are styles for HTML tags.

In a component the import will look a little different. Here is the Input component.

```jsx
// components/Input/index.jsx

import style from "./style.scss"

function Input({ error }) {
  return (
    <>
      <input className={style.wrapper} />
      {error && <div className={style.errorMessage}>{error}</div>}
    </>
  )
}
```

Say that `style.scss` looks like this.

```scss
@import "helpers";

.wrapper {
  @include input;
  @include rounded(10px);
  border: 1px solid $grey;
}

.error-message {
  color: red;
}
```

Now what ever class names you have in your SCSS file will be avaible in the `style` object. `.error-message` will be available as `style.errorMessage`.

The output of this CSS will look something like this.

```css
.src-components-Input-style__wrapper--2Uclk {
  font-family: inherit;
  font-size: inherit;
  border: none;
  color: #333;
  border-radius: 10px;
  border: 1px solid #333;
}

.src-components-Input-style__error-message--2vKlx {
  color: red;
}
```

## Mixins

Sass mixins can be thought of as functions that will import a specific chuck of css. You can pass variables and those variables can have defaults.

```css
@mixin rounded($px: 5px) {
  border-radius: $px;
}
```

Can be used by:

```scss
@include rounded;
```

Which outputs:

```css
border-radius: 5px;
```

Or you can override that default of 5px:

```scss
@include rounded(10px);
```

## Extending Styles

Basically, classNames every where and avoiding nesting most of the time makes it really easy to tweak a components style. Components should aim to be a single purpose and take a className prop that can be appeneded to it's root element.

I have landed on always using `wrapper` as my main className. I feel it's better than having to name my root class name something specific, like `.textarea` or `.input`.

If I want to add some style to a `Textarea` component I am using for comments in my form. I can easily create a class in my form context called `.comments-textarea`.

```jsx
<Textarea className={style.commentsTextarea} />
```

Since `Textarea` will simply append that className to it's className attribute like so:

```jsx
function Textarea({ className }) {
  return <textarea className={classNames(style.wrapper, className)} />
```

We endup with markup that looks like:

```html
<textarea
  class="src-components-Textarea-style__wrapper--30UQO src-components-App-style__comments-textarea--1jsyN"
></textarea>
```

## In conclusion

There is a lot that can be tweaked in this config, I just tried to create some random examples that are inline with what I think works. This accomplishes the following:

- Styles are scoped to a component. No need to worry about the global scope that other components effected.
- Naming becomes less work.
- We have central places to tweak global settings, like fonts and colors.
- Lower learning curve.
- Easy to extend components.
- Encourages small components.
- Easy to remove unused CSS.
- If a component isn't used it's css won't be in the build.
