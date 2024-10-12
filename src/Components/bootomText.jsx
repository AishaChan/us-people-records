import React from "react";

const FeaturedOn = () => {
  return (
    <>
      <div style={styles.container}>
        {/* <h2 style={styles.header}>We Are Featured On</h2> */}
        <img style={styles.image} src="Capture.PNG" alt="UsPeopleRecord" />
      </div>
    </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    width: "100%",
    alignitem: "center",
  },
  header: {
    fontSize: "24px",
    margin: "20px 0",
  },
  image: {
    alignitem: "center",
    padding: "20px",
    margin: "20px",
  },
};

export default FeaturedOn;
