window.onload=function(){



    var list = document.querySelector('.list');
    var mains=list.querySelectorAll('.main');
    var shows=document.querySelectorAll('.show');
    for(var i=0;i<mains.length;i++){
        //给a设置索引
        mains[i].setAttribute('index',i);

        mains[i].onclick=function(){

            for(i=0;i<mains.length;i++)
            {
                mains[i].className='';
            }
            this.className='boxShadow';
            var index=this.getAttribute('index');

            for(var i=0;i<shows.length;i++){
                shows[i].style.display="none";
            }
                shows[index].style.display="block";
        }
    }

    var text1=document.querySelector('.text1');
    var text2=document.querySelector('.text2');
    var text3=document.querySelector('.text3');

    list.onmouseover=function(){
        list.style.width='180px';
        text1.style.marginLeft=0;
        text2.style.marginLeft=0;
        text3.style.marginLeft=0;
    }
    list.onmouseout=function(){
        list.style.width='100px';
        text1.style.marginLeft="-200px"
        text2.style.marginLeft="-200px"
        text3.style.marginLeft="-200px"
    }
    var symbol=document.getElementById('symbol');
    var denglu =document.getElementById('deng-lu');
    denglu.style.display="none"
    symbol.onmouseover=function(){
        denglu.style.display="block";
    }
    symbol.onmouseout=function(){
        denglu.style.display="none"
    }
    var classification=document.getElementById('classification')
    var nev=document.getElementById('nev');
    nev.style.display="none";
    classification.onmouseover=function(){
        nev.style.display="block";
    }
    classification,onmouseout=function(){
        nev.style.display="none";
    }
    /* nev.onclick=function(){
        this.children.style.display="block";
    }
    let nev = document.getElementById('nev');
    function Show(nev){
        // var nev = document.getElementById(nev);
        if(nev.style.display == "block"){
            nev.style.display = "none";
        }
        else{
            nev.style.display = "block";
        }
    } */
    const btn02 = document.getElementById('btn02');
    const photo=document.querySelector('.photo');
    axios.defaults.baseURL='http://127.0.0.0:8080'
        btn02.addEventListener('click',()=>{
        axios({
            method:'POST',
            url:'/checkServlet',
             date:{
                "IMG":'photo'//图片
	            /* "NUMBER"://书籍编号
	            "BOOKNAME"://书名
	            "CLASSIFY"://分类
	            "AUTHOR"://作者
	            "PUBLISHER"://出版社
	            "DATE"://出版日期
	            "CONTENT"://简介
	            "STATE"://状态
	            "COUNT"://库存 */
            }

        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log("出错了",err);
        });
    })
}
