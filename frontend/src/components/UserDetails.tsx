export default function UserDetails({ user }: { user: any }) {
  return (
    <div className="flex flex-col items-center">
      <img
        alt="user profile image"
        src={user.image}
        className="w-[6rem] rounded-full shadow-lg/30"
        referrerPolicy="no-referrer"
      />
      <div className="text-center">
        <p className="text-xl font-semibold">{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
