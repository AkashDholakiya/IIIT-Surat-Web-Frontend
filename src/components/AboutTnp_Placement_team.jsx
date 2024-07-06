import * as React from "react";

const NavItem = ({ children }) => (
  <div className="flex-auto my-auto leading-[110%]">{children}</div>
);

const SidebarItem = ({ title, subtitle }) => (
  <>
    <div className="mt-8">{title}</div>
    <div className="mt-4 text-xl font-medium">{subtitle}</div>
  </>
);

const ProfileCard = ({ name, role, email, phone }) => (
  <div className="flex flex-col grow max-md:mt-10">
    <div className="flex flex-col justify-center items-start py-px bg-sky-100 rounded-[401.786px] max-md:pr-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eb9ddc827ea58edaabf7eb723b69b6736b1705f4fcb76c139ab8618c497def5?apiKey=7c5b01f694034c0fb3ba724488afa998&"
        alt={`Profile picture of ${name}`}
        className="w-full aspect-[1.01]"
      />
    </div>
    <div className="mt-5 text-3xl font-semibold leading-6 text-center text-blue-500">
      <span className="text-2xl">{name}</span>
      <br />
      <span className="text-xl font-medium">{role}</span>
      <br />
      <span className="text-lg">{email}</span>
      <br />
      <span className="text-lg">{phone}</span>
    </div>
  </div>
);

function AboutTnpPlacementTeam() {

  const sidebarItems = [
    { title: "About Tnp cell", subtitle: "" },
    { title: "T&P officer", subtitle: "Dr. Vijaykumar Radadiya" },
    { title: "Placement Team", subtitle: "Working for better future" },
    { title: "Placement Statistics", subtitle: "Well equipped 3 labs" },
    { title: "Our Achievers", subtitle: "Alumni work in top MNC" },
    { title: "Placement Guidelines", subtitle: "" },
    { title: "Our Recruiters", subtitle: "" },
  ];

  const profiles = Array(12).fill({
    name: "Pardeep Kumar roy",
    role: "Student Coordinator, CSE",
    email: "ui21cs29@iiitsurat.ac.in",
    phone: "+91 8400812891",
  });

  return (
    <div className="flex z-10 flex-col items-end px-20 mt-0 w-full max-md:px-5 max-md:max-w-full">
      <main className="self-center mt-16 w-full max-w-[1317px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 text-2xl font-semibold text-blue-500 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a36c40f9da3d692ef44117b2844ae1164e1b73bd6958afcfd9193f043f6b85a?apiKey=7c5b01f694034c0fb3ba724488afa998&"
                className="shrink-0 my-auto w-2 border-8 border-blue-500 border-solid aspect-[0.11] stroke-[8px] stroke-blue-500"
                alt=""
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                {sidebarItems.map((item, index) => (
                  <SidebarItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
            </div>
          </aside>
          <section className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 items-start px-px text-2xl text-blue-500 max-md:flex-wrap">
                <div className="grow self-stretch my-auto">All</div>
                <div className="flex gap-2.5 mt-1 text-2xl font-semibold">
                  <div className="shrink-0 self-start w-3 h-3 bg-blue-500 rounded-full" />
                  <div className="flex-auto">Faculty In-charge</div>
                </div>
                <div className="flex gap-5 max-md:flex-wrap">
                  <div className="flex-auto">Student Coordinator(2022-23)</div>
                  <div className="flex-auto">Member(2023-24)</div>
                </div>
              </div>
              <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  {profiles.slice(0, 3).map((profile, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                    >
                      <ProfileCard {...profile} />
                    </div>
                  ))}
                </div>
                <div className="mt-6 mr-11 max-w-full w-[890px] max-md:mr-2.5 ">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {profiles.slice(3, 6).map((profile, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                      >
                        <ProfileCard {...profile} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 mr-11 max-w-full w-[890px] max-md:mr-2.5">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {profiles.slice(6, 9).map((profile, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                      >
                        <ProfileCard {...profile} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 mr-11 max-w-full w-[890px] max-md:mr-2.5">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {profiles.slice(9, 12).map((profile, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                      >
                        <ProfileCard {...profile} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutTnpPlacementTeam;
