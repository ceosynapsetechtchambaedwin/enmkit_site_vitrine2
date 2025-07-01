import cloudinary 
import cloudinary.uploader

cloudinary.config(
    cloud_name="dwateogqu",
    api_key="242384279231587",
    api_secret="Ztk3y0plHFys8FN6zjzZ45NMWwk"
)
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/Image2.jpg", public_id="image_logo")
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/total.jpg", public_id="image_totale")
cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/yali.png", public_id="image_yali")
imageurl8= cloudinary.CloudinaryImage('image_yali').build_url()
print(imageurl8)
imageurl9= cloudinary.CloudinaryImage('image_totale').build_url()
print(imageurl9)