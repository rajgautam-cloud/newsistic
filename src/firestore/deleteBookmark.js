import { firestoreDB } from "../firebase/firebase.utils";

const handleDeleteBookmark = async (
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
  uid
) => {
  const data = await firestoreDB.collection("users").doc(uid).get();
  let bookmarks = await data.data().bookmarks;
  const filteredBookmarks = bookmarks.filter((value) => {
    return value.description !== description;
  });
  firestoreDB
    .collection("users")
    .doc(uid)
    .set({ bookmarks: filteredBookmarks });
  alert("removed successfully ,refresh the page");
};
export default handleDeleteBookmark;
