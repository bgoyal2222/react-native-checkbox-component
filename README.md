# react-native-checkbox-component

[ ![release](https://img.shields.io/badge/release-v1.0.3-blue.svg?maxAge=2592000?style=flat-square)](https://github.com/bgoyal2222/react-native-checkbox-component/releases)
[ ![NPM version](https://img.shields.io/badge/npm%20package-v1.0.3-green.svg?style=flat)](https://www.npmjs.com/package/react-native-checkbox-component)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/bgoyal2222/react-native-checkbox-component/pulls)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://github.com/bgoyal2222/react-native-checkbox-component/blob/master/LICENSE)



Checkbox component for react native, it works on iOS and Android.

## Content
- [Demo](#demo)
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)

## Demo  

![Screenshots](https://github.com/bgoyal2222/react-native-checkbox-component/blob/master/Screenshot/react-native-custom-check-box.gif)

## Installation

* 1.Run `npm i react-native-checkbox-component --save`
* 2.`import CheckBox from 'react-native-checkbox-component'`  


## Getting started  

Add `react-native-checkbox-component` to your js file.   

`import CheckBox from 'react-native-checkbox-component'`  

Inside your component's render method, use CheckBox:   


### Basic usage  

```javascript
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>this.onClick(data)}
    isChecked={data.checked}
    leftText={leftText}
/>;
```

### Custom CheckBox   

```javascript
renderCheckBox(data) {
    var leftText = data.name;
    return (
    <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={()=>this.onClick(data)}
        isChecked={data.checked}
        leftText={leftText}
        checkedComponent={<Text>1</Text>}
        unCheckedComponent={<Text>0</Text>}
    />);
}
```

## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | ViewPropTypes.style  | true |   |   Custom style checkbox
leftText | PropTypes.string |true |   | Custom left Text
leftTextStyle  |  Text.propTypes.style | true |  | Custom left Text style
rightText | PropTypes.string |true |   | Custom right Text
rightTextView | PropTypes.element | true |   | Custom right TextView
rightTextStyle  | Text.propTypes.style | true |  | Custom right Text style
checkedComponent  |  PropTypes.element  | true  | Icon | Custom  checked Component
unCheckedComponent  |  PropTypes.element  | true  |  Icon  | Custom  unchecked Component
isChecked  |  PropTypes.bool |  false  |  false  | checkbox checked state
onClick   |  PropTypes.func |  false  |  | callback  function
index | PropTypes.number |false| |key to return in onClick callback
disabled  |  PropTypes.bool            | true  |  false | Disable the checkbox button
checkBoxColor | PropTypes.string | true |   | Tint color of the checkbox image (this props is for both checked and unchecked state)
checkedCheckBoxColor | PropTypes.string | true |   | Tint color of the checked state checkbox image (this prop will override value of `checkBoxColor` for checked state)
uncheckedCheckBoxColor | PropTypes.string | true |   | Tint color of the unchecked state checkbox image (this prop will override value of `checkBoxColor` for unchecked state)




**MIT Licensed**
