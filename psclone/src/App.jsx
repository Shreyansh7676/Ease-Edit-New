import React, { useState, useCallback, useEffect, useRef } from 'react'
import * as htmlToImage from 'html-to-image';
import Modes from './Modes'
import './App.css'
import img1 from './assets/photo-1514923995763-768e52f5af87.jpeg'
import Slider from './Slider'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import Pic from './Home';
import Button from 'react-bootstrap/Button';
import { saveAs } from 'file-saver'
import Modal from 'react-bootstrap/Modal';

const Default_option = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 300
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 16
    },
    unit: 'px'
  }
]

function App(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const navigate = useNavigate();
  const [photo123, setphoto123] = useState(null);
  const handleInputChange = (event) => {
    setphoto123(URL.createObjectURL(event.target.files[0]));
  }
  const [previews, setPreviews] = useState();

  function handleUpload() {
    if (!photo123) {
      alert('No file Selected');
      return;
    }
    else {
      setShow(true);
    }
    
  }
  // useEffect(() => {
  //   if (!files) return;
  //   let tmp = [];
  //   for (let i = 0; i < files.length; i++) {
  //     tmp.push(URL.createObjectURL(files[i]));
  //   }
  //   const objectUrls = tmp;
  //   setPreviews(objectUrls);

  //   // free memory
  //   for (let i = 0; i < objectUrls.length; i++) {
  //     return () => {
  //       URL.revokeObjectURL(objectUrls[i]);
  //     };
  //   }
  // }, [files]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(Default_option)
  const selectedOption = options[selectedOptionIndex]
  
  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex)
          return option
        return { ...option, value: target.value }
      })
    })
  }
  // const downloadImage = () => {
  //   saveAs(photo123, 'image.jpg') // Put your image URL here.
  // }
  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = 'html-to-img.png';
    link.href = dataUrl;
    link.click();
  };
  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ') }
  }
  console.log(getImageStyle())
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-neutral-700 relative w-full py-32">
      <div>
        {/* <Navbar /> */}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mb-auto">
        <div className="flex flex-col items-center justify-center mx-auto w-full text-center md:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Edit All Your Photos with Ease
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-white w-full">
            "Enhance your photos effortlessly with our online editor. Upload, adjust brightness, contrast, and saturation, and download your edited images instantly. Experience professional-grade editing with a user-friendly interface. Try it now and make every picture perfect!"
          </p>
          <div className="gap-8 sm:flex-row sm:justify-center mt-16 mb-10">
            <label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 justify-items-start">Select & Upload your Picture Here</label>
            <input
              onChange={handleInputChange}
              id="picture"
              accept="image/jpg, image/jpeg, image/png"
              type="file"
              className="flex h-10 mt-3 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              // onChange={(e) => {
              //   if (e.target.files && e.target.files.length > 0) {
              //     setFiles(e.target.files);
              //   }
              //   else if (e.target.files.length === 0) {
              //     alert('File is not selected!');
              //   }
              // }}
              required="required"

            />

          </div>
          {/* {previews &&
            previews.map((pic) => {
              return <img src={pic} width={500} style={getImageStyle()} className="flex mt-4 items-center justify-center" />;
            })} */}
          {/* <button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mt-8 mb-auto"
                            onClick={handleUpload}
                            type="submit"
                        >
                            Submit
                        </button> */}

        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center px-8 sm:px-0 gap-9">
          {/* <img src={pic} style={getImageStyle()}
          width='50%'
        /> */}
          <Button variant="primary" onClick={handleUpload}>
            Edit Image
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            
          >
            <Modal.Header closeButton="" style={{backgroundColor:"#121212"}}>
              <Modal.Title className="text-white">Edit Image</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-neutral-900">
              
              {/* {previews &&
                previews.map((pic) => {
                  return <img src={pic} width={500} style={getImageStyle()} className="flex mt-4 items-center justify-center" />;
                })} */}
                <img  src={photo123} ref={domEl} alt="Image_Photo" style={getImageStyle()}/>
                <div className="flex flex-col items-center justify-center px-8 sm:px-0 gap-9">
              <Slider
                min={selectedOption.range.min}
                max={selectedOption.range.max}
                value={selectedOption.value}
                handleChange={handleSliderChange}

              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center">
                {options.map((option, index) => {
                  return (
                    <Modes
                      key={index}
                      name={option.name}
                      active={index === selectedOptionIndex}
                      handleClick={() => setSelectedOptionIndex(index)}
                    />)
                })}
              </div>
              </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:"#121212"}}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={downloadImage} >Download</Button>
            </Modal.Footer>
          </Modal>
          {/* <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange}

          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 mb-32 justify-center">
            {options.map((option, index) => {
              return (
                <Modes
                  key={index}
                  name={option.name}
                  active={index === selectedOptionIndex}
                  handleClick={() => setSelectedOptionIndex(index)}
                />)
            })}
          </div> */}
        </div>
      </div>
    </div>

  )
}

export default App
