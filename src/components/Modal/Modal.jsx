import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, children}) {
  
  useEffect(() => {
    console.log('Mount');
    window.addEventListener('keydown', hendleKeyDown);
    return ()=>{console.log('unmount'); window.removeEventListener('keydown', hendleKeyDown);}
})



  // componentWillUnmount() {
  //   // console.log('componentWillUnmount');
  //   window.removeEventListener('keydown', this.hendleKeyDown);
  // }

  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log('Turn On Escape');
      onClose();
    }
    };
    
    const hendleClickBackdrope = e => {
        if (e.target === e.currentTarget) {
        // console.log('click backgrope');
        onClose();
        }
    }

 
    return (createPortal(
      <div className={s.Overlay} onClick={hendleClickBackdrope}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    ));
  
}


// export default class Modal extends Component {
//   componentDidMount() {
//     // console.log('componentDidMount');
//     window.addEventListener('keydown', this.hendleKeyDown);
//   }

//   componentWillUnmount() {
//     // console.log('componentWillUnmount');
//     window.removeEventListener('keydown', this.hendleKeyDown);
//   }

//   hendleKeyDown = e => {
//     if (e.code === 'Escape') {
//       // console.log('Turn On Escape');
//       this.props.onClose();
//     }
//     };
    
//     hendleClickBackdrope = e => {
//         if (e.target === e.currentTarget) {
//         // console.log('click backgrope');
//          this.props.onClose();
//         }
//     }

//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.hendleClickBackdrope}>
//         <div className={s.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }