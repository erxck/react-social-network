import ImgProfile from "../assets/img/bart-profile.jpg";
import {
  iconStar,
  iconComment,
  iconRepost,
  iconShare,
  iconGlobe,
  iconClose,
} from "./Icons";
import { useState } from "react";
import ReactModal from "react-modal";
import Styles from "../styles/Feed.module.css";

ReactModal.setAppElement("#root");

export default function Feed(): JSX.Element {
  const [modalPublicationIsOpen, setModalPublicationIsOpen] =
    useState<boolean>(false);
  const [modalPublicationCloseIsOpen, setModalPublicationCloseIsOpen] =
    useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [id, setId] = useState<number>(0);
  //   const [star, setStar] = useState<number>(0);
  //   const [contComment, setContComment] = useState<number>(0);
  //   const [comment, setComment] = useState<string>("");
  //   const [repost, setRepost] = useState<number>(0);
  //   const [share, setShare] = useState<number>(0);

  /* Function that toggles the modal */
  const handleModalPublication = () => {
    setModalPublicationIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  /* Function that toggles the modal */
  const handleModalPublicationClose = () => {
    if (text.length <= 0) {
      handleModalPublicationCloseConfirm();
      return;
    }

    setModalPublicationCloseIsOpen(!modalPublicationCloseIsOpen);
    document.body.style.overflow = "hidden";
  };

  /* Function that closes the modal */
  const handleModalPublicationCloseConfirm = () => {
    setModalPublicationIsOpen(false);
    setModalPublicationCloseIsOpen(false);
    setText("");
    document.body.style.overflow = "unset";
  };

  /* Function that handles the textarea */
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.target;
    element.style.height = "auto"; // reset height to "auto"
    element.style.height = `${element.scrollHeight}px`; // sets height based on scrollHeight
    setText(e.target.value);
  };

  /* Function that handles the form submit */
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length <= 0) return;

    const data = {
      id,
      text,
      date: new Date(),
      //   star,
    };

    console.log(data);
    setId(id + 1);
    handleModalPublicationCloseConfirm();
  };

  return (
    <section className="space-y-7">
      <div className="flex items-center gap-3 w-full bg-gray-800 border border-gray-700 p-4 rounded-lg">
        <div>
          <img
            src={ImgProfile}
            alt="Profile"
            className="rounded-full w-14 h-12"
          />
        </div>
        <div className="w-full">
          <button
            className="w-full text-gray-300 text-sm bg-gray-800 border border-gray-600 p-3 hover:bg-gray-900/30 duration-300 rounded-full"
            onClick={handleModalPublication}
          >
            O que você está pensando?
          </button>

          <ReactModal
            isOpen={modalPublicationIsOpen}
            onRequestClose={handleModalPublication}
            className="flex flex-col items-center w-full h-full bg-opacity-80 p-4 bg-gray-900"
            overlayClassName="fixed inset-0 z-50"
          >
            <div className="bg-gray-800 border border-gray-700 flex flex-col items-center justify-start w-full max-w-xl rounded-lg shadow-lg p-4 mt-12">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-center justify-between w-full border-b border-gray-500 pb-4">
                  <h1 className="text-xl font-bold text-white">
                    Criar publicação
                  </h1>
                  <button
                    className="text-gray-300 w-7 h-7 hover:text-emerald-400 duration-300"
                    onClick={handleModalPublicationClose}
                  >
                    {iconClose}
                  </button>

                  <ReactModal
                    isOpen={modalPublicationCloseIsOpen}
                    onRequestClose={handleModalPublicationClose}
                    className="flex flex-col items-center w-full h-full bg-opacity-80 p-4 bg-gray-900"
                    overlayClassName="fixed inset-0 z-50"
                  >
                    <div className="bg-gray-800 border border-gray-700 flex flex-col items-center justify-start gap-6 w-full max-w-sm rounded-lg shadow-lg p-4 mt-32">
                      <div className="w-full border-b border-gray-500 pb-4">
                        <h1 className="text-2xl font-bold text-white">
                          Descartar publicação
                        </h1>
                      </div>
                      <div className="w-full">
                        <p className="text-gray-300 text-lg">
                          Tem certeza que deseja descartar essa publicação?
                        </p>
                      </div>
                      <div className="flex justify-end items-center w-full gap-4">
                        <button
                          className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 duration-200"
                          onClick={handleModalPublicationCloseConfirm}
                          type="button"
                        >
                          Descartar
                        </button>
                        <button
                          className="bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600 duration-200"
                          onClick={handleModalPublicationClose}
                          type="button"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </ReactModal>
                </div>
                <div className="flex items-center justify-start w-full mt-5">
                  <img
                    src={ImgProfile}
                    alt="Profile"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="flex flex-col ml-2">
                    <h1 className="text-base text-white font-bold hover:text-blue-400 duration-300">
                      Erick Rian
                    </h1>
                    <p className="text-gray-300 text-sm">@erick</p>
                  </div>
                </div>
                <form className="w-full mt-3" onSubmit={handleFormSubmit}>
                  <label htmlFor="text">
                    <textarea
                      className={`w-full min-h-28 max-h-72 bg-gray-800 text-base rounded-lg p-2 text-gray-300 resize-none focus:outline-none ${Styles.scrollbar}`}
                      placeholder="No que você está pensando?"
                      onInput={handleText}
                      value={text}
                    ></textarea>
                  </label>
                  <div className="flex justify-end items-center w-full mt-6">
                    <input
                      className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 duration-300 cursor-pointer"
                      type="submit"
                      value="Publicar"
                    />
                  </div>
                </form>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-full border-b border-gray-500"></span>
        <span className="p-1 rounded-full bg-gray-500"></span>
        <span className="w-full border-b border-gray-500"></span>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col items-start w-full bg-gray-800 border border-gray-700 px-4 pt-4 rounded-lg">
          <a className="flex flex-row items-center" href="/">
            <img
              src={ImgProfile}
              alt="Profile"
              className="rounded-full w-12 h-12"
            />
            <div className="flex flex-col ml-2">
              <h1 className="text-base font-bold hover:text-blue-400 duration-300">
                Erick Rian
              </h1>
              <p className="text-gray-300 text-sm">@erick</p>
              <p className="flex items-center text-gray-300 text-xs">
                21 h <span className="ml-1 w-3 h-3">{iconGlobe}</span>
              </p>
            </div>
          </a>
          <div className="flex flex-col rounded-lg mt-3">
            <p className="text-white text-sm">
              Por que 'tudo junto' se escreve separado e 'separado' se escreve
              tudo junto?. Se tamanho fosse documento o elefante era dono do
              circo.. Cemeteries are just garbage dumps filled with humans.
              Essas TVs de LSD são uma droga!. Os últimos serão os primeiros e
              os do meio sempre serão os do meio..
            </p>
          </div>
          <div className="flex justify-between items-center w-full text-xs mt-5">
            <div className="flex items-center gap-1 text-gray-300">
              <span className="w-4 h-4 text-yellow-500">{iconStar}</span>
              <p>
                <span>1.280</span> estrelas
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span>87 comentários</span>
              <span className="hidden sm:inline">20 compartilhamentos</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-1 w-full mt-2 py-1 border-t border-gray-500">
            <button className="flex justify-center items-center p-2 rounded-lg w-full hover:bg-yellow-500/10 hover:text-yellow-500 duration-300">
              <span className="w-6 h-6">{iconStar}</span>
              <span className="hidden ml-1 text-xs sm:block">Estrela</span>
            </button>
            <button className="flex justify-center items-center p-2 rounded-lg w-full hover:bg-emerald-500/10 hover:text-emerald-500 duration-300">
              <span className="w-6 h-6">{iconComment}</span>
              <span className="hidden ml-1 text-xs sm:block">Comentar</span>
            </button>
            <button className="flex justify-center items-center p-2 rounded-lg w-full hover:bg-purple-500/10 hover:text-purple-500 duration-300">
              <span className="w-6 h-6">{iconRepost}</span>
              <span className="hidden ml-1 text-xs sm:block">Repostar</span>
            </button>
            <button className="flex justify-center items-center p-2 rounded-lg w-full hover:bg-blue-500/10 hover:text-blue-500 duration-300">
              <span className="w-6 h-6">{iconShare}</span>
              <span className="hidden ml-1 text-xs sm:block">Compartilhar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
