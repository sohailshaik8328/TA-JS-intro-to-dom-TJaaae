let ul = document.querySelector('ul')
got.houses.forEach(house => house.people.map((person) => {
    let li = document.createElement('li');
    li.className = 'box';

    let div = document.createElement('div');
    div.classList = 'img_div flex';

    let img = document.createElement('img');
    img.className = 'img';
    img.src = person.image;

    let h2 = document.createElement('h2');
    h2.className = 'h2';
    h2.innerText = person.name;

    div.append(img, h2)

    let p = document.createElement('p');
    p.className = 'p';
    p.innerText = person.description;

    let button = document.createElement('button');
    button.innerText = 'Learn More!'
    button.className = 'btn'

    li.append(div, p, button)

    ul.append(li)
}))