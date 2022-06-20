# api-server

## UML 

---
[UML](./asset/class04.png)

table name to be the same word that you want for example if its singular and you want it to stay as it is there is a property called `freezeTableName:true`   its by default false you need to set it true

```

Example : const Person=(sequelize,DataTypes)=>sequelize.define('person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
freezeTableName:true
  });

```
\>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<br></br>
<br></br>
<br></br>

be sure when test specific updapte method you should put `.send({nameOfrout:"anything"})`

```
test("Read a list of records using put",async()=>{
    let req = await request.put("/person/5").send({
        person:"pizza"})
    expect(req.status).toBe(404)
    });
```

<br></br>
<br></br>
<br></br>

- the cone donw it's worke when I am tried in postman
   but when i am  tryied do test give me error 



 ```
    async function updateFood(req,res){
    let ID = req.params.id ;
    let update = req.body ;
    let reading = await Food.read(ID)
    if (reading) {
        let updateing = await reading.update(update) 
        res.status(201).json(updateing)
    }
}

```

<br></br>


- this code it's work well with the test
```
async function updateFood(req, res) {
    let ID = parseInt(req.params.id);
    const newUpdate = req.body
    const found = await  Food.read(ID)
 if (found) {
    let updates = await Food.update(newUpdate)
    res.status(201).json(updates)
 }else{
    res.status(404).send("can't find the user or id please enter correct id !")
 }
}
```


### *experments* 

we can name any things neted fo sequelize and DataType like seq and data 
and I should change it` (seq.define &&  type: data.STERING )`
```
const Person  = (sequelize, DataType)=>
sequelize.define('user',{

    name:{
        type: DataType.STRING,
        allowNull: false,
        },
      
})

module.exports = Person;

```
### URL

[Actions](https://github.com/Mohammad-Alhaj/api-server/actions)

[Pull request](https://github.com/Mohammad-Alhaj/api-server/pulls)

[Heroku](https://mohammad-api-server.herokuapp.com/)
