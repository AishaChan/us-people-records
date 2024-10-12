import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  TextField,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  checkDNC,
  findData,
  findNumberDetails,
  getIPAddress,
  postTraffic,
} from "../../services/homePage.service";
import {
  BLOGSDATA,
  STATESCODESNAME,
  showAlert,
} from "../../utils/customFunctions";
import CloseIcon from "@mui/icons-material/Close";
import UsPeopleRecord from "../uspeoplerecord";
import Footer from "../footer";
import FeaturedOn from "../bootomText";
import FindRecord from "../findrecord";
import Header from "../header";

const HomePage = () => {
  const theme = useTheme();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [showDataModal, setShowDataModal] = useState(false);

  useEffect(() => {
    const postWebsiteTrafficData = async () => {
      try {
        const response = await getIPAddress();
        await postTraffic(response.data.ip, "home");
      } catch (err) {
        postWebsiteTrafficData();
      }
    };
    postWebsiteTrafficData();
  }, []);

  const filterData = async () => {
    try {
      if (!phoneNumber?.trim()) throw "Please Enter Phone Number";
      setLoading(true);
      //try {
      //   const response = await checkDNC(
      //     phoneNumber
      //   );
      //   if (response.status == 200 && response.data.status == "ok") {
      //     setdata(response.data)
      //   } else {
      //     //showAlert(response.data.message?.toString(), "error");
      //     setdata({})
      //   }

      // } catch (error) {
      //   setdata({})
      // }

      // const response = await findData(
      //   phoneNumber
      // );

      // if (response.status == 200) {
      //   //showAlert("Data Found","success")
      //   setLoading(false)
      //   setData(response.data.data)
      // } else {
      //   showAlert(response.data.message?.toString(), "error");
      //   setData([])
      //   setLoading(false)
      // }

      const response = await findNumberDetails(phoneNumber);

      if (response.status == 200) {
        //showAlert("Data Found","success")
        setLoading(false);
        setData(response.data.data);
      } else {
        showAlert(response.data.message?.toString(), "error");
        setData([]);
        setLoading(false);
      }
      setShowDataModal(true);
    } catch (err) {
      setData([]);
      setLoading(false);

      if (err.response) {
        showAlert(err.response.data.message?.toString(), "error");
      } else if (err.message) {
        showAlert(err.message, "error");
      } else if (err) {
        showAlert(err, "error");
      }
    }
  };

  return (
    <div className="">
      <Header />
      <Dialog
        open={showDataModal}
        onClose={() => setShowDataModal(false)}
        fullScreen
      >
        <DialogTitle sx={{ backgroundColor: "white" }}>
          <IconButton
            aria-label="close"
            onClick={() => {
              setShowDataModal(false);
            }}
            sx={{
              position: "absolute",
              right: 20,
              top: 4,
              color: "#000",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "white" }}>
          <div className="mt-3 mx-4">
            {data?.map((item, index) => {
              return (
                <div key={index}>
                  <Typography
                    sx={{
                      border: "1px dotted #000",
                      padding: "5px",
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.3),
                    }}
                    variant="h5"
                    fontWeight={(theme) => theme.typography.fontWeightBold}
                    className="text-center "
                  >
                    Blacklist Status
                  </Typography>

                  <div className="mx-3 mb-3">
                    <div
                      className="grid grid-cols-2 p-2 mb-1"
                      style={{ borderBottom: "1px dotted rgba(0,0,0,0.7)" }}
                    >
                      <Typography
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        Phone
                      </Typography>
                      <Typography
                        textAlign="end"
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        {phoneNumber}
                      </Typography>
                    </div>

                    <div
                      className="grid grid-cols-2 p-2 mb-1"
                      style={{ borderBottom: "1px dotted rgba(0,0,0,0.7)" }}
                    >
                      <Typography
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        State
                      </Typography>
                      <Typography
                        textAlign="end"
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        {STATESCODESNAME[item?.state] || "..."}
                      </Typography>
                    </div>

                    <div
                      className="grid grid-cols-2 p-2 mb-1"
                      style={{ borderBottom: "1px dotted rgba(0,0,0,0.7)" }}
                    >
                      <Typography
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        DNC <sub>National</sub>
                      </Typography>
                      <Typography
                        textAlign="end"
                        color={
                          item?.ndnc == "No"
                            ? (theme) => theme.palette.primary.main
                            : item?.ndnc == "Yes"
                            ? (theme) => theme.palette.secondary.main
                            : ""
                        }
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        {item?.ndnc == "No"
                          ? "Clean"
                          : item?.ndnc == "Yes"
                          ? "Blacklist"
                          : "..."}
                      </Typography>
                    </div>

                    <div
                      className="grid grid-cols-2 p-2 mb-1"
                      style={{ borderBottom: "1px dotted rgba(0,0,0,0.7)" }}
                    >
                      <Typography
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        DNC <sub>State</sub>
                      </Typography>
                      <Typography
                        textAlign="end"
                        color={
                          item?.sdnc == "No"
                            ? (theme) => theme.palette.primary.main
                            : item?.sdnc == "Yes"
                            ? (theme) => theme.palette.secondary.main
                            : ""
                        }
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        {item?.sdnc == "No"
                          ? "Clean"
                          : item?.ndnc == "Yes"
                          ? "Blacklist"
                          : "..."}
                      </Typography>
                    </div>

                    <div
                      className="grid grid-cols-2 p-2 mb-1"
                      style={{ borderBottom: "1px dotted rgba(0,0,0,0.7)" }}
                    >
                      <Typography
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        Litigator
                      </Typography>
                      <Typography
                        textAlign="end"
                        color={
                          item?.litigator == "No"
                            ? (theme) => theme.palette.primary.main
                            : item?.litigator == "Yes"
                            ? (theme) => theme.palette.secondary.main
                            : ""
                        }
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        {item?.litigator == "No"
                          ? "Clean"
                          : item?.litigator == "Yes"
                          ? "Blacklist"
                          : "..."}
                      </Typography>
                    </div>

                    <div
                      className="grid grid-cols-2 p-2 mb-1"
                      style={{ borderBottom: "1px dotted rgba(0,0,0,0.7)" }}
                    >
                      <Typography
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        Blacklist
                      </Typography>
                      <Typography
                        textAlign="end"
                        color={
                          item?.blacklist == "No"
                            ? (theme) => theme.palette.primary.main
                            : item?.blacklist == "Yes"
                            ? (theme) => theme.palette.secondary.main
                            : ""
                        }
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                      >
                        {item?.blacklist == "No"
                          ? "Clean"
                          : item?.blacklist == "Yes"
                          ? "Blacklist"
                          : "..."}
                      </Typography>
                    </div>
                  </div>

                  <Typography
                    sx={{
                      border: "1px dotted #000",
                      padding: "5px",
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.3),
                    }}
                    variant="h5"
                    fontWeight={(theme) => theme.typography.fontWeightBold}
                    className="text-center "
                  >
                    Potential Owners
                  </Typography>

                  <div className="mx-3 mt-3">
                    <Paper
                      className="mb-2"
                      elevation={24}
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.2),
                      }}
                    >
                      <div
                        className="grid grid-cols-2"
                        style={{
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.7
                          ),
                        }}
                      >
                        <div className="px-2">
                          <ListItemText
                            primary={"PERSON NAME"}
                            secondary={item.name}
                            primaryTypographyProps={{
                              fontWeight: (theme) =>
                                theme.typography.fontWeightBold,
                              fontSize: "12px",
                              color: (theme) => theme.palette.common.white,
                            }}
                            secondaryTypographyProps={{
                              fontWeight: (theme) =>
                                theme.typography.fontWeightBold,
                              fontSize: "16px",
                              color: (theme) => theme.palette.common.white,
                            }}
                          />
                        </div>
                        <div className="px-2">
                          <ListItemText
                            primary={"AGE"}
                            secondary={item.age}
                            sx={{ textAlign: "end" }}
                            primaryTypographyProps={{
                              fontWeight: (theme) =>
                                theme.typography.fontWeightBold,
                              fontSize: "12px",
                              color: (theme) => theme.palette.common.white,
                            }}
                            secondaryTypographyProps={{
                              fontWeight: (theme) =>
                                theme.typography.fontWeightBold,
                              fontSize: "16px",
                              color: (theme) => theme.palette.common.white,
                            }}
                          />
                        </div>
                      </div>
                      {item.addresses?.map((address, index2) => {
                        return (
                          <div
                            className="grid grid-cols-7 md:grid-cols-10 px-2 gap-x-2"
                            style={{ borderBottom: "1px dotted #000" }}
                          >
                            <ListItemText
                              className="col-span-3"
                              primary={index2 == 0 ? "LIVES AT" : "LIVED AT"}
                              secondary={address.home}
                              primaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "12px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                              secondaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "16px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                            />

                            <ListItemText
                              className="col-span-2"
                              primary={"CITY"}
                              secondary={address.city}
                              primaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "12px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                              secondaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "16px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                            />

                            <ListItemText
                              className="col-span-2"
                              primary={"STATE"}
                              secondary={STATESCODESNAME[address.state]}
                              primaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "12px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                              secondaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "16px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                            />

                            <ListItemText
                              className="col-span-2"
                              primary={"ZIP"}
                              secondary={address.zip}
                              primaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "12px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                              secondaryTypographyProps={{
                                fontWeight: (theme) =>
                                  theme.typography.fontWeightBold,
                                fontSize: "16px",
                                color: (theme) => theme.palette.primary.main,
                              }}
                            />

                            <Typography
                              sx={{
                                color: theme.palette.primary.main,
                                alignContent: "center",
                              }}
                              textAlign={"center"}
                              fontWeight={(theme) =>
                                theme.typography.fontWeightBold
                              }
                            >
                              {address.isDeliverable}
                            </Typography>
                          </div>
                        );
                      })}

                      <div
                        className="grid grid-cols-5 px-2"
                        style={{ borderBottom: "1px dotted #000" }}
                      >
                        <ListItemText
                          className="col-span-4"
                          primary={"RELATED"}
                          secondary={item.relatives?.toString()}
                          primaryTypographyProps={{
                            fontWeight: (theme) =>
                              theme.typography.fontWeightBold,
                            fontSize: "12px",
                          }}
                          secondaryTypographyProps={{
                            fontWeight: (theme) =>
                              theme.typography.fontWeightBold,
                            fontSize: "16px",
                          }}
                        />

                        <ListItemText
                          primary={"D.O.B"}
                          secondary={item.dob}
                          sx={{ textAlign: "end" }}
                          primaryTypographyProps={{
                            fontWeight: (theme) =>
                              theme.typography.fontWeightBold,
                            fontSize: "12px",
                          }}
                          secondaryTypographyProps={{
                            fontWeight: (theme) =>
                              theme.typography.fontWeightBold,
                            fontSize: "16px",
                          }}
                        />
                      </div>
                    </Paper>

                    {/* <Typography textAlign="center" variant="h5" fontWeight={theme.typography.fontWeightBold}>No Record Found</Typography> */}
                  </div>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
      <div
        className=" grid grid-flow-row grid-rows-4 md:grid-rows-2 pb-3 "
        style={{
          backgroundImage: `url(${require("../../Assets/images/homebg.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <div className="grid grid-cols-2 pt-10 px-4 md:px-10 gap-x-4">
          <div>
            <img
              style={{
                height: "auto",
                maxHeight: "100px",
                width: "auto",
                maxWidth: "200px",
              }}
              src={require("../../Assets/images/US-01.png")}
            />
          </div>
          <div className="text-right">
            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className=" row-span-3">
          <Typography
            variant="h3"
            className="text-4xl text-white font-bold text-center "
          >
            500 Million People Record <br /> In One Place
          </Typography>
          <Paper
            // 4, 7
            className="px-2 my-10  mx-3 py-3 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2"
          >
            {/* <div>
                <label className="text-white">Full Name</label>
                    <TextField 
                        variant="outlined"
                      size="small"
                        fullWidth
                       
                         sx={{backgroundColor:"#fff", borderRadius:"5px"}}
                    />
                </div>
                <div>
                <label className="text-white">Email Address</label>
                    <TextField 
                        variant="outlined"
                            size="small"
                        fullWidth
                       
                         sx={{backgroundColor:"#fff", borderRadius:"5px"}}
                    />
                </div>
                <div>
                <label className="text-white">State</label>
                    <TextField 
                        variant="outlined"
                      size="small"
                        fullWidth
                       
                        sx={{backgroundColor:"#fff", borderRadius:"5px"}}
                    />
                </div>
                <div>
                <label className="text-white">Address</label>
                    <TextField 
                        variant="outlined"
                      size="small"
                        fullWidth
                       
                         sx={{backgroundColor:"#fff", borderRadius:"5px"}}
                    />
                </div>

                <div>
                <label className="text-white">Zip Code</label>
                    <TextField 
                        variant="outlined"
                      size="small"
                        fullWidth
                       
                         sx={{backgroundColor:"#fff", borderRadius:"5px"}}
                    />
                </div> */}

            <div className=" col-span-3">
              <label className="text-white">Reverse Phone Number</label>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setData([]);
                }}
                type="tel"
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
              />
            </div>

            <div>
              <label className="text-white">&nbsp;</label>
              <Button
                variant="contained"
                color="secondary"
                //sx={{backgroundColor:"#23D19D"}}
                fullWidth
                onClick={filterData}
                disabled={loading}
              >
                Let's Search
              </Button>
            </div>
          </Paper>
        </div>
      </div>
      <div className="w-5/6 mx-auto">
        <FindRecord />

        <UsPeopleRecord />
        <Typography
          fontWeight={theme.typography.fontWeightBold}
          sx={{ fontSize: "45px" }}
          className="ps-3 pt-10"
        >
          Latest Blog & News
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOGSDATA.map((item, index) => {
            return (
              <div className="p-2 m-2">
                <img
                  src={item.image}
                  className=" rounded-t-lg"
                  style={{ height: "auto", width: "100%", maxWidth: "100%" }}
                />
                <Typography
                  variant="h5"
                  fontWeight={theme.typography.fontWeightBold}
                  className="p-4 block"
                >
                  {item.title}
                </Typography>
                <Typography variant="p" className=" p-4 inline-block">
                  {item.description}
                </Typography>

                <Typography className="p-4" sx={{ color: "#23D19D" }}>
                  Learn More
                </Typography>
              </div>
            );
          })}
        </div>

        <FeaturedOn />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
