# jquery.addPrefixedClass
A jQuery plugin for adding mutually exclusive classes to DOM elements

# Usage

```
$('div.mynode').addPrefixedClass('foo', 'bar')
// div.mynode becomes div.mynode.foo-bar

$('div.mynode').addPrefixedClass('foo', 'baz')
// div.mynode.foo-bar becomes div.mynode.foo-baz

$('div.mynode').removePrefixedClass('foo')
// div.mynode.foo-baz becomes div.mynode
```

