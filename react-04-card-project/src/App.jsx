import React from 'react'
import Card from './components/Card'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    city: "Hyderabad"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    city: "Bengaluru"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$25/hr",
    city: "Chennai"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 weeks ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hr",
    city: "Mumbai"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    city: "Gurgaon"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Web Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    city: "Noida"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    city: "Pune"
  },
  {
    brandLogo: "https://w0.peakpx.com/wallpaper/2/672/HD-wallpaper-adobe-red-logo-red-brickwall-adobe-logo-brands-adobe-neon-logo-adobe.jpg",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hr",
    city: "Bengaluru"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    companyName: "Intel",
    datePosted: "8 weeks ago",
    post: "Frontend Intern",
    tag1: "Part Time",
    tag2: "Internship",
    pay: "$15/hr",
    city: "Ahmedabad"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    post: "Senior Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    city: "Kolkata"
  }
];

  return (
    <div className='parent'>

    {jobOpenings.map(function (elem, idx) {
      return <div key={idx}>
        <Card company={elem.companyName} brandLogo= {elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1= {elem.tag1} tag2={elem.tag2} pay={elem.pay} city= {elem.city} />
      </div>
    })}
      
    </div>
  )
}

export default App
