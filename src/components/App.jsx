import { Product } from './Product';
import { Mailbox } from './Mailbox';
import { BookList } from './BookList';
import { Card } from './Card';
import { Alert } from './Alert';
import { UserMenu } from './UserMenu';

const favouriteBooks = [
  { name: 'JS for beginners' },
  { name: 'React basics' },
  { name: 'React Router overview' },
];

const alertStyles = {
  margin: 8,
  padding: '12px 16px',
  borderRadius: 4,
  backgroundColor: 'gray',
  color: 'white',
};

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Mailbox username="Jane Doe" unreadMessages={[]} />
      ----------------------------------------------------------
      <Mailbox username="Tony Stark" unreadMessages={[1, 2, 3, 4, 5]} />
      ------------------------------------------------------------------
      <BookList books={favouriteBooks} />
      ------------------------------------------------------------------
      <Card>Text between opening and closing tag</Card>
      ------------------------------------------------------------------
      {/* <p
      style={{
        margin: 8,
        padding: "12px 16px",
        borderRadius: 4,
        backgroundColor: "gray",
        color: "white",
      }}
    >
      Please update your email!
    </p> */}
      <p style={alertStyles}>Please update your email!</p>
      <p style={alertStyles}>There was an error during transaction!</p>
      <p style={alertStyles}>Payment received, thank you for your purchase!</p>
      ----------------------------------------------------------------
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error"
      outlined={true}
      elevated={true}>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success"
      outlined={true}>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning"
       elevated={true} >
        Please update your profile contact information
      </Alert>
      -----------------------------------------------------------------
      <UserMenu name="Vite"/>
    </div>
  );
}
