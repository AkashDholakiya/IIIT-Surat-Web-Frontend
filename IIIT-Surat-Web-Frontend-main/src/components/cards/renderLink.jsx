import React from 'react';


const RenderLinkComponent = ({ text, contentToSet ,setContent }) => {
 
  
  
    const renderLink = (text, contentToSet) => {
        const handleClick = () => {
          setContent(contentToSet);
          
          
        };
        return (
          <button 
            onClick={handleClick} 
            className={`mr-1 ml-1 px-2 py-1 rounded text-base focus:ring-1 hover:bg-blue-800 hover:text-white focus:ring-blue-800`}
          >
            {text}
          </button>
        );
      };

    return <p >{renderLink(text,contentToSet)}</p>
};

const TitleBar=({setContent})=>{
  return (
    <div >
      <div className="w-5/6 h-1/12 bg-navColor flex items-center my-2 mx-auto px-4">
        <RenderLinkComponent
          text={'Sports Club'}
          contentToSet={'Sports'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Cultural Club'}
          contentToSet={'Cultural'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Technical Club'}
          contentToSet={'Technical'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Entrepreneurship club'}
          contentToSet={'Entrepreneur'}
          setContent={setContent}
        />
      </div>
      <div className="w-5/6 h-1/12 bg-navColor flex items-center my-2 mx-auto px-4">
        <RenderLinkComponent
          text={'Saras'}
          contentToSet={'Saras'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Abstract'}
          contentToSet={'Abstract'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Swrang'}
          contentToSet={'Swrang'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={' Malhar'}
          contentToSet={'Malhar'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Groove'}
          contentToSet={'Groove'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Antra'}
          contentToSet={'Antra'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Cineworks'}
          contentToSet={'Cineworks'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Exposure'}
          contentToSet={'Exposure'}
          setContent={setContent}
        />|
        <RenderLinkComponent
          text={'Content & management team'}
          contentToSet={'Management'}
          setContent={setContent}
        />
      </div>
    </div>
  );
};

export default TitleBar;