import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DotBackgroundWrapper from '../components/DotBackgroundWrapper';
import Navbar from '../components/Navbar';

function ReportPage() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  if (!data) {
    return (
      <div>
        <p>No data recieved</p>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    );
  }

  return (
    <>
    
    <DotBackgroundWrapper>
      <div className='w-screen min-h-screen flex flex-col justify-center items-center'>
      
        <div className='grid grid-cols-[500px_auto] rounded-lg shadow-2xl overflow-hidden h-[500px]'>
          <div className='w-[500px] h-[500px] text-black bg-white p-5 flex flex-col gap-5' >
            <p className='text-xl text-center text-[#005450]'>Report</p>

            {/* User Details */}
            
            <div className='flex justify-between'>
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Age:</strong> {data.age}</p>
            </div>
            <div className='flex justify-between'>
              <p><strong>Gender:</strong> {data.gender}</p>
              <p><strong>City:</strong> {data.city}</p>
            </div>
            <p><strong>Prediction Score:</strong> {data.prediction.toFixed(2)}</p>
            <p><strong>Result:</strong> {data.result}</p>
            <p><strong>Suggestion:</strong></p>
            <pre>{data.suggestion_data}</pre>
            <img src={data.image} alt="Uploaded Scan" style={{ maxWidth: '500px' }} />
          </div>
          <div className='w-[500px] h-[500px] flex flex-col justify-center items-center gap-2 bg-[#8edbd7]'>
            
          </div>
        </div>



      </div>
    </DotBackgroundWrapper>
    </>
  );
}

export default ReportPage;
