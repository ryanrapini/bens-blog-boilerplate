---
title: Fixing Manjaro Dual Boot issue with Windows 10 not being detected by Grub
date: Thu Mar 11 2021 22:10:10 GMT-0500 (Eastern Standard Time)
excerpt: How to fix issues with grub not detecting windows 10 efi bootloader in manjaro.
---

## Fixing Manjaro's Grub Configuration to allow os-prober to find Windows 10

I run a dual boot setup on one of my main work machines, with Manjaro Linux sharing a home with a Windows 10 installation. Manjaro has been pretty good at insulating me from a lot of the day-to-day maintenance issues that I have unfortunately come to expect with most Linux distros, but it is certainly not without issues and quirks.


Last week I updated grub through pacman and discovered that the next time I rebooted, my Windows 10 installation had vanished from the Grub bootloader.


I ran `sudo update-grub` expecting it to fix the issue but found it did not.


I did notice this line in the output which clued me in to the issue:


<pre>
[manjaro ~]$ sudo update-grub 
Generating grub configuration file ...
Found theme: /usr/share/grub/themes/manjaro/theme.txt
Found linux image: /boot/vmlinuz-5.11-x86_64
Found initrd image: /boot/intel-ucode.img /boot/initramfs-5.11-x86_64.img
Found initrd fallback image: /boot/initramfs-5.11-x86_64-fallback.img
Found linux image: /boot/vmlinuz-5.10-x86_64
Found initrd image: /boot/intel-ucode.img /boot/initramfs-5.10-x86_64.img
Found initrd fallback image: /boot/initramfs-5.10-x86_64-fallback.img
Found linux image: /boot/vmlinuz-5.9-x86_64
Found initrd image: /boot/intel-ucode.img /boot/initramfs-5.9-x86_64.img
Found initrd fallback image: /boot/initramfs-5.9-x86_64-fallback.img
<strong>Warning: os-prober will not be executed to detect other bootable partitions.</strong>
<strong>Systems on them will not be added to the GRUB boot configuration.</strong>
Check GRUB_DISABLE_OS_PROBER documentation entry.
Adding boot menu entry for UEFI Firmware Settings ...
Found memtest86+ image: /boot/memtest86+/memtest.bin
done
</pre>


The important bit is the warning, which indicates that for some reason os-prober was not run.


Luckily, I was able to find the fix on [this reddit post](https://www.reddit.com/r/linux4noobs/comments/m2xmn9/manjarowindows_dual_boot_grub_not_recognizing_the/).


You simply have to edit `/etc/default/grub`


and add the line:


`GRUB_DISABLE_OS_PROBER="false"`


I also mounted my Windows partition for good measure, since some comments on Stack Overflow seemed to imply that this is necessary in order for `os-prober` to find other installations.


After that, I ran `sudo update-grub` and found that the issue was fixed!


<pre>
[manjaro ~]$ sudo update-grub 
Generating grub configuration file ...
Found theme: /usr/share/grub/themes/manjaro/theme.txt
Found linux image: /boot/vmlinuz-5.11-x86_64
Found initrd image: /boot/intel-ucode.img /boot/initramfs-5.11-x86_64.img
Found initrd fallback image: /boot/initramfs-5.11-x86_64-fallback.img
Found linux image: /boot/vmlinuz-5.10-x86_64
Found initrd image: /boot/intel-ucode.img /boot/initramfs-5.10-x86_64.img
Found initrd fallback image: /boot/initramfs-5.10-x86_64-fallback.img
Found linux image: /boot/vmlinuz-5.9-x86_64
Found initrd image: /boot/intel-ucode.img /boot/initramfs-5.9-x86_64.img
Found initrd fallback image: /boot/initramfs-5.9-x86_64-fallback.img
<strong>Warning: os-prober was executed to detect other bootable partitions.</strong>
<strong>It's output will be used to detect bootable binaries on them and create new boot entries.</strong>
Found Windows Boot Manager on /dev/sdb2@/EFI/Microsoft/Boot/bootmgfw.efi
Adding boot menu entry for UEFI Firmware Settings ...
Found memtest86+ image: /boot/memtest86+/memtest.bin
done
</pre>


Hope this helps someone!