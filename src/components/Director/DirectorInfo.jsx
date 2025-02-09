import Info from "./Info";

export default function DirectorInfo() {
  return (
    <div className="w-full max-w-2xl mx-auto md:ml-8 lg:ml-16 space-y-4">
      <h1 className="text-3xl text-[#932323] font-bold text-center md:text-left">
        Prof. Rajeev Shorey
      </h1>
      <Info title="Director">Indian Institute Of Information Technology Surat</Info>
      <Info title="Email ID">director@iiitsurat.ac.in</Info>
      <Info>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad saepe sed reprehenderit blanditiis! Magnam, obcaecati! Dignissimos mollitia nostrum rem fugit, aspernatur, in soluta laudantium quasi iste minus voluptatem corporis fuga.
      </Info>
      <Info>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat officia repellendus dolorem incidunt possimus pariatur. In odio maiores temporibus vero esse quasi vitae nobis et quo?
      </Info>
    </div>
  );
}
