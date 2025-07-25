// Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.

// import axios from "axios";

// const fetchPosts = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return response.data;
// };

// Завдання:

// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.

import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const logThreePosts = async (): Promise<void> => {
  const posts = await fetchPosts();
  posts.slice(0, 3).forEach((post) => {
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log("---");
  });
};

logThreePosts();
