

export function fetchAllJobs(payload){
    return {
        type : "Jobs/fetchSuccess",
        payload : payload
    }
}




export function fetchJobs () {
  return async function (dispatch, getState){
      try {
          const res = await fetch("https://test-server-klob.onrender.com/fakeJob/Devira/mei23")
          if (!res.ok) throw new Error ("something wrong")
          const data = await res.json()
          dispatch(fetchAllJobs(data))  
      } catch (error) {
          console.log(error, "ini error");
      }

  

  }
}

export function formatCurrency(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
  return formatter.format(number);
}


export function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const shortYear = year.slice(-2);
  return `${day}/${month}/${shortYear}`;
}
