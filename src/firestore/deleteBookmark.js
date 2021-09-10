import { firestoreDB } from "../firebase/firebase.utils";
import { message } from "antd";
const handleDeleteBookmark = async (description, uid) => {
  const data = await firestoreDB.collection("users").doc(uid).get();
  let bookmarks = await data.data().bookmarks;
  const filteredBookmarks = bookmarks.filter((value) => {
    return value.description !== description;
  });
  firestoreDB
    .collection("users")
    .doc(uid)
    .set({ bookmarks: filteredBookmarks });
  alert("Removed successfully ,refresh the page");
};
export default handleDeleteBookmark;
