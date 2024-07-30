import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class StorageService{
    client=new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.storage=new Storage(this.client )
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                  title,
                  content,
                  featuredImage,
                  status,
                  userId,  
                }
            )
        } catch (error) {
            console.log("appwrite storageService :: createPost :: error",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                  title,
                  content,
                  featuredImage,  
                }

            )
        } catch (error) {
            console.log("appwrite storageService :: updatePost :: error",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                
            )
            return true;
        } catch (error) {
            console.log("appwrite storageService :: deletePost :: error",error);
            return false; 
        }
    }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite storageService :: getPost :: error",error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,//yaha pe bhi wo likh skte the jo upar pass kiya h
            )
        } catch (error) {
            console.log("appwrite storageService :: getPosts :: error",error);
            return false
        }
    }


    //file upload/delete service
    async uploadFile(file){
        try {
           return await this.storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
           ) 
        } catch (error) {
            console.log("appwrite storageService :: uploadFile :: error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
           await this.storage.deleteFile(
            conf.appwriteBucketId,
            fileId
           )
           return true
        } catch (error) {
            console.log("appwrite storageService :: deleteFile :: error",error)
            return false
        }
    }

    getFilePreview(fileId){//ye fast hai koi promise return nhi krta isliye direct likh diya
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    
}

const storageService=new StorageService()
export default storageService