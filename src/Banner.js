import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import Loader from "./Loader";

const cookies = new Cookies();
const styles = {
  btngrad: {
    backgroundImage: 'linear-gradient(to right, #3D7EAA 0%, #FFE47A  51%, #3D7EAA  100%)',
    margin: '10px',
    padding: '15px 45px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    display: 'block',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600'
  }
}
export const Banner = (props) => {
  const [refresh, setrefresh] = useState(true);
  const [sitename, setSetSiteName] = useState("NOYABETADMIN");
  const [banner, setBanner] = useState(1);
  const [updatebanner, setupdatebanner] = useState(false);
  const [postImage, setPostImage] = useState({
    myFile: "",
  });


  const url = "https://liveapi247.live/api4/uploadimg";

  const createImage = (newImage) => axios.post(url, {
    site: sitename,
    banner: Number(banner),
    image: newImage.myFile,
    image_extension: "jpeg"
  }).then(result => {
    if (result.status === 200) {

      toast.success(`Banner${banner} uploaded successfully on ${sitename} site`, { position: toast.POSITION.TOP_CENTER });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      setSetSiteName('');
      setBanner(0);
      setPostImage({ myFile: "" })
    }
  }).catch(err => {
    toast.error(`Oops something goes wrong, please try later`, { position: toast.POSITION.TOP_CENTER });
  });
  const createPost = async (post) => {
    try {
      await createImage(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (banner === "" || sitename === "") {
      return toast.error(`Please choose site name and banner position..!!`, { position: toast.POSITION.TOP_CENTER });
    }
    createPost(postImage);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  };


    const handleDeleteBanner = async (e) => {
        e.preventDefault();
        if (banner === "" || sitename === "") {
            return toast.error(`Please choose site name and banner position..!!`, { position: toast.POSITION.TOP_CENTER });
        }

       await axios.post('https://liveapi247.live/api4/deletebanner', {
           siteName: sitename,
           bannerNum: banner,
        }).then(result => {
            if (result.status === 200) {

                toast.success(`Banner${banner} Delete successfully on ${sitename} site`, { position: toast.POSITION.TOP_CENTER });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                setSetSiteName('NOYABETADMIN');
                setBanner(1);
            }
        }).catch(err => {
            toast.error(`Oops something goes wrong, please try later`, { position: toast.POSITION.TOP_CENTER });
        });

    };
  // console.log(postImage);


  const siteList = [
      {
        name: 'Noyabet Admin',
        value: 'NOYABETADMIN'
      },
      {
        name: 'Lebuzz Admin',
        value: 'LEBUZZADMIN'
      },
      {
        name: 'Bazigar Admin',
        value: 'BAZIGARADMIN'
      },
      {
        name: 'Vellki Admin',
        value: 'VELLKIADMIN'
      },
      {
        name: 'Vellki-Pro Admin',
        value: 'VELLKIPROADMIN'
      },
      {
        name: '9XPlay Admin',
        value: '9XPLAYADMIN'
      },
      {
        name: 'Playbuzz Admin',
        value: 'PLAYBUZADMIN'
      },
      {
        name: 'Luck Admin',
        value: 'LUCKADMIN'
      }
  ]


  return (
    <React.Fragment>
      <div className="biab_body biab_fluid biab_account-page" id="biab_body">
        <div className="biab_wrapper js-wrapper" style={{ width: 1347 }}>
          <div
            id="biab_message-dialog"
            className="biab_message-dialog-wrapper"
          />
          <div className="biab_page-wrapper">
            <div
              className="biab_page-holder"
              style={{ margin: "-28px 0px -46px" }}
            >
              <div className="biab_page-container">
                <div className="js-scroll-start" style={{ margin: 28 }} />
                <div
                  className="biab_scrollable js-scrollable"
                  style={{ position: "relative", overflow: "auto" }}
                >
                  <div
                    className="biab_scrollable-content js-scrollable-content"
                    style={{ marginBottom: 60 }}
                  >
                    <div style={{ marginBottom: 20, marginLeft: 0 }}>
                      <div
                        style={{
                          height: 30,
                          width: "100%",
                          backgroundColor: "rgb(0, 116, 177)",
                          color: "white",
                          fontSize: 15,
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          paddingLeft: 10,
                        }}
                      >
                        Banner Upload
                      </div>
                      <div
                        style={{
                          height: 'auto',
                          width: "100%",
                          backgroundColor: "whitesmoke",
                          color: "gray",
                          fontSize: 15,
                          fontWeight: "bold",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            margin: "15px",
                            width: "50%",
                            display: "block",
                          }}
                        >
                          <select style={{ width: '100%', height: '2rem'}} onChange={(e)=> setSetSiteName(e.target.value)}>
                            {siteList.map((site, index)=> (
                                <option value={site.value} key={site.value+index}>{site.name}</option>
                            ))}
                          </select>
                        </div>
                        <div
                          style={{
                            margin: "15px",
                            width: "50%",
                            display: "block",
                          }}
                        >
                            <select style={{ width: '100%', height: '2rem'}} onChange={(e)=> setBanner(e.target.value)}>
                                {[1,2,3,4,5,6,7,8,9,10].map((num, index)=> (
                                    <option value={num} key={num+index}>Banner {num}</option>
                                ))}
                            </select>
                        </div>
                        <div
                          style={{
                            margin: "15px",
                            width: "100%",
                            display: "block",
                          }}
                        >
                          <img
                            src={postImage.myFile}
                            style={{ width: "100%" }}
                          />
                          <input
                            type="file"
                            label="Image"
                            name="myFile"
                            accept=".jpeg, .png, .jpg"
                            onChange={(e) => handleFileUpload(e)}
                          />
                          <br />
                          <button
                            type="button"
                            onClick={(e) => handleSubmit(e)}
                            style={styles.btngrad}
                          >Post Banner</button>
                            <button
                                type="button"
                                onClick={handleDeleteBanner}
                                style={{
                                    ...styles.btngrad,
                                    backgroundImage: 'none',
                                    padding: '15px 35px',
                                    backgroundColor: '#ff4e4e'
                                }}
                            >Delete Banner</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
