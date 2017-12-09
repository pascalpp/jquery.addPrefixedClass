# jquery.addPrefixedClass
A jQuery plugin for adding mutually-exclusive classes to DOM elements

# Install

```
$ npm install jquery-add-prefixed-class --save
```

# Usage

```
$('div.mynode').addPrefixedClass('panel', 'left')
// div.mynode becomes div.mynode.panel-left

$('div.mynode').addPrefixedClass('panel', 'right')
// div.mynode.panel-left becomes div.mynode.panel-right

$('div.mynode').removePrefixedClass('panel')
// div.mynode.panel-right becomes div.mynode
```
