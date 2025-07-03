import cloudinary 
import cloudinary.uploader

cloudinary.config(
    cloud_name="dwateogqu",
    api_key="242384279231587",
    api_secret="Ztk3y0plHFys8FN6zjzZ45NMWwk"
)
public_id='enmkit'
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/Image5.jpg", public_id=public_id)
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/image9.jpg", public_id="image_a_propos")
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/Image6.jpg", public_id="image2_a_propos")
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/image.jpg", public_id="image_accueil")
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/Image2.jpg", public_id="image_logo")
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/Image2.jpg", public_id="image_logo")
image_url= cloudinary.CloudinaryImage('enmkit').build_url()
print(image_url)
imageurl= cloudinary.CloudinaryImage('image_a_propos').build_url()
print(imageurl)
imageurl3= cloudinary.CloudinaryImage('image2_a_propos').build_url()
print(imageurl3)
imageurl5= cloudinary.CloudinaryImage('image_accueil').build_url()
print(imageurl5)
imageurl6= cloudinary.CloudinaryImage('image_logo').build_url()
print(imageurl6)