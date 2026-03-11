const IdCard = ({ id, name, role, department, avatar }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-72 border hover:scale-105 transition">
      <div className="flex flex-col items-center">
        
        <img
          src={avatar}
          alt="profile"
          className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
        />

        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{role}</p>
        <p className="text-sm text-gray-500">{department}</p>

        <p className="text-xs mt-3 text-gray-400">
          ID: {id}
        </p>
      </div>
    </div>
  );
};

export default IdCard;