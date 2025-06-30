import cloudinary 
import cloudinary.uploader

cloudinary.config(
    cloud_name="dwateogqu",
    api_key="441241162882781",
    api_secret="FIKSWbA3y-L0leJUh9UZLsozpbU"
)
public_id='enmkit'
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/Image5.jpg", public_id=public_id)
image_url= cloudinary.CloudinaryImage('enmkit').build_url()
print(image_url)