"use client";

import { sendFile } from "./action.";

export default function Home() {
  return (
    <main>
      <button
        onClick={async () => {
          const response = await fetch("https://picsum.photos/5000/5000");
          const file = new File([await response.blob()], "image.jpg", {
            type: "image/jpeg",
          });

          console.log("before server action");
          const result = await sendFile({
            file,
          });
          console.log("after server action");

          // Error: Body exceeded 1 MB limit not handled by serverError
          // forced to wrap the server action call in a try catch

          if (result?.serverError) {
            console.error("Error", result.serverError);
          } else if (result?.data) {
            console.log("Success", result.data);
          }
        }}
      >
        Execute action
      </button>
    </main>
  );
}
