"use client";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const placeholders = [
  "welcome to vidyaverse!",
  "join the waitlist now!",
  "hey, what's stopping you?",
  "get ready to learn and earn!",
  "we are waiting for your email!!!",
];

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};

function EmailList() {
  return (
    <div>
      <div className="relative text-center mb-8 mt-4 z-10">
        <h2 className="text-xl font-semibold text-white">
          Only 10,000 Spots Remaining!
        </h2>
      </div>
      <div>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

export default EmailList;
