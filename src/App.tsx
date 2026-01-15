import React, { useState, useEffect } from 'react';
import { Home, Smile, Users, Calendar, BookOpen, MessageCircleHeart, Mail, Globe, Github, Candy, Sprout, HandHeart, ChevronLeft, ChevronRight, Menu, X, Presentation, Paperclip } from 'lucide-react';
import { useRef } from "react";
import FluidEffect from './components/FluidEffect';
import RippleEffect from './components/RippleEffect';
import AccessibilityToggle from './components/AccessibilityToggle';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
	
  const [message, setMessage] = useState("");

  const scrollToSection = (id: string) => {
    window.location.hash = id;
	const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
  <React.Fragment>
    <RippleEffect />   {/* FluidEffect */}

    <div className="min-h-screen bg-[#f4eff8]">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center text-[#77428D] font-semibold text-xl">
              <Candy className="inline w-5 h-5 text-[#77428D] animate-bounce mr-2" />EmpAI @FG 2026
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavItem icon={<Home size={16} />} text="Home" onClick={() => scrollToSection('home')} />
              <NavItem icon={<Smile size={16} />} text="CFP" onClick={() => scrollToSection('cfp')} />
              <NavItem icon={<Calendar size={16} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
              <NavItem icon={<Presentation size={16} />} text="Speakers" onClick={() => scrollToSection('speaker')} />
              <NavItem icon={<Users size={16} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
              <NavItem icon={<Paperclip size={16} />} text="Review" onClick={() => scrollToSection('review')} />
			  <NavItem icon={<BookOpen size={16} />} text="Contact" onClick={() => scrollToSection('contact')} />
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://fg2026.ieee-biometrics.org/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img
                  src="/fg26_logo.png"
                  className="w-21 h-8 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                  alt="FG 2026 Logo"
                />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block md:hidden p-2 text-[#77428D] hover:text-[#c5b3db] transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-2 space-y-1">
                <MobileNavItem icon={<Home size={16} />} text="Home" onClick={() => scrollToSection('home')} />
                <MobileNavItem icon={<Smile size={16} />} text="CFP" onClick={() => scrollToSection('cfp')} />
                <MobileNavItem icon={<Calendar size={16} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
                <MobileNavItem icon={<Presentation size={16} />} text="Speakers" onClick={() => scrollToSection('speaker')} />
                <MobileNavItem icon={<Users size={16} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
                <MobileNavItem icon={<Paperclip size={16} />} text="Review" onClick={() => scrollToSection('review')} />
				<NavItem icon={<BookOpen size={16} />} text="Contact" onClick={() => scrollToSection('contact')} />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#77428D] mb-4">
            Empathic AI: Face, Gesture, and Accessibility Technologies
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Understanding Imperfect Humans Perfectly
            <br /><strong className="font-bold text-gray-800"> 📅 May 25 or 29, 2026 </strong>  📍Kyoto, Japan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Cross-Disciplinary Innovation"
              description="Exploring techniques from human perception to real action"
              image="https://images.pexels.com/photos/19802194/pexels-photo-19802194.jpeg"
            />
            <FeatureCard
              title="Keynotes & Presentations Sessions"
              description="Excellent keynotes and contributed/lightning talks for better understanding"
              image="https://images.pexels.com/photos/7097530/pexels-photo-7097530.jpeg"
            />
            <FeatureCard
              title="Networking"
              description="Early-stage researchers, experts, and the general public brainstorm together"
              image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#77428D] mb-8 text-center">About the Workshop</h2>
          <p className="text-lg text-gray-600 mb-8">
          In the past decade, artificial intelligence (AI) has achieved remarkable progress in recognizing faces, gestures, and multimodal signals. However, the most challenging question remains: How can AI understand all humans, not only the “typical” ones? According to the World Health Organization (WHO) report in 2023, an estimated 1.3 billion people (about 16% of the global population) live with significant disabilities affecting vision, hearing, cognition, or mobility. Their gestures are subtler, their facial cues atypical, and their voices sometimes silent. <br />This workshop proposes <strong className="font-bold text-gray-800">“Empathic Intelligence,”</strong> which extends beyond perception and action, bringing social understanding, affective awareness, and human-centered reasoning into intelligent systems. We aim to explore how multimodal AI can perceive, express, and respond responsibly to non-normative human signals, designing technologies and applications that make the world more accessible, inclusive, and emotionally intelligent. <br /><strong className="font-bold text-gray-800"><MessageCircleHeart className="inline w-5 h-5 text-[#77428D] animate-bounce mr-2" />Whether you are a general public, a master/PhD student just starting, or an expert with years of interdisciplinary experience, this workshop provides useful research perspectives and practical skills.</strong>
          </p>
          <h3 className="text-xl font-semibold text-[#77428D] mb-6">Topic of Interest</h3>
            <p className="text-gray-600 mb-6">
			Workshop topics include (but are not limited to):<br/>
			</p>
            <strong className="font-bold text-gray-800">Foundations of Empathic Intelligence</strong> 
            <ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
                <li>Predictive processing, embodied cognition, and symbol emergence</li>
                <li>Modeling emotion, intention, and individual diversity</li>
                <li>Multimodal learning across vision, physiology, and language</li>
                <li>Computational modeling of emotion and intention under individual differences</li>
            </ul>
            <strong className="font-bold text-gray-800">Inclusive and Accessible Interaction</strong> 
            <ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
                <li>Face, gesture, and gaze systems for sensory, motor, or cognitive impairments</li>
                <li>Adaptive interaction for diverse sensory, motor, and cognitive abilities</li>
                <li>Assistive communication and embodied interaction (e.g., AR/VR accessibility)</li>
            </ul>
            <strong className="font-bold text-gray-800">Robustness Across Human Variability</strong> 
            <ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
                <li>Recognition under atypical, incomplete, or noisy signals</li>
                <li>Learning from small, imbalanced, or underrepresented datasets</li>
                <li>Fairness-aware benchmarking and evaluation frameworks</li>
            </ul>
            <strong className="font-bold text-gray-800">Ethics and Human-Centered Design</strong> 
            <ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
                <li>Privacy, consent, dignity, and value-sensitive design</li>
                <li>Bias mitigation for accessibility-focused AI</li>
                <li>Cross-disciplinary perspectives from neuroscience, psychology, and social sciences</li>
            </ul>
        </div>
      </section>

      {/* CFP Section */}
      <section id="cfp" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#77428D] mb-8 text-center">Call for Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
			  <h3 className="text-xl font-semibold text-[#77428D] mb-4">Important Dates</h3>
              <ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
				  <li>Call for Papers released:{" "}<span className="font-bold">January 11, 2026</span></li>
				  <li>Submission Period:{" "}<span className="font-bold">January 11 - February 11, 2026</span></li>
				  <li>Submission Deadline:{" "}<span className="font-bold">February 11, 2026 
					  (<a
				      href="https://time.is/Anywhere_on_Earth"
				      target="_blank"
				      rel="noopener noreferrer"
				      className="underline hover:text-[#77428D]"
				    > Anywhere on Earth, AoE </a>)
					  </span></li>
				  <li>Acceptance Notification:{" "}<span className="font-bold">March 20, 2026
					  (<a
				      href="https://time.is/Anywhere_on_Earth"
				      target="_blank"
				      rel="noopener noreferrer"
				      className="underline hover:text-[#77428D]"
				    > Anywhere on Earth, AoE </a>)
					  </span></li>
				  <li>Camera Ready Submission:{" "}<span className="font-bold">April 21, 2026
				  	(<a
				      href="https://time.is/Anywhere_on_Earth"
				      target="_blank"
				      rel="noopener noreferrer"
				      className="underline hover:text-[#77428D]"
				    > Anywhere on Earth, AoE </a>)
				  </span></li>
				  <li>Workshop Date:{" "}<span className="font-bold">May 25 or 29, 2026</span></li>
			  </ul>
			</div>
			  <h3 className="text-xl font-semibold text-[#77428D] mb-2">Paper Format</h3>
              <p className="text-gray-600">
                EmpAI2026 welcomes two submission types (inherit from <a href="https://fg2026.ieee-biometrics.org/cfp/" target="_blank" rel="noopener noreferrer" className="text-[#77428D] underline hover:text-gray-600"> FG 2026</a>): <strong>Long Papers</strong> (8 pages, excluding references) and <strong>Short Papers</strong> (4 pages + 1 page for references). 
				 <a
                  href="https://www.overleaf.com/read/vtbwkbhhbxpp#35990f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-full bg-[#E8D8EF] text-[#77428D] hover:bg-[#D9C1E6] transition"
                >
                  Overleaf Latex
                </a>

				<a
                  href="https://drive.google.com/file/d/1RBOaG7JogyFI7nigzHjJfn36pHQ3rakp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-full bg-[#E8D8EF] text-[#77428D] hover:bg-[#D9C1E6] transition"
                >
                  Latex Template
                </a>

				<a
                  href="https://docs.google.com/document/d/1nekOaVw4SB3U0HkgoKdf06mWzPmjDQQh/edit?usp=sharing&ouid=104016129676819843735&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-full bg-[#E8D8EF] text-[#77428D] hover:bg-[#D9C1E6] transition"
                >
                  Word Template
                </a>

				<ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
				<li><strong>Long Paper Track</strong> welcomes novel contributions. Accepted papers will be presented as main talks or posters. </li>
				<li><strong>Short Paper Track</strong> encourages ongoing, early-stage research or perspective views. Accepted short papers will be presented as posters. </li>
			  	</ul>
			  </p>	

			  <h3 className="text-xl font-semibold text-[#77428D] mb-2">Submission Instructions</h3>
              <div className="flex justify-center">
            	<a
                  href="https://drive.google.com/file/d/1RBOaG7JogyFI7nigzHjJfn36pHQ3rakp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-full bg-[#77428D] text-white shadow-md hover:bg-[#65307D] hover:shadow-lg transition-colors duration-200"
                >
                  Submit A Paper
                </a>
				</div>
				<ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
				<li>Submissions are processed in CMT. <strong>All accepted papers will be published in the FG 2026 proceedings. </strong></li>
				<li>Submitted work must be original and must NOT be under review or accepted elsewhere (including the FG main conference). </li>
				<li>The review process will be double-blind. Papers that are not properly anonymized, do not use the template, or exceed the page limit will be desk rejected. </li>
				<li>Authors must follow EmpAI 2026 policies on Large Language Model Usage. </li>
				<li>Authors are also encouraged to provide an ethical considerations statement, which will not count towards the total page limit. </li>
				</ul>

			  <h3 className="text-xl font-semibold text-[#77428D] mb-2">EmpAI 2026 Large Language Models (LLMs) Usage Policy</h3>
			  <ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
				<li>EmpAI 2026 is a fully human-authored, human-reviewed workshop that does <strong>NOT allow any AI systems to serve as primary authors or reviewers</strong> of any submission. AI-generated papers will NOT be permitted in the long and short paper tracks. </li>
				<li>LLM-assisted writing is allowed for grammar and style refinement only. All conceptual and experimental contributions must come from human authors.  </li>
				<li>Workshop organizers and reviewers will not use LLMs for reviewing, decision-making, or content generation related to submissions. </li>
			  </ul>
			  
			  <h3 className="text-xl font-semibold text-[#77428D] mb-2">Call for PC members</h3>
              <p className="text-gray-600">
                We are looking for passionate and responsible PC members to review submissions for the EmpAI 2026 workshop. If you are interested in accessibility, human-centered AI, or related topics, you are very welcome to apply.
				<a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPQVtYlbLfO_R9Oq4jjdK0Cig8HGB6rA1HDs4EP4rWCZsF5Q/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-full bg-[#E8D8EF] text-[#77428D] hover:bg-[#D9C1E6] transition"
                >
                  Apply Now
                </a>
			  </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#77428D] mb-8 text-center">Schedule</h2>
          <div className="space-y-6">
            <ScheduleItem
              time="14:00 - 14:10"
              title="Opening Remarks"
              speaker="Chair: Yutong Zhou"
              description="Introduce the background and motivation of empathic intelligence for disability."
            />
			<ScheduleItem
              time="xxx"
              title="xxx"
              speaker="xxx"
              description="xxx"
            />
            <ScheduleItem
              time="17:40 - 18:00"
              title="Closing Remarks & Networking"
              speaker="Chair: Yutong Zhou"
              description="Interactive discussion and idea exchange session."
            />
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section id="speaker" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#77428D] mb-8 text-center">Invited Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
			<SpeakerCard
              name="Tadahiro Taniguchi"
              role="Kyoto University, Japan"
              image="/tadahiro.jpeg"
              website="https://www.tanichu.com/"
			  title="Collective Predictive Coding towards Empathic and Symbiotic AI"
			  bio="Tadahiro Taniguchi received his M.E. and Ph.D. degrees from Kyoto University in 2003 and 2006, respectively. From April 2005 to March 2006, he was a Japan Society for the Promotion of Science (JSPS) Research Fellow (DC2) at the Department of Mechanical Engineering and Science, Graduate School of Engineering, Kyoto University. He continued as a JSPS Research Fellow (PD) in the same department from April 2006 to March 2007 and then at the Graduate School of Informatics, Kyoto University, from April 2007 to March 2008.
				   From April 2008 to March 2010, he was an Assistant Professor in the Department of Human and Computer Intelligence at Ritsumeikan University. He was promoted to Associate Professor in the same department, serving from April 2010 to March 2017. During this period, he also spent a year as a Visiting Associate Professor at Imperial College London, from September 2015 to September 2016.
				   From April 2017 to March 2024, he was a Professor in the Department of Information and Engineering at Ritsumeikan University. Concurrently, he served as a Visiting General Chief Scientist at Panasonic Holdings Corporation. Since April 2024, he has been a Professor at the Graduate School of Informatics, Kyoto University, while also serving as an Affiliate Professor at the Research Organization of Science and Technology, Ritsumeikan University. Additionally, he is a Senior Technical Advisor at Panasonic Holdings Corporation and Chair of the IEEE Cognitive and Developmental Systems Technical Committee.
			       Throughout his career, Taniguchi has been deeply engaged in research on machine learning, emergent systems, cognitive robotics, and symbol emergence, making significant contributions to these fields."
            />
			<SpeakerCardMobile
              name="Tadahiro Taniguchi"
              role="Kyoto University, Japan"
              image="/tadahiro.jpeg"
              website="https://www.tanichu.com/"
			  title="Collective Predictive Coding towards Empathic and Symbiotic AI"
			  bio="Tadahiro Taniguchi received his M.E. and Ph.D. degrees from Kyoto University in 2003 and 2006, respectively. From April 2005 to March 2006, he was a Japan Society for the Promotion of Science (JSPS) Research Fellow (DC2) at the Department of Mechanical Engineering and Science, Graduate School of Engineering, Kyoto University. He continued as a JSPS Research Fellow (PD) in the same department from April 2006 to March 2007 and then at the Graduate School of Informatics, Kyoto University, from April 2007 to March 2008.
				   From April 2008 to March 2010, he was an Assistant Professor in the Department of Human and Computer Intelligence at Ritsumeikan University. He was promoted to Associate Professor in the same department, serving from April 2010 to March 2017. During this period, he also spent a year as a Visiting Associate Professor at Imperial College London, from September 2015 to September 2016.
				   From April 2017 to March 2024, he was a Professor in the Department of Information and Engineering at Ritsumeikan University. Concurrently, he served as a Visiting General Chief Scientist at Panasonic Holdings Corporation. Since April 2024, he has been a Professor at the Graduate School of Informatics, Kyoto University, while also serving as an Affiliate Professor at the Research Organization of Science and Technology, Ritsumeikan University. Additionally, he is a Senior Technical Advisor at Panasonic Holdings Corporation and Chair of the IEEE Cognitive and Developmental Systems Technical Committee.
			       Throughout his career, Taniguchi has been deeply engaged in research on machine learning, emergent systems, cognitive robotics, and symbol emergence, making significant contributions to these fields."
            />
			<SpeakerCard
              name="Yukie Nagai"
              role="The University of Tokyo, Japan"
              image="/girl.png"
              website="https://developmental-robotics.jp/en/members/yukie_nagai/"
            />
			<SpeakerCard
              name="Chie Hieida"
              role="Nara Institute of Science and Technology, Japan"
              image="/girl.png"
              website="https://www.hieida.com/profile/"
            />
			<SpeakerCard
              name="Enkelejda Kasneci"
              role="TMU & Munich Data Science Institute, Germany"
              image="/girl.png"
              website="https://www.edu.sot.tum.de/hctl/prof-dr-enkelejda-kasneci/"
            />
          </div>
        </div>
      </section>

      {/* Organizer Section */}
      <section id="organizer" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#77428D] mb-8 text-center">Organizers</h2>
		  <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-8 items-stretch">
            <OrganizerCard
              name="Yutong Zhou"
              role="Leibniz Centre for Agricultural Landscape Research, Germany"
              image="/yutong.png"
              website="https://elizazhou96.github.io/"
            />
			<OrganizerCard
              name="Von Ralph Dane Marquez Herbuela"
              role="The University of Tokyo, Japan"
              image="/vonralph.png"
              website="https://developmental-robotics.jp/en/members/von_ralph_dane_marquez_herbuela/"
            />
			<OrganizerCard
              name="Haifeng Zhang"
              role="The University of Tokyo, Japan"
              image="/haifeng.png"
              website="https://developmental-robotics.jp/en/members/haifeng_zhang/"
            />
			<OrganizerCard
              name="Mariza Ferro"
              role="Fluminense Federal University, Brazil"
              image="/mariza.png"
              website="http://profs.ic.uff.br/~marizaferro/"
            />
			<OrganizerCard
              name="Nobutaka Shimada"
              role="Ritsumeikan University, Japan"
              image="/boy.png"
              website="https://www.i.ci.ritsumei.ac.jp/wp/en/"
            />
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section id="review" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#77428D] mb-8 text-center">Review</h2>
            <h3 className="text-xl font-semibold text-[#77428D] mb-4">Review Guideline</h3>
            <p className="text-gray-600 mb-4">
            xxx
            </p>
            
			<h3 className="text-xl font-semibold text-[#77428D] mb-4">Senior Program Commitee</h3>
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
	            <OrganizerCard
	              name="Jiaqing Liu"
	              role="Ritsumeikan University, Japan"
	              image="/jiaqing.png"
	              website="https://sites.google.com/view/jiaqingliu/home"
	            />
				<OrganizerCard
	              name="Xiangbo Kong"
	              role="Toyama Prefectural University, Japan"
	              image="/xiangbo.png"
	              website="https://isd.pu-toyama.ac.jp/depts/researchers/kong.html"
	            />
          </div>
		   
			<h3 className="text-xl font-semibold text-[#77428D] mb-4">Program Commitee</h3>
            <p className="text-gray-600 mb-4">
            xxx
            </p>
        </div>
      </section>

	{/* Contact Section */}
<section id="contact" className="bg-white py-16">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-[#77428D] mb-8 text-center">Contact Us</h2>

    <form
      action="https://formspree.io/f/mvzzgbww"
      method="POST"
      className="bg-[#f4eff8] w-full shadow-lg rounded-2xl p-6 sm:p-8 space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#77428D]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#77428D]"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          name="message"
          rows={5}
          required
		  value={message}
  		  onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#77428D]"
        ></textarea>
		<p className="text-right text-sm text-gray-500">Words:{message.length}</p>
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-full bg-[#77428D] text-white shadow-md hover:bg-[#65307D] hover:shadow-lg transition"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</section>

      
      {/* Footer with Copyright */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© Copyright Yutong Zhou. All rights reserved.</p>
            <p className="mt-2">FG 2026 Workshop</p>
          </div>
        </div>
      </footer>
    </div>
  </React.Fragment>
  );
}

function NavItem({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-1 text-gray-700 hover:text-[#77428D] transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function MobileNavItem({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 hover:text-[#77428D] hover:bg-gray-50 rounded-md transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#77428D] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function OrganizerCard({
  name,
  role,
  image,
  email,
  website,
}: {
  name: string;
  role: string;
  image: string;
  email: string;
  website: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20 px-6 py-7 text-center shadow-xl backdrop-blur-xl max-w-xs w-full h-full mx-auto">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-white/40 shadow-md"
      />
      <a
		  href={website}
		  target="_blank"
		  rel="noopener noreferrer"
		  className="block text-xl font-semibold text-[#77428D] mb-4 hover:underline"
		>
		  {name}
		</a>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

function SpeakerCard({
  name,
  role,
  image,
  website,
  bio,
  title,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = bio ? bio.split("\n") : [];
  const firstParagraph = paragraphs[0] || "";
  const restParagraphs = paragraphs.slice(1).join("\n");

  const wordCount = bio ? bio.split(/\s+/).length : 0;
  const shouldCollapse = wordCount > 200;

  return (
    <div className="hidden md:block relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-7 shadow-xl backdrop-blur-xl w-full h-full mx-auto">
      <div className="flex flex-row items-start gap-6">

        {/* LEFT */}
        <div className="flex-shrink-0 w-48 text-center">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-lg object-cover border border-white/40 shadow-md mb-4 mx-auto"
          />

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl font-semibold text-[#77428D] mb-2 hover:underline"
          >
            {name}
          </a>

          <p className="text-gray-600 text-sm">{role}</p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 text-left text-gray-700 text-sm whitespace-pre-line">

          {/* Title (always visible on desktop) */}
          <p className="text-lg font-semibold text-[#77428D] mb-3">
            {title}
          </p>

          {/* If bio is short, show full */}
          {!shouldCollapse && <p>{bio}</p>}

          {/* If long bio, animate collapse */}
          {shouldCollapse && (
            <>
              <p>{firstParagraph}</p>

              {/* SMOOTH EXPANSION AREA */}
              <div
                className="transition-all duration-500 overflow-hidden"
                style={{ maxHeight: expanded ? "2000px" : "0px" }}
              >
                <p className="mt-3">{restParagraphs}</p>
              </div>

              {/* Read More Button - NEW LINE */}
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-3 block text-[#77428D] font-semibold inline-flex items-center gap-1 hover:opacity-80 transition"
              >
                {expanded ? "Show Less" : "Read More"}
                <span
                  className={`transform transition-transform duration-300 ${
                    expanded ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

function SpeakerCardMobile({
  name,
  role,
  image,
  website,
  bio,
  title,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const wordCount = bio ? bio.split(/\s+/).length : 0;
  const shouldCollapse = wordCount > 200;

  return (
    <div className="block md:hidden relative overflow-hidden rounded-2xl border border-white/20 bg-white px-6 py-7 shadow-xl w-full mx-auto">
      <div className="text-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-lg object-cover border border-white/40 shadow-md mb-4 mx-auto"
        />

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xl font-semibold text-[#77428D] mb-2 hover:underline"
        >
          {name}
        </a>

        <p className="text-gray-600 text-sm mb-4">{role}</p>

        {/* Title always visible on Mobile */}
        <p className="text-base font-semibold text-[#77428D] mb-3 text-left">
          {title}
        </p>

        <div className="text-gray-700 text-sm whitespace-pre-line text-left">

          {/* If short: full bio */}
          {!shouldCollapse && <p>{bio}</p>}

          {/* Long bio */}
          {shouldCollapse && (
            <>
              {/* Smooth collapse */}
              <div
                className="transition-all duration-500 overflow-hidden"
                style={{ maxHeight: expanded ? "2000px" : "0px" }}
              >
                <p>{bio}</p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-[#77428D] font-semibold inline-flex items-center gap-1 hover:opacity-80 transition"
              >
                {expanded ? "Show Less" : "Read More"}
                <span
                  className={`transform transition-transform duration-300 ${
                    expanded ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}


function SpeakerCardv1({
  name,
  role,
  image,
  website,
  bio,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
}) {
    const [expanded, setExpanded] = useState(false);
	const paragraphs = bio.split("\n");
	const firstParagraph = paragraphs[0];
	const restParagraphs = paragraphs.slice(1).join("\n");
	return (
    <div className="hidden md:block relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-7 shadow-xl backdrop-blur-xl w-full h-full mx-auto">
      <div className="flex flex-row items-start gap-6">
        {/* Left*/}
        <div className="flex-shrink-0 w-48 text-center">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-lg object-cover border border-white/40 shadow-md mb-4 mx-auto"
          />

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl font-semibold text-[#77428D] mb-2 hover:underline"
          >
            {name}
          </a>

          <p className="text-gray-600 text-sm">{role}</p>
        </div>

		{/* Desktop version (show first paragraph only) */}
		<div className="hidden md:block text-gray-700 text-sm whitespace-pre-line">
		  {expanded ? bio : firstParagraph}
		
		  {restParagraphs.trim() !== "" && (
		    <button
		      type="button"
		      className="mt-2 text-[#77428D] font-semibold underline block"
		      onClick={() => setExpanded(!expanded)}
		    >
		      {expanded ? "Show Less" : "Read More"}
		    </button>
		  )}
		</div>
      </div>
    </div>
  );
}

function ScheduleItem({
  time,
  title,
  speaker,
  description,
}: {
  time: string;
  title: React.ReactNode;
  speaker: string;
  description: React.ReactNode;
}) {
  return (
    <div className="bg-[#f4eff8] rounded-xl p-6 transition transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-[#ebe1f2] hover:border-[#77428D] border border-transparent">
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-[#77428D]">{time}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{speaker}</p>
          <div className="mt-2 text-gray-700">{description}</div>
        </div>
      </div>
    </div>
  );
}

function ReadingListSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const cardWidth = scrollRef.current?.firstElementChild?.clientWidth || 300;
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronLeft className="w-5 h-5 text-[#77428D]" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight className="w-5 h-5 text-[#77428D]" />
      </button>

      {/* roll */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth no-scrollbar flex gap-6"
      >
        {papers.map((paper) => (
          <div
            key={paper.link}
            className="min-w-[600px] max-w-[600px] flex-shrink-0"
          >
            <ReadingCard {...paper} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReadingCard({
  title,
  authors,
  year,
  link,
}: {
  title: string;
  authors: string;
  year: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-[#77428D] mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{authors}</p>
      <p className="text-gray-500 text-sm mb-4">{year}</p>
      <a
        href={link}
        className="text-[#77428D] hover:text-[#7DB9DE] transition-colors duration-200"
      >
        Read Paper →
      </a>
    </div>
  );
}

export default App
