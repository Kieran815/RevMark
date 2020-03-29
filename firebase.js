import React from "react";
import firebase from "gatsby-plugin-firebase";

function Component() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    firebase
      .database()
      .ref("/data")
      .once("value")
      .then(snapshot => {
        setData(snapshot.val())
      })
  }, [])

  return <div>{data ? data : "Loading..."}</div>
}

export default Component
