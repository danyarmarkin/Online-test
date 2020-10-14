var database = firebase.database();

function uploadQuestion(testId, taskNumber, questionText, answer){
  database.ref(testId + '/tasks/task'+taskNumber).set(questionText);
  database.ref(testId + '/answers/answer' + taskNumber).set(answer);
}
