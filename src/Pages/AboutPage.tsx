import Logo from "../assets/images/app.png";

export default function AboutPage() {
  return (
    <div className="px-4 h-lvh">
      {/* Header */}
      <h1 className="text-4xl leading-relaxed border-b">About</h1>

      {/* Main section */}
      <div className="py-10 pl-10">
        <div className="flex flex-row gap-4 mb-10">
          <img src={Logo} className="max-h-48 mr-5 rounded-lg" />
          <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl lg:leading-normal dark:text-white">
            Workday - Your #1 HRIS Solution in Indonesia
          </h1>
        </div>
        <p>
          Workday, a leading cloud-based Human Resource Information System
          (HRIS), offers organizations an all-encompassing solution for human
          capital management. Boasting a versatile suite of functionalities,
          Workday addresses core HR functions, payroll administration, time
          tracking, and talent management. Its user-friendly interface
          streamlines core HR processes, providing a centralized hub for
          employee data, including personal details and employment history. The
          platform's automation prowess extends to payroll calculations,
          ensuring accuracy and compliance with dynamic labor regulations.
          Workday's robust time tracking tools and talent management features
          contribute to efficient workforce management, from optimizing working
          hours to strategic talent acquisition.
          <br />
          <br />A standout feature of Workday lies in its cloud-based
          architecture, promoting accessibility and scalability. Users benefit
          from the platform's flexibility, enabling them to manage HR processes
          from anywhere. As a dynamic solution, Workday continually innovates,
          delivering updates to keep users abreast of the latest HR technology
          advancements. The platform's analytical capabilities provide valuable
          workforce insights, facilitating data-driven decision-making for
          organizational growth. Workday stands as an innovative, comprehensive
          HRIS solution, empowering organizations to elevate HR operations,
          enhance employee experiences, and strategically manage human capital
          in today's evolving business landscape.
        </p>
      </div>
    </div>
  );
}
