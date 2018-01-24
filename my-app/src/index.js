import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'ding',
//   lastName: 'liang'
// };

// const element = (
//   <h1>
//     hello,{ formatName(user) } !
//   </h1>
// )

// const element = <div tabIndex="0">111111</div>;

// function getGreeting(user) {
//   if(user) {
//     return <h1>hello, { formatName(user) }!</h1>;
//   }
//   return <h1>hello, stranger</h1>
// }

// function tick() {
//   const element = (
//     <div>
//       <h1>hello</h1>
//       <h2>It is { new Date().toLocaleTimeString() }.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     // getGreeting(),
  
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


class  Welcome extends React.Component {
  render() {
    return <h1>hello, {this.props.name}</h1>
  }
}

var element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  // getGreeting(),

  document.getElementById('root')
)


