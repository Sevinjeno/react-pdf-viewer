

export const signPdf =(file:File): Promise<Blob> =>{
    return new Promise ((resolve)=>{
      setTimeout(()=>{
        // server "signing"
        resolve(file);
      },2000);
    });
};