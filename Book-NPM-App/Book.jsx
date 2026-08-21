function Book({ book }) {
    return (
        <div className="card">
            <img
                src={book.image}
                width="100px"
                height="100px"
                alt="Book"
            />
            <h2>Price : ${book.price}</h2>
            <button>Add To Cart</button>
        </div>
    );
}
export default Book;