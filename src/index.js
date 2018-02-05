import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

 // <div class="me">
 //   <h1>An Awesome Person</h1>
 //   <p>Who is learning React</p>
 //
 //   <ul class="my-interests">
 //     <li>JavaScript</li>
 //     <li>React</li>
 //     <li>Movies</li>
 //     <li>Ice cream</li>
 //   </ul>
 // </div>

 const t = React.createElement(`h1`,{key: `title`}, `An Awesome Person`)

 const p = React.createElement(`p` ,{key: `paragraph`}, `Who is learning React`)

   const interests = [`JavaScript`, `React`, `Movies`, `Ice cream`]

   let counter = 0
   const items = interests.map((interest) => {
     return React.createElement(`li`, {key: `interest${++counter}`, className: `item`}, `${interest}`)
   })

 const listToRender = React.createElement(`ul`, {key: `list`, className: `my-interests`}, [...items])


 const meInReact = React.createElement(`div`, {key: `meInReact`, className: `me`}, [t, p, listToRender])
 ReactDOM.render(
    meInReact,
    document.getElementById('global')
  );

  export default meInReact
