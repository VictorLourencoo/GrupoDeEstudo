const mongoose = require('mongoose')

const PacienteSchema = new mongosse.Schema({
  nome: {
    type: String,
    required: [true, 'Por favor, informe o nome.'],
    maxlength: [
      80,
      'O nome do atendente, deve ter no maximo 80 caracteres'
    ]
  },

  cpf: {
    type: String,
    unique: true,
    required: [true, 'Por favor, informe o cpf.'],
    minlenght: [14, 'informe os 11 digitos do cpf'],
    maxlenght: [14, 'informe os 11 digitos do cpf'],
    match: [
      /^\d{3}\.\d{3}\\d{3}\-\d{2}$/,
      'informe um cpf valido'

    ]

  },
  telefone: {
    tye: String,
    required: [true, 'Por favor, informe o Telefone.'],
    minlenght: [11, 'informe os 11 digitos do telefone'],
    maxlenght: [11, 'informe os 11 digitos do telefone'],
  },
  senha: {
    type: String,
    required: [true, 'Por favor, informe a senha.'],
    minlenght: [8, 'informe os 8 digitos da senha'],
    maxlenght: [15, 'maximo de 15 caracteres'],
  },
  role: {
    type: String,
    default: 'Paciente'
  },
  criadoEm: {
    type: Date,
    default: Date.now()
  }


})

module.exports = mongoose.model('Paciente', PacienteSchema)