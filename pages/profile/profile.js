
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// import { getAuth, onAuthStateChanged, signOut, updatePassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// import { getFirestore, collection, addDoc, doc, query, where, getDocs, serverTimestamp, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyCHzDNPDBzfBLSR86V9L0fhqLwGJOOXBtA",
//     authDomain: "again-5f41e.firebaseapp.com",
//     databaseURL: "https://again-5f41e-default-rtdb.firebaseio.com",
//     projectId: "again-5f41e",
//     storageBucket: "again-5f41e.appspot.com",
//     messagingSenderId: "193935378121",
//     appId: "1:193935378121:web:4d5c29c7d06210a26e2f18"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const auth = getAuth();
// var storage = getStorage()
// var currentUser;

// onAuthStateChanged(auth, async (user) => {
//     if (!user) {
//         location.replace('../../index.html')
//     }
//     else {
//         async function getYourName() {
//             const querySnapshot = await getDocs(collection(db, "users"));
//             querySnapshot.forEach(async (doc) => {
//                 if (doc.id == user.uid) {
//                     console.log(doc.data());
//                     currentUser = doc.data().fname;
//                 }
//             });
//             document.getElementById("username").innerHTML = currentUser;
//             document.getElementById("uuu").innerHTML = currentUser;
//         }
//         getYourName()
//         document.getElementById("username").innerHTML = currentUser;
//         window.updpic = () => {
//             let file = document.getElementById("img").files[0];
//             const storageRef = ref(storage, `${user.email}`);
//             uploadBytes(storageRef, file).then((snapshot) => {
//                 console.log('Uploaded a blob or file!');
//             }).then(() => {
//                 Swal.fire({
//                     title: `Picture Updated`,
//                     icon: 'success'
//                 }).then(() => {
//                     location.reload();
//                 });
//             });
//         }
//     }
// });
// const logout = document.getElementById('lO')
// logout.addEventListener('click', () => {
//     Swal.fire({
//         title: 'Are you sure you want to LogOut?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#1ca1f1',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Logout!'
//     }).then(async (result) => {
//         if (result.isConfirmed) {
//             signOut(auth).then(() => {
//                 Swal.fire(
//                     'Logout!',
//                     'User has successfully logged out.',
//                     'success'
//                 ).then(() => {
//                     location.replace('./index.html')
//                 })
//             }).catch((error) => {
//             });
//         }
//     })
// })
// onAuthStateChanged(auth, async (user) => {
//     getDownloadURL(ref(storage, user.email))
//         .then((url) => {
//             document.getElementById('azaan').src = url
//             console.log(url);
//         })
// })
// function updName() {
//     document.getElementById("pA").style.display = "none"
//     document.getElementById("uA").style.display = "flex"
// }
// window.updName = updName
// function change() {
//     document.getElementById("pA").style.display = "flex"
//     document.getElementById("uA").style.display = "none"
//     onAuthStateChanged(auth, async (user) => {
//         const washingtonRef = doc(db, "users", user.uid);
//         await updateDoc(washingtonRef, {
//             fname: document.getElementById("upd").value
//         }).then(() => {
//             Swal.fire({
//                 title: `User Name Changed`,
//                 icon: 'success'
//             }).then(() => {
//                 location.reload();
//             });
//         });
//     })
// }
// window.change = change


// onAuthStateChanged(auth, async (user) => {
//     if (!user) {
//         location.replace("../../index.html")
//     }
// })
// document.getElementById("upPass").addEventListener("click", () => {
//     const user = auth.currentUser;
//     const newPassword = document.getElementById("uP").value;
//     const password = document.getElementById("p").value;
//     if (password == newPassword) {
//         updatePassword(user, newPassword).then(() => {
//             Swal.fire({
//                 title: `Password Updated Successfully`,
//                 icon: 'success'
//             }).then(() => {
//                 location.reload();
//             });
//         }).catch((error) => {
//             console.log(error);
//             Swal.fire({
//                 title: `Error Updating Password`,
//                 text: "Try logging in again",
//                 icon: 'error'
//             })
//         });
//     }
// })
