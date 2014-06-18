# generator-onsenui-phonegap [![Build Status](https://secure.travis-ci.org/arvindr21/generator-onsenui-phonegap.png?branch=master)](https://travis-ci.org/arvindr21/generator-onsenui-phonegap)

> A Yeoman Generator to Scaffold an [OnsenUI](http://onsenui.io/) [PhongeGap](http://phonegap.com) app


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-onsenui-phonegap from npm, run:

```bash
$ npm install -g generator-onsenui-phonegap
```

Finally, initiate the generator:

```bash
$ yo onsenui-phonegap
```
You can pick from one of the 7 available [templates](http://onsenui.io/guide/getting_started.html#template)

* Minimum
* Sliding Menu
* Sliding Menu & Navigator
* Tab bar
* Master-Detail
* Split View
* Split View & Navigator

Once you select a template, Yeoman will scaffold an `onsenui-phonegap` app for you.

### Run the App

To run the Onsenui Phonegap app in your browser, execute

```bash
$ grunt
```

This will start a server at port `1881`. Navigate to `http://localhost:1881` to see the app running.

_Note: When you open the browser, you will find `cordova.js` as a 404 resource. This will be resolved, when you issue a PhoneGap build._

## Run on an Emulator

I have written a few blog posts on how to setup PhoneGap/Cordova, integrate with Onsenui and issue a Phonegap Build to create a native installer. You can start link diving from : [Onsen UI and PhoneGap – Getting Started](http://thejackalofjavascript.com/onsen-ui-and-phonegap-getting-started/)

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
