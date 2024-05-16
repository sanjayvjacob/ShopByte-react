import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./Filter.css"

const Filter = ({ priceRange, handleChange }) => {
  const brands = ['Apple', 'Sony', 'Logitech', 'Samsung', 'Dell', 'Marshall', 'Keychron'];
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [value, setValue] = useState(2);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  function valuetext(value) {
    return `£${value}`;
  }

  return (
    <div className='filter-area'>
      <div className='brand-filter'>
        <h2 className='filter-title'>Filter by Brand</h2>
        {brands.map((brand) => (
          <div key={brand}>
            <label>
              <input
                type='checkbox'
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={handleBrandChange}
                className='checkbox'
              />
              {brand}
            </label>
          </div>
        ))}
      </div>
      <div className='price-filter'>
        <h2 className='filter-title'>Filter by Price</h2>
        <p>{`£${priceRange[0]} – £${priceRange[1]}`}</p>
        <Box sx={{ width: 150 }} >
          <Slider
            getAriaLabel={() => 'Price range'}
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={1650}
            color="white"
          />
        </Box>
      </div>
    </div>
  );
}

export default Filter;
