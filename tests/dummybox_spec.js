import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import DummyBox from '../src/DummyBox';

describe('dummybox', function () {
  it('renders without problems', function () {
    var box = TestUtils.renderIntoDocument(<DummyBox/>);
    expect(box).toExist();
  });
});