"use client"

import { useCallback, useState } from 'react';
import NavMenu from './components/NavMenu';
import { TDisplayMenuFeature } from './utils/types';
import OutroView from './features/Outro';

export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("outro");
  const [formValues, setFormValues] = useState<any>({});

  function handleChange({ target }:{target: any}) {
    setFormValues({ ...formValues, [target.name]: target.value});
  }


  const displayMenuFeature : TDisplayMenuFeature = {
    texts: <div>Texts Feature</div>,
    logo: <div>Logo Feature</div>,
    outro: <OutroView formValues={formValues} setFormValues={setFormValues} handleChange={handleChange}/>,
    broll: <div>B-roll Feature</div>,
    customBrandkit: <div>Custom Brand Kit Feature</div>,
  }

  const GetDispalyMenuFeature = useCallback((activeMenuItem: string) => {
    return displayMenuFeature[activeMenuItem]
  }, [])

  const generateVideo = async () => {
    console.log("formValues",formValues)
    if(!formValues?.brandKitName) return alert("Brand Kit Name is required")
    if(!formValues?.action) return alert("Call to action is required")
  
  
    try {
      const response = await fetch('/api/video/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
  
      if (response.ok) {
        alert('Video generation successfully');
        // Handle success
      } else {
        alert('Failed to initiate video generation');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  

  return (
    <main className="flex min-h-screen flex-col justify-between p-20 bg-[#F9F8F8]">
      <div className="p-2 text-dark">
        <p className="text-[32px] text-[#191C26]">Brand Kit</p>
        <p className="font-light text-[18px] mt-1">Here you can set the brand kit for your Short-Form clips. Note,<br/> 
          long-form videos are not affected by this brand kit
        </p>
        <div className="w-full h-[580px] bg-white mt-8 rounded-[8px]">
          <div className="p-20">
            <div className="inline">
              <label className="me-10 text-[#191C26]">Brand kit name</label>
              <input onChange={handleChange} name="brandKitName" className="h-[32px] border border-solid border-blue-500 rounded-md px-2 focus:outline-none focus:border-blue-700" placeholder="My kit brand"/>
            </div>
            <div className="flex mt-20">
              <div className="w-1/4">
                <NavMenu activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem}/>
              </div> 
              <div className="w-3/4">
                {GetDispalyMenuFeature(activeMenuItem)}
              </div> 
            </div>
            <hr className="border-t mt-10 mb-5" />
            <button type="button" className="bg-[#2237FF] text-xs p-1 text-white px-4 rounded-md" onClick={generateVideo}>Save</button>
          </div>
        </div>
        
      </div>
    </main>
  )
}
