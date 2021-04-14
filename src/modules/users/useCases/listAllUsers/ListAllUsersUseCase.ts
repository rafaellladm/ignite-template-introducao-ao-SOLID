import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExist = this.usersRepository.findById(user_id);

    if (!userAlreadyExist) {
      throw new Error("User doesn't exist!");
    }

    if (!userAlreadyExist.admin) {
      throw new Error("User is not admin");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
