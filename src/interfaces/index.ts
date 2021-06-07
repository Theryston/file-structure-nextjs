export type Conversation = {
  customer_avatar_url: string;
  customer_id: string;
  customer_name: string;
  last_created: number;
  last_message: string;
  unread_count: number;
};
// const [conversations] = useCollectionData<Conversation>(
//   firebase
//     .firestore()
//     .collection("users")
//     .doc(firebase.auth().currentUser.uid)
//     .collection("conversations"),
//   {
//     snapshotListenOptions: {
//       includeMetadataChanges: true,
//     },
//   }
// );
