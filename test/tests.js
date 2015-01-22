QUnit.test('$.addPrefixedClass exists', function(assert) {
	assert.ok(typeof $.fn.addPrefixedClass === 'function', 'Passed');
	assert.ok(typeof $('div').addPrefixedClass === 'function', 'Passed');
});

QUnit.test('add prefixed class', function(assert) {
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

QUnit.test('add numeric prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','1');
	assert.ok($div.hasClass('foo-1'), 'Passed');
});

QUnit.test('replace numeric prefixed class', function(assert) {
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

QUnit.test('remove prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','bar');
	assert.ok($div.hasClass('foo-bar'), 'Passed');
	$div.removePrefixedClass('foo');
	assert.ok($div.hasClass('foo-bar') === false, 'Passed');
});

QUnit.test('remove numeric prefixed class', function(assert) {
	var $div = $('<div />');
	$div.addPrefixedClass('foo','1');
	assert.ok($div.hasClass('foo-1'), 'Passed');
	$div.removePrefixedClass('foo');
	assert.ok($div.hasClass('foo-1') === false, 'Passed');
});
