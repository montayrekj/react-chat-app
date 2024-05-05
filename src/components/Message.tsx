import { FetchedMessage } from "./Messages";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import classNames from "classnames";
import { getFormattedDate } from "../lib/date";

const userTypeClasses = {
  current: "bg-blue-300 !rounded-br-none ml-auto",
  other: "bg-white !rounded-bl-none",
};

export default function Message({
  uid,
  name,
  avatar,
  text,
  createdAt,
}: FetchedMessage) {
  const [user] = useAuthState(auth);

  const currrentUser = user?.uid === uid ? "current" : "other";
  const date = createdAt ? getFormattedDate(new Date(createdAt.toDate())) : "";

  const fullname = name.split("(")[0];
  return (
    <div
      className={classNames(
        "flex items-center bg-[#eee] w-fit text-black px-3 py-2 gap-4 rounded-xl",
        userTypeClasses[currrentUser]
      )}
    >
      <img src={avatar} width={35} alt="user avatar" className="rounded-full" />
      <div className="flex flex-col">
        <div>
          <span className="font-bold text-sm">{fullname}</span>
          <span className="text-xs font-bold text-gray-600">{date}</span>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
