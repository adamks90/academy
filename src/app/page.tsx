import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AcademyCard from "@/components/AcademyCard";

const academies = [
  { id: 1, name: "Tennis academy", programCount: 4 },
  { id: 2, name: "Padel academy", programCount: 2 },
];

export default function AcademyPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="px-10 py-8">
            {/* Page header */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-gray-900">Academy</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Learn more about academies{" "}
                  <a
                    href="#"
                    className="text-indigo-500 hover:text-indigo-600 transition-colors"
                  >
                    here
                  </a>
                </p>
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
                New academy
              </button>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 mt-6 mb-6" />

            {/* Academy cards */}
            <div className="space-y-4 max-w-[900px]">
              {academies.map((academy) => (
                <AcademyCard
                  key={academy.id}
                  name={academy.name}
                  programCount={academy.programCount}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
