import React from "react";
import fimg from "../assets/images/case.png";
import comms from "../assets/images/comms.png";

const Info = ({ title, children }) => {
  return (
    <div>
      <h1 className="text-lg mt-5 text-[#003482] font-semibold">{title}</h1>
      <p className="text-lg font-normal text-gray-700 text-justify">
        {children}
      </p>
    </div>
  );
};

const AboutRncCoordinator = () => {
  return (
    <div className="flex px-24 relative overflow-hidden">
      <div className="min-w-[15rem] mr-8">
        <div className="w-[15rem] h-[15rem] overflow-hidden">
          <img
            src={fimg}
            alt="samp"
            className="object-cover object-top w-full h-full"
          />
        </div>
        <button className="mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-semibold text-lg">
          Rnc Profile
        </button>
      </div>
      <div>
        <h1 className="text-2xl text-[#932323] font-bold">
          Dr. Kaustubh Dhondge
        </h1>
        <Info title="Associate Dean of R&D">
          Ph.D. (University of Missouri)
        </Info>
        <Info title="email id">
          <i> kaustubh.dhondge@iiitsurat.ac.in</i>
        </Info>
        <Info>
          Dr. Kaustubh Dhondge is an Associate Professor of Computer Science and
          Engineering (CSE) at the Indian Institute of Information Technology
          Surat (IIIT Surat). In his previous role, he served as the Founder of
          Glaukes Labs - a technology company based out of Portland, Oregon that
          focused on crafting extraordinary digital experiences. Glaukes Labs
          designed, developed, and published mobile apps, games, and online
          services. Under his leadership, Glaukes Labs has published a wide
          range of Android apps that harness mobile sensors, improve security,
          and enable productivity tools. The games promote math, logic, and
          problem-solving skills in users. With 25+ apps published, Glaukes Labs
          has been a market leader in the Android space, and proudly served tens
          of thousands of users from 220+ countries across the globe. His
          research interests, publications, and patents lie in the areas of
          mobile systems and applications which involve the Internet of Things
          (IoT), Smart Wearable Systems, Visible Light Communication,
          Authentication & Security for Smart Devices, Vehicular Communication
          with Smart Devices, and Positioning & Localization for Smart Devices.
          He's the author of the book titled ""Lifecycle IoT Security for
          Engineers"".
        </Info>
        <div className="mt-6">
          <div className="flex flex-col text-xl text-[#660000] max-md:max-w-full">
            <div className="flex items-center gap-5 max-md:flex-wrap font-semibold">
              <div className="flex-shrink">Words from Rnc Officer</div>
              <div className="flex-grow border-t border-[#660000] border-bold" />
            </div>
            <div className="mt-9 text-lg text-justify text-[#474747] max-md:max-w-full">
              At the Indian Institute of Information Technology Surat (IIIT
              Surat), research is not just an academic pursuit - it is a
              commitment to solving real-world challenges with transformative
              impact. As the Associate Dean of R&D, I take pride in fostering a
              culture of innovation, interdisciplinary collaboration, and
              purpose-driven inquiry. Our researchers are actively engaged in
              cutting-edge domains such as Artificial Intelligence,
              Cybersecurity, Industrial IoT, Blockchain, Robotics, and
              Sustainable Technologies, often in partnership with industry,
              government, and international academia. Recent developments, such
              as securing national-level research grants including the AICTE QIP
              PG Certificate Programme in Emerging Areas, reflect our growing
              leadership in addressing critical technology needs of the nation.
              <br></br>
              We are equally focused on enabling experiential, applied research
              by encouraging faculty, students, and collaborators to engage in
              meaningful projects with societal impact. To promote grassroots
              innovation and student entrepreneurship, the institute has also
              been actively implementing the Student Startup and Innovation
              Policy (SSIP) launched by the Government of Gujarat in January
              2022. IIIT Surat has received ₹1.87 crore under this policy for a
              five-year period, which is being used to provide funding
              assistance, mentorship, incubation, and accelerator support to
              student-led startups. This initiative is a key pillar in our
              mission to build an innovation-driven ecosystem. As we scale our
              research capabilities through centers of excellence, collaborative
              MoUs, and flagship projects, we remain anchored to our mission -
              advancing knowledge that is inclusive, impactful, and globally
              relevant. I invite all stakeholders - researchers, innovators, and
              industry leaders - to join hands with us in shaping the future
              through responsible research and disruptive innovation.
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 pr-24"
        src={comms}
        alt="comms"
      />
    </div>
  );
};

export default AboutRncCoordinator;
