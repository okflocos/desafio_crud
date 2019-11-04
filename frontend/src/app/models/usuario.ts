export class Usuario {
	public id: number
	public nome: string
	public sexo: string
	public data_nascimento: Date

	constructor(){
		this.id = 0
		this.nome = ''
		this.sexo = ''
		this.data_nascimento = new Date()
	}
}
