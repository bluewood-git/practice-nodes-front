
function wclick(){
        $.ajax({
            // url:"http://127.0.0.1:8080/data.json", //本地文件
            // url:"http://localhost:8090/demo/ajax", //直接后台
            url:"http://localhost:8880/demo/ajax", // 访问 nginx代理
            dataType:'json',
            type:'get',
            // headers:{
            //     "x-tokens":"123"
            // },
            success:function(data){
                // 遍历 json对象数组 --for in
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const element = data[key];
                        console.log(element.name +" "+ element["age"] + " "+ element.address);//属性的两种取值方式
                        //遍历json对象 []中可以放变量 如下
                        for (let ikey in element) {
                            console.log("element == "+ikey+":"+element[ikey]);
                        }
                    }
                }
                //遍历 json对象数组 -- for of
                for (const it of data) {
                    console.log("for of -- "+it.name +" "+ it["age"] + " "+ it.address);
                }
                //遍历 数组 -- foreach 
                data.forEach(element => {
                    console.log("for each:  "+element.name);    
                });
            }
        })
    }