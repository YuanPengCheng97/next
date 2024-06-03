"use client";

export default function SetToken() {
  const setTokenFunc = () => {
    document.cookie = "token=STEP4JKCO3LON2YIH6";
  };
  return (
    <div className="w-[100px] inline-block mt-[20px]" onClick={setTokenFunc}>
      setToken
    </div>
  );
}
