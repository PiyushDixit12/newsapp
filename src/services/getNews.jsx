import {collection,getDocs,where} from "firebase/firestore";
import {DB} from "../firebase";
import {AllURl} from "./apiUrls";
import {query} from "firebase/database";
import {toast} from "react-toastify";



export const fetchNews = async (userId) => {
    const data = [];
    if(userId) {
        const q = query(collection(DB,AllURl.newsPosts),where("uid","!=",userId))
        let newsSnapshot = await getDocs(q);
        newsSnapshot.docs.forEach((value => {
            const d = value.data();
            console.log("values is ",d);
            console.log("values ID ",value.id);
            data.push({id: value.id,...d});
        }));
    } else {
        let newsSnapshot = await getDocs(collection(DB,AllURl.newsPosts));
        newsSnapshot.docs.forEach((value => {
            const d = value.data();
            console.log("values is ",d);
            console.log("values ID ",value.id);
            data.push({id: value.id,...d});
        }));
    }
    return data;
};
export const fetchNewsByUserId = async (userId) => {
    // let newsSnapshot = await getDocs(collection(DB,AllURl.newsPosts));
    let data = [];
    const q = query(collection(DB,AllURl.newsPosts),where("uid","==",userId));
    const querySnapshot = await getDocs(q).catch(err => {
        console.log(err);
        toast.error("Something Went Wrong !")
        data = "error";
        // return err;
    });
    if(data !== 'error') {
        querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id," => ",doc.data());
        data.push({id: doc.id,...doc.data()})
        });
    }
    return data;
};