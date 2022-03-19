'use strict';

function toggleDisplay(e) {
  const expandableElement = e.parentElement.querySelector('.expandable');
  console.log(expandableElement);
  if (expandableElement) {
    if (expandableElement.classList.contains('collapsed')) {
      expandableElement.classList.remove('collapsed');
      expandableElement.parentElement.classList.remove('collapsed');
    } else {
      expandableElement.classList.add('collapsed');
      expandableElement.parentElement.classList.add('collapsed');
    }
  }
}

const content = [
  {
    name: 'Unit 1: Server &amp HTML',
    description: 'Webserver and HTML',
    collapsed: false,
    item: [
      {
        class: 'note',
        title: 'Notes',
        link: 'https://github.com/leesjensen/cs260/blob/main/Unit1.md',
      },
      {
        class: 'slide',
        title: '1.1 - Introduction',
        link: 'https://docs.google.com/presentation/d/1Y7J2fmn9VjY8NF9lSPQgLVbVn1qQR4DCzu57lUOCclw/edit?usp=sharing',
      },
      {
        class: 'slide',
        title: '1.2 - Server Setup',
        link: 'https://docs.google.com/presentation/d/1S5nLhokdBJeBUSW051a_BtwMKD7UA6w-vtvNrSw7qjU/edit?usp=sharing',
      },
      {
        class: 'exercise',
        title: 'D3, D4, D9, A1: Server Setup Video',
        link: 'https://youtu.be/KMgST_v4qlM',
      },
      {
        class: 'slide',
        title: '1.3 - Editors &amp; HTML',
        link: 'https://docs.google.com/presentation/d/1fdRNqK6dlWi08_88BnVjYAdYWNfqwGhrQrv6GE7TdYc/edit?usp=sharing',
      },
      {
        class: 'exercise',
        title: 'D6: HTML Basics',
        link: 'html/intro',
      },
      {
        class: 'slide',
        title: '1.4 - Git &amp; HTTP',
        link: 'https://docs.google.com/presentation/d/1DnI1P4wV-ndbDW59QeDppIyBE4u-mZuAEbXLVuOgDAo/edit?usp=sharing',
      },
    ],
  },
  {
    name: 'Unit 2: CSS',
    description: 'CSS and design',
    collapsed: false,
    item: [
      {
        class: 'note',
        link: 'https://github.com/leesjensen/cs260/blob/main/Unit2.md',
        title: 'Notes',
      },
      {
        class: 'slide',
        link: 'https://docs.google.com/presentation/d/1d_ym6Q5Ttibrm3MvJXEuXPcqowOi_1k71V-zHa4WSQ4/edit?usp=sharing',
        title: '2.1 - CSS Basics',
      },
      {
        class: 'slide',
        link: 'https://docs.google.com/presentation/d/1fRxpx68_1movOy8br38NF7laM4nHUFB-4kYhxfnEQNI/edit?usp=sharing',
        title: '2.2 - CSS Responsive',
      },
      {
        class: 'demo',
        link: 'css/flex',
        title: 'CSS Flex',
      },
      {
        class: 'demo',
        link: 'css/grid',
        title: 'CSS Grid',
      },
      {
        class: 'project',
        link: 'css/lab1-photographer',
        title: 'Lab 1: Photographer',
      },
      {
        class: 'slide',
        link: 'https://docs.google.com/presentation/d/1fRnXFrAKR7MV4FoMb3QUPv-1HkhxBfYqs6aw_RC5NQk/edit?usp=sharing',
        title: '2.3 - Design',
      },
      {
        class: 'exercise',
        link: 'css/c4-design',
        title: 'C4: Design',
      },
      {
        class: 'slide',
        link: 'https://docs.google.com/presentation/d/1eBO_uZJRcimGnqq72w3H1DFdHx1paMlFqty395eUq2M/edit?usp=sharing',
        title: '2.4 - The good, bad &amp; ugly',
      },
    ],
  },
  {
    name: 'Unit 3: JS',
    description: 'JavaScript/ECMAScript',
    collapsed: false,
    item: [
      {
        class: 'note',
        title: 'Notes',
        link: 'https://github.com/leesjensen/cs260/blob/main/Unit3.md',
      },
      {
        class: 'slide',
        title: '3.1 - JS Basics',
        link: 'https://docs.google.com/presentation/d/15Ni_4sM0qNBkelF7FGdH6JntZQiH5WY1QSDq3PKvR7U/edit?usp=sharing',
      },
      {
        class: 'exercise',
        title: 'J1, J2, J3: Basics',
        link: 'js/j1-j2-j3-basics',
      },
      {
        class: 'slide',
        title: '3.2 - JS Basics',
        link: 'https://docs.google.com/presentation/d/1jM_oat95mWhjVev-1RbEpaYnhQrT8nwQ3lSWJu9dElQ/edit?usp=sharing',
      },
      {
        class: 'slide',
        title: '3.3 - Promises &amp; DOM',
        link: 'https://docs.google.com/presentation/d/1D6K024GRaRQl8dMQqe4VMtN4RBUZgto1_mYhkeIT7mA/edit?usp=sharing',
      },
      {
        class: 'exercise',
        title: 'J4: Promises',
        link: 'js/j4-promises',
      },
      {
        class: 'demo',
        title: 'DOM Tutorial',
        link: 'js/dom-tutorial',
      },
      {
        class: 'exercise',
        title: 'J5: Table',
        link: 'js/j5-table',
      },
      {
        class: 'slide',
        title: '3.4 - Fetch, CORS, &amp; HTTP',
        link: 'https://docs.google.com/presentation/d/1vnu2DFrSeu9aFzRQjyS9aIvoORTyeR_AEJ-E0RsQj6Q/edit?usp=sharing',
      },
      {
        class: 'exercise',
        title: 'J5.5-J5.7: Rest',
        link: 'js/j5-rest',
      },
      {
        class: 'slide',
        title: '3.5 - Debugging &amp; Performance',
        link: 'https://docs.google.com/presentation/d/12TwA11lXpqqUudhnxqchmANkL33jKH0zNJIVxtsYA18/edit?usp=sharing',
      },
      {
        class: 'project',
        title: 'Lab 2: Weather',
        link: 'js/lab2-weather',
      },
      {
        class: 'slide',
        title: '3.6 - REST, GraphQL, Midterm Review',
        link: 'https://docs.google.com/presentation/d/1dPFbDGXnaU9EfhK-P_FKNpeB-Jlvxq0akKY0X8R5ES0/edit?usp=sharing',
      },
    ],
  },
  {
    name: 'Unit 4: Frontend',
    description: 'Vue - Web framework',
    collapsed: false,
    item: [
      {
        class: 'note',
        title: 'Notes',
        link: 'https://github.com/leesjensen/cs260/blob/main/Unit4.md',
      },
      {
        class: 'slide',
        title: '4.1 - Vue Intro',
        link: 'https://docs.google.com/presentation/d/1TcQm6sVcxXXmgQLWwAm7X3fIYPr2KGGGLh2p0KBlna0/edit?usp=sharing',
      },
      {
        class: 'demo',
        title: 'Basic Vue Tutorial',
        link: 'vue/basic-tutorial',
      },
      {
        class: 'exercise',
        title: 'V0: Rest Cities',
        link: 'vue/v0-rest',
      },
      {
        class: 'exercise',
        title: 'V1: Learning Vue',
        link: 'vue/v1-learning',
      },
      {
        class: 'exercise',
        title: 'V2: Todo List',
        link: 'vue/v2-todo',
      },
      {
        class: 'project',
        title: 'Lab 3a: XKCD Browser',
        link: 'vue/lab3a-xkcd',
      },
      {
        class: 'slide',
        title: '4.2 - Vue Components',
        link: 'https://docs.google.com/presentation/d/1lzcKt6aPJSsPcdzYC72icbe7HQSwGF9_Ely6qq0uVX4/edit?usp=sharing',
      },
      {
        class: 'slide',
        title: '4.3 - Vue CLI',
        link: 'https://docs.google.com/presentation/d/1gfb6afyhari2bZTEHvWMrYIpAGoL1AH1iNTTdVDew_M/edit?usp=sharing',
      },
      {
        class: 'demo',
        title: 'CLI Demo',
        link: 'vue/cli-demo',
      },
      {
        class: 'demo',
        title: 'CLI Users',
        link: 'vue/cli-users',
      },
      {
        class: 'exercise',
        title: 'V3: CLI',
        link: 'vue/v3-cli',
      },
      {
        class: 'project',
        title: 'Lab 3b: Grocery Store',
        link: 'vue/lab3b-grocery',
      },
      {
        class: 'slide',
        title: '4.4 - Vue Router',
        link: 'https://docs.google.com/presentation/d/1dZpn822ZIchuKixoo3zjRuU944zMYNVKB6D07DIfNzY/edit?usp=sharing',
      },
      {
        class: 'demo',
        title: 'Basic Router',
        link: 'vue/basic-router-tutorial',
      },
      {
        class: 'demo',
        title: 'Vue Router',
        link: 'vue/router-demo',
      },
      {
        class: 'slide',
        title: '4.5 - Vue+',
        link: 'https://docs.google.com/presentation/d/1QoXvqO6ZeoEwNPNKL97yh66r_-GRqs7EJ2gZIhB8Ils/edit?usp=sharing',
      },
      {
        class: 'demo',
        title: 'TypeScript',
        link: 'vue/typescript',
      },
    ],
  },
];

function load() {
  const writeItems = (unit) => {
    let output = '';
    for (let item of unit.item) {
      output += `
          <li class="${item.class}">
            <a href="${item.link}">${item.title}</a>
          </li>
      `;
    }
    return output;
  };

  const writeUnits = (units) => {
    let output = '';
    for (let unit of units) {
      output += `
        <div class="grid-box ${unit.collapsed ? 'collapsed' : ''}">
          <h2 onclick="toggleDisplay(this)">${unit.name}</h2>
            <p>${unit.description}</p>
            <ul class="expandable ${unit.collapsed ? 'collapsed' : ''}">
              ${writeItems(unit)}
            </ul>
          </h2>
        </div>
      `;
    }
    return output;
  };

  const container = document.querySelector('.grid-container');
  if (container) {
    container.innerHTML = writeUnits(content);
  }
}

load();
