var num = 0; //总数

$('body').on('click', '.m-add', (e) => {
  doAdd(e);
})

$('body').on('click', '.u-del', (e) => {
  doDel(e);
})

function doAdd(e) {
  let t = e.currentTarget;
  if(num<5){
  let item = `<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`
  $(t).prev().append(item);
}
}

function doDel(e) {
  let t = e.currentTarget;
  $(t).parent().remove();
  num --;
  upload();
}

//修正序号
function upload() {
  let contentList = $('.m-date').children();
  let i = num;
  contentList.map((index,item)=>{
    $(item).find('.u-no').text(num - (--i));
  })
}