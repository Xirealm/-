{
    let symbol = document.getElementById('symbol');
    let login = document.getElementById('login');
    login.style.display = "none"
    symbol.onmouseover = function (event) {
        event.stopPropagation()
        login.style.display = "block";
    }
    symbol.onmouseout = function (event) {
        event.stopPropagation()
        login.style.display = "none"
    }
    //Chart1
    var myChart = echarts.init(document.getElementById('form1'));
    option = {
        xAxis: {
            type: 'category',
            data:
                ['2022-10', '2022-11', '2022-12', '2023-1', '2023-2', '2023-3'],
            axisLabel: {
                textStyle: {
                    show: true,
                    fontSize: '10',
                    fontWeight: '300',
                    color: 'black',
                },
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: "black",
                    type: "dashed"//线条样式，dashed是虚线
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: '12',
                    fontWeight: '300',
                    color: 'black',
                },
            },
        },
        series: [
          {
            data: [18, 28,40,10,23,33],
            type: 'line'
          }
        ],
      };
    myChart.setOption(option);
    //Chart2
    {
        var myChart = echarts.init(document.getElementById('form2'));

        option = {
            title: {
            text: '用户借阅书籍类型汇总',
            subtext: '（统计截止日期:2023-02-04）',
            left: 'center'
            },
            tooltip: {
            trigger: 'item'
            },
            legend: {
            orient: 'vertical',
            left: 'left'
            },
            series: [
            {
                name: '借书情况',
                type: 'pie',
                radius: '70%',
                data: [
                    {
                        value: 73,
                        name: '专业书',
                        itemStyle: {
                            color: 'pink',
                        }
                    },
                    {
                        value: 45,
                        name: '工具书',
                        itemStyle: {
                            color: '#749BFF',
                        }
                    },
                    {
                        value: 69,
                        name: '小说',
                        itemStyle: {
                            color: '#43B67F',
                        }
                    },
                    {
                        value: 23,
                        name: '古文书',
                        itemStyle: {
                            color: '#E98F36',
                        }
                    },
                    {
                        value: 35,
                        name: '个人传记',
                        itemStyle: {
                            color: '#CA3818',
                        }
                    },
                    {
                        value: 18,
                        name: '随笔',
                        itemStyle: {
                            color: 'skyblue',
                        }
                    },
                ],
                emphasis: {
                itemStyle: {
                    shadowBlur: 26,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
                }
            }
            ]
        };
        myChart.setOption(option);
    }

    // const btn02 = document.getElementById('btn02');
    // const photo=document.querySelector('.photo');
    // axios.defaults.baseURL='http://127.0.0.0:8080'
    //     btn02.addEventListener('click',()=>{
    //     axios({
    //         method:'POST',
    //         url:'/checkServlet',
    //          date:{
    //             "IMG":'photo'//图片
    //             /* "NUMBER"://书籍编号
    //             "BOOKNAME"://书名
    //             "CLASSIFY"://分类
    //             "AUTHOR"://作者
    //             "PUBLISHER"://出版社
    //             "DATE"://出版日期
    //             "CONTENT"://简介
    //             "STATE"://状态
    //             "COUNT"://库存 */
    //         }

    //     }).then((result) => {
    //         console.log(result);
    //     }).catch((err) => {
    //         console.log("出错了",err);
    //     });
    // })
}
{
    const header = document.querySelector("header")
    const main = document.querySelector("main")
    const aside = document.querySelector("aside")
    const logoName = aside.querySelector(".logo-name")
    const asideLogoBox = aside.querySelector(".aside-logo-box")
    const asideLogo = aside.querySelector(".aside-logo")
    const asideMenu = aside.querySelector("#aside-menu")
    const asidebtn = asideMenu.querySelectorAll("a")
    const shows = main.querySelectorAll('.show');
    aside.addEventListener("mouseenter", function (event) {
        event.stopPropagation()
        aside.className = ""
        main.style.paddingLeft = "220px"
        asideLogoBox.className = "aside-logo-box"
        asideLogo.className = "aside-logo"
        header.style.marginLeft = "220px"
        logoName.style.color = "white"
    })

    aside.addEventListener("mouseleave", function (event) {
        event.stopPropagation()
        aside.className = "aside-close"
        main.style.paddingLeft = "60px"
        asideLogoBox.className = "aside-logo-box-little"
        asideLogo.className = "aside-logo-little"
        header.style.marginLeft = "60px"
        logoName.style.color = "#2c84b4"
    })
    for (let i = 0; i < asidebtn.length; i++) {
        asidebtn[i].onclick = function () {
            let preBtn = aside.querySelector(".selected")
            preBtn.className = ""
            asidebtn[i].className = "selected"
            shows[i].style.display = "block";
            for (let j = 0; j < asidebtn.length; j++) {
                if (i == j) {
                    continue
                }
                else {
                    shows[j].style.display = "none";
                }
            }
        }
    }
}
//菜单栏的展开
{
    let classificationText = document.querySelector(".classification-text")
    let nev = document.querySelector(".nev")
    classificationText.onmouseover = (event) => {
        event.stopPropagation()
        nev.style.display = "block"
    }
    classificationText.onmouseout = (event) => {
        event.stopPropagation()
        nev.style.display = "none"
    }
    nev.onmouseover = (event) => {
        event.stopPropagation()
        nev.style.display = "block"
    }
    nev.onmouseout = (event) => {
        event.stopPropagation()
        nev.style.display = "none"
    }
}
//图书的动态生成
// {
//     let book = []
//     const booklist = document.querySelector(".book-list")
//     function booklistCreate() {
//         for (let i = 0; i < 6; i++) {
//             book[i] = document.createElement("div")
//             book[i].className = "book"
//             booklist.appendChild(book[i])
//             book[i].insertAdjacentHTML("beforeend",
//                 `
//                     <div class="book-info-box">
//                         <img class="cover" src="https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png"></img>
//                         <div class="book-info">
//                             <h2>
//                                 <span class="number">0001</span>
//                                 <span class="bookName">西游记</span>
//                             </h2>
//                             <span class="author">吴承恩</span>
//                             <span class="type">小说</span>
//                             <span>人民出版社</span>
//                             <div class="introduction">
//                                     孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。
//                             </div>
//                         </div>
//                     </div>
//                     <button class="borrow">申请借阅</button>
//                     <span class="stack-number-box">
//                         当前库存<span class="stack-number">9</span>本
//                     </span>
//             `
//             )
//         }
//     }
//     booklistCreate()
// }
{
    const page2 = document.querySelector("#show2")
    let booksData = [
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
        {
            cover: 'https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png',
            number: '0001',
            bookName: "西游记",
            author: "吴承恩",
            type: "小说",
            publish: "人民出版社",
            introduction: "孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。",
            stackNumber: 9
        },
    ];
    let bookList = page2.querySelector('.book-list');//新闻容器
    let bookPagination = page2.querySelector('.pagination');//分页容器
    let pageCount = Math.ceil(booksData.length / 6); //根据数据的长度计算总共几页
    let booksDataRender = [];//每页要显示的数据
    let p = 1;//根据p值显示每页的数据
    //渲染页面函数
    let render = () => {
        bookList.innerHTML = ' ';
        booksDataRender = booksData.slice((p - 1) * 6, 6 * p);
        //每页要显示的数据,一页显示6条
        booksDataRender.forEach((item, index) => {
            bookList.innerHTML +=
             `   
                <div class="book">
                     <div class="book-info-box">
                        <img class="cover" src="https://xirealm.oss-cn-beijing.aliyuncs.com/xi/西游记.png"></img>
                        <div class="book-info">
                            <h2>
                                <span class="number">${item.number}</span>
                                <span class="bookName">${item.bookName}</span>
                            </h2>
                            <span class="author">吴承恩</span>
                            <span class="type">小说</span>
                            <span>人民出版社</span>
                            <div class="introduction">
                                孙悟空出世跟随菩提祖师学艺及大闹天宫后，遇见了唐僧、猪八戒、沙僧和白龙马，西行取经，一路上历经艰险，降妖除魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。
                            </div>
                        </div>
                    </div>
                    <button class="borrow">申请借阅</button>
                    <span class="stack-number-box">
                        当前库存<span class="stack-number">9</span>本
                    </span>
                </div>
            `;
        });
    };
    //初始化页面
    render();
    //渲染分页
    for (let i = 1; i <= pageCount; i++) {
        bookPagination.innerHTML += `<button>${i}</button>`;
    }
    bookPagination.innerHTML += `
    <span class="skip">前往 <input type="text"></span> 页
    `;//获取页数
    let asAll = bookPagination.querySelectorAll('button');
    //页面刚进来时第一页高亮
    asAll[p - 1].classList.add('active');
    //遍历总页数
    asAll.forEach((item, index) => {
        //点击页数
        item.onclick = function () {
            for (let j = 0; j < asAll.length; j++) {
                asAll[j].classList.remove('active');
            }
            this.classList.add('active');
            p = index + 1;
            //点击页数，改变p的值，以改变这个页面要显示的数据，达到分页的效果
            render();//重新渲染页面
        }
    });
    //获取跳转input框
    let skipInput = page2.querySelector('.skip input');
    //触发enter键实现跳转到输入页
    skipInput.onkeydown = function (ev) {
        if (ev.keyCode == 13 && skipInput.value != '') {
            for (let j = 0; j < asAll.length; j++) {
                asAll[j].classList.remove('active');
            }
            p = ev.target.value;
            //给当前的页数按钮添加上active        
            asAll[p - 1].classList.add('active');
            if (p > asAll.length) {
                return;
            }
            //重新渲染页面
            render();
        }
    };
    //点击上一页下一页，改变高亮
    let changePageClass = () => {
        for (let j = 0; j < asAll.length; j++) {
            asAll[j].classList.remove('active');
        }
        asAll[p - 1].classList.add('active');
    };
    //上一页
    let prev = page2.querySelector('.prev');
    prev.onclick = function (e) {
        if (p <= 1) {
            console.log(p);
            return;
        } else {
            p = p - 1;
            changePageClass();
            render();
        }
    };
    //下一页
    let next = page2.querySelector('.next');
    next.onclick = function () {
        if (p >= asAll.length) {
            return;
        }
        p = p + 1;
        changePageClass();
        render();
    }
}
{
    const page3 = document.querySelector("#show3")
    let borrowsData = [
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
        {
            order:"1",
            bookName: "活着",
            bookNumber: "0001",
            bookType: "小说",
            bookAuthor: "余华",
            borrowTime: "2023-02-03 9:30",
            returnTime: "————",
            state: "未归还",
            handle: "归还",
        },
    ];
    let myBorrow = page3.querySelector('.my-borrow');
    let borrowList = myBorrow.querySelector("tbody")
    let borrowPagination = page3.querySelector('.pagination');//分页容器
    let pageCount = Math.ceil(borrowsData.length / 15); //根据数据的长度计算总共几页
    let borrowsDataRender = [];//每页要显示的数据
    let p = 1;//根据p值显示每页的数据
    //渲染页面函数
    let render = () => {
        borrowList.innerHTML = ' ';
        borrowsDataRender = borrowsData.slice((p - 1) * 15, 15 * p);
        //每页要显示的数据,一页显示15条
        borrowsDataRender.forEach((item, index) => {
            borrowList.innerHTML +=
            `
                <tr>
                    <td>${item.order}</td>
                    <td>《${item.bookName}》</td>
                    <td>${item.bookNumber}</td>
                    <td>${item.bookType}</td>
                    <td>${item.bookAuthor}</td>
                    <td class="borrow-time">${item.borrowTime}</td>
                    <td class="return-time">${item.returnTime}</td>
                    <td class="state">${item.state}</td>
                    <td><button class="handle">${item.handle}</button></td>
                </tr>
            `;
        });
    };
    //初始化页面
    render();
    //渲染分页
    for (let i = 1; i <= pageCount; i++) {
        borrowPagination.innerHTML += `<button>${i}</button>`;
    }
    borrowPagination.innerHTML += `<span class="skip">前往 <input type="text"></span> 页`;//获取页数
    let asAll = borrowPagination.querySelectorAll('button');
    //页面刚进来时第一页高亮
    asAll[p - 1].classList.add('active');
    //遍历总页数
    asAll.forEach((item, index) => {
        //点击页数
        item.onclick = function () {
            for (let j = 0; j < asAll.length; j++) {
                asAll[j].classList.remove('active');
            }
            this.classList.add('active');
            p = index + 1;
            //点击页数，改变p的值，以改变这个页面要显示的数据，达到分页的效果
            render(); //重新渲染页面
        }
    });
    //获取跳转input框
    let skipInput = page3.querySelector('.skip input');
    //触发enter键实现跳转到输入页
    skipInput.onkeydown = function (ev) {
        if (ev.keyCode == 13 && skipInput.value != '') {
            //移除每个页数按钮的active
            for (let j = 0; j < asAll.length; j++) {
                asAll[j].classList.remove('active');
            }
            p = ev.target.value;
            //给当前的页数按钮添加上active
            asAll[p - 1].classList.add('active');
            if (p > asAll.length) {
                return;
            }
            //重新渲染页面
            render();
        }
    };
    //点击上一页下一页，改变高亮
    let changePageClass = () => {
        for (let j = 0; j < asAll.length; j++) {
            asAll[j].classList.remove('active');
        }
        asAll[p - 1].classList.add('active');
    };
    //上一页
    let prev = page3.querySelector('.prev');
    prev.onclick = function (e) {
        if (p <= 1) {
            return;
        } else {
            p = p - 1;
            changePageClass();
            render();
        }
    };
    //下一页
    let next = page3.querySelector('.next');
    next.onclick = function () {
        if (p >= asAll.length) {
            return;
        }
        p = p + 1;
        changePageClass();
        render();
    }
}