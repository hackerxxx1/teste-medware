import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"
import { getDownloadURL, getStorage, listAll, ref, uploadBytesResumable } from "firebase/storage";
import app from "./apiFirebase";

const db = getFirestore(app); 
const storage = getStorage(app); 
class ComandoService {
    
    async getAll(){//index
       const dados = await getDocs(collection(db, "comando"));
       return dados
    }

    async get(id){//show
        
        const docRef = doc(db, "comando", String(id));
        const dat = await getDoc(docRef);

    if (dat.exists()) {
        console.log("Document data:", dat.data());
        return dat.data();
    } else {
     // doc.data() will be undefined in this case
         console.log("No such document!");
    }
        
    }
    async getimgs(path){
        const refer = ref(storage,path)
        const data = await listAll(refer);
        return data;
    }
    async geturlimg(path){
        const refer = ref(storage,path)
        const url = await getDownloadURL(refer)
    return url
    }

    async create(dados){//store
        try {
            const docRef = await addDoc(collection(db, "comando"), dados);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    async update(id, dados){//update
        await setDoc(doc(db, "comando", String(id)), dados);
    }
    async updateimage(id, dados,images,path){//update
        
        images.map((item)=>{
            console.log(item);
            uploadBytesResumable(ref(storage,path+"/"+item.name),item)
        })
        await setDoc(doc(db, "comando", String(id)), dados);
    }

    async delete(id){//destroy
        await deleteDoc(doc(db, "comando", String(id)));
    }

}

export default new ComandoService()