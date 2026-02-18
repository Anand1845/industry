import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO & Founder",
      image: "/pro.jpeg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      position: "CTO",
      image: "/pro1.jpeg",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Lead Designer",
      image: "/pro3.jpeg",
    },
    {
      id: 4,
      name: "Emily Johnson",
      position: "Marketing Manager",
      image: "/pro2.jpeg",
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">Our Team</h1>

      <div className="flex justify-center gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="w-60 bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-500 text-sm">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
