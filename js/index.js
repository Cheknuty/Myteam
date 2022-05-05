const elBoxItem1 = document.querySelector('.directors-section__item--1')
const elBoxItem2 = document.querySelector('.directors-section__item--2')
const elBoxItem3 = document.querySelector('.directors-section__item--3')
const elBoxItem4 = document.querySelector('.directors-section__item--4')
const elBoxItem5 = document.querySelector('.directors-section__item--5')
const elBoxItem6 = document.querySelector('.directors-section__item--6')
const elBoxHtml = document.querySelector('.html')
const elBoxHeader = document.querySelector('.site-header')
const elBtnItem1 = document.querySelector('.directors-section__item-button--1')
const elBtnItem2 = document.querySelector('.directors-section__item-button--2')
const elBtnItem3 = document.querySelector('.directors-section__item-button--3')
const elBtnItem4 = document.querySelector('.directors-section__item-button--4')
const elBtnItem5 = document.querySelector('.directors-section__item-button--5')
const elBtnItem6 = document.querySelector('.directors-section__item-button--6')
const elBtn = document.querySelector('.site-header__button')

elBtn.addEventListener('click', () => {
    elBoxHeader.classList.toggle("site-header--active")
    elBoxHtml.classList.toggle("html--active")
})

elBtnItem1.addEventListener('click', () => {
    elBoxItem1.classList.toggle("directors-section__item--active1")
})

elBtnItem2.addEventListener('click', () => {
    elBoxItem2.classList.toggle("directors-section__item--active2")
})

elBtnItem3.addEventListener('click', () => {
    elBoxItem3.classList.toggle("directors-section__item--active3")
})

elBtnItem4.addEventListener('click', () => {
    elBoxItem4.classList.toggle("directors-section__item--active4")
})

elBtnItem5.addEventListener('click', () => {
    elBoxItem5.classList.toggle("directors-section__item--active5")
})

elBtnItem6.addEventListener('click', () => {
    elBoxItem6.classList.toggle("directors-section__item--active6")
})