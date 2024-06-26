import React from 'react'
import './index.css'
import Navbar from '../Navbar/Navbar'
import { Button } from 'reactstrap'
import image from './image.png'
const index = () => {
  return (
    <div>
        <Navbar/>
        <div  className="block text-center text-white">
         <p>Up to 70% Off.<a href='https://www.#.com'>Shop our latest sale styles</a> </p>
        </div>
        <div className='container mt-3 d-flex gap-3 '>
          <Button color='success'>
            <svg className='text-white' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 9.5C18.0523 9.5 18.5 9.94771 18.5 10.5V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75C16.9477 22.75 16.5 22.3023 16.5 21.75L16.5 10.5C16.5 9.94771 16.9477 9.5 17.5 9.5Z" fill="#1E212C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.25C18.0523 1.25 18.5 1.69772 18.5 2.25V5.25C18.5 5.80228 18.0523 6.25 17.5 6.25C16.9477 6.25 16.5 5.80228 16.5 5.25V2.25C16.5 1.69772 16.9477 1.25 17.5 1.25Z" fill="#1E212C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12 5.59315 13.3431 4.25 15 4.25H20C21.6569 4.25 23 5.59315 23 7.25V8.5C23 10.1569 21.6569 11.5 20 11.5H15C13.3431 11.5 12 10.1569 12 8.5V7.25ZM15 6.25C14.4477 6.25 14 6.69772 14 7.25V8.5C14 9.05228 14.4477 9.5 15 9.5H20C20.5523 9.5 21 9.05228 21 8.5V7.25C21 6.69772 20.5523 6.25 20 6.25H15Z" fill="#1E212C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 17.75C7.05228 17.75 7.5 18.1977 7.5 18.75V21.75C7.5 22.3023 7.05229 22.75 6.5 22.75C5.94772 22.75 5.5 22.3023 5.5 21.75V18.75C5.5 18.1977 5.94772 17.75 6.5 17.75Z" fill="#1E212C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.25C7.05228 1.25 7.5 1.69772 7.5 2.25V13.5C7.5 14.0523 7.05228 14.5 6.5 14.5C5.94772 14.5 5.5 14.0523 5.5 13.5V2.25C5.5 1.69772 5.94772 1.25 6.5 1.25Z" fill="#1E212C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 13.8431 2.34315 12.5 4 12.5H9C10.6569 12.5 12 13.8431 12 15.5V16.75C12 18.4069 10.6569 19.75 9 19.75H4C2.34315 19.75 1 18.4069 1 16.75V15.5ZM4 14.5C3.44772 14.5 3 14.9477 3 15.5V16.75C3 17.3023 3.44772 17.75 4 17.75H9C9.55228 17.75 10 17.3023 10 16.75V15.5C10 14.9477 9.55228 14.5 9 14.5H4Z" fill="#1E212C"/>
            </svg> Show filters
          </Button>
          <p>Sort by</p>
          <select className="form-select w-25" aria-label="Default select example">
            <option value="0">Popularity</option>
          </select>
        </div>
        <div className='container mt-4 d-flex gap-1 rest'>
          <div>
            <img src={image} className='width' alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Mid-rise slim cropped fit jeans</p>
            <h5>$40.00</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Black and white sport cap</p>
            <h5>$18.15</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Green baby romper</p>
            <h5>$20.40</h5> 
          </div>
        </div>
        <div className='container mt-4 d-flex gap-1'>
          <div>
            <img src={image} className='width' alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
        </div>
        <div className='container mt-4 d-flex gap-1'>
          <div>
            <img src={image} className='width' alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
          <div>
            <img src={image} className='width'  alt="" />
            <p>Shirt with insertion lace trims</p>
            <h5>$49.95</h5> 
          </div>
        </div>
        <div className='box '>
            <div className='container '>
              <h1 className='mt-4'>Subscribe for updates</h1>
              <p>Subscribe for exclusive early sale access and new arrivals.</p>
              <div className='d-flex gap-1'>
                  <button className='btn btn-outline-dark '>Women</button>
                  <button className='btn btn-outline-dark '>Men</button>
                  <button className='btn btn-success '>Grils</button>
                  <button className='btn btn-outline-dark '>Boys</button>
              </div >
              <label className='mt-3' htmlFor="">Email</label><br></br>
              <div className='d-flex'>
                <input type="email" className='form-control w-25 ' placeholder='Your Working Email' />
                <button className='btn btn-success'>Subscribe</button>
              </div>
              <div className='d-flex mt-2 gap-2 '>
                <input type="checkbox" className='form-check-input' />
                <p className=''> I agree to receive communications from Createx Store.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default index