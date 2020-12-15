## Duckett: CH10,CH11

### CSS

**CSS** stands for "Cascading Syle Sheet" which means that everything in **CSS** is written in a water fall shape.

Now, let's talk how **CSS** works, **CSS** puts every **HTML** element inside boxes, so when change a color for example, the color of one of these boxes will change.

**CSS** works by marking the elements that you want to style, this can be done as the follows:

![CSS selectors](https://hackernoon.com/drafts/2z4a3yh4.png)

selector: refers to the element that you need to style in HTML.
curly brackets: the area where you type the changes you want to add.
property: what are the changes that you want to make.
value: for example if you want to change the color of a text, that would be the color itself

There are many ways to add **CSS** stylings to your HTML code:

1-Adding `<style></style>` command between the `<head></head>` section, all your stylings have to be between `<style></style>`.

2-Adding the stylings in HTML tags.

3-Adding `<link rel="stylesheet" href="the name of CSS file">` which is the prefered way to add **CSS** stylings


Now, let's talk about how the coloring works in CSS, for now let's assume that you want to edit the color of `<h1>`, there are to main ways to cheoose the desired color for the text in `<h1>`:

1-either by selecting the color from CSS list as follows
```
h1 {

    color:"color code" ;
}
```

2-by mixing colors, this method allows to choose a wide variety of colors, that can be done by seleting one of three ways:
  -RGB:
  ```
  h1{
      color: rgb(Red,Green,Blue);
  }
  ```
 
  -hex:
  ```
  h1{
      color: *hex code for the color*;
  }
  ```
 
  -hsl:
  ```
  h1{
      color: hsl (h%,s%,l%);
  }
  ```

for more detailed information, go ahead and visit [CSS coloring](https://www.w3schools.com/colors/colors_hsl.asp)