# App sizes comparison

This repository provides "sample data" that is displayed in the clicker. It is very important to read the preface carefully before reading.

![App size comparison](https://github.com/user-attachments/assets/de23fd28-3112-453e-bcf8-dc469f18c606)


## Preface

The provided apps roughly reflect the essence of what size apps can be if you want to create an app that depends on the server. As a developer, I intentionally and with full understanding make some apps artificially bigger and some smaller because an app in "a couple of lines of code" cannot be a real indicator of the size of real apps. If I were to make a comparison by sending a request via fetch, then a large number of apps would simply be two or even three times larger. The fact is that I tried to reduce everything to a general concept, where there is a clicker and sample code of the app.

Specifically for each example:

1. Vue is one of the smallest frameworks in terms of code. I am sure that the code written on it will be smaller than angular and Vanilla.js, because reactivity and other things under the hood, ref and similar structures reduce the overall size. But this is an architectural decision. Accordingly, you will have to connect additional modules for high-quality work in applications. The more functionality appears, the more modules you will connect. This is not only its problem, but also Angular and others.

2. Angular, like Vue, is a framework, only it is based on classes, which makes the description of the application on it several times larger. If in Vue you write a simple function, then for the same in Angular you write a separate module, which is a class. All the problems with modules and other boilerplate, again, are present.

3. Vanilla js is obviously the largest in code. Just imagine for a second, implementing your own structure based on components not on ready-made tools, but on pure js - this is madness, but even such applications exist (if we take large ones). Therefore, this option is the largest in size and its scale in the graph is conditional, since it can be a couple of times larger!

4. Alpine.js - here you need to understand as clearly as possible that a regular application using this module will be smaller in size, even than HMPL, but there is one nuance. If in frameworks I tried to reduce everything to local data, and not to server data, then here the logic and syntax "allow" this comparison to be made. And it is clear that even if you want to load data from the server, you will need to write something like this in the attributes:

```html
<div x-html="(await axios.get('/some/html/partial')).data">...</div>
```

When, as in HMPL, you can simply describe an object without resorting to the axios or fetch construct. This allows you to significantly reduce the code and if we take this into account, then HMPL in this regard will be an order of magnitude smaller in size, but, again, not so significantly, because the syntaxes are more or less similar.

Also, it is worth considering that there is client data, and there is server data. Frameworks are reduced to client ones, and Alpine and HMPL to server ones.
