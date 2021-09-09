import { firestoreDB } from "../firebase/firebase.utils";

const handleAddToBookmark = async (
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
  uid
) => {
  // console.log(uid);
  if (!uid) {
    alert("not logged in");
    return;
  }
  const data = await firestoreDB.collection("users").doc(uid).get();
  if (data) {
    let bookmarks = await data.data().bookmarks;
    if (!bookmarks) {
      bookmarks = [
        { description, publishedAt, source, title, url, urlToImage },
      ];
      firestoreDB.collection("users").doc(uid).set({ bookmarks });
    } else {
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
    }
  }
};

export default handleAddToBookmark;
