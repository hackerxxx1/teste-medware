import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc,query, where } from "firebase/firestore"
import { getDownloadURL, getStorage, listAll, ref, uploadBytesResumable } from "firebase/storage";
import app from "./apiMedware";

const db = getFirestore(app); 
const storage = getStorage(app); 
class ColabService {
    
    async getAll(){//index
       const dados = await getDocs(collection(db, "horas"));
       return dados
    }
    async search(prop){//search retorna um array de docs 
        const q = await this.getAll()
        const pega =q.docs
        console.log(pega.filter((item)=> console.log(item._document.data.value.mapValue.fields.nome.stringValue.toLowerCase())));
        var result = pega.filter((item)=> (item._document.data.value.mapValue.fields.nome.stringValue).toLowerCase().includes(prop.toLowerCase()))
       
            
            // for (let index = 0; index < pega.length; index++) {
            //     const compara = await pega[index]._document.data.value.mapValue.fields.nome
            //     console.log(compara);
            //     if (((compara.stringValue).toLowercase()).localeCompare(prop.toLowercase()) >=0) {
            //         result.push(pega[index])
            //     }
            // }
      
         
       
            console.log(result);
        return result;
    }
    async get(id){//show
        
        const docRef = doc(db, "horas", String(id));
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
            const docRef = await addDoc(collection(db, "horas"), dados);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    async update(id, dados){//update
        await setDoc(doc(db, "horas", String(id)), dados);
    }
    async updateimage(id, dados,images,path){//update
        
        images.map((item)=> {
            console.log(item);
            uploadBytesResumable(ref(storage,path+"/"+item.name),item)
        })
        await setDoc(doc(db, "horas", String(id)), dados);
    }

    async delete(id){//destroy
        await deleteDoc(doc(db, "horas", String(id)));
        
    }

}

export default new ColabService()