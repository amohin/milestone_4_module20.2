// 1, Parent node
const mainContainer = document.getElementById('main-container');


// 2. create child node

const placesSection = document.createElement('section');

//creat h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Bandarban';

const li2 = document.createElement('li');
li2.innerText = 'Rangamati';


ul.appendChild(li2);
ul.appendChild(li1);
placesSection.appendChild(ul);

// 3. append placesSection to the mainContainer

mainContainer.appendChild(placesSection)




// easier to creat HTML 

const bookSection = document.createElement('section');

bookSection.innerText = `
<h1>Books I Nees To Read</h1>
<ul>
    <li> this is a List </li>
    <li> this is a List </li>
    <li> this is a List </li>
</ul>    
`

mainContainer.appendChild(bookSection);


