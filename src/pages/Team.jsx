import { Down_left_dark_arrow, Up_right_neutral_arrow } from "assets/";
import { AccordionCard, GoTo } from "components/";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const Team = () => {
  return (
    <div className="flex flex-col justify-start items-center px-[25px] pt-[95px] w-full h-dvh overflow-y-scroll">
      <Prof />
      <CurrentTeam />
      <Alumni />
      {window.innerWidth <= 640 ? (
        <GoTo title="Projects Gallery" link="/gallery" />
      ) : (
        <div className="w-full flex justify-between">
          <GoTo title="Projects Gallery" link="/gallery" />
          <GoTo title="Lab News" link="/news" />
        </div>
      )}
    </div>
  );
};

export default Team;

const Prof = () => {
  const prof = {
    img: "/img/people/director/prof_team.png",
    name: "Professor KwanMyung Kim",
    role: "Lab Director",
    desc: "Dr. KwanMyung Kim is a full professor in Department of Design and the director of Integration and Innovation Design Lab (IIDL). He was a Dean of Graduate School of Creative Design Engineering during 2016-2020. He serves as an editor for Archives of Design Research and ICONARP International Journal of Architecture and Planning. He is also a CEO of ID SPACE Corp., a start-up company that commercializes academic research outcomes. Before joining UNIST, he worked in industry for 14 years as a product designer/engineer. With his strong practical knowdge and experience he persues to integrate design and engineering, and industry and academic knowledge in the major IIDL’s research domains including Design for Elderly, Rehabilitation and Health Care.",
  };

  return (
    <div className="flex flex-col gap-[30px] my-[30px] w-full sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 ">
      <div
        className="rounded-[30px] w-full h-[360px] sm:size-96 sm:m-auto sm:col-start-2 row-start-1 row-end-3 sm:self-start"
        style={{ backgroundImage: `url(${prof.img})`, backgroundSize: "cover" }}
      ></div>
      <div className="flex flex-col gap-[5px] w-full">
        <h2 className="font-bold text-[20px] text-primary_main">{prof.role}</h2>
        <h1 className="font-bold text-[36px] text-text_black_primary leading-[36px]">
          {prof.name}
        </h1>
        <h3 className="text-[12px] text-text_black_secondary">{prof.desc}</h3>
      </div>
      <div className="flex flex-col gap-[10px] font-semibold text-[18px] sm:flex-row sm:w-1/2">
        <HashLink
          className="flex justify-center items-center gap-[10px] border-2 border-primary_main bg-primary_main border-solid rounded-[15px] w-full h-[50px] text-text_white_primary"
          to="/prof"
        >
          CV <Up_right_neutral_arrow />
        </HashLink>
        <a
          className="place-content-center border-2 border-primary_main grid border-solid rounded-[15px] w-full h-[50px] text-primary_main"
          href="mailto:kmyung@unist.ac.kr"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

const CurrentTeam = () => {
  const members = [
    {
      img: "/img/people/current/haebin_lee.png",
      name: "Haebin Lee",
      role: "PhD",
      bio: "Haebin Lee is a PhD Candidate in the Design Department at UNIST. He has done Master of Science in Industrial Design from Department of Industrial Design at Ulsan National Institute of Science & Technology (UNIST), Ulsan, South Korea. His main research interest is combining Design and Engineerig for new product design. Currently, he is pursuing his PhD research in Transformable Design using Design and Mechanical Engineering.",
    },
    {
      img: "/img/people/current/ulugbek_ismatullaev.png",
      name: "Ulugbek Ismatullaev",
      role: "PhD",
      bio: "Ulugbek Ismatullaev is a PhD Candidate in the Design Department at UNIST. He completed his Master's degree in Industrial Engineering at the Kumoh National Institute of Technology (KIT) in Gumi, Korea. His research interests include Human Factors and Ergonomics, UX Design, and Product Design. His current research focuses on developing design methods and tools to translate user scenarios into engineering specifications.",
    },
    {
      img: "/img/people/current/danyal_sarfraz.png",
      name: "Danial Sarfraz",
      role: "Masters",
      bio: "Danyal Sarfraz is a Masters student from Pakistan specializing in implementation of 3D and VR/XR technology in industrial design. He received his BS in Industrial Design from Pakistan’s most prestigious university, NUST.",
    },
    {
      img: "/img/people/current/jonghyun_kim.png",
      name: "JoungHyun Kim",
      role: "Masters",
      bio: "JoungHyun Kim is a combined Master's-PhD student in the Design Department at UNIST. She is interested in how design can enhance human interaction with technology, particularly with AI, making it more intuitive and engaging.",
    },

    {
      img: "/img/people/current/donierbek_abdurakhimov.png",
      name: "Donierbek Abdurakhimov",
      role: "Intern",
      bio: "Donierbek is doing Bachelor of Science in Industrial design in UNIST. His main interest is designing products that are both comfortable to use and have a unique appearance design.",
    },

    {
      img: "/img/people/current/alina_alimova.png",
      name: "Alina Alimova",
      role: "Intern",
      bio: "Alina Alimova is an undergraduate student from Kazakhstan, specializing in designing tangible products with a focus on ergonomics and user interaction.",
    },
  ];

  const derivedRoles = [...new Set(members.map((member) => member.role))];

  const [selected, setSetselected] = useState(derivedRoles[0]);

  return (
    <div className="flex flex-col gap-[30px] py-[30px] w-full">
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between">
          <h2 className="font-light text-[48px] text-text_black_primary leading-[48px]">
            Current Team
          </h2>
          <Down_left_dark_arrow className="size-[58px]" />
        </div>
        <h3 className="font-light text-[12px] text-text_black_secondary">
          Our lab is a vibrant hub of international and Korean researchers from diverse backgrounds,
          creating a dynamic and inclusive environment. Working here is not just productive but also
          a lot of fun, thanks to our enthusiastic and collaborative team!
        </h3>
      </div>
      <div className="flex gap-[10px] sm:w-1/2 lg:w-1/3">
        <button
          className={`place-content-center border-2 border-primary_main grid active:bg-primary_main border-solid rounded-full w-full h-[30px] text-primary_main active:text-text_white_primary ${
            "All" === selected ? "bg-primary_main text-text_white_primary" : "text-primary_main"
          }`}
          key="All"
          onClick={() => setSetselected("All")}
        >
          All
        </button>
        {derivedRoles.map((role) => (
          <button
            className={`place-content-center border-2 border-primary_main grid active:bg-primary_main border-solid rounded-full w-full h-[30px] text-primary_main active:text-text_white_primary ${
              role === selected ? "bg-primary_main text-text_white_primary" : "text-primary_main"
            }`}
            key={role}
            onClick={() => setSetselected(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-[10px] sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
        {members
          .filter((elem) => (selected === "All" ? true : elem.role === selected))
          .map((member) => (
            <AccordionCard
              key={member.name}
              title={member.name}
              subtitle={member.role}
              bg={member.img}
              desc={member.bio}
            />
          ))}
      </div>
    </div>
  );
};

const Alumni = () => {
  const members = [
    {
      img: "/img/people/alumni/muhammad_tufail.png",
      name: "Muhammad Tufail",
      role: "PhD",
      bio: "Muhammad Tufail is a PhD student in the Design Department at UNIST. He is interested in how design can enhance human interaction with technology, particularly with AI, making it more intuitive and engaging.",
    },
    {
      img: "/img/people/alumni/joongsoo_kim.png",
      name: "Joongsoo Kim",
      role: "Masters",
      bio: "Joongsoo Kim is a Master's student in the Design Department at UNIST. He is interested in how design can enhance human interaction with technology, particularly with AI, making it more intuitive and engaging.",
    },
    {
      img: "/img/people/alumni/alisher_saduakas.png",
      name: "Alisher Saduakas",
      role: "Masters",
      bio: "Alisher Saduakas is a Master's student in the Design Department at UNIST. He is interested in how design can enhance human interaction with technology, particularly with AI, making it more intuitive and engaging.",
    },
    {
      img: "/img/people/alumni/alisher_saduakas.png",
      name: "Malika Gabbas",
      role: "Masters",
      bio: "Malika Gabbas is a Master's student in the Design Department at UNIST. He is interested in how design can enhance human interaction with technology, particularly with AI, making it more intuitive and engaging.",
    },
  ];

  const derivedRoles = [...new Set(members.map((member) => member.role))];

  const [selected, setSetselected] = useState("All");

  return (
    <div className="flex flex-col gap-[30px] pt-[30px] w-full" id="alumni">
      <div className="flex justify-between items-center">
        <h2 className="font-extralight text-[48px] text-text_black_primary leading-[48px]">
          Alumni
        </h2>
        <Down_left_dark_arrow className="size-[46px]" />
      </div>
      <div className="flex gap-[10px] sm:w-1/2 lg:w-1/3">
        <button
          className={`place-content-center border-2 border-primary_main grid active:bg-primary_main border-solid rounded-full w-full h-[30px] text-primary_main active:text-text_white_primary ${
            "All" === selected ? "bg-primary_main text-text_white_primary" : "text-primary_main"
          }`}
          key={"All"}
          onClick={() => setSetselected("All")}
        >
          All
        </button>
        {derivedRoles.map((role) => (
          <button
            className={`place-content-center border-2 border-primary_main grid active:bg-primary_main border-solid rounded-full w-full h-[30px] text-primary_main active:text-text_white_primary  ${
              role === selected ? "bg-primary_main text-text_white_primary" : "text-primary_main"
            }`}
            key={role}
            onClick={() => setSetselected(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-[10px] sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {members
          .filter((elem) => (selected === "All" ? true : elem.role === selected))
          .map((member) => (
            <AccordionCard
              key={member.name}
              title={member.name}
              subtitle={member.role}
              bg={member.img}
              desc={member.bio}
            />
          ))}
      </div>

      <button className="flex items-center gap-[10px] active:bg-primary_main mx-auto px-[24px] py-[8px] rounded-[18px] font-semibold text-[18px] text-primary_main active:text-white">
        View All Alumni <Up_right_neutral_arrow />
      </button>
    </div>
  );
};
