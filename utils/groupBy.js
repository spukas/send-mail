const groupBy = (data, arg1, arg2) =>
  data.reduce((res, val) => {
    if (res.length < 1) {
      return [...res, val];
    }

    if (!res.map(item => item[arg1]).includes(val[arg1])) {
      return [...res, val];
    }

    if (
      !res
        .filter(item => item[arg1] === val[arg1])
        .map(item => item[arg2])
        .includes(val[arg2])
    ) {
      return [...res, val];
    }

    return res;
  }, []);

module.exports = groupBy;
