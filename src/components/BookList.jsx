export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((books, index) => {
        return <li key={index}>{books.name}</li>;
      })}
    </ul>
  );
};
