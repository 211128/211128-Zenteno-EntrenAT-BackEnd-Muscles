import { IsString, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional,IsEmail} from 'class-validator';


export class ValidatorRegisterUser {

    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    public name: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @Length(10) 
    public height: number;

    @IsNotEmpty()
    @Length(10) 
    public weight: number;

    @IsNotEmpty()
    @Length(10) 
    public sex: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

   

    constructor(
        name: string,
        email: string,
        height: number,
        weight: number,
        sex: string,
        password: string,
    ) {
        this.name = name;
        this.email = email;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
        this.password = password;
    }


}
export class ValidateLogin {
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        email:string,
        password:string,
    ){
        this.email = email,
        this.password = password
    }
}

export class ValidatorupdatePassword {

    @IsNotEmpty()
    
    public id: number;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        id: number,
        password: string
    ) {
        this.id = id;
        this.password = password;
    }
}


export class ValidatorId {
    @IsNotEmpty()
    public id: number;
    constructor(id:number) {
        this.id = id
    }
}


