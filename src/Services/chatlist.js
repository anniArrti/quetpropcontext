import { questions } from './data';
const appUrl = 'https://quotepros.a2hosted.com';

let checkRepeat;
const getData = ({ value }) => {
  return new Promise((resolve, reject) => {
    const data = questions.find(x => x.question === value);
    resolve(data);
  /*  fetch(appUrl + "/chatget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 'ques': value })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      resolve(data.data);
    })
    .catch(error => {
      reject(error.message);
    });*/
  });
} 

const saveData = (visitorId, yourInput, responseContent) => {
  const data = {
    'visitorId': visitorId,
    'ques': yourInput,
    'ans': responseContent
  };

  fetch(appUrl + "/chatsave", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let dataQuest = questions?.find(x => x.user === data.id);
    if (dataQuest === undefined) {
     // addTOChatList(yourInput, data.id);
    } else {
      checkRepeat.push(parseInt(data.id));  
    }
    if (data.counts >= 3) {
     // chatboxFooter.innerHTML = reachedLimit;
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

export { getData, saveData };
