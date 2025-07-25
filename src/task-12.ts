// Є функція sendDoneStatus:

// function sendDoneStatus(callback) {
//   callback("done");
// }

// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

//!!!!!!!!!!!!!!!!!!!1

// function sendDoneStatus(callback: (message: string) => void): void {
//   callback("done");
// }

type Callback = (status: string) => void;

function sendDoneStatus(callback: Callback): void {
  callback("done");
}

sendDoneStatus((status: string) => {
  console.log("Status is:", status);
});
