function verifyData(req, res, next) {
  const { name, email } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return res.status(400).json({ error: 'Nome inválido' });
  }

  next();
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = verifyData;
