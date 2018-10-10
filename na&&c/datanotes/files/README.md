Low level code-binary

High level code- c++, java, python, max, photoshop, maya etc etc

arabic numerals/decimals/base 10 -- 0-9

code =something that=something else   small set of symbols to make infinite

base 10 because 10 fingers

If you were to switch up base 10 to base 7, the ones space would still be the ones, the "10's" space would become the 7's and the "100's" space would be the 14's

base 16 (hex) base2 (binary)

the 8 spots in binary go by ones, 2's, 4's, 8's, 16's, 32's, 64's and 128's spaces (but visually in reverse)

a bit/byte is a 0 or 1 in the **** ****. 8 1's. A value between 0 & 255

255 is the magic max #

#127 is special too. Only 127 characters in ascii, in max sliders

color in 24bit

Hex is 16 spaces **** **** **** ****, 0-"15"

"FF" is a hex system. Also equals 1 byte. Is the same as 1111 1111 (binary) as 255 (decimal).

binary represents electricity flow, on/off. High or low voltage. Electricity represents a value.

charles babbage created first computer in the 1800's, Ada lovelass wrote first programs for it. But it never came into existence.

writing data onto a cd/vinyl/floppy disk is literally engraving into. Volitile storage means electricity goes thru to store. Non- volitile


CPU-central procesing unit. What does all the math to decode the binary. Runs the programs. GPU- graphical processing unit. Data is stored in memory. RAM is the chip where all the data is stored. Memory is volitile storage, meaning non permanent. Hard drive is where permanent memory is kept. Magnetic flips going up n down to represent the binary.

inter/operability- being able to use between computers. universal code. reason for ascii.

When you go to "get info" and find file size on a text file, the number of bytes is the number of spaces used (characters and spaces)

ascii is limited to roman letters/numerals. Cant write in japanese or sanskrit or russian.

Unicode is updated ascii translator. Macs turn some unicode characters into emoji's automatically.

metadata is stored in the header of image data that has all the basic info in it. Then theres the body of the file. This becomes relevant in databending

compressed = lossy
uncompressed = lossless

cmnd/shift/p will give you the menu to everything in this app  

# makes it a header. adding more
### will make smaller headers
`starts to write in code font
```html
<a href="https://saic.edu">school</a>
```

```js
Math.random()
```
```
[enim](http://saic.edu)
```

sfsghyjdfj *dsfthd* dfhf **hstcxsgz**

- This
- makes
- a
- list

markup languages (just a document) are different from programming languages (instructions)


HEADER

42 4D - BM - bitmap - ALWAYS START WITH THESE TWO bytes
66 00 00 00- how much data/file size in bytes (102 bytes)
00 00 00 00 - special use for apps
36 00 00 00- how many bytes in does the raw data start

SUBHEADER

28 00 00 00 - size of the rest of the header(in bytes)
04 00 00 00 - width (4 pixels in hex)
04 00 00 00 - height (4 pixels in hex)
01 00 18 00 - color plane and bit depth (24 bit)
00 00 00 00 - compression method
30 00 00 00 - size of the image data, amount of raw data (48 bytes)
00 00 00 00
00 00 00 00
00 00 00 00  
00 00 00 00 - ^misc info
00 FF 00
FF 00 00
00 00 00
00 00 FF
FF FF FF
00 FF 00
00 00 FF
FF FF FF
FF FF FF
00 00 FF
00 FF 00
FF FF FF
00 00 FF
00 00 00
FF 00 00
00 FF 00 - ^all colors in rgb/hex. The rgb is actually backwards, so bgr.
