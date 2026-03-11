import IdCard from "./IdCard";
import people from "../data/people.js";

const CardList = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {people.map((person) => (
        <IdCard
          key={person.id}
          id={person.id}
          name={person.name}
          role={person.role}
          department={person.department}
          avatar={person.avatar}
        />
      ))}
    </div>
  );
};

export default CardList;