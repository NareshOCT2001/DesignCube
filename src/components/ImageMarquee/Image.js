import ImageMarquee from "./ImageMarquee";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

function App() {
  return (
    <div>
      <ImageMarquee images={images} />
    </div>
  );
}
