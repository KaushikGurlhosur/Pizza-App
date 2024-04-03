import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="text-m font-semibold hidden bg-gradient-to-r from-rose-400 to-violet-800 bg-clip-text text-transparent md:block">
      {username}
    </div>
  );
}

export default Username;
