// // "use client";

// // import { useEffect, useState } from "react";
// // import { db, collection, addDoc, onSnapshot } from "@/lib/firebase";

// // export default function ChatApp() {
// //   const [messages, setMessages] = useState([]);
// //   const [text, setText] = useState("");

// //   // 🔹 Fetch messages in real-time
// //   useEffect(() => {
// //     const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
// //       setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// //     });

// //     return () => unsubscribe(); // Cleanup listener on unmount
// //   }, []);

// //   // 🔹 Send message to Firebase
// //   const sendMessage = async (e) => {
// //     e.preventDefault();
// //     if (!text.trim()) return;

// //     await addDoc(collection(db, "messages"), {
// //       text,
// //       timestamp: Date.now(),
// //     });

// //     setText(""); // Clear input after sending
// //   };

// //   return (
// //     <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
// //       <h1 className="text-2xl font-bold mb-4 text-black">Real-time Chat</h1>

// //       {/* 🔹 Chat Messages */}
// //       <div className="w-full max-w-md bg-white p-4 text-black  rounded-lg shadow-md h-80 overflow-y-auto">
// //         {messages.map((msg) => (
// //           <p key={msg.id} className="p-2 border-b">{msg.text}</p>
// //         ))}
// //       </div>

// //       {/* 🔹 Message Input */}
// //       <form onSubmit={sendMessage} className="flex w-full max-w-md mt-4">
// //         <input
// //           type="text"
// //           value={text}
// //           onChange={(e) => setText(e.target.value)}
// //           placeholder="Type a message..."
// //           className="flex-1 p-2 border rounded-l text-black"
// //         />
// //         <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
// //           Send
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import { db, collection, addDoc, onSnapshot } from "@/lib/firebase";

// export default function ChatApp() {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const [username, setUsername] = useState("");

//   // 🔹 Fetch messages in real-time
//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
//       setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//     });

//     return () => unsubscribe(); // Cleanup listener on unmount
//   }, []);

//   // 🔹 Send message to Firebase
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!text.trim() || !username.trim()) return;

//     await addDoc(collection(db, "messages"), {
//       text,
//       username,
//       timestamp: Date.now(),
//     });

//     setText(""); // Clear input after sending
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4 text-black">Prial Chat - room Real-time Chat </h1>

//       {/* 🔹 Username Input */}
//       {!username && (
//         <div className="mb-4 p-4 text-black bg-white shadow-md rounded">
//           <input
//             type="text"
//             placeholder="Enter your name..."
//             onChange={(e) => setUsername(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <button 
//             onClick={() => setUsername(username.trim())}
//             className="ml-2 bg-green-500 text-white p-2 rounded"
//           >
//             Set Name
//           </button>
//         </div>
//       )}

//       {/* 🔹 Chat Messages */}
//       <div className="w-full max-w-md bg-white p-4 text-black  rounded-lg shadow-md h-80 overflow-y-auto">
//         {messages.map((msg) => (
//           <p key={msg.id} className="p-2 border-b">
//             <strong className="text-blue-500">{msg.username}:</strong> {msg.text}
//           </p>
//         ))}
//       </div>

//       {/* 🔹 Message Input */}
//       {username && (
//         <form onSubmit={sendMessage} className="flex w-full max-w-md mt-4">
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 p-2 border rounded-l text-black"
//           />
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
//             Send
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { db, collection, addDoc, onSnapshot } from "@/lib/firebase";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");

  // 🔹 Fetch messages in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // 🔹 Send message to Firebase
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() || !username.trim()) return;

    await addDoc(collection(db, "messages"), {
      text,
      username,
      timestamp: Date.now(),
    });

    setText(""); // Clear input after sending
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4  text-black">🔥 Chat with Bubbles</h1>

      {/* 🔹 Username Input */}
      {!username && (
        <div className="mb-4 p-4 bg-white shadow-md rounded">
          <input
            type="text"
            placeholder="Enter your name..."
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded text-black"
          />
          <button 
            onClick={() => setUsername(username.trim())}
            className="ml-2 bg-green-500 text-white p-2 rounded"
          >
            Set Name
          </button>
        </div>
      )}

      {/* 🔹 Chat Messages */}
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md h-80 overflow-y-auto flex flex-col space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.username === username ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.username === username
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <p className="text-sm font-bold">
                {msg.username !== username && msg.username}
              </p>
              <p className="mt-1">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Message Input */}
      {username && (
        <form onSubmit={sendMessage} className="flex w-full max-w-md mt-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-l text-black"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
            Send
          </button>
        </form>
      )}
    </div>
  );
}
