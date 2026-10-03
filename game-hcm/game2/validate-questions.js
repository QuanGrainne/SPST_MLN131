// Chỉ những câu có đủ trường kiểm chứng mới được phép đi vào vòng chơi.
const requiredQuestionFields=["c","p","q","a","k","e","d"];
const rejectedQuestions=[];
window.QUESTION_BANK=window.QUESTION_BANK.filter((item,index)=>{
  const missing=requiredQuestionFields.filter(key=>item[key]===undefined||item[key]===null||item[key]==="");
  const invalidAnswers=!Array.isArray(item.a)||item.a.length!==4||!Number.isInteger(item.k)||item.k<0||item.k>3;
  const invalidSource=!Number.isInteger(item.c)||item.c<1||item.c>6||!Number.isInteger(item.p)||item.p<1;
  if(missing.length||invalidAnswers||invalidSource){rejectedQuestions.push({index,missing,invalidAnswers,invalidSource});return false}
  item.source=`Giáo trình Tư tưởng Hồ Chí Minh - Chương ${item.c}, trang ${item.p}`;
  return true;
});
if(rejectedQuestions.length)console.warn("Các câu bị loại vì thiếu căn cứ:",rejectedQuestions);
