# React Social Media Bar
`react-social-media-bar` is a React component to create external social media links

## Features
- uses Font Awesome [brand icons](http://fontawesome.io/icons/#brand)
- customizable overall and within each icon (as per colors, sizes, opacities, etc.)

## Version
- this is the first version of `react-social-media-bar`

## Table of Contents
- [Installation](#installation)
- [Examples](#examples)
- [Props](#props)

## Installation
1. Install React Social Media Bar as a dependency
```bash
# NPM
# npm install react-social-media-bar --save

# Yarn
# [not yet implemented]
```

2. Import the `react-social-media-bar` module
```javascript
// ES6
import SocialMediaBar from 'react-social-media-bar';
```

3. Import Font Awesome into your project
I recommend using the CDN. [See here](http://fontawesome.io/get-started/) for directions.

## Examples
- [not yet implemented]

## Props
| Property | Type | Required | Default | Description
|:---|:---|:---|:---|:---|
| `icons` | Array<Object> | yes | [] | The icons that will be rendered. See below for format. |
| `bgColor` | String | no | rgba(0, 0, 0, 0) | The background color of the component. |
| `iconColor` | String | no | #FFF | The color of each icon in the `icons` array when hovered over. |
| `iconOpacity` | Integer | no | 1 | The opacity of each icon in the `icons` array when hovered over. |
| `iconSize` | String | no | 1em | The size of each icon in the `icons` array. |
| `hoverColor` | String | no | #FFF | The color of an icon in the `icons` array when hovered over. |
| `hoverOpacity` | Integer | no | 1 | The opacity of an icon in the `icons` array when hovered over. |
| `margin` | Object | no | {top: '5px', right: '5px', bottom: '5px', left: '5px'} | The margin on each icon in the `icons` array. |
| `padding` | Object | no | {top: '0px', right: '0px', bottom: '0px', left: '0px'} | The padding on each icon in the `icons` array. |
| `sameTab` | Boolean | no | false | If `true`, clicking on an icon will open its corresponding media link in the same tab. If `false` (by default), media links will open in a new tab. |
| `vertical` | Boolean | no | false | If `true`, the icons will be rendered vertically in a column. If `false` (by default), the icons will be rendered horizontally in a row. |

### Icons Prop
The `icons` property is an Array of Objects in which each Object represents an icon to be included in this component.
Each icon Object has the following key-value pairs. Note that if a key is not specified in this Object, the key inherits the value given to its corresponding `property` from the table above. If the `property` was not defined, the key is given the default value listed in the table above.
For more clarification, please see the [Examples](#examples)

| Key | Value Type | Required | Description
|:---|:---|:---|:---|:---|
| `media` | String | yes | The name of the social media (i.e. 'facebook', 'twitter', ...) |
| `link` | String | yes | The URL to which this icon will link |
| `iconColor` | String | no | The color of this icon when hovered over. |
| `iconOpacity` | Integer | no | The opacity of this icon when hovered over. |
| `iconSize` | String | no | The size of this icon. |
| `hoverColor` | String | no | The color of this icon when hovered over. |
| `hoverOpacity` | Integer | no | The opacity of this icon when hovered over. |
| `margin` | Object | no | The margin on this icon. |
| `padding` | Object | no | The padding on this icon. |
| `sameTab` | Boolean | no | If `true`, clicking on this icon will open its `link` URL in the same tab. If `false` the `link` URL will open in a new tab. |
