import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2 overflow-y-scroll"  style={{ height: "65vh" }}>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-1">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            BTech in  Physics(Telecommunication)
            </h5>
            <p className="font-semibold">Federal University of Technology Minna (2016-2021)</p>
            
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Web Developer Senior.</h5>
            <p className="font-semibold">NestGeeks</p>
            <p className="my-3">Led the development of visually stunning and intuitive
             websites using Reactjs resulting in elevated user experiences and positive client feedback. Stayed at the forefront of design trends and user experience best practices, integrating them into webApp, which garnered praise for their modern and user-friendly interfaces. Collaborated seamlessly with the design team, ensuring websites aligned perfectly with the brand's aesthetics, bolstering brand consistency and customer loyalty. Demonstrated a strong commitment to accessibility, creating inclusive digital products that adhere to industry standards and provide a positive experience for all users. Meticulously optimized code and conducted thorough testing, resulting in exceptional 
            performance on various devices and platforms, improving overall user satisfaction.</p>
          </div>
        </div>
        <div>
         
          <div className="">
            <h5 className="my-2 text-xl font-bold">Web Developer (Intern).</h5>
            <p className="font-semibold">Techon</p>
            <p className="my-3">partnered in the redesign of the company's main website, implementing a responsive design approach and optimizing performances. Played a key role in the development of a dynamic e-commerce platform, utilizing Reactjs , Nextjs and integrating with backend APIs. The project led to a 30% rise in online sales , contributing significantly to the company's revenue growth and market competitiveness. Collaborated closely with the marketing team to implement effective A/B tests and user behavior tracking, resulting in data-driven improvements to the website's user interface and user experience. Championed the adoption of modern front-end tools and techniques, such as Webpack and CSS pre-processors, across the development team. This initiative increased development efficiency , leading to faster project deliveries and enhanced code maintainability. Received recognition for actively participating in knowledge sharing sessions, conducting workshops, and mentoring junior developers. My efforts contributed to a more cohesive and skilled development team, fostering a collaborative and innovative work environment.</p>
          </div>
        </div>
        <div>
         
          <div className="">
            <h5 className="my-2 text-xl font-bold">Mobile App Developer Jr.</h5>
            <p className="font-semibold">Digi Telecommunication</p>
            <p className="my-3">Received accolades for delivering clean and maintainable code, adhering to industry best practices, leading to reduced bug fixes and improved code maintainability. Contributed significantly to the successful launch of a high-profile mobile app that garnered 2000+ number of downloads within the first month, receiving acclaim for its design and usability. Implemented performance optimization strategies, resulting in a 20% decrease in loading times and a marked improvement in user satisfaction for both web and mobile applications.</p>
          </div>
        </div>
        <div>
         
          <div className="">
            <h5 className="my-2 text-xl font-bold">Web App Developer Senior.</h5>
            <p className="font-semibold">Tecabari</p>
            <p className="my-3">Led the development of a responsive and intuitive user interface for the blog application, resulting in an 30% increase in user engagement and longer average session durations. The user-friendly design received positive feedback from users and contributed to increased site traffic. Implemented dynamic content loading and optimized performance by leveraging modern frontend technologies such as Reactjs and lazy loading. These improvements led to a 40% decrease in page load times, enhancing the overall user experience and SEO rankings. Collaborated closely with the backend development team to integrate robust APIs for user authentication, blog post creation, and comment functionalities. Actively monitored user behavior and analyzed user feedback to identify pain points and opportunities for improvement. By conducting usability tests and making data-driven design changes, Demonstrated a strong commitment to accessibility, ensuring the blog application complied with web accessibility guidelines ( WCAG) . This initiative enabled users of all abilities to access and interact with the platform, promoting inclusivity and positive user experiences.</p>
          </div>
        </div>
        <div>
         
          <div className="">
            <h5 className="my-2 text-xl font-bold">Mbile App Developer</h5>
            <p className="font-semibold">COMERIVER</p>
            <p className="my-3">Led the design and implementation of a feature-rich mobile app using React Native, delivering cross-platform compatibility and reducing development time, The app's user-friendly interface and seamless performance and increase in user downloads and positive app store ratings. Collaborated closely with the backend development team to optimize API calls and data synchronization, decrease in loading times and improved overall app responsiveness. These improvements significantly enhanced the user experience, leading to higher user retention rates. Implemented real-time push notifications and in-app messaging functionality, engaging users with personalized updates and enhancing user engagement . This feature proved instrumental in increasing user interactions and fostering user loyalty. Proactively integrated secure authentication and data encryption protocols to safeguard user data and protect against potential security threats. The app's enhanced security measures earned positive reviews and established trust among users, contributing to higher user adoption rates. Demonstrated a strong commitment to continuous improvement by staying updated with the latest mobile app development trends and emerging technologies. These efforts resulted in the timely adoption of new features and optimizations, keeping the app competitive in the market.</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
         
          <div className="my-10">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
