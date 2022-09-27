const current = async (req, res) => {
  const { email} = req.user;
  res.json({
    status: "ok",
    code: 200,
    ResponseBody: {
      email: email,
    },
  });
};

module.exports = current;
