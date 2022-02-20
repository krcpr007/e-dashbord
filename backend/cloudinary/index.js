const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
    cloud_name:process.env.REACT_APP_CLOUD_NAME, 
    api_key:process.env.REACT_APP_API_KEY, 
    api_secret:process.env.REACT_APP_API_SECRET,
})
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'E-dashboard',
      allowedFormats:['jpeg', 'png', 'jpg']
    },
  });
module.exports={
      cloudinary, 
      storage
  }