import { EmailAccountRepository } from "../../domain/ports/repositories";
import { OAuthGateway } from "../../domain/ports/gateways";
import { encrypt } from "../../infrastructure/security/encryption";

export class EmailAccountService {
  constructor(private readonly emailAccountRepository: EmailAccountRepository, private readonly oAuthGateway: OAuthGateway) {}

  createAuthUrl(userId: string): string {
    return this.oAuthGateway.getAuthUrl(userId);
  }

  async connectGmailAccount(userId: string, code: string) {
    const response = await this.oAuthGateway.exchangeCode(code);
    return this.emailAccountRepository.create({
      userId,
      email: response.email,
      accessTokenEncrypted: encrypt(response.accessToken),
      refreshTokenEncrypted: encrypt(response.refreshToken),
      tokenExpiry: response.tokenExpiry
    });
  }

  listAccounts(userId: string) {
    return this.emailAccountRepository.listByUser(userId);
  }
}
