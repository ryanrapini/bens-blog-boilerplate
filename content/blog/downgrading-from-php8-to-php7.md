---
title: Downgrading from PHP 8 to PHP 7 in Arch Linux - Fixing Composer.
date: Mon Feb 22 2021 17:37:10 GMT-0500 (Eastern Standard Time)
excerpt: How to downgrade from the rolling php package to php7 gracefully.
---

## Downgrading from PHP 8 to PHP 7 in Arch Linux - Fixing Composer.

Recently, [Arch Linux added PHP 8.0](https://archlinux.org/news/php-80-and-php-7-legacy-packages-are-available/) as the default version when installing the `php` package from the Arch repos. Unfortunately this presents an issue for users working on projects that still rely on PHP 7 support.

I was able to fix this issue with the following commands:

```
pacman -Syyu

pacman -S php7 php7-apache
```

After this, I needed to edit my `/etc/httpd/conf/httpd.conf` file and add the following lines:

```
LoadModule php7_module modules/libphp7.so
AddHandler php7-script php
Include conf/extra/php7_module.conf
```

And also, comment out `mpm_event_module` and uncomment `mpm_prefork_module` like so:

```
#LoadModule mpm_event_module modules/mod_mpm_event.so
LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
```

This will get you a working php7 installation in Apache, but there's still an issue. When you try to install Composer, you'll find it is running on php8, causing issues if your projects have dependencies that rely on PHP 7.


To fix this, I removed all traces of php8 and then installed [this package](https://aur.archlinux.org/packages/php7-symlinks) which fixed the issue.

Hope this helps if someone else is having the same problems I was.