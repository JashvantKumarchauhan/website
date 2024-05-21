import React from 'react';

const Card = ({ imageUrl, text }) => {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt="Card Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto">
    {/* First Row with Four Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <Card imageUrl="https://m.media-amazon.com/images/I/611XUuhjeFL._SY625_.jpg" text="Jesns Price -$20 " />
      <Card imageUrl="https://m.media-amazon.com/images/I/615tadEdC2L._SY695_.jpg" text="Jesns Price -$45" />
      <Card imageUrl="https://m.media-amazon.com/images/I/71HnyJgHaML._SY741_.jpg" text="Jesns Price -$150" />
      <Card imageUrl="https://m.media-amazon.com/images/I/51D5EqoExbL._SY741_.jpg" text="Jesns Price -$80" />
    </div>
    
    {/* Second Row with Four Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card imageUrl="https://m.media-amazon.com/images/I/61nArHCIRkL._SY741_.jpg" text="Card 5" />
      <Card imageUrl="https://m.media-amazon.com/images/I/71L5cD1N02L._SX569_.jpg" text="Card 6" />
      <Card imageUrl="https://m.media-amazon.com/images/I/61W0y8HrfML._SX679_.jpg" text="Card 7" />
      <Card imageUrl="https://m.media-amazon.com/images/I/71Bbh67nAZL._SX679_.jpg" text="Card 8" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <Card imageUrl="https://m.media-amazon.com/images/I/611XUuhjeFL._SY625_.jpg" text="Jesns Price -$20 " />
      <Card imageUrl="https://m.media-amazon.com/images/I/615tadEdC2L._SY695_.jpg" text="Jesns Price -$45" />
      <Card imageUrl="https://m.media-amazon.com/images/I/71HnyJgHaML._SY741_.jpg" text="Jesns Price -$150" />
      <Card imageUrl="https://m.media-amazon.com/images/I/51D5EqoExbL._SY741_.jpg" text="Jesns Price -$80" />
    </div>
    
    {/* Second Row with Four Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card imageUrl="https://m.media-amazon.com/images/I/61nArHCIRkL._SY741_.jpg" text="Card 5" />
      <Card imageUrl="https://m.media-amazon.com/images/I/71L5cD1N02L._SX569_.jpg" text="Card 6" />
      <Card imageUrl="https://m.media-amazon.com/images/I/61W0y8HrfML._SX679_.jpg" text="Card 7" />
      <Card imageUrl="https://m.media-amazon.com/images/I/71Bbh67nAZL._SX679_.jpg" text="Card 8" />
    </div>
  </div>
  );
};

export default Home;
