import React, {Fragment,useEffect,useState} from 'react';
import Header from '../../components/header'
import TextField from "@mui/material/TextField";
import './profile.css';
import TokenCheck from '../../middleware/TokenCheck';
import Modal from 'react-bootstrap/Modal';
import { ToastError, ToastSuccess } from './../../config/ToastModalMessage';
import { getProfileUserData, updateProfileservice } from '../../services/auth_services/auth_services';
import moment from 'moment';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { CreateReview, GetReview } from '../../services/review_services/Review_services';
function Profile() {
  const {token,userdata,removeToken,userdataPayment}=TokenCheck();
  const history=useNavigate();
  const [Name,setName]=useSearchParams()
  const [activetab,setActiveTab]=useState("profile");
  const [user,setUser]=useState({
    userName:"",
    description:""
  });
  const {userName,description}=user;
const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
}
const [rating, setRating] = useState(0)
const [ratingloading, setRatingLoading] = useState(false)

const [reviewdes,setReviewDes]=useState("");
  const handleRating = (rate) => {
    setRating(rate)
  }
  const onPointerEnter = () => {}
  const onPointerLeave = () => {}
  const onPointerMove = (value, index) => {}

  useEffect(()=>{
setUser(userdata);
GetReview().then((res)=>{
setRating(res?.data[0]?.rating)
setReviewDes(res?.data[0]?.description)
}).catch((err)=>{
  console.log(err)
})
  },[userdata]);
  const [show3, setShow3] = useState(false);
  const [loading,setLoading]=useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [yourname,setYourName]=useState("");
  const [selectImage,setSelectImage]=useState(userdata?.avatar);
  const [selectimageurl,setSelectImageurl]=useState("");
  const imageUrls=[
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais",
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611743.jpg",
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611777.jpg",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611725.jpg",
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611780.jpg",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611707.jpg",
    "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833536.jpg"
  ]

  const updateProfileImage=async()=>{
    setLoading(true);
    try {
      const datas={
        description:description,
        avatar:selectimageurl?selectimageurl:selectImage
      }
      const response=await updateProfileservice(datas)
      if(response)
        {
ToastSuccess("Profile Updated Successfully");
setTimeout(() => {
  setLoading(false);
  getProfileUserData();
handleClose3();
}, 700);

        }
    } catch (error) {
  setLoading(false);
      
    }
  }
  useEffect(()=>{
if(Name.get("Name"))
{
  setActiveTab(Name.get("Name"))
}
  },[Name.get("Name")])
  const handleChangePathTab=(params)=>{
history(`/profile?Name=${params}`)
  }
  const handleReviewSubmit=async()=>{
    setRatingLoading(true)
try {
  if(!reviewdes || !rating)
  {
    ToastError("Please Enter All Filed in Rating")
  }
  else{
    if(reviewdes && rating)
    {
      const data={
        description:reviewdes,
        rating:rating
      }
      const response=await CreateReview(data);
      if(response)
      {
        ToastSuccess(userdata?.reviewStatus?"Rating Uptaed Successfully":"Rating Submitted Successfully")
        setTimeout(() => {
          setRatingLoading(false)
        }, 800);
      }
    }
  }
} catch (error) {
  setRatingLoading(false);
}
  }
  return (
    <Fragment>
      <Header/>
      <div className='container'>
        
        <div className='mt-5 d-flex gap-5 buttons'>
          <div>
            <buttton className={activetab=="profile"?"theme-btn":"theme-btn-inactive"} onClick={()=>handleChangePathTab("profile")}>Profile</buttton>
          </div>
          <div>
            <buttton className={activetab=="payment"?"theme-btn":"theme-btn-inactive"} onClick={()=>handleChangePathTab("payment")}>Payment You</buttton>
          </div>
          <div>
            <buttton className={activetab=="review"?"theme-btn":"theme-btn-inactive"} onClick={()=>handleChangePathTab("review")}>Review</buttton>
          </div>
        </div>
        <div>
          <hr/>
        </div>

      {activetab==="profile" && <>
      
        <div>
          <div className='mt-4 mb-4' onClick={handleShow3}>
            <img src={userdata?.avatar} alt="no image" className='avatar-image'/>
          </div>


          <div className='mt-3 mb-3'>
          <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="User Name"
                                value={userName}
                                variant="outlined"
                                name="userName"
                                label="UserName"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                              
                                onChange={handleChange}
                            />
          </div>

          <div className='mt-3 mb-3'>
          <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Description"
                                value={description}
                                variant="outlined"
                                name="description"
                                label="Description"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                              
                                onChange={handleChange}
                            />
          </div>

          <div>
            <button className='theme-btn' onClick={updateProfileImage}>

            {loading?"Loading...":"Update Profile"}
            </button>
          </div>
        </div>
      </>}

      {activetab==="payment" && <>
      <div>
        {userdataPayment?.length===0 && <div className=' fw-bold fs-3 mt-5 w-100 h-[100vh] d-flex align-items-center justify-content-center'>Sorry!, You have not received any payment; this pure-hearted trust is unpaid.</div>}
      </div>
      
      {userdataPayment?.map((item,index)=>{
        return(
          <div className='card p-4' key={index}>
            
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <div>
                  {item?.orderId}
                </div>
<div className='mt-2 fs-3 fw-bold'>
₹{item?.amount}
</div>
<div className='mt-2'>
  {moment(item?.createdAt).format('LLL')}
</div>
              </div>
              <div>
                <button className='theme-btn' onClick={()=>history(`/invoice/${item?._id}`)}>Download Invoice</button>
              </div>
            </div>
          </div>
        )
      })}
      </>}
     
     {activetab==="review" && <>
     
      <div className='mb-5'>
      
      <div className='card p-3'>
        <div className='mb-3'>
          <h2>Feed Back</h2>
        </div>
        <div className='mb-3'>
        <>Rating</>
        </div>
      <div className='ms-3'>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={rating}
      />
      </div>
      <div className='mt-4 mb-3'>
        Description
      </div>

      <div>
      
<textarea id="w3review" 
        className='feedback'
name="w3review" rows="4" cols="50"
 placeholder='Please Enter Your Feed Back'
 value={reviewdes}
 onChange={(e)=>setReviewDes(e.target.value)}
>

</textarea>
      </div>
      <div className='mt-4 mb-3'>
        <button className="theme-btn submit-btn" onClick={handleReviewSubmit}>
          {ratingloading?"Loading...":<>
            {userdata?.reviewStatus?"Updated Rating":"Submit"}
          </>}
          </button>
      </div>
      </div>
   
      </div>
     </>}

      </div>

     
      <Modal show={show3} onHide={handleClose3} backdrop="static" keyboard={false} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <div className='d-flex gap-3 align-items-center'>
Update Profile Image
          </div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        

            



            <div className='mb-5 mt-3 p-4 d-flex align-items-center justify-content-center'>
              {selectImage?<>
            <img src={selectImage} alt="no image" className='user-image-round'/>
              
              </>:<>
              
            <img src={user?.avatar} alt="no image" className='user-image-round'/>
              
              </>}

            </div>
          <div className='mt-1 mb-1  list-image'>

          
         {imageUrls?.map((item,index)=>{
          return(
            <div className={`${selectimageurl==item?"user-image-lists-active":"user-image-lists"} mt-3 mb-2`} key={index} onClick={()=>setSelectImageurl(item)}>
              <img src={item} alt="no image" className='user-image-lists'
              onClick={()=>setSelectImage(item)}
              />
            </div>
          )
         })}
          </div>
          <div className='d-flex gap-4 align-items-center mt-5 mb-4 justify-content-center'>
            <div>
              <button className='theme-btn' onClick={handleClose3}>Cancel</button>
            </div>
            <div>
              <button className='theme-btn' onClick={updateProfileImage}>
                {loading?"Loading...":"Update"}
                </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </Fragment>
  )
}

export default Profile