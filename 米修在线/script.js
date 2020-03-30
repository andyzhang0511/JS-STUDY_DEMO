// 获取节点
const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const plan = document.getElementById('plan')

// showTime函数
function showTime() {
    // let today = new Date(2020,3,30,06,30,45)
    let today = new Date()
    const hour = today.getHours()
    const min = today.getMinutes()
    const seconds = today.getSeconds()
    // if (hour < 10) {
    //     hour = '0' + hour // 用var就生效
    // }
    // if (min < 10) {
    //     hour = '0' + min // 用var就生效
    // }
    // if (seconds < 10) {
    //     seconds = '0' + seconds // 用var就生效
    // }
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)}`
    setTimeout(showTime, 1000)
}


// addZero函数
function addZero(n) {
    return n < 10 ? '0' + n : n
}

// 设置背景及问候语函数
function setBackgroundGreet() {
    let today = new Date()
    // let today = new Date(2020,3,30,06,30,45)
    hour = today.getHours()
    if (hour < 12) {
        document.body.style.background = 'url(img/morning.jpg) no-repeat center center/cover'
        greeting.textContent = '早上好, '
    } else if (hour == 12) {
        document.body.style.background = 'url(img/noon.jpg) no-repeat center center/cover'
        greeting.textContent = '中午好, '
    } else if (hour > 12 && hour <= 18) {
        document.body.style.background = 'url(img/noon.jpg) no-repeat center center/cover'
        greeting.textContent = '下午好, '
    } else {
        document.body.style.background = 'url(img/evening.jpg) no-repeat center center/cover'
        greeting.textContent = '晚上好, '
    }
}

// 获得本地姓名
function getName() {
    if (localStorage.getItem('name') === 'null' || 
        localStorage.getItem('name') === '' ||
        !localStorage.getItem('name')) {
        name.textContent = '...'
    }else {
        name.textContent = localStorage.getItem('name')
    }
}

// 获得本地计划
function getPlan() {
    if (localStorage.getItem('plan') === 'null' || 
        localStorage.getItem('plan') === '' ||
        !localStorage.getItem('plan')) {
        plan.textContent = 'plan?'
    }else {
        plan.textContent = localStorage.getItem('plan')
    }
}

// 事件监听
name.addEventListener('keypress',setName)
name.addEventListener('blur',setName)
plan.addEventListener('keypress',setPlan)
plan.addEventListener('blur',setPlan)

// 设置本地计划
function setName() {
    let nameContent = name.textContent
    localStorage.setItem('name',nameContent)
}
function setPlan() {
    let planContent = plan.textContent
    localStorage.setItem('plan',planContent)
}
showTime()
setBackgroundGreet()
getName()
getPlan()
setName()
setPlan()