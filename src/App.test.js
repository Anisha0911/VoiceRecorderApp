import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/* .Rooms_photo {
    position: relative;
}
.Rooms_photo .lazy {
    width: 100%;
    display: block;
    background: rgba(0,0,0,0.5);
} 

 .img_align {
    position: absolute;
    bottom: -14rem;
    width: 20%;
    /* overflow: hidden; */
 
/* .column {
    float: left !import;
    width: 33.33%;
    padding: 5px;
  }
.img_align .inner_img {
    width: 98%;
    margin: 0 2%;
    position: relative;
}
.black_img {
    position: absolute;
    top: 0;
    width: 100%;
    display: block;
}

.inner_img1 {
    position: absolute;
    width: 100%;
    display: block;
}

.color {
    width: 100%;
    display: block;
} */
