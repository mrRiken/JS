# My Projects for JS
## [Project link](https://stackblitz.com/edit/dom-project-chaiaurcode-vferbr8x?file=index.html)

#### Solution Code
Project 1

``` javascript

const myButtonList = document.querySelectorAll('.button');
console.log(myButtonList);

const bodyTag = document.querySelector('body');

myButtonList.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    btnId = event.target.id;
    switch (btnId) {
      case 'grey':
        bodyTag.style.backgroundColor = 'grey';
        bodyTag.style.color = 'aqua';
        break;
      case 'white':
        bodyTag.style.backgroundColor = 'white';
        bodyTag.style.color = 'black';
        break;
      case 'blue':
        bodyTag.style.backgroundColor = 'blue';
        bodyTag.style.color = 'white';
        break;
      case 'yellow':
        bodyTag.style.backgroundColor = 'yellow';
        bodyTag.style.color = 'red';
        break;
      default:
        bodyTag.style.backgroundColor = 'white';
        bodyTag.style.color = 'black';
        break;
    }
  });
});

```