---
title: Sublime Text - ESLint on save for Vue.js files
date: Mon May 31 2021 13:55:00 GMT-0500 (Eastern Standard Time)
excerpt: How to enable eslint on save for vue.js files in sublime text.
---

## Sublime Text - ESLint on save for Vue.js files

** From [this helpful Medium article](https://medium.com/@netczuk/even-faster-code-formatting-using-eslint-22b80d061461) **

I've been working with Vue.js and I've found it to be an absolute delight to quickly develop functional, modern web applications. One of the nice things about working in a Javascript environment is the great support for linting through the EsLint package. This lets me spend less time formatting my code and more time actually coding.

I played with a few different methods for running ESLint on save, some more complex than others. Eventually I settled on this method:

1. Install [Package Manager](https://packagecontrol.io/installation) if you haven't already installed it into Sublime Text.
2. Install [ESLint-Formatter](https://github.com/TheSavior/ESLint-Formatter) through package control
```
ctrl + shift + P
Package Control - Install Package
ESLint-Formatter
```
3. Open the config file for ESLint-Formatter.
```
Preferences > Package Settings > ESLint-Formatter > Settings

```
4. Add the following config:
```
{
	"format_on_save": true,
	"format_on_save_extensions": [
		"vue"
	],
}

```

For me, I also had to override the default node.js path to point to the correct one on my Linux machine. To do this, I first had to find where my executable was installed. I opened terminal, and typed `which node` to get this path.

```
	"node_path": {
		"linux": "/usr/bin/node"
	}

```

After this, my Sublime Text would nicely format all my Vue.js files upon saving them!