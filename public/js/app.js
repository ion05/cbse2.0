// // const songDate = new Date();
// // const day = songDate.getDay();
// // switch(day){
// //     case 0:
// //         currentDay = 'Sunday';
// //         break;
// //     case 1:
// //         currentDay = 'Monday';
// //         break;
// //     case 2:
// //         currentDay = 'Tuesday';
// //         break;
// //     case 3:
// //         currentDay = 'Wednesday';
// //         break;
// //     case 4:
// //         currentDay = 'Thursday';
// //         break;
// //     case 5:
// //         currentDay = 'Friday';
// //         break;
// //     case 6:
// //         currentDay = 'Saturday';
// //         break;
// // }
// // const hours =   songDate.getHours();
// // const minutes = songDate.getMinutes();
// // const h = (songDate.getHours()<10?'0':'') + songDate.getHours();
// // const m = (songDate.getMinutes()<10?'0':'') + songDate.getMinutes();
// // const month = songDate.getMonth();
// // switch(month){
// //     case 0:
// //         currentMonth = 'January';
// //         break;
// //     case 1:
// //         currentMonth = 'Feburary';
// //         break;
// //     case 2:
// //         currentMonth = 'March';
// //         break;
// //     case 3:
// //         currentMonth = 'April';
// //         break;
// //     case 4:
// //         currentMonth = 'May';
// //         break;
// //     case 5:
// //         currentMonth = 'June';
// //         break;
// //     case 6:
// //         currentMonth = 'July';
// //         break;
// //     case 7:
// //         currentMonth = 'August';
// //         break;
// //     case 8:
// //         currentMonth = 'September';
// //         break;
// //     case 9:
// //         currentMonth = 'October';
// //         break;
// //     case 10:
// //         currentMonth = 'November';
// //         break;
// //     case 11:
// //         currentMonth = 'December';
// //         break;
// // }
// // switch(songDate.getDate()){
// //     case 1:
// //     case 3:
// //     case 4:
// //     case 5:
// //     case 6:
// //     case 7:
// //     case 8:
// //     case 9:
// //     case 10:
// //     case 11:
// //     case 12:
// //     case 13:
// //     case 14:
// //     case 15:
// //     case 16:
// //     case 17:
// //     case 18:
// //     case 19:
// //     case 20:
// //     case 21:
// //     case 23:
// //     case 24:
// //     case 25:
// //     case 26:
// //     case 27:
// //     case 28:
// //     case 29:
// //     case 30:
// //     case 31:
// //         currentDate = ` ${songDate.getDate()}th`
// //         break;
// //     case 2:
// //     case 22:
// //         currentDate = ` ${songDate.getDate()}nd`
// //         break;
// // }
// // document.querySelector('.time-component').innerHTML = `
// //     <h3>${h}:${m}</h3>
// //     <h4>${currentDay} , ${currentMonth}</h4>
// // `;
// const modalDiv = document.createElement('div');
// const modalContent = document.createElement('div');
// modalContent.classList.add('join-modal-content');
// modalDiv.classList.add('join-modal');
// modalDiv.appendChild(modalContent);
// modalContent.innerHTML = `
//     <button class="cancel-btn c">Cancel</button>
//     <button class="join-class">Join</button>
//     <hr class="hr-1" >
//     <h4>Maths Class</h4>
//     <label class="modal-name">Name</label>
//     <p class="name-desc">John Doe</p>
//     <label class="modal-mic">Microphone</label>
//     <p class="mic-desc">USB Microphone 505</p>
//     <label class="modal-cam">Camera</label>
//     <p class="cam-desc">USP PNP CAM</p>
//     <div class="video-div">
//         <div class="video-sq">
//         <span class="material-icons-outlined">
//             photo_camera
//         </span>
//         </div>
//     </div>
// `;
// document.querySelector('.join').addEventListener('click',()=>{
//     modalDiv.style.display = 'block';
// })
// document.querySelector('body').appendChild(modalDiv);
// const joinBtn = document.querySelector('.join');
// document.querySelector('.c').addEventListener('click',()=>{
//     modalDiv.style.display = 'none';
// })
// document.querySelector('.faq-component').addEventListener('click',()=>{
//     // window.location.href='./login.html';
//     document.querySelector('.main-div').style.display='none';
//     document.querySelector('.other-div').style.display='none';
//     document.querySelector('.attendance-div').style.display='none';
//     document.querySelector('.course-div').style.display='none';
//     document.querySelector('.line-2').style.display='none';
//     document.querySelector('.qa-component').style.display='block';
// })
// document.querySelector('.note-component').addEventListener('click',()=>{
//     // window.location.href='./login.html';
//     document.querySelector('.main-div').style.display='none';
//     document.querySelector('.other-div').style.display='none';
//     document.querySelector('.attendance-div').style.display='none';
//     document.querySelector('.course-div').style.display='none';
//     document.querySelector('.line-2').style.display='none';
// })
// const inputTemplate = document.createElement('div');
// inputTemplate.classList.add('input-template');
// inputTemplate.innerHTML = `
//  <form>
//         <input>
//  </form>
// `
// const radInput = document.createElement('div');
// radInput.innerHTML = `
// <input type="radio" class="rad" style="margin-top:42.5vw;">
// <input class="rad-in" style="margin-top:42.5vw;margin-left:25vw;">
// <input type="radio" class="rad" style="margin-top:50.5vw;">
// <input class="rad-in" style="margin-top:50vw;margin-left:25vw;">
// `;
// const addMore = document.createElement('div');
// var count=1;
// addMore.innerHTML= `            <div class="quiz-input-div">
// <label >Question ${count}</label>
// <input type="text">
// <button class="add-1">
//     <span class="material-icons-outlined">
//         add_circle_outline
//     </span>
//     Add  a mcq template
// </button>
// <button class="add-2">
//     <span class="material-icons-outlined">
//         add_circle_outline
//     </span>
//     Add input template
// </button>
// <button class="create-more">
//     <span class="material-icons-outlined">
//         add_circle_outline
//     </span>
// </button>
// </div>`;

// document.querySelector('.create-more').onclick = function(){
//     count++;
//     document.querySelector('body').appendChild(addMore);   
// }
// document.querySelector('body').appendChild(inputTemplate);
// const [add1,add2] = [document.querySelector('.add-1'),document.querySelector('.add-2')];
// add2.addEventListener('click',()=>{
//     inputTemplate.style.display='block';
//     document.querySelector('.create-more').style.marginTop = '20vw';
// })