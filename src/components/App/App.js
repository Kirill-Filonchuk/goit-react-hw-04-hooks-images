import '../App/App.css';
import React, { useState, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import Loader from 'react-loader-spinner';
// import axios from 'axios';
import pixApi from '../../utils/pixApi';
import Searchbar from '../Searchbar';
import ImageGallery from '../Gallery/ImageGallery';
import Button from '../Button';
import Modal from '../Modal';

//////////////
injectStyle();
//////////////

// const URL = 'https://pixabay.com/api/';
// const KEY = '22443315-0655a572bf532c2d4a9d9c050';

// async function fetchPixData({ searchRequest = '', page = 1 }) {
//   console.log('inApi', { searchRequest, page });
//   const response = await axios.get(
//     `${URL}?q=${searchRequest}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//   );
//   console.log('inApi', response.data.hits);
//   return response.data.hits;
// }

function App() {
  const [pixData, setPixData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchRequest, setSearchRequest] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isTherePix, setIsTherePix] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imgInModal, setImgInModal] = useState('');

  //look for the ansver from API if 0 - then 'ничего не нашли' кнопка ЛОАД-МОРЕ НЕ рендерить. Если пустая строка, то Рандомн картинки

  useEffect(() => {
    //закоментировал, чтобы при первом старте на странице были рамдомные картинки
    // if (!searchRequest) {
    //   return;
    // }

    const fetchPixData = () => {
      // console.log('fetchPixDataL searchRequest', searchRequest);
      // const options = { searchRequest, page };
      setIsLoaded(true);

      pixApi
        .fetchPixData({ search: searchRequest, page })
        .then(pix => {
          setPixData([...pixData, ...pix]);
          // setPage(page + 1);
          pix.length < 1 ? setIsTherePix(true) : setIsTherePix(false);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoaded(false));
    };
    fetchPixData();
  }, [page, searchRequest]);
  // Линтер просит так - [page, pixData, searchRequest], НО тогда бесконечные запросы!!!
  const onSubmit = searchRequest => {
    setSearchRequest(searchRequest);
    setPage(1);
    setPixData([]);
    setError(null);
  };

  const togleModal = () => {
    setShowModal(!showModal);
  };

  const updatePage = () => {
    setPage(page + 1);
  };

  const imgPastToModal = img => {
    setImgInModal(img);
    togleModal();
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const { largeImageURL, tags } = imgInModal;
  const shouldRenderLoadMoreButton = pixData.length > 0 && pixData.length > 11 && !isLoaded;

  return (
    <div className="container">
      {showModal && (
        <Modal onClose={togleModal} imgPastToModal={imgPastToModal}>
          {imgInModal && <img src={largeImageURL} alt={tags} />}
          <p>{tags}</p>
          <button type="button" onClick={togleModal}>
            Close
          </button>
        </Modal>
      )}
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery searchRequest={pixData} imgPastToModal={imgPastToModal} />
      {error && <h1>Ошибка!!!</h1>}
      {isTherePix && <h1>Картинок по Вашему запросу не найдено!</h1>}
      {isLoaded && (
        <div className={'Spiner'}>
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs Grid
          />
        </div>
      )}
      {shouldRenderLoadMoreButton && <Button LoadMore={updatePage} scroll={scroll} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     pixData: [],
//     page: 1,
//     searchRequest: '',
//     isLoaded: false,
//     error: null,
//     isTherePix: false,
//     showModal: false,
//     imgInModal: '',
//   };
//   //look for the ansver from API if 0 - then 'ничего не нашли' кнопка ЛОАД-МОРЕ НЕ рендерить. Если пустая строка, то Рандомн картинки
//   componentDidMount() {
//     this.fetchPixData();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchRequest !== this.state.searchRequest) {
//       this.fetchPixData();
//     }
//   }

//   fetchPixData = () => {
//     const { searchRequest, page } = this.state;
//     const options = { searchRequest, page };

//     this.setState({ isLoaded: true });

//     pixApi
//       .fetchPixData(options)
//       .then(pix => {
//         this.setState(prevState => ({
//           pixData: [...prevState.pixData, ...pix],
//           page: prevState.page + 1,
//         }));
//         // console.log(pix.length);
//         pix.length < 1 ? this.setState({ isTherePix: true }) : this.setState({ isTherePix: false });
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoaded: false }));
//   };

//   onSubmit = searchRequest => {
//     console.log('App-', searchRequest);
//     this.setState({
//       searchRequest,
//       page: 1,
//       pixData: [],
//       error: null,
//     });
//     // console.log('this.state -', this.state.searchRequest);
//   };

//   togleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   imgPastToModal = img => {
//     // const { largeImageURL, tags } = this.state.imgInModal;
//     // console.log('IMG in App', img);
//     // console.log('stateIMG', largeImageURL);
//     // console.log('stateTAGS', tags);
//     this.setState({
//       imgInModal: img,
//     });
//     this.togleModal();
//   };

//   scroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//     // console.log(this);
//   };

//   render() {
//     const { pixData, isLoaded, isTherePix, error } = this.state;
//     const { largeImageURL, tags } = this.state.imgInModal;
//     const shouldRenderLoadMoreButton = pixData.length > 0 && pixData.length > 11 && !isLoaded;

//     return (
//       <div className="container">
//         {this.state.showModal && (
//           <Modal onClose={this.togleModal} imgPastToModal={this.imgPastToModal}>
//             {this.state.imgInModal && <img src={largeImageURL} alt={tags} />}
//             <p>{tags}</p>
//             <button type="button" onClick={this.togleModal}>
//               Close
//             </button>
//           </Modal>
//         )}
//         {/* <button type="button" onClick={this.togleModal}>
//           hello
//         </button> */}
//         <Searchbar onSubmit={this.onSubmit} />
//         <ImageGallery searchRequest={pixData} imgPastToModal={this.imgPastToModal} />
//         {error && <h1>Ошибка!!!</h1>}
//         {isTherePix && <h1>Картинок по Вашему запросу не найдено!</h1>}
//         {isLoaded && (
//           <div className={'Spiner'}>
//             <Loader
//               type="Circles"
//               color="#00BFFF"
//               height={100}
//               width={100}
//               timeout={3000} //3 secs Grid
//             />
//           </div>
//         )}
//         {shouldRenderLoadMoreButton && <Button LoadMore={this.fetchPixData} scroll={this.scroll} />}
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }
