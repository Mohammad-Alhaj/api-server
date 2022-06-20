'use strict';


class Collection{
    constructor(model){
        this.model = model
    }
async read(data_id){
  
    try{
        let read = null;
        if (data_id) {
             read = await this.model.findOne({where:{id:data_id}}); 
            return read
        }else{
          read = await this.model.findAll()
            return read
        }
       
    }
    catch(err){
        console.error("error in reading record in model ", this.model)
    }
    
}    
// async readById (data_id) {
//     try{
//       let  read = await this.model.findOne({where:{id:data_id}}); 
//     return read
//      }
//      catch(arr){
//         //  console.error()
//      }
    
// }

async create(obj){
    try{
        let newObj = await this.model.create(obj)
        return newObj;
    }
    catch(err){
        // console.error("error in creating a new record in model ", this.model)
    }

  

}

async readByid(data_id){
    let read = null;
    try{
     
        read = await this.model.findOne({where:{id:data_id}} )
        return read;
    }
    catch(err){
console.error("error in reading by id record in model ", this.model)
    }

}
 async update(obj) {
        try {
            // let record = await this.model.findOne({ where: { id: data_id } });
            let updated = await record.update(obj);
            return updated;
        } catch (err) {
            console.error("error in updating record in model ", this.model)
        }
    }
async delete(data_id){
  try{
    let deletes =this.model.destroy({where:{id:data_id}});
    return deletes;
  }
  catch(err){
    console.error("error in deleteing record in model ", this.model);
  }
  
}

// async delete(data_id) {
//     if (!data_id) {
//         throw new Error('no id provided for model ', this.model)
//     }
//     try {
//         let deleted = await this.model.destroy({ where: { id: data_id } });
//         return deleted;
//     } catch (e) {
//         console.error('error in deleting record in model ', this.model);
//     }
// }
}

module. exports=Collection;