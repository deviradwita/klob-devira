export function fetchAllJobs(payload) {
  return {
    type: "Jobs/fetchSuccess",
    payload: payload,
  };
}

export function addJobs(payload) {
  return {
    type: "Jobs/addSuccess",
    payload: payload,
  };
}

export function fetchMyDetail(payload){
  return {
      type : "job/fetchSuccess",
      payload : payload
  }
}

export function fetchJobs() {
  return async function (dispatch, getState) {
    try {
      let existingData = getState()
    
      if (existingData.Jobs.length > 0) {
        return;
      }
    

      const res = await fetch(
        "https://test-server-klob.onrender.com/fakeJob/Devira/mei23"
      );
      if (!res.ok) throw new Error("something wrong");
      const data = await res.json();
      dispatch(fetchAllJobs(data));
    } catch (error) {
      console.log(error, "ini error");
    }
  };
}

export function addNewJob(newJob) {
  return async function (dispatch, getState) {
    try {


     dispatch(addJobs(newJob));

    } catch (error) {
      console.log(error, "ini error");
    }
  };
}

export function fetchDetail(jobVacancyCode) {
  return async function (dispatch, getState) {
    try {
      let existingData = getState()
    
    
      let detail = existingData.Jobs.filter(el => el.jobVacancyCode === jobVacancyCode);
      // console.log(detail, "action");
      dispatch(fetchMyDetail(detail));

     

    } catch (error) {
      console.log(error, "ini error");
    }
  };
}

export function formatCurrency(number) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(number);
}

export function formatDate(dateString) {
  
  // const [year, month, day] = dateString?.split("-");
  // const shortYear = year.slice(-2);
  // return `${day}/${month}/${shortYear}`;

  const [year, month, day] = dateString.split("-").map(Number);
  const now = new Date();
  const elapsedYears = now.getFullYear() - year;
  const elapsedMonths = now.getMonth() - month;
  
  if (elapsedYears > 0) {
    return `${elapsedYears} Tahun yang lalu`;
  } else if (elapsedMonths > 0) {
    return `${elapsedMonths} Bulan yang lalu`;
  } else {
    return "Kurang dari sebulan";
  }
}


export function generateJobVacancyCode() {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  let code = "KVC";
  for (let i = 0; i < 3; i++) {
    code += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  code += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
  code += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
  code += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
  return code;
}
