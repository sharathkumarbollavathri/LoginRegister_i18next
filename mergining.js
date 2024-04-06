
const glob=require('glob')
const fs=require('fs')

// let content=[]

const EnDestination='.\\public\\locales\\en\\translation.json'
const FrDestination='.\\public\\locales\\fr\\translation.json'
const TEDestination='.\\public\\locales\\tel\\translation.json'
const translationFiles=glob.sync('src/**/translation.json')
let ENN={}
let FRR={}
let TEL={}
for(let i=0;i<translationFiles.length;i++){
  

  const spliting=translationFiles[i].split("\\")
  content1=fs.readFileSync(translationFiles[i],"utf8")

  if(spliting[spliting.length-2] ==='en' ){
    Object.assign(ENN,JSON.parse(content1))
  }
  else if(spliting[spliting.length-2] ==='fr'){
    Object.assign(FRR,JSON.parse(content1))
  }
  else if(spliting[spliting.length-2] ==='tel'){
    Object.assign(TEL,JSON.parse(content1))
  }
  
}
fs.writeFileSync(EnDestination, JSON.stringify(ENN, null, 2));
fs.writeFileSync(FrDestination, JSON.stringify(FRR, null, 2));
fs.writeFileSync(TEDestination, JSON.stringify(TEL, null, 2));

