import { useEffect, useState } from "react";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import FormThree from "./components/FormThree";

function App() {
  const [count, setCount] = useState(0);
  const [nbutt, setnBut] = useState(false);
  const [pbutt, setpBut] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    pass: "",
    padd: "",
    cadd:"",
    pin:"",
    ten:"",
    twe:"",
    Grad:""
  });

  const arr = ["Personal details", "Address", "academic details", "others"];

  

  useEffect(() => {
    if (count == arr.length - 1) {
      setnBut(true);
    } else if (count == 0) {
      setpBut(true);
    } else {
      setpBut(false);
      setnBut(false);
    }
  }, [arr]);

  return (
    <>
      <div className="body h-[100vh] w-[100vw] flex justify-center items-center flex-col ">
        <h1 className="p-8 text-3xl underline ">{arr[count]}</h1>
        <div className="main bg-red-200 h-[50vh] w-[50%] flex justify-center items-center rounded-lg">
          {count === 0 ? (
            <FormOne formData={formData} setFormData={setFormData}  />
          ) : count === 1 ? (
            <FormTwo formData={formData} setFormData={setFormData} />
          ) : count === 2 ? (
            <FormThree formData={formData} setFormData={setFormData} />
          ) : null}
        </div>

        <div className="pagenation p-8">
          

          <div className="join grid grid-cols-2">
            <button
              disabled={pbutt}
              className="join-item btn btn-outline"
              onClick={() => setCount(count - 1)}
            >
              Previous page
            </button>
            <button
              disabled={nbutt}
              className="join-item btn btn-outline"
              onClick={() =>{ 
                if (count == 2) {
                  alert("form submitted you can check console for this ")
                  console.log(formData);
                }else{
                setCount(count + 1)
                }
              }}
            >
              {
                count == 2 ? "Submit" : 'Next'

              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
