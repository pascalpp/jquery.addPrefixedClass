QUnit.test('$.addPrefixedClass exists', function(assert) {
	assert.ok(typeof $.fn.addPrefixedClass === 'function', 'Passed');
	assert.ok(typeof $('div').addPrefixedClass === 'function', 'Passed');
});

QUnit.test('adds prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','bar');
	assert.ok($div.hasClass('foo-bar'), 'Passed');
});

QUnit.test('replace prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','bar');
	assert.ok($div.hasClass('foo-bar'), 'Passed');
	$div.addPrefixedClass('foo','baz');
	assert.ok($div.hasClass('foo-bar') === false, 'Passed');
	assert.ok($div.hasClass('foo-baz'), 'Passed');
});

QUnit.test('adds numeric prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','1');
	assert.ok($div.hasClass('foo-1'), 'Passed');
});

QUnit.test('replaces numeric prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','1');
	assert.ok($div.hasClass('foo-1'), 'Passed');
	$div.addPrefixedClass('foo','2');
	assert.ok($div.hasClass('foo-1') === false, 'Passed');
	assert.ok($div.hasClass('foo-2'), 'Passed');
});

QUnit.test('$.removePrefixedClass exists', function(assert) {
	assert.ok(typeof $.fn.removePrefixedClass === 'function', 'Passed');
	assert.ok(typeof $('div').removePrefixedClass === 'function', 'Passed');
});

QUnit.test('removes prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','bar');
	assert.ok($div.hasClass('foo-bar'), 'Passed');
	$div.removePrefixedClass('foo');
	assert.ok($div.hasClass('foo-bar') === false, 'Passed');
});

QUnit.test('removes numeric prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','1');
	assert.ok($div.hasClass('foo-1'), 'Passed');
	$div.removePrefixedClass('foo');
	assert.ok($div.hasClass('foo-1') === false, 'Passed');
});

QUnit.test('doesn\'t affect unrelated classes', function(assert) {
	var $div = $('<div />');

	var test_classes = [
		'foo',
		'food-1',
		'bar',
		'bar-1',
		'bar-foo',
		'sfoo-1',
	];
	$.each(test_classes, function(i, test_class) {
		console.log(test_class);
		$div.addClass(test_class);
		assert.ok($div.hasClass(test_class), 'Passed');
	});

	$div.addPrefixedClass('foo','1');
	assert.ok($div.hasClass('foo-1'), 'Passed');

	$.each(test_classes, function(i, test_class) {
		assert.ok($div.hasClass(test_class), 'Passed');
	});

	$div.removePrefixedClass('foo');
	assert.ok($div.hasClass('foo-1') === false, 'Passed');

	$.each(test_classes, function(i, test_class) {
		assert.ok($div.hasClass(test_class), 'Passed');
	});

});

