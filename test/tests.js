'use strict';

const execa = require('execa');
const chai = require('chai');
const expect = require('chai').expect;

describe('Analyze GitHub.com Tech Profile', function () {
  let res;

  before(function (done) {
    execa.shell('node ./index github.com').then(result => {
      res = result.stdout;
      done();
    });
  });

  it('Uses Ruby on Rails', function () {
    const rubyOnRailsCount = res.match(/Ruby on Rails/g).length;

    expect(rubyOnRailsCount).to.be.above(0);
  });
});

describe('Analyze WordPress.org Tech Profile', function () {
  let res;

  before(function (done) {
    execa.shell('node ./index wordpress.org').then(result => {
      res = result.stdout;
      done();
    });
  });

  it('Uses Ruby on Rails', function () {
    const wordPressCount = res.match(/WordPress/g).length;

    expect(wordPressCount).to.be.above(0);
  });
});

describe('Analyze Laravel.com Tech Profile', function () {
  let res;

  before(function (done) {
    execa.shell('node ./index laravel.com').then(result => {
      res = result.stdout;
      done();
    });
  });

  it('Uses Ruby on Rails', function () {
    const laravelCount = res.match(/Laravel/g).length;

    expect(laravelCount).to.be.above(0);
  });
});