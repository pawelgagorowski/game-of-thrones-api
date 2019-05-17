const pingRoute = (req, res)=> {
  return res.json({ result: 'API service is running' });
};

export default pingRoute;
