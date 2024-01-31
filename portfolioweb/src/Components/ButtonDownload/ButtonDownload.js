import React, { useState } from 'react';
import './ButtonDownload.css';


const ButtonDownload = ({text,fileName,filePath}) => {

    const handleDownload = async () => {
        try {
          const response = await fetch(filePath);
          const blob = await response.blob();
    
          
          const blobWithCorrectType = new Blob([blob], { type: 'application/pdf' });
    
          
          const url = URL.createObjectURL(blobWithCorrectType);
    
        
          const a = document.createElement('a');
          a.href = url;
    
        
          a.download = encodeURIComponent(fileName || filePath.substring(filePath.lastIndexOf('/') + 1));
    
          
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
    
          // Revogação do URL do objeto
          URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Erro ao baixar o arquivo', error);
        }
      };
    

    return (
        <button className="button-cvpt" onClick={handleDownload}>
           <div class="icon">
                <div class="arrow"></div>
                <svg class="line" viewBox="0 0 24 24"></svg>
            </div>
            {text}
        </button>
    );
};

export default ButtonDownload;
