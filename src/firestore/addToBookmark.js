import { firestoreDB } from "../firebase/firebase.utils";
import Alert from "@mui/material/Alert";
const handleAddToBookmark = async (
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
  uid
) => {
  if (!uid) {
    alert("not logged in");
    return;
  }
  const data = await firestoreDB.collection("users").doc(uid).get();
  if (data) {
    if (data.data()) {
      let bookmarks = await data.data().bookmarks;
      let flag = true;
      bookmarks.map((value) => {
        if (value.description === description) {
          flag = false;
        }
      });
      if (flag == true) {
        bookmarks.push({
          description,
          publishedAt,
          source,
          title,
          url,
          urlToImage,
        });
        firestoreDB
          .collection("users")
          .doc(uid)
          .set({ bookmarks }, { merge: true });
        alert("Added to Bookmarks");
      } else {
        alert("Already in Bookmarks");
      }
    } else {
      let bookmarks = [
        { description, publishedAt, source, title, url, urlToImage },
      ];
      firestoreDB.collection("users").doc(uid).set({ bookmarks });
    }
  }
};

export default handleAddToBookmark;
