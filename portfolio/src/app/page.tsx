import Image from "next/image";
import { Mail, Github, Linkedin, GraduationCap, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
        {/* Left Column (40%) */}
        <div className="lg:col-span-2 flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
            <Image
              src="/images/avatar.jpg"
              alt="David Exiga"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold mb-2">David Exiga</h1>

          {/* Title */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Master's Student in Computer Science
          </p>

          {/* University */}
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            Georgia Tech
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="mailto:david@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail size={24} />
            </a>
            <a href="https://github.com/davidexiga" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/davidexiga" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Column (60%) */}
        <div className="lg:col-span-3">
          {/* About Me */}
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a passionate computer science student with a keen interest in software engineering,
            machine learning, and innovative technology solutions. I love building things that make
            a difference and exploring the intersection of technology and real-world problems.
          </p>
          <a
            href="/cv.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} className="mr-2" />
            Download CV
          </a>

          {/* Interests and Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Interests */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Interests</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Machine Learning & AI</li>
                <li>• Web Development</li>
                <li>• Robotics</li>
                <li>• Open Source Contributions</li>
                <li>• Photography</li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <GraduationCap size={20} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">M.S. Computer Science</p>
                    <p className="text-gray-600 dark:text-gray-400">Georgia Tech, 2024-2026</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GraduationCap size={20} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">B.S. Mechanical Engineering</p>
                    <p className="text-gray-600 dark:text-gray-400">Georgia Tech, 2020-2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
