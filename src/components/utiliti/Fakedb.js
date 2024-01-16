const addTodb = (id) => {
  const quantity = localStorage.getItem(id);
if(quantity){
    const newQuantity =parseInt(quantity) +1;
    localStorage.setItem(id,newQuantity);
    console.log("added increasing");
}else{
    console.log("new item added");
    localStorage.setItem(id,1);
}
};

export { addTodb };
