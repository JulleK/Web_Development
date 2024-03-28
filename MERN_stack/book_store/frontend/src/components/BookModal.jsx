import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 
        right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[300px] max-w-full h-[400px] text-white
         bg-sky-900 rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 
            text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2
          className="w-fit px-4
            py-1 bg-red-300 rounded-lg"
        >
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-400">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4 ml-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
          totam dicta ipsam quisquam laudantium recusandae, sequi possimus
          nesciunt? Dolor temporibus neque iure, laborum accusamus quam amet!
          Natus, necessitatibus culpa!
        </p>
      </div>
    </div>
  );
}

export default BookModal;
