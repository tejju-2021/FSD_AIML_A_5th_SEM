import Book from "./Book";

const bookdata = [
    {image: "https://tse2.mm.bing.net/th/id/OIP.WyPGTyB7Z1s3KTmJ6Kr6EwHaLG?r=0&pid=Api&P=0&h=180",price: 345},
    {image: "https://tse3.mm.bing.net/th/id/OIP.BR6NLuGdR6fhVui4olGZugHaJI?r=0&pid=Api&P=0&h=180",price: 545},
    {image: "https://tse3.mm.bing.net/th/id/OIP.BR6NLuGdR6fhVui4olGZugHaJI?r=0&pid=Api&P=0&h=180", price: 679}
];
function App() {
    return (
        <div className="app">
            {bookdata.map((b, index) => (
                <Book
                    key={index}
                    book={b}
                />
            ))}
        </div>
    );
}
export default App;