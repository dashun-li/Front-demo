export default (obj)=>{
  var ajax = new XMLHttpRequest();
  ajax.open(obj.type,obj.url+'?'+obj.data);
  ajax.onreadystatechange=function(){
    if(ajax.readyState == 4 && ajax.status == 200){
      var data = ajax.responseText;
      if(obj.dataType == 'json'){
        data = JSON.parse(data);
      }
      obj.ok(data);
    }
  }
  ajax.send();
}
