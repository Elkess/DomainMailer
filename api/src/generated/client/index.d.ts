
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model audit_logs
 * 
 */
export type audit_logs = $Result.DefaultSelection<Prisma.$audit_logsPayload>
/**
 * Model campaign_notifications
 * 
 */
export type campaign_notifications = $Result.DefaultSelection<Prisma.$campaign_notificationsPayload>
/**
 * Model campaigns
 * 
 */
export type campaigns = $Result.DefaultSelection<Prisma.$campaignsPayload>
/**
 * Model email_logs
 * 
 */
export type email_logs = $Result.DefaultSelection<Prisma.$email_logsPayload>
/**
 * Model gmail_accounts
 * 
 */
export type gmail_accounts = $Result.DefaultSelection<Prisma.$gmail_accountsPayload>
/**
 * Model leads
 * 
 */
export type leads = $Result.DefaultSelection<Prisma.$leadsPayload>
/**
 * Model queue_jobs
 * 
 */
export type queue_jobs = $Result.DefaultSelection<Prisma.$queue_jobsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CampaignStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const GmailAccountStatus: {
  ACTIVE: 'ACTIVE',
  REVOKED: 'REVOKED',
  ERROR: 'ERROR'
};

export type GmailAccountStatus = (typeof GmailAccountStatus)[keyof typeof GmailAccountStatus]


export const LeadStatus: {
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  SENDING: 'SENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]

}

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type GmailAccountStatus = $Enums.GmailAccountStatus

export const GmailAccountStatus: typeof $Enums.GmailAccountStatus

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_logs
 * const audit_logs = await prisma.audit_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_logs
   * const audit_logs = await prisma.audit_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.audit_logs`: Exposes CRUD operations for the **audit_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_logs
    * const audit_logs = await prisma.audit_logs.findMany()
    * ```
    */
  get audit_logs(): Prisma.audit_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign_notifications`: Exposes CRUD operations for the **campaign_notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaign_notifications
    * const campaign_notifications = await prisma.campaign_notifications.findMany()
    * ```
    */
  get campaign_notifications(): Prisma.campaign_notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaigns`: Exposes CRUD operations for the **campaigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaigns.findMany()
    * ```
    */
  get campaigns(): Prisma.campaignsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_logs`: Exposes CRUD operations for the **email_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_logs
    * const email_logs = await prisma.email_logs.findMany()
    * ```
    */
  get email_logs(): Prisma.email_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gmail_accounts`: Exposes CRUD operations for the **gmail_accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gmail_accounts
    * const gmail_accounts = await prisma.gmail_accounts.findMany()
    * ```
    */
  get gmail_accounts(): Prisma.gmail_accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.leadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queue_jobs`: Exposes CRUD operations for the **queue_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queue_jobs
    * const queue_jobs = await prisma.queue_jobs.findMany()
    * ```
    */
  get queue_jobs(): Prisma.queue_jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    audit_logs: 'audit_logs',
    campaign_notifications: 'campaign_notifications',
    campaigns: 'campaigns',
    email_logs: 'email_logs',
    gmail_accounts: 'gmail_accounts',
    leads: 'leads',
    queue_jobs: 'queue_jobs',
    users: 'users',
    notifications: 'notifications'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "audit_logs" | "campaign_notifications" | "campaigns" | "email_logs" | "gmail_accounts" | "leads" | "queue_jobs" | "users" | "notifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      audit_logs: {
        payload: Prisma.$audit_logsPayload<ExtArgs>
        fields: Prisma.audit_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findFirst: {
            args: Prisma.audit_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findMany: {
            args: Prisma.audit_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          create: {
            args: Prisma.audit_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          createMany: {
            args: Prisma.audit_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          delete: {
            args: Prisma.audit_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          update: {
            args: Prisma.audit_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          deleteMany: {
            args: Prisma.audit_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          upsert: {
            args: Prisma.audit_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          aggregate: {
            args: Prisma.Audit_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_logs>
          }
          groupBy: {
            args: Prisma.audit_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsCountAggregateOutputType> | number
          }
        }
      }
      campaign_notifications: {
        payload: Prisma.$campaign_notificationsPayload<ExtArgs>
        fields: Prisma.campaign_notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.campaign_notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.campaign_notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>
          }
          findFirst: {
            args: Prisma.campaign_notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.campaign_notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>
          }
          findMany: {
            args: Prisma.campaign_notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>[]
          }
          create: {
            args: Prisma.campaign_notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>
          }
          createMany: {
            args: Prisma.campaign_notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.campaign_notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>[]
          }
          delete: {
            args: Prisma.campaign_notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>
          }
          update: {
            args: Prisma.campaign_notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>
          }
          deleteMany: {
            args: Prisma.campaign_notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.campaign_notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.campaign_notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>[]
          }
          upsert: {
            args: Prisma.campaign_notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_notificationsPayload>
          }
          aggregate: {
            args: Prisma.Campaign_notificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign_notifications>
          }
          groupBy: {
            args: Prisma.campaign_notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Campaign_notificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.campaign_notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<Campaign_notificationsCountAggregateOutputType> | number
          }
        }
      }
      campaigns: {
        payload: Prisma.$campaignsPayload<ExtArgs>
        fields: Prisma.campaignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.campaignsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.campaignsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          findFirst: {
            args: Prisma.campaignsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.campaignsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          findMany: {
            args: Prisma.campaignsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>[]
          }
          create: {
            args: Prisma.campaignsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          createMany: {
            args: Prisma.campaignsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.campaignsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>[]
          }
          delete: {
            args: Prisma.campaignsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          update: {
            args: Prisma.campaignsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          deleteMany: {
            args: Prisma.campaignsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.campaignsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.campaignsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>[]
          }
          upsert: {
            args: Prisma.campaignsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          aggregate: {
            args: Prisma.CampaignsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaigns>
          }
          groupBy: {
            args: Prisma.campaignsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.campaignsCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignsCountAggregateOutputType> | number
          }
        }
      }
      email_logs: {
        payload: Prisma.$email_logsPayload<ExtArgs>
        fields: Prisma.email_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>
          }
          findFirst: {
            args: Prisma.email_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>
          }
          findMany: {
            args: Prisma.email_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>[]
          }
          create: {
            args: Prisma.email_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>
          }
          createMany: {
            args: Prisma.email_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.email_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>[]
          }
          delete: {
            args: Prisma.email_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>
          }
          update: {
            args: Prisma.email_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>
          }
          deleteMany: {
            args: Prisma.email_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.email_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>[]
          }
          upsert: {
            args: Prisma.email_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>
          }
          aggregate: {
            args: Prisma.Email_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_logs>
          }
          groupBy: {
            args: Prisma.email_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Email_logsCountAggregateOutputType> | number
          }
        }
      }
      gmail_accounts: {
        payload: Prisma.$gmail_accountsPayload<ExtArgs>
        fields: Prisma.gmail_accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gmail_accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gmail_accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>
          }
          findFirst: {
            args: Prisma.gmail_accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gmail_accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>
          }
          findMany: {
            args: Prisma.gmail_accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>[]
          }
          create: {
            args: Prisma.gmail_accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>
          }
          createMany: {
            args: Prisma.gmail_accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gmail_accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>[]
          }
          delete: {
            args: Prisma.gmail_accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>
          }
          update: {
            args: Prisma.gmail_accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>
          }
          deleteMany: {
            args: Prisma.gmail_accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gmail_accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gmail_accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>[]
          }
          upsert: {
            args: Prisma.gmail_accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gmail_accountsPayload>
          }
          aggregate: {
            args: Prisma.Gmail_accountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGmail_accounts>
          }
          groupBy: {
            args: Prisma.gmail_accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gmail_accountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.gmail_accountsCountArgs<ExtArgs>
            result: $Utils.Optional<Gmail_accountsCountAggregateOutputType> | number
          }
        }
      }
      leads: {
        payload: Prisma.$leadsPayload<ExtArgs>
        fields: Prisma.leadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findFirst: {
            args: Prisma.leadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findMany: {
            args: Prisma.leadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          create: {
            args: Prisma.leadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          createMany: {
            args: Prisma.leadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          delete: {
            args: Prisma.leadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          update: {
            args: Prisma.leadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          deleteMany: {
            args: Prisma.leadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          upsert: {
            args: Prisma.leadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.leadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.leadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
      queue_jobs: {
        payload: Prisma.$queue_jobsPayload<ExtArgs>
        fields: Prisma.queue_jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.queue_jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.queue_jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>
          }
          findFirst: {
            args: Prisma.queue_jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.queue_jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>
          }
          findMany: {
            args: Prisma.queue_jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>[]
          }
          create: {
            args: Prisma.queue_jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>
          }
          createMany: {
            args: Prisma.queue_jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.queue_jobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>[]
          }
          delete: {
            args: Prisma.queue_jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>
          }
          update: {
            args: Prisma.queue_jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>
          }
          deleteMany: {
            args: Prisma.queue_jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.queue_jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.queue_jobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>[]
          }
          upsert: {
            args: Prisma.queue_jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_jobsPayload>
          }
          aggregate: {
            args: Prisma.Queue_jobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueue_jobs>
          }
          groupBy: {
            args: Prisma.queue_jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Queue_jobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.queue_jobsCountArgs<ExtArgs>
            result: $Utils.Optional<Queue_jobsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    audit_logs?: audit_logsOmit
    campaign_notifications?: campaign_notificationsOmit
    campaigns?: campaignsOmit
    email_logs?: email_logsOmit
    gmail_accounts?: gmail_accountsOmit
    leads?: leadsOmit
    queue_jobs?: queue_jobsOmit
    users?: usersOmit
    notifications?: notificationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignsCountOutputType
   */

  export type CampaignsCountOutputType = {
    email_logs: number
    leads: number
    queue_jobs: number
  }

  export type CampaignsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email_logs?: boolean | CampaignsCountOutputTypeCountEmail_logsArgs
    leads?: boolean | CampaignsCountOutputTypeCountLeadsArgs
    queue_jobs?: boolean | CampaignsCountOutputTypeCountQueue_jobsArgs
  }

  // Custom InputTypes
  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsCountOutputType
     */
    select?: CampaignsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeCountEmail_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_logsWhereInput
  }

  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
  }

  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeCountQueue_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: queue_jobsWhereInput
  }


  /**
   * Count Type Gmail_accountsCountOutputType
   */

  export type Gmail_accountsCountOutputType = {
    campaigns: number
    email_logs: number
    leads: number
  }

  export type Gmail_accountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | Gmail_accountsCountOutputTypeCountCampaignsArgs
    email_logs?: boolean | Gmail_accountsCountOutputTypeCountEmail_logsArgs
    leads?: boolean | Gmail_accountsCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * Gmail_accountsCountOutputType without action
   */
  export type Gmail_accountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gmail_accountsCountOutputType
     */
    select?: Gmail_accountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Gmail_accountsCountOutputType without action
   */
  export type Gmail_accountsCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaignsWhereInput
  }

  /**
   * Gmail_accountsCountOutputType without action
   */
  export type Gmail_accountsCountOutputTypeCountEmail_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_logsWhereInput
  }

  /**
   * Gmail_accountsCountOutputType without action
   */
  export type Gmail_accountsCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
  }


  /**
   * Count Type LeadsCountOutputType
   */

  export type LeadsCountOutputType = {
    email_logs: number
    queue_jobs: number
  }

  export type LeadsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email_logs?: boolean | LeadsCountOutputTypeCountEmail_logsArgs
    queue_jobs?: boolean | LeadsCountOutputTypeCountQueue_jobsArgs
  }

  // Custom InputTypes
  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCountOutputType
     */
    select?: LeadsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeCountEmail_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_logsWhereInput
  }

  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeCountQueue_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: queue_jobsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    audit_logs: number
    campaigns: number
    email_logs: number
    gmail_accounts: number
    leads: number
    queue_jobs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | UsersCountOutputTypeCountAudit_logsArgs
    campaigns?: boolean | UsersCountOutputTypeCountCampaignsArgs
    email_logs?: boolean | UsersCountOutputTypeCountEmail_logsArgs
    gmail_accounts?: boolean | UsersCountOutputTypeCountGmail_accountsArgs
    leads?: boolean | UsersCountOutputTypeCountLeadsArgs
    queue_jobs?: boolean | UsersCountOutputTypeCountQueue_jobsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaignsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmail_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGmail_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gmail_accountsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountQueue_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: queue_jobsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model audit_logs
   */

  export type AggregateAudit_logs = {
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  export type Audit_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    resource: string | null
    resource_id: string | null
    metadata: string | null
    created_at: Date | null
  }

  export type Audit_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    resource: string | null
    resource_id: string | null
    metadata: string | null
    created_at: Date | null
  }

  export type Audit_logsCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    resource: number
    resource_id: number
    metadata: number
    created_at: number
    _all: number
  }


  export type Audit_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    resource?: true
    resource_id?: true
    metadata?: true
    created_at?: true
  }

  export type Audit_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    resource?: true
    resource_id?: true
    metadata?: true
    created_at?: true
  }

  export type Audit_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    resource?: true
    resource_id?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type Audit_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to aggregate.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_logs
    **/
    _count?: true | Audit_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_logsMaxAggregateInputType
  }

  export type GetAudit_logsAggregateType<T extends Audit_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_logs[P]>
      : GetScalarType<T[P], AggregateAudit_logs[P]>
  }




  export type audit_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithAggregationInput | audit_logsOrderByWithAggregationInput[]
    by: Audit_logsScalarFieldEnum[] | Audit_logsScalarFieldEnum
    having?: audit_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_logsCountAggregateInputType | true
    _min?: Audit_logsMinAggregateInputType
    _max?: Audit_logsMaxAggregateInputType
  }

  export type Audit_logsGroupByOutputType = {
    id: string
    user_id: string
    action: string
    resource: string
    resource_id: string | null
    metadata: string | null
    created_at: Date
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  type GetAudit_logsGroupByPayload<T extends audit_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
        }
      >
    >


  export type audit_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    resource?: boolean
    resource_id?: boolean
    metadata?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    resource?: boolean
    resource_id?: boolean
    metadata?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    resource?: boolean
    resource_id?: boolean
    metadata?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    resource?: boolean
    resource_id?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type audit_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action" | "resource" | "resource_id" | "metadata" | "created_at", ExtArgs["result"]["audit_logs"]>
  export type audit_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type audit_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type audit_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $audit_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      action: string
      resource: string
      resource_id: string | null
      metadata: string | null
      created_at: Date
    }, ExtArgs["result"]["audit_logs"]>
    composites: {}
  }

  type audit_logsGetPayload<S extends boolean | null | undefined | audit_logsDefaultArgs> = $Result.GetResult<Prisma.$audit_logsPayload, S>

  type audit_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_logsCountAggregateInputType | true
    }

  export interface audit_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_logs'], meta: { name: 'audit_logs' } }
    /**
     * Find zero or one Audit_logs that matches the filter.
     * @param {audit_logsFindUniqueArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_logsFindUniqueArgs>(args: SelectSubset<T, audit_logsFindUniqueArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_logsFindUniqueOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_logsFindFirstArgs>(args?: SelectSubset<T, audit_logsFindFirstArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany()
     * 
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends audit_logsFindManyArgs>(args?: SelectSubset<T, audit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_logs.
     * @param {audit_logsCreateArgs} args - Arguments to create a Audit_logs.
     * @example
     * // Create one Audit_logs
     * const Audit_logs = await prisma.audit_logs.create({
     *   data: {
     *     // ... data to create a Audit_logs
     *   }
     * })
     * 
     */
    create<T extends audit_logsCreateArgs>(args: SelectSubset<T, audit_logsCreateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_logs.
     * @param {audit_logsCreateManyArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_logsCreateManyArgs>(args?: SelectSubset<T, audit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_logs and returns the data saved in the database.
     * @param {audit_logsCreateManyAndReturnArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_logs and only return the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_logs.
     * @param {audit_logsDeleteArgs} args - Arguments to delete one Audit_logs.
     * @example
     * // Delete one Audit_logs
     * const Audit_logs = await prisma.audit_logs.delete({
     *   where: {
     *     // ... filter to delete one Audit_logs
     *   }
     * })
     * 
     */
    delete<T extends audit_logsDeleteArgs>(args: SelectSubset<T, audit_logsDeleteArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_logs.
     * @param {audit_logsUpdateArgs} args - Arguments to update one Audit_logs.
     * @example
     * // Update one Audit_logs
     * const audit_logs = await prisma.audit_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_logsUpdateArgs>(args: SelectSubset<T, audit_logsUpdateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logsDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_logsDeleteManyArgs>(args?: SelectSubset<T, audit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_logsUpdateManyArgs>(args: SelectSubset<T, audit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs and returns the data updated in the database.
     * @param {audit_logsUpdateManyAndReturnArgs} args - Arguments to update many Audit_logs.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_logs and only return the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends audit_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_logs.
     * @param {audit_logsUpsertArgs} args - Arguments to update or create a Audit_logs.
     * @example
     * // Update or create a Audit_logs
     * const audit_logs = await prisma.audit_logs.upsert({
     *   create: {
     *     // ... data to create a Audit_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_logs we want to update
     *   }
     * })
     */
    upsert<T extends audit_logsUpsertArgs>(args: SelectSubset<T, audit_logsUpsertArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_logs.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_logsCountArgs>(
      args?: Subset<T, audit_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_logsAggregateArgs>(args: Subset<T, Audit_logsAggregateArgs>): Prisma.PrismaPromise<GetAudit_logsAggregateType<T>>

    /**
     * Group by Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends audit_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logsGroupByArgs['orderBy'] }
        : { orderBy?: audit_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, audit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_logs model
   */
  readonly fields: audit_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit_logs model
   */
  interface audit_logsFieldRefs {
    readonly id: FieldRef<"audit_logs", 'String'>
    readonly user_id: FieldRef<"audit_logs", 'String'>
    readonly action: FieldRef<"audit_logs", 'String'>
    readonly resource: FieldRef<"audit_logs", 'String'>
    readonly resource_id: FieldRef<"audit_logs", 'String'>
    readonly metadata: FieldRef<"audit_logs", 'String'>
    readonly created_at: FieldRef<"audit_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_logs findUnique
   */
  export type audit_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findUniqueOrThrow
   */
  export type audit_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findFirst
   */
  export type audit_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findFirstOrThrow
   */
  export type audit_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findMany
   */
  export type audit_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs create
   */
  export type audit_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_logs.
     */
    data: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
  }

  /**
   * audit_logs createMany
   */
  export type audit_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
  }

  /**
   * audit_logs createManyAndReturn
   */
  export type audit_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs update
   */
  export type audit_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_logs.
     */
    data: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
    /**
     * Choose, which audit_logs to update.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs updateMany
   */
  export type audit_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_logs updateManyAndReturn
   */
  export type audit_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs upsert
   */
  export type audit_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_logs to update in case it exists.
     */
    where: audit_logsWhereUniqueInput
    /**
     * In case the audit_logs found by the `where` argument doesn't exist, create a new audit_logs with this data.
     */
    create: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
    /**
     * In case the audit_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
  }

  /**
   * audit_logs delete
   */
  export type audit_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter which audit_logs to delete.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs deleteMany
   */
  export type audit_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_logs without action
   */
  export type audit_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
  }


  /**
   * Model campaign_notifications
   */

  export type AggregateCampaign_notifications = {
    _count: Campaign_notificationsCountAggregateOutputType | null
    _min: Campaign_notificationsMinAggregateOutputType | null
    _max: Campaign_notificationsMaxAggregateOutputType | null
  }

  export type Campaign_notificationsMinAggregateOutputType = {
    id: string | null
    campaign_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type Campaign_notificationsMaxAggregateOutputType = {
    id: string | null
    campaign_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type Campaign_notificationsCountAggregateOutputType = {
    id: number
    campaign_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type Campaign_notificationsMinAggregateInputType = {
    id?: true
    campaign_id?: true
    user_id?: true
    created_at?: true
  }

  export type Campaign_notificationsMaxAggregateInputType = {
    id?: true
    campaign_id?: true
    user_id?: true
    created_at?: true
  }

  export type Campaign_notificationsCountAggregateInputType = {
    id?: true
    campaign_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type Campaign_notificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaign_notifications to aggregate.
     */
    where?: campaign_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_notifications to fetch.
     */
    orderBy?: campaign_notificationsOrderByWithRelationInput | campaign_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: campaign_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned campaign_notifications
    **/
    _count?: true | Campaign_notificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Campaign_notificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Campaign_notificationsMaxAggregateInputType
  }

  export type GetCampaign_notificationsAggregateType<T extends Campaign_notificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign_notifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign_notifications[P]>
      : GetScalarType<T[P], AggregateCampaign_notifications[P]>
  }




  export type campaign_notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaign_notificationsWhereInput
    orderBy?: campaign_notificationsOrderByWithAggregationInput | campaign_notificationsOrderByWithAggregationInput[]
    by: Campaign_notificationsScalarFieldEnum[] | Campaign_notificationsScalarFieldEnum
    having?: campaign_notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Campaign_notificationsCountAggregateInputType | true
    _min?: Campaign_notificationsMinAggregateInputType
    _max?: Campaign_notificationsMaxAggregateInputType
  }

  export type Campaign_notificationsGroupByOutputType = {
    id: string
    campaign_id: string
    user_id: string
    created_at: Date
    _count: Campaign_notificationsCountAggregateOutputType | null
    _min: Campaign_notificationsMinAggregateOutputType | null
    _max: Campaign_notificationsMaxAggregateOutputType | null
  }

  type GetCampaign_notificationsGroupByPayload<T extends campaign_notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Campaign_notificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Campaign_notificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Campaign_notificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Campaign_notificationsGroupByOutputType[P]>
        }
      >
    >


  export type campaign_notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaign_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["campaign_notifications"]>

  export type campaign_notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaign_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["campaign_notifications"]>

  export type campaign_notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaign_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["campaign_notifications"]>

  export type campaign_notificationsSelectScalar = {
    id?: boolean
    campaign_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type campaign_notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaign_id" | "user_id" | "created_at", ExtArgs["result"]["campaign_notifications"]>

  export type $campaign_notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "campaign_notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaign_id: string
      user_id: string
      created_at: Date
    }, ExtArgs["result"]["campaign_notifications"]>
    composites: {}
  }

  type campaign_notificationsGetPayload<S extends boolean | null | undefined | campaign_notificationsDefaultArgs> = $Result.GetResult<Prisma.$campaign_notificationsPayload, S>

  type campaign_notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<campaign_notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Campaign_notificationsCountAggregateInputType | true
    }

  export interface campaign_notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['campaign_notifications'], meta: { name: 'campaign_notifications' } }
    /**
     * Find zero or one Campaign_notifications that matches the filter.
     * @param {campaign_notificationsFindUniqueArgs} args - Arguments to find a Campaign_notifications
     * @example
     * // Get one Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends campaign_notificationsFindUniqueArgs>(args: SelectSubset<T, campaign_notificationsFindUniqueArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign_notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {campaign_notificationsFindUniqueOrThrowArgs} args - Arguments to find a Campaign_notifications
     * @example
     * // Get one Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends campaign_notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, campaign_notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_notificationsFindFirstArgs} args - Arguments to find a Campaign_notifications
     * @example
     * // Get one Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends campaign_notificationsFindFirstArgs>(args?: SelectSubset<T, campaign_notificationsFindFirstArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign_notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_notificationsFindFirstOrThrowArgs} args - Arguments to find a Campaign_notifications
     * @example
     * // Get one Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends campaign_notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, campaign_notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaign_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.findMany()
     * 
     * // Get first 10 Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaign_notificationsWithIdOnly = await prisma.campaign_notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends campaign_notificationsFindManyArgs>(args?: SelectSubset<T, campaign_notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign_notifications.
     * @param {campaign_notificationsCreateArgs} args - Arguments to create a Campaign_notifications.
     * @example
     * // Create one Campaign_notifications
     * const Campaign_notifications = await prisma.campaign_notifications.create({
     *   data: {
     *     // ... data to create a Campaign_notifications
     *   }
     * })
     * 
     */
    create<T extends campaign_notificationsCreateArgs>(args: SelectSubset<T, campaign_notificationsCreateArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaign_notifications.
     * @param {campaign_notificationsCreateManyArgs} args - Arguments to create many Campaign_notifications.
     * @example
     * // Create many Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends campaign_notificationsCreateManyArgs>(args?: SelectSubset<T, campaign_notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaign_notifications and returns the data saved in the database.
     * @param {campaign_notificationsCreateManyAndReturnArgs} args - Arguments to create many Campaign_notifications.
     * @example
     * // Create many Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaign_notifications and only return the `id`
     * const campaign_notificationsWithIdOnly = await prisma.campaign_notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends campaign_notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, campaign_notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign_notifications.
     * @param {campaign_notificationsDeleteArgs} args - Arguments to delete one Campaign_notifications.
     * @example
     * // Delete one Campaign_notifications
     * const Campaign_notifications = await prisma.campaign_notifications.delete({
     *   where: {
     *     // ... filter to delete one Campaign_notifications
     *   }
     * })
     * 
     */
    delete<T extends campaign_notificationsDeleteArgs>(args: SelectSubset<T, campaign_notificationsDeleteArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign_notifications.
     * @param {campaign_notificationsUpdateArgs} args - Arguments to update one Campaign_notifications.
     * @example
     * // Update one Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends campaign_notificationsUpdateArgs>(args: SelectSubset<T, campaign_notificationsUpdateArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaign_notifications.
     * @param {campaign_notificationsDeleteManyArgs} args - Arguments to filter Campaign_notifications to delete.
     * @example
     * // Delete a few Campaign_notifications
     * const { count } = await prisma.campaign_notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends campaign_notificationsDeleteManyArgs>(args?: SelectSubset<T, campaign_notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaign_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends campaign_notificationsUpdateManyArgs>(args: SelectSubset<T, campaign_notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaign_notifications and returns the data updated in the database.
     * @param {campaign_notificationsUpdateManyAndReturnArgs} args - Arguments to update many Campaign_notifications.
     * @example
     * // Update many Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaign_notifications and only return the `id`
     * const campaign_notificationsWithIdOnly = await prisma.campaign_notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends campaign_notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, campaign_notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign_notifications.
     * @param {campaign_notificationsUpsertArgs} args - Arguments to update or create a Campaign_notifications.
     * @example
     * // Update or create a Campaign_notifications
     * const campaign_notifications = await prisma.campaign_notifications.upsert({
     *   create: {
     *     // ... data to create a Campaign_notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign_notifications we want to update
     *   }
     * })
     */
    upsert<T extends campaign_notificationsUpsertArgs>(args: SelectSubset<T, campaign_notificationsUpsertArgs<ExtArgs>>): Prisma__campaign_notificationsClient<$Result.GetResult<Prisma.$campaign_notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaign_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_notificationsCountArgs} args - Arguments to filter Campaign_notifications to count.
     * @example
     * // Count the number of Campaign_notifications
     * const count = await prisma.campaign_notifications.count({
     *   where: {
     *     // ... the filter for the Campaign_notifications we want to count
     *   }
     * })
    **/
    count<T extends campaign_notificationsCountArgs>(
      args?: Subset<T, campaign_notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Campaign_notificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_notificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Campaign_notificationsAggregateArgs>(args: Subset<T, Campaign_notificationsAggregateArgs>): Prisma.PrismaPromise<GetCampaign_notificationsAggregateType<T>>

    /**
     * Group by Campaign_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends campaign_notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: campaign_notificationsGroupByArgs['orderBy'] }
        : { orderBy?: campaign_notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, campaign_notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaign_notificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the campaign_notifications model
   */
  readonly fields: campaign_notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for campaign_notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__campaign_notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the campaign_notifications model
   */
  interface campaign_notificationsFieldRefs {
    readonly id: FieldRef<"campaign_notifications", 'String'>
    readonly campaign_id: FieldRef<"campaign_notifications", 'String'>
    readonly user_id: FieldRef<"campaign_notifications", 'String'>
    readonly created_at: FieldRef<"campaign_notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * campaign_notifications findUnique
   */
  export type campaign_notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * Filter, which campaign_notifications to fetch.
     */
    where: campaign_notificationsWhereUniqueInput
  }

  /**
   * campaign_notifications findUniqueOrThrow
   */
  export type campaign_notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * Filter, which campaign_notifications to fetch.
     */
    where: campaign_notificationsWhereUniqueInput
  }

  /**
   * campaign_notifications findFirst
   */
  export type campaign_notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * Filter, which campaign_notifications to fetch.
     */
    where?: campaign_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_notifications to fetch.
     */
    orderBy?: campaign_notificationsOrderByWithRelationInput | campaign_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaign_notifications.
     */
    cursor?: campaign_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaign_notifications.
     */
    distinct?: Campaign_notificationsScalarFieldEnum | Campaign_notificationsScalarFieldEnum[]
  }

  /**
   * campaign_notifications findFirstOrThrow
   */
  export type campaign_notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * Filter, which campaign_notifications to fetch.
     */
    where?: campaign_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_notifications to fetch.
     */
    orderBy?: campaign_notificationsOrderByWithRelationInput | campaign_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaign_notifications.
     */
    cursor?: campaign_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaign_notifications.
     */
    distinct?: Campaign_notificationsScalarFieldEnum | Campaign_notificationsScalarFieldEnum[]
  }

  /**
   * campaign_notifications findMany
   */
  export type campaign_notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * Filter, which campaign_notifications to fetch.
     */
    where?: campaign_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_notifications to fetch.
     */
    orderBy?: campaign_notificationsOrderByWithRelationInput | campaign_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing campaign_notifications.
     */
    cursor?: campaign_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_notifications.
     */
    skip?: number
    distinct?: Campaign_notificationsScalarFieldEnum | Campaign_notificationsScalarFieldEnum[]
  }

  /**
   * campaign_notifications create
   */
  export type campaign_notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a campaign_notifications.
     */
    data: XOR<campaign_notificationsCreateInput, campaign_notificationsUncheckedCreateInput>
  }

  /**
   * campaign_notifications createMany
   */
  export type campaign_notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many campaign_notifications.
     */
    data: campaign_notificationsCreateManyInput | campaign_notificationsCreateManyInput[]
  }

  /**
   * campaign_notifications createManyAndReturn
   */
  export type campaign_notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many campaign_notifications.
     */
    data: campaign_notificationsCreateManyInput | campaign_notificationsCreateManyInput[]
  }

  /**
   * campaign_notifications update
   */
  export type campaign_notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a campaign_notifications.
     */
    data: XOR<campaign_notificationsUpdateInput, campaign_notificationsUncheckedUpdateInput>
    /**
     * Choose, which campaign_notifications to update.
     */
    where: campaign_notificationsWhereUniqueInput
  }

  /**
   * campaign_notifications updateMany
   */
  export type campaign_notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update campaign_notifications.
     */
    data: XOR<campaign_notificationsUpdateManyMutationInput, campaign_notificationsUncheckedUpdateManyInput>
    /**
     * Filter which campaign_notifications to update
     */
    where?: campaign_notificationsWhereInput
    /**
     * Limit how many campaign_notifications to update.
     */
    limit?: number
  }

  /**
   * campaign_notifications updateManyAndReturn
   */
  export type campaign_notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * The data used to update campaign_notifications.
     */
    data: XOR<campaign_notificationsUpdateManyMutationInput, campaign_notificationsUncheckedUpdateManyInput>
    /**
     * Filter which campaign_notifications to update
     */
    where?: campaign_notificationsWhereInput
    /**
     * Limit how many campaign_notifications to update.
     */
    limit?: number
  }

  /**
   * campaign_notifications upsert
   */
  export type campaign_notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the campaign_notifications to update in case it exists.
     */
    where: campaign_notificationsWhereUniqueInput
    /**
     * In case the campaign_notifications found by the `where` argument doesn't exist, create a new campaign_notifications with this data.
     */
    create: XOR<campaign_notificationsCreateInput, campaign_notificationsUncheckedCreateInput>
    /**
     * In case the campaign_notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<campaign_notificationsUpdateInput, campaign_notificationsUncheckedUpdateInput>
  }

  /**
   * campaign_notifications delete
   */
  export type campaign_notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
    /**
     * Filter which campaign_notifications to delete.
     */
    where: campaign_notificationsWhereUniqueInput
  }

  /**
   * campaign_notifications deleteMany
   */
  export type campaign_notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaign_notifications to delete
     */
    where?: campaign_notificationsWhereInput
    /**
     * Limit how many campaign_notifications to delete.
     */
    limit?: number
  }

  /**
   * campaign_notifications without action
   */
  export type campaign_notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_notifications
     */
    select?: campaign_notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_notifications
     */
    omit?: campaign_notificationsOmit<ExtArgs> | null
  }


  /**
   * Model campaigns
   */

  export type AggregateCampaigns = {
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  export type CampaignsAvgAggregateOutputType = {
    daily_limit: number | null
    delay_min_seconds: number | null
    delay_max_seconds: number | null
    failure_count: number | null
    follow_up2_delay_hours: number | null
    follow_up3_delay_hours: number | null
    follow_up4_delay_hours: number | null
  }

  export type CampaignsSumAggregateOutputType = {
    daily_limit: number | null
    delay_min_seconds: number | null
    delay_max_seconds: number | null
    failure_count: number | null
    follow_up2_delay_hours: number | null
    follow_up3_delay_hours: number | null
    follow_up4_delay_hours: number | null
  }

  export type CampaignsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    gmail_account_id: string | null
    name: string | null
    subject_template: string | null
    body_template: string | null
    required_variables: string | null
    daily_limit: number | null
    delay_min_seconds: number | null
    delay_max_seconds: number | null
    start_time: Date | null
    status: $Enums.CampaignStatus | null
    failure_count: number | null
    follow_up2_body: string | null
    follow_up2_delay_hours: number | null
    follow_up3_body: string | null
    follow_up3_delay_hours: number | null
    follow_up4_body: string | null
    follow_up4_delay_hours: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CampaignsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    gmail_account_id: string | null
    name: string | null
    subject_template: string | null
    body_template: string | null
    required_variables: string | null
    daily_limit: number | null
    delay_min_seconds: number | null
    delay_max_seconds: number | null
    start_time: Date | null
    status: $Enums.CampaignStatus | null
    failure_count: number | null
    follow_up2_body: string | null
    follow_up2_delay_hours: number | null
    follow_up3_body: string | null
    follow_up3_delay_hours: number | null
    follow_up4_body: string | null
    follow_up4_delay_hours: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CampaignsCountAggregateOutputType = {
    id: number
    user_id: number
    gmail_account_id: number
    name: number
    subject_template: number
    body_template: number
    required_variables: number
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time: number
    status: number
    failure_count: number
    follow_up2_body: number
    follow_up2_delay_hours: number
    follow_up3_body: number
    follow_up3_delay_hours: number
    follow_up4_body: number
    follow_up4_delay_hours: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CampaignsAvgAggregateInputType = {
    daily_limit?: true
    delay_min_seconds?: true
    delay_max_seconds?: true
    failure_count?: true
    follow_up2_delay_hours?: true
    follow_up3_delay_hours?: true
    follow_up4_delay_hours?: true
  }

  export type CampaignsSumAggregateInputType = {
    daily_limit?: true
    delay_min_seconds?: true
    delay_max_seconds?: true
    failure_count?: true
    follow_up2_delay_hours?: true
    follow_up3_delay_hours?: true
    follow_up4_delay_hours?: true
  }

  export type CampaignsMinAggregateInputType = {
    id?: true
    user_id?: true
    gmail_account_id?: true
    name?: true
    subject_template?: true
    body_template?: true
    required_variables?: true
    daily_limit?: true
    delay_min_seconds?: true
    delay_max_seconds?: true
    start_time?: true
    status?: true
    failure_count?: true
    follow_up2_body?: true
    follow_up2_delay_hours?: true
    follow_up3_body?: true
    follow_up3_delay_hours?: true
    follow_up4_body?: true
    follow_up4_delay_hours?: true
    created_at?: true
    updated_at?: true
  }

  export type CampaignsMaxAggregateInputType = {
    id?: true
    user_id?: true
    gmail_account_id?: true
    name?: true
    subject_template?: true
    body_template?: true
    required_variables?: true
    daily_limit?: true
    delay_min_seconds?: true
    delay_max_seconds?: true
    start_time?: true
    status?: true
    failure_count?: true
    follow_up2_body?: true
    follow_up2_delay_hours?: true
    follow_up3_body?: true
    follow_up3_delay_hours?: true
    follow_up4_body?: true
    follow_up4_delay_hours?: true
    created_at?: true
    updated_at?: true
  }

  export type CampaignsCountAggregateInputType = {
    id?: true
    user_id?: true
    gmail_account_id?: true
    name?: true
    subject_template?: true
    body_template?: true
    required_variables?: true
    daily_limit?: true
    delay_min_seconds?: true
    delay_max_seconds?: true
    start_time?: true
    status?: true
    failure_count?: true
    follow_up2_body?: true
    follow_up2_delay_hours?: true
    follow_up3_body?: true
    follow_up3_delay_hours?: true
    follow_up4_body?: true
    follow_up4_delay_hours?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CampaignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaigns to aggregate.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned campaigns
    **/
    _count?: true | CampaignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignsMaxAggregateInputType
  }

  export type GetCampaignsAggregateType<T extends CampaignsAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaigns[P]>
      : GetScalarType<T[P], AggregateCampaigns[P]>
  }




  export type campaignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaignsWhereInput
    orderBy?: campaignsOrderByWithAggregationInput | campaignsOrderByWithAggregationInput[]
    by: CampaignsScalarFieldEnum[] | CampaignsScalarFieldEnum
    having?: campaignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignsCountAggregateInputType | true
    _avg?: CampaignsAvgAggregateInputType
    _sum?: CampaignsSumAggregateInputType
    _min?: CampaignsMinAggregateInputType
    _max?: CampaignsMaxAggregateInputType
  }

  export type CampaignsGroupByOutputType = {
    id: string
    user_id: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time: Date | null
    status: $Enums.CampaignStatus | null
    failure_count: number | null
    follow_up2_body: string | null
    follow_up2_delay_hours: number | null
    follow_up3_body: string | null
    follow_up3_delay_hours: number | null
    follow_up4_body: string | null
    follow_up4_delay_hours: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  type GetCampaignsGroupByPayload<T extends campaignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
        }
      >
    >


  export type campaignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gmail_account_id?: boolean
    name?: boolean
    subject_template?: boolean
    body_template?: boolean
    required_variables?: boolean
    daily_limit?: boolean
    delay_min_seconds?: boolean
    delay_max_seconds?: boolean
    start_time?: boolean
    status?: boolean
    failure_count?: boolean
    follow_up2_body?: boolean
    follow_up2_delay_hours?: boolean
    follow_up3_body?: boolean
    follow_up3_delay_hours?: boolean
    follow_up4_body?: boolean
    follow_up4_delay_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    email_logs?: boolean | campaigns$email_logsArgs<ExtArgs>
    leads?: boolean | campaigns$leadsArgs<ExtArgs>
    queue_jobs?: boolean | campaigns$queue_jobsArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigns"]>

  export type campaignsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gmail_account_id?: boolean
    name?: boolean
    subject_template?: boolean
    body_template?: boolean
    required_variables?: boolean
    daily_limit?: boolean
    delay_min_seconds?: boolean
    delay_max_seconds?: boolean
    start_time?: boolean
    status?: boolean
    failure_count?: boolean
    follow_up2_body?: boolean
    follow_up2_delay_hours?: boolean
    follow_up3_body?: boolean
    follow_up3_delay_hours?: boolean
    follow_up4_body?: boolean
    follow_up4_delay_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigns"]>

  export type campaignsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gmail_account_id?: boolean
    name?: boolean
    subject_template?: boolean
    body_template?: boolean
    required_variables?: boolean
    daily_limit?: boolean
    delay_min_seconds?: boolean
    delay_max_seconds?: boolean
    start_time?: boolean
    status?: boolean
    failure_count?: boolean
    follow_up2_body?: boolean
    follow_up2_delay_hours?: boolean
    follow_up3_body?: boolean
    follow_up3_delay_hours?: boolean
    follow_up4_body?: boolean
    follow_up4_delay_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigns"]>

  export type campaignsSelectScalar = {
    id?: boolean
    user_id?: boolean
    gmail_account_id?: boolean
    name?: boolean
    subject_template?: boolean
    body_template?: boolean
    required_variables?: boolean
    daily_limit?: boolean
    delay_min_seconds?: boolean
    delay_max_seconds?: boolean
    start_time?: boolean
    status?: boolean
    failure_count?: boolean
    follow_up2_body?: boolean
    follow_up2_delay_hours?: boolean
    follow_up3_body?: boolean
    follow_up3_delay_hours?: boolean
    follow_up4_body?: boolean
    follow_up4_delay_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type campaignsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "gmail_account_id" | "name" | "subject_template" | "body_template" | "required_variables" | "daily_limit" | "delay_min_seconds" | "delay_max_seconds" | "start_time" | "status" | "failure_count" | "follow_up2_body" | "follow_up2_delay_hours" | "follow_up3_body" | "follow_up3_delay_hours" | "follow_up4_body" | "follow_up4_delay_hours" | "created_at" | "updated_at", ExtArgs["result"]["campaigns"]>
  export type campaignsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    email_logs?: boolean | campaigns$email_logsArgs<ExtArgs>
    leads?: boolean | campaigns$leadsArgs<ExtArgs>
    queue_jobs?: boolean | campaigns$queue_jobsArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type campaignsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type campaignsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $campaignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "campaigns"
    objects: {
      gmail_accounts: Prisma.$gmail_accountsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      email_logs: Prisma.$email_logsPayload<ExtArgs>[]
      leads: Prisma.$leadsPayload<ExtArgs>[]
      queue_jobs: Prisma.$queue_jobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      gmail_account_id: string
      name: string
      subject_template: string
      body_template: string
      required_variables: string | null
      daily_limit: number
      delay_min_seconds: number
      delay_max_seconds: number
      start_time: Date | null
      status: $Enums.CampaignStatus | null
      failure_count: number | null
      follow_up2_body: string | null
      follow_up2_delay_hours: number | null
      follow_up3_body: string | null
      follow_up3_delay_hours: number | null
      follow_up4_body: string | null
      follow_up4_delay_hours: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["campaigns"]>
    composites: {}
  }

  type campaignsGetPayload<S extends boolean | null | undefined | campaignsDefaultArgs> = $Result.GetResult<Prisma.$campaignsPayload, S>

  type campaignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<campaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignsCountAggregateInputType | true
    }

  export interface campaignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['campaigns'], meta: { name: 'campaigns' } }
    /**
     * Find zero or one Campaigns that matches the filter.
     * @param {campaignsFindUniqueArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends campaignsFindUniqueArgs>(args: SelectSubset<T, campaignsFindUniqueArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaigns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {campaignsFindUniqueOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends campaignsFindUniqueOrThrowArgs>(args: SelectSubset<T, campaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindFirstArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends campaignsFindFirstArgs>(args?: SelectSubset<T, campaignsFindFirstArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindFirstOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends campaignsFindFirstOrThrowArgs>(args?: SelectSubset<T, campaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaigns.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaigns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends campaignsFindManyArgs>(args?: SelectSubset<T, campaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaigns.
     * @param {campaignsCreateArgs} args - Arguments to create a Campaigns.
     * @example
     * // Create one Campaigns
     * const Campaigns = await prisma.campaigns.create({
     *   data: {
     *     // ... data to create a Campaigns
     *   }
     * })
     * 
     */
    create<T extends campaignsCreateArgs>(args: SelectSubset<T, campaignsCreateArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {campaignsCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends campaignsCreateManyArgs>(args?: SelectSubset<T, campaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {campaignsCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends campaignsCreateManyAndReturnArgs>(args?: SelectSubset<T, campaignsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaigns.
     * @param {campaignsDeleteArgs} args - Arguments to delete one Campaigns.
     * @example
     * // Delete one Campaigns
     * const Campaigns = await prisma.campaigns.delete({
     *   where: {
     *     // ... filter to delete one Campaigns
     *   }
     * })
     * 
     */
    delete<T extends campaignsDeleteArgs>(args: SelectSubset<T, campaignsDeleteArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaigns.
     * @param {campaignsUpdateArgs} args - Arguments to update one Campaigns.
     * @example
     * // Update one Campaigns
     * const campaigns = await prisma.campaigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends campaignsUpdateArgs>(args: SelectSubset<T, campaignsUpdateArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {campaignsDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends campaignsDeleteManyArgs>(args?: SelectSubset<T, campaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends campaignsUpdateManyArgs>(args: SelectSubset<T, campaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {campaignsUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends campaignsUpdateManyAndReturnArgs>(args: SelectSubset<T, campaignsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaigns.
     * @param {campaignsUpsertArgs} args - Arguments to update or create a Campaigns.
     * @example
     * // Update or create a Campaigns
     * const campaigns = await prisma.campaigns.upsert({
     *   create: {
     *     // ... data to create a Campaigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaigns we want to update
     *   }
     * })
     */
    upsert<T extends campaignsUpsertArgs>(args: SelectSubset<T, campaignsUpsertArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaigns.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends campaignsCountArgs>(
      args?: Subset<T, campaignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignsAggregateArgs>(args: Subset<T, CampaignsAggregateArgs>): Prisma.PrismaPromise<GetCampaignsAggregateType<T>>

    /**
     * Group by Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends campaignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: campaignsGroupByArgs['orderBy'] }
        : { orderBy?: campaignsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, campaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the campaigns model
   */
  readonly fields: campaignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for campaigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__campaignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gmail_accounts<T extends gmail_accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gmail_accountsDefaultArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    email_logs<T extends campaigns$email_logsArgs<ExtArgs> = {}>(args?: Subset<T, campaigns$email_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends campaigns$leadsArgs<ExtArgs> = {}>(args?: Subset<T, campaigns$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queue_jobs<T extends campaigns$queue_jobsArgs<ExtArgs> = {}>(args?: Subset<T, campaigns$queue_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the campaigns model
   */
  interface campaignsFieldRefs {
    readonly id: FieldRef<"campaigns", 'String'>
    readonly user_id: FieldRef<"campaigns", 'String'>
    readonly gmail_account_id: FieldRef<"campaigns", 'String'>
    readonly name: FieldRef<"campaigns", 'String'>
    readonly subject_template: FieldRef<"campaigns", 'String'>
    readonly body_template: FieldRef<"campaigns", 'String'>
    readonly required_variables: FieldRef<"campaigns", 'String'>
    readonly daily_limit: FieldRef<"campaigns", 'Int'>
    readonly delay_min_seconds: FieldRef<"campaigns", 'Int'>
    readonly delay_max_seconds: FieldRef<"campaigns", 'Int'>
    readonly start_time: FieldRef<"campaigns", 'DateTime'>
    readonly status: FieldRef<"campaigns", 'CampaignStatus'>
    readonly failure_count: FieldRef<"campaigns", 'Int'>
    readonly follow_up2_body: FieldRef<"campaigns", 'String'>
    readonly follow_up2_delay_hours: FieldRef<"campaigns", 'Int'>
    readonly follow_up3_body: FieldRef<"campaigns", 'String'>
    readonly follow_up3_delay_hours: FieldRef<"campaigns", 'Int'>
    readonly follow_up4_body: FieldRef<"campaigns", 'String'>
    readonly follow_up4_delay_hours: FieldRef<"campaigns", 'Int'>
    readonly created_at: FieldRef<"campaigns", 'DateTime'>
    readonly updated_at: FieldRef<"campaigns", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * campaigns findUnique
   */
  export type campaignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns findUniqueOrThrow
   */
  export type campaignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns findFirst
   */
  export type campaignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns findFirstOrThrow
   */
  export type campaignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns findMany
   */
  export type campaignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns create
   */
  export type campaignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The data needed to create a campaigns.
     */
    data: XOR<campaignsCreateInput, campaignsUncheckedCreateInput>
  }

  /**
   * campaigns createMany
   */
  export type campaignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many campaigns.
     */
    data: campaignsCreateManyInput | campaignsCreateManyInput[]
  }

  /**
   * campaigns createManyAndReturn
   */
  export type campaignsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * The data used to create many campaigns.
     */
    data: campaignsCreateManyInput | campaignsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * campaigns update
   */
  export type campaignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The data needed to update a campaigns.
     */
    data: XOR<campaignsUpdateInput, campaignsUncheckedUpdateInput>
    /**
     * Choose, which campaigns to update.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns updateMany
   */
  export type campaignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update campaigns.
     */
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyInput>
    /**
     * Filter which campaigns to update
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to update.
     */
    limit?: number
  }

  /**
   * campaigns updateManyAndReturn
   */
  export type campaignsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * The data used to update campaigns.
     */
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyInput>
    /**
     * Filter which campaigns to update
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * campaigns upsert
   */
  export type campaignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The filter to search for the campaigns to update in case it exists.
     */
    where: campaignsWhereUniqueInput
    /**
     * In case the campaigns found by the `where` argument doesn't exist, create a new campaigns with this data.
     */
    create: XOR<campaignsCreateInput, campaignsUncheckedCreateInput>
    /**
     * In case the campaigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<campaignsUpdateInput, campaignsUncheckedUpdateInput>
  }

  /**
   * campaigns delete
   */
  export type campaignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter which campaigns to delete.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns deleteMany
   */
  export type campaignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaigns to delete
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to delete.
     */
    limit?: number
  }

  /**
   * campaigns.email_logs
   */
  export type campaigns$email_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    where?: email_logsWhereInput
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    cursor?: email_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[]
  }

  /**
   * campaigns.leads
   */
  export type campaigns$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    cursor?: leadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * campaigns.queue_jobs
   */
  export type campaigns$queue_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    where?: queue_jobsWhereInput
    orderBy?: queue_jobsOrderByWithRelationInput | queue_jobsOrderByWithRelationInput[]
    cursor?: queue_jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Queue_jobsScalarFieldEnum | Queue_jobsScalarFieldEnum[]
  }

  /**
   * campaigns without action
   */
  export type campaignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
  }


  /**
   * Model email_logs
   */

  export type AggregateEmail_logs = {
    _count: Email_logsCountAggregateOutputType | null
    _avg: Email_logsAvgAggregateOutputType | null
    _sum: Email_logsSumAggregateOutputType | null
    _min: Email_logsMinAggregateOutputType | null
    _max: Email_logsMaxAggregateOutputType | null
  }

  export type Email_logsAvgAggregateOutputType = {
    sequence_step: number | null
  }

  export type Email_logsSumAggregateOutputType = {
    sequence_step: number | null
  }

  export type Email_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    lead_id: string | null
    gmail_account_id: string | null
    subject: string | null
    body: string | null
    sent_at: Date | null
    status: string | null
    error_message: string | null
    bounce_status: string | null
    created_at: Date | null
    sequence_step: number | null
  }

  export type Email_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    lead_id: string | null
    gmail_account_id: string | null
    subject: string | null
    body: string | null
    sent_at: Date | null
    status: string | null
    error_message: string | null
    bounce_status: string | null
    created_at: Date | null
    sequence_step: number | null
  }

  export type Email_logsCountAggregateOutputType = {
    id: number
    user_id: number
    campaign_id: number
    lead_id: number
    gmail_account_id: number
    subject: number
    body: number
    sent_at: number
    status: number
    error_message: number
    bounce_status: number
    created_at: number
    sequence_step: number
    _all: number
  }


  export type Email_logsAvgAggregateInputType = {
    sequence_step?: true
  }

  export type Email_logsSumAggregateInputType = {
    sequence_step?: true
  }

  export type Email_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    lead_id?: true
    gmail_account_id?: true
    subject?: true
    body?: true
    sent_at?: true
    status?: true
    error_message?: true
    bounce_status?: true
    created_at?: true
    sequence_step?: true
  }

  export type Email_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    lead_id?: true
    gmail_account_id?: true
    subject?: true
    body?: true
    sent_at?: true
    status?: true
    error_message?: true
    bounce_status?: true
    created_at?: true
    sequence_step?: true
  }

  export type Email_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    lead_id?: true
    gmail_account_id?: true
    subject?: true
    body?: true
    sent_at?: true
    status?: true
    error_message?: true
    bounce_status?: true
    created_at?: true
    sequence_step?: true
    _all?: true
  }

  export type Email_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_logs to aggregate.
     */
    where?: email_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_logs
    **/
    _count?: true | Email_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Email_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Email_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_logsMaxAggregateInputType
  }

  export type GetEmail_logsAggregateType<T extends Email_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_logs[P]>
      : GetScalarType<T[P], AggregateEmail_logs[P]>
  }




  export type email_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_logsWhereInput
    orderBy?: email_logsOrderByWithAggregationInput | email_logsOrderByWithAggregationInput[]
    by: Email_logsScalarFieldEnum[] | Email_logsScalarFieldEnum
    having?: email_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_logsCountAggregateInputType | true
    _avg?: Email_logsAvgAggregateInputType
    _sum?: Email_logsSumAggregateInputType
    _min?: Email_logsMinAggregateInputType
    _max?: Email_logsMaxAggregateInputType
  }

  export type Email_logsGroupByOutputType = {
    id: string
    user_id: string
    campaign_id: string
    lead_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at: Date | null
    status: string | null
    error_message: string | null
    bounce_status: string | null
    created_at: Date | null
    sequence_step: number | null
    _count: Email_logsCountAggregateOutputType | null
    _avg: Email_logsAvgAggregateOutputType | null
    _sum: Email_logsSumAggregateOutputType | null
    _min: Email_logsMinAggregateOutputType | null
    _max: Email_logsMaxAggregateOutputType | null
  }

  type GetEmail_logsGroupByPayload<T extends email_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Email_logsGroupByOutputType[P]>
        }
      >
    >


  export type email_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    gmail_account_id?: boolean
    subject?: boolean
    body?: boolean
    sent_at?: boolean
    status?: boolean
    error_message?: boolean
    bounce_status?: boolean
    created_at?: boolean
    sequence_step?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_logs"]>

  export type email_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    gmail_account_id?: boolean
    subject?: boolean
    body?: boolean
    sent_at?: boolean
    status?: boolean
    error_message?: boolean
    bounce_status?: boolean
    created_at?: boolean
    sequence_step?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_logs"]>

  export type email_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    gmail_account_id?: boolean
    subject?: boolean
    body?: boolean
    sent_at?: boolean
    status?: boolean
    error_message?: boolean
    bounce_status?: boolean
    created_at?: boolean
    sequence_step?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_logs"]>

  export type email_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    gmail_account_id?: boolean
    subject?: boolean
    body?: boolean
    sent_at?: boolean
    status?: boolean
    error_message?: boolean
    bounce_status?: boolean
    created_at?: boolean
    sequence_step?: boolean
  }

  export type email_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "campaign_id" | "lead_id" | "gmail_account_id" | "subject" | "body" | "sent_at" | "status" | "error_message" | "bounce_status" | "created_at" | "sequence_step", ExtArgs["result"]["email_logs"]>
  export type email_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type email_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type email_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | gmail_accountsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $email_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_logs"
    objects: {
      campaigns: Prisma.$campaignsPayload<ExtArgs>
      gmail_accounts: Prisma.$gmail_accountsPayload<ExtArgs>
      leads: Prisma.$leadsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      campaign_id: string
      lead_id: string
      gmail_account_id: string
      subject: string
      body: string
      sent_at: Date | null
      status: string | null
      error_message: string | null
      bounce_status: string | null
      created_at: Date | null
      sequence_step: number | null
    }, ExtArgs["result"]["email_logs"]>
    composites: {}
  }

  type email_logsGetPayload<S extends boolean | null | undefined | email_logsDefaultArgs> = $Result.GetResult<Prisma.$email_logsPayload, S>

  type email_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_logsCountAggregateInputType | true
    }

  export interface email_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_logs'], meta: { name: 'email_logs' } }
    /**
     * Find zero or one Email_logs that matches the filter.
     * @param {email_logsFindUniqueArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_logsFindUniqueArgs>(args: SelectSubset<T, email_logsFindUniqueArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_logsFindUniqueOrThrowArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, email_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsFindFirstArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_logsFindFirstArgs>(args?: SelectSubset<T, email_logsFindFirstArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsFindFirstOrThrowArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, email_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_logs
     * const email_logs = await prisma.email_logs.findMany()
     * 
     * // Get first 10 Email_logs
     * const email_logs = await prisma.email_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const email_logsWithIdOnly = await prisma.email_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends email_logsFindManyArgs>(args?: SelectSubset<T, email_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_logs.
     * @param {email_logsCreateArgs} args - Arguments to create a Email_logs.
     * @example
     * // Create one Email_logs
     * const Email_logs = await prisma.email_logs.create({
     *   data: {
     *     // ... data to create a Email_logs
     *   }
     * })
     * 
     */
    create<T extends email_logsCreateArgs>(args: SelectSubset<T, email_logsCreateArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_logs.
     * @param {email_logsCreateManyArgs} args - Arguments to create many Email_logs.
     * @example
     * // Create many Email_logs
     * const email_logs = await prisma.email_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_logsCreateManyArgs>(args?: SelectSubset<T, email_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Email_logs and returns the data saved in the database.
     * @param {email_logsCreateManyAndReturnArgs} args - Arguments to create many Email_logs.
     * @example
     * // Create many Email_logs
     * const email_logs = await prisma.email_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Email_logs and only return the `id`
     * const email_logsWithIdOnly = await prisma.email_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends email_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, email_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email_logs.
     * @param {email_logsDeleteArgs} args - Arguments to delete one Email_logs.
     * @example
     * // Delete one Email_logs
     * const Email_logs = await prisma.email_logs.delete({
     *   where: {
     *     // ... filter to delete one Email_logs
     *   }
     * })
     * 
     */
    delete<T extends email_logsDeleteArgs>(args: SelectSubset<T, email_logsDeleteArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_logs.
     * @param {email_logsUpdateArgs} args - Arguments to update one Email_logs.
     * @example
     * // Update one Email_logs
     * const email_logs = await prisma.email_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_logsUpdateArgs>(args: SelectSubset<T, email_logsUpdateArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_logs.
     * @param {email_logsDeleteManyArgs} args - Arguments to filter Email_logs to delete.
     * @example
     * // Delete a few Email_logs
     * const { count } = await prisma.email_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_logsDeleteManyArgs>(args?: SelectSubset<T, email_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_logs
     * const email_logs = await prisma.email_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_logsUpdateManyArgs>(args: SelectSubset<T, email_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_logs and returns the data updated in the database.
     * @param {email_logsUpdateManyAndReturnArgs} args - Arguments to update many Email_logs.
     * @example
     * // Update many Email_logs
     * const email_logs = await prisma.email_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Email_logs and only return the `id`
     * const email_logsWithIdOnly = await prisma.email_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends email_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, email_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email_logs.
     * @param {email_logsUpsertArgs} args - Arguments to update or create a Email_logs.
     * @example
     * // Update or create a Email_logs
     * const email_logs = await prisma.email_logs.upsert({
     *   create: {
     *     // ... data to create a Email_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_logs we want to update
     *   }
     * })
     */
    upsert<T extends email_logsUpsertArgs>(args: SelectSubset<T, email_logsUpsertArgs<ExtArgs>>): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsCountArgs} args - Arguments to filter Email_logs to count.
     * @example
     * // Count the number of Email_logs
     * const count = await prisma.email_logs.count({
     *   where: {
     *     // ... the filter for the Email_logs we want to count
     *   }
     * })
    **/
    count<T extends email_logsCountArgs>(
      args?: Subset<T, email_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Email_logsAggregateArgs>(args: Subset<T, Email_logsAggregateArgs>): Prisma.PrismaPromise<GetEmail_logsAggregateType<T>>

    /**
     * Group by Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends email_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_logsGroupByArgs['orderBy'] }
        : { orderBy?: email_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, email_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_logs model
   */
  readonly fields: email_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends campaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, campaignsDefaultArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gmail_accounts<T extends gmail_accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gmail_accountsDefaultArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends leadsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leadsDefaultArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the email_logs model
   */
  interface email_logsFieldRefs {
    readonly id: FieldRef<"email_logs", 'String'>
    readonly user_id: FieldRef<"email_logs", 'String'>
    readonly campaign_id: FieldRef<"email_logs", 'String'>
    readonly lead_id: FieldRef<"email_logs", 'String'>
    readonly gmail_account_id: FieldRef<"email_logs", 'String'>
    readonly subject: FieldRef<"email_logs", 'String'>
    readonly body: FieldRef<"email_logs", 'String'>
    readonly sent_at: FieldRef<"email_logs", 'DateTime'>
    readonly status: FieldRef<"email_logs", 'String'>
    readonly error_message: FieldRef<"email_logs", 'String'>
    readonly bounce_status: FieldRef<"email_logs", 'String'>
    readonly created_at: FieldRef<"email_logs", 'DateTime'>
    readonly sequence_step: FieldRef<"email_logs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * email_logs findUnique
   */
  export type email_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * Filter, which email_logs to fetch.
     */
    where: email_logsWhereUniqueInput
  }

  /**
   * email_logs findUniqueOrThrow
   */
  export type email_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * Filter, which email_logs to fetch.
     */
    where: email_logsWhereUniqueInput
  }

  /**
   * email_logs findFirst
   */
  export type email_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * Filter, which email_logs to fetch.
     */
    where?: email_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_logs.
     */
    cursor?: email_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_logs.
     */
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[]
  }

  /**
   * email_logs findFirstOrThrow
   */
  export type email_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * Filter, which email_logs to fetch.
     */
    where?: email_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_logs.
     */
    cursor?: email_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_logs.
     */
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[]
  }

  /**
   * email_logs findMany
   */
  export type email_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * Filter, which email_logs to fetch.
     */
    where?: email_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_logs.
     */
    cursor?: email_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_logs.
     */
    skip?: number
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[]
  }

  /**
   * email_logs create
   */
  export type email_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a email_logs.
     */
    data: XOR<email_logsCreateInput, email_logsUncheckedCreateInput>
  }

  /**
   * email_logs createMany
   */
  export type email_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_logs.
     */
    data: email_logsCreateManyInput | email_logsCreateManyInput[]
  }

  /**
   * email_logs createManyAndReturn
   */
  export type email_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * The data used to create many email_logs.
     */
    data: email_logsCreateManyInput | email_logsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_logs update
   */
  export type email_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a email_logs.
     */
    data: XOR<email_logsUpdateInput, email_logsUncheckedUpdateInput>
    /**
     * Choose, which email_logs to update.
     */
    where: email_logsWhereUniqueInput
  }

  /**
   * email_logs updateMany
   */
  export type email_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_logs.
     */
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyInput>
    /**
     * Filter which email_logs to update
     */
    where?: email_logsWhereInput
    /**
     * Limit how many email_logs to update.
     */
    limit?: number
  }

  /**
   * email_logs updateManyAndReturn
   */
  export type email_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * The data used to update email_logs.
     */
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyInput>
    /**
     * Filter which email_logs to update
     */
    where?: email_logsWhereInput
    /**
     * Limit how many email_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_logs upsert
   */
  export type email_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the email_logs to update in case it exists.
     */
    where: email_logsWhereUniqueInput
    /**
     * In case the email_logs found by the `where` argument doesn't exist, create a new email_logs with this data.
     */
    create: XOR<email_logsCreateInput, email_logsUncheckedCreateInput>
    /**
     * In case the email_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_logsUpdateInput, email_logsUncheckedUpdateInput>
  }

  /**
   * email_logs delete
   */
  export type email_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    /**
     * Filter which email_logs to delete.
     */
    where: email_logsWhereUniqueInput
  }

  /**
   * email_logs deleteMany
   */
  export type email_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_logs to delete
     */
    where?: email_logsWhereInput
    /**
     * Limit how many email_logs to delete.
     */
    limit?: number
  }

  /**
   * email_logs without action
   */
  export type email_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
  }


  /**
   * Model gmail_accounts
   */

  export type AggregateGmail_accounts = {
    _count: Gmail_accountsCountAggregateOutputType | null
    _min: Gmail_accountsMinAggregateOutputType | null
    _max: Gmail_accountsMaxAggregateOutputType | null
  }

  export type Gmail_accountsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    email: string | null
    refresh_token_encrypted: string | null
    access_token_encrypted: string | null
    access_token_expires_at: Date | null
    status: $Enums.GmailAccountStatus | null
    created_at: Date | null
  }

  export type Gmail_accountsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    email: string | null
    refresh_token_encrypted: string | null
    access_token_encrypted: string | null
    access_token_expires_at: Date | null
    status: $Enums.GmailAccountStatus | null
    created_at: Date | null
  }

  export type Gmail_accountsCountAggregateOutputType = {
    id: number
    user_id: number
    email: number
    refresh_token_encrypted: number
    access_token_encrypted: number
    access_token_expires_at: number
    status: number
    created_at: number
    _all: number
  }


  export type Gmail_accountsMinAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    refresh_token_encrypted?: true
    access_token_encrypted?: true
    access_token_expires_at?: true
    status?: true
    created_at?: true
  }

  export type Gmail_accountsMaxAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    refresh_token_encrypted?: true
    access_token_encrypted?: true
    access_token_expires_at?: true
    status?: true
    created_at?: true
  }

  export type Gmail_accountsCountAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    refresh_token_encrypted?: true
    access_token_encrypted?: true
    access_token_expires_at?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type Gmail_accountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gmail_accounts to aggregate.
     */
    where?: gmail_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gmail_accounts to fetch.
     */
    orderBy?: gmail_accountsOrderByWithRelationInput | gmail_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gmail_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gmail_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gmail_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gmail_accounts
    **/
    _count?: true | Gmail_accountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gmail_accountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gmail_accountsMaxAggregateInputType
  }

  export type GetGmail_accountsAggregateType<T extends Gmail_accountsAggregateArgs> = {
        [P in keyof T & keyof AggregateGmail_accounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGmail_accounts[P]>
      : GetScalarType<T[P], AggregateGmail_accounts[P]>
  }




  export type gmail_accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gmail_accountsWhereInput
    orderBy?: gmail_accountsOrderByWithAggregationInput | gmail_accountsOrderByWithAggregationInput[]
    by: Gmail_accountsScalarFieldEnum[] | Gmail_accountsScalarFieldEnum
    having?: gmail_accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gmail_accountsCountAggregateInputType | true
    _min?: Gmail_accountsMinAggregateInputType
    _max?: Gmail_accountsMaxAggregateInputType
  }

  export type Gmail_accountsGroupByOutputType = {
    id: string
    user_id: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted: string | null
    access_token_expires_at: Date | null
    status: $Enums.GmailAccountStatus | null
    created_at: Date | null
    _count: Gmail_accountsCountAggregateOutputType | null
    _min: Gmail_accountsMinAggregateOutputType | null
    _max: Gmail_accountsMaxAggregateOutputType | null
  }

  type GetGmail_accountsGroupByPayload<T extends gmail_accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gmail_accountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gmail_accountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gmail_accountsGroupByOutputType[P]>
            : GetScalarType<T[P], Gmail_accountsGroupByOutputType[P]>
        }
      >
    >


  export type gmail_accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    email?: boolean
    refresh_token_encrypted?: boolean
    access_token_encrypted?: boolean
    access_token_expires_at?: boolean
    status?: boolean
    created_at?: boolean
    campaigns?: boolean | gmail_accounts$campaignsArgs<ExtArgs>
    email_logs?: boolean | gmail_accounts$email_logsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    leads?: boolean | gmail_accounts$leadsArgs<ExtArgs>
    _count?: boolean | Gmail_accountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gmail_accounts"]>

  export type gmail_accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    email?: boolean
    refresh_token_encrypted?: boolean
    access_token_encrypted?: boolean
    access_token_expires_at?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gmail_accounts"]>

  export type gmail_accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    email?: boolean
    refresh_token_encrypted?: boolean
    access_token_encrypted?: boolean
    access_token_expires_at?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gmail_accounts"]>

  export type gmail_accountsSelectScalar = {
    id?: boolean
    user_id?: boolean
    email?: boolean
    refresh_token_encrypted?: boolean
    access_token_encrypted?: boolean
    access_token_expires_at?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type gmail_accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "email" | "refresh_token_encrypted" | "access_token_encrypted" | "access_token_expires_at" | "status" | "created_at", ExtArgs["result"]["gmail_accounts"]>
  export type gmail_accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | gmail_accounts$campaignsArgs<ExtArgs>
    email_logs?: boolean | gmail_accounts$email_logsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    leads?: boolean | gmail_accounts$leadsArgs<ExtArgs>
    _count?: boolean | Gmail_accountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gmail_accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type gmail_accountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $gmail_accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gmail_accounts"
    objects: {
      campaigns: Prisma.$campaignsPayload<ExtArgs>[]
      email_logs: Prisma.$email_logsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      leads: Prisma.$leadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      email: string
      refresh_token_encrypted: string
      access_token_encrypted: string | null
      access_token_expires_at: Date | null
      status: $Enums.GmailAccountStatus | null
      created_at: Date | null
    }, ExtArgs["result"]["gmail_accounts"]>
    composites: {}
  }

  type gmail_accountsGetPayload<S extends boolean | null | undefined | gmail_accountsDefaultArgs> = $Result.GetResult<Prisma.$gmail_accountsPayload, S>

  type gmail_accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gmail_accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gmail_accountsCountAggregateInputType | true
    }

  export interface gmail_accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gmail_accounts'], meta: { name: 'gmail_accounts' } }
    /**
     * Find zero or one Gmail_accounts that matches the filter.
     * @param {gmail_accountsFindUniqueArgs} args - Arguments to find a Gmail_accounts
     * @example
     * // Get one Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gmail_accountsFindUniqueArgs>(args: SelectSubset<T, gmail_accountsFindUniqueArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gmail_accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gmail_accountsFindUniqueOrThrowArgs} args - Arguments to find a Gmail_accounts
     * @example
     * // Get one Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gmail_accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, gmail_accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gmail_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gmail_accountsFindFirstArgs} args - Arguments to find a Gmail_accounts
     * @example
     * // Get one Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gmail_accountsFindFirstArgs>(args?: SelectSubset<T, gmail_accountsFindFirstArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gmail_accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gmail_accountsFindFirstOrThrowArgs} args - Arguments to find a Gmail_accounts
     * @example
     * // Get one Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gmail_accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, gmail_accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gmail_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gmail_accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.findMany()
     * 
     * // Get first 10 Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gmail_accountsWithIdOnly = await prisma.gmail_accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gmail_accountsFindManyArgs>(args?: SelectSubset<T, gmail_accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gmail_accounts.
     * @param {gmail_accountsCreateArgs} args - Arguments to create a Gmail_accounts.
     * @example
     * // Create one Gmail_accounts
     * const Gmail_accounts = await prisma.gmail_accounts.create({
     *   data: {
     *     // ... data to create a Gmail_accounts
     *   }
     * })
     * 
     */
    create<T extends gmail_accountsCreateArgs>(args: SelectSubset<T, gmail_accountsCreateArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gmail_accounts.
     * @param {gmail_accountsCreateManyArgs} args - Arguments to create many Gmail_accounts.
     * @example
     * // Create many Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gmail_accountsCreateManyArgs>(args?: SelectSubset<T, gmail_accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gmail_accounts and returns the data saved in the database.
     * @param {gmail_accountsCreateManyAndReturnArgs} args - Arguments to create many Gmail_accounts.
     * @example
     * // Create many Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gmail_accounts and only return the `id`
     * const gmail_accountsWithIdOnly = await prisma.gmail_accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gmail_accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, gmail_accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gmail_accounts.
     * @param {gmail_accountsDeleteArgs} args - Arguments to delete one Gmail_accounts.
     * @example
     * // Delete one Gmail_accounts
     * const Gmail_accounts = await prisma.gmail_accounts.delete({
     *   where: {
     *     // ... filter to delete one Gmail_accounts
     *   }
     * })
     * 
     */
    delete<T extends gmail_accountsDeleteArgs>(args: SelectSubset<T, gmail_accountsDeleteArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gmail_accounts.
     * @param {gmail_accountsUpdateArgs} args - Arguments to update one Gmail_accounts.
     * @example
     * // Update one Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gmail_accountsUpdateArgs>(args: SelectSubset<T, gmail_accountsUpdateArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gmail_accounts.
     * @param {gmail_accountsDeleteManyArgs} args - Arguments to filter Gmail_accounts to delete.
     * @example
     * // Delete a few Gmail_accounts
     * const { count } = await prisma.gmail_accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gmail_accountsDeleteManyArgs>(args?: SelectSubset<T, gmail_accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gmail_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gmail_accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gmail_accountsUpdateManyArgs>(args: SelectSubset<T, gmail_accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gmail_accounts and returns the data updated in the database.
     * @param {gmail_accountsUpdateManyAndReturnArgs} args - Arguments to update many Gmail_accounts.
     * @example
     * // Update many Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gmail_accounts and only return the `id`
     * const gmail_accountsWithIdOnly = await prisma.gmail_accounts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends gmail_accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, gmail_accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gmail_accounts.
     * @param {gmail_accountsUpsertArgs} args - Arguments to update or create a Gmail_accounts.
     * @example
     * // Update or create a Gmail_accounts
     * const gmail_accounts = await prisma.gmail_accounts.upsert({
     *   create: {
     *     // ... data to create a Gmail_accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gmail_accounts we want to update
     *   }
     * })
     */
    upsert<T extends gmail_accountsUpsertArgs>(args: SelectSubset<T, gmail_accountsUpsertArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gmail_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gmail_accountsCountArgs} args - Arguments to filter Gmail_accounts to count.
     * @example
     * // Count the number of Gmail_accounts
     * const count = await prisma.gmail_accounts.count({
     *   where: {
     *     // ... the filter for the Gmail_accounts we want to count
     *   }
     * })
    **/
    count<T extends gmail_accountsCountArgs>(
      args?: Subset<T, gmail_accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gmail_accountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gmail_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gmail_accountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gmail_accountsAggregateArgs>(args: Subset<T, Gmail_accountsAggregateArgs>): Prisma.PrismaPromise<GetGmail_accountsAggregateType<T>>

    /**
     * Group by Gmail_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gmail_accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gmail_accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gmail_accountsGroupByArgs['orderBy'] }
        : { orderBy?: gmail_accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gmail_accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGmail_accountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gmail_accounts model
   */
  readonly fields: gmail_accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gmail_accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gmail_accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends gmail_accounts$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, gmail_accounts$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    email_logs<T extends gmail_accounts$email_logsArgs<ExtArgs> = {}>(args?: Subset<T, gmail_accounts$email_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends gmail_accounts$leadsArgs<ExtArgs> = {}>(args?: Subset<T, gmail_accounts$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gmail_accounts model
   */
  interface gmail_accountsFieldRefs {
    readonly id: FieldRef<"gmail_accounts", 'String'>
    readonly user_id: FieldRef<"gmail_accounts", 'String'>
    readonly email: FieldRef<"gmail_accounts", 'String'>
    readonly refresh_token_encrypted: FieldRef<"gmail_accounts", 'String'>
    readonly access_token_encrypted: FieldRef<"gmail_accounts", 'String'>
    readonly access_token_expires_at: FieldRef<"gmail_accounts", 'DateTime'>
    readonly status: FieldRef<"gmail_accounts", 'GmailAccountStatus'>
    readonly created_at: FieldRef<"gmail_accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gmail_accounts findUnique
   */
  export type gmail_accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * Filter, which gmail_accounts to fetch.
     */
    where: gmail_accountsWhereUniqueInput
  }

  /**
   * gmail_accounts findUniqueOrThrow
   */
  export type gmail_accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * Filter, which gmail_accounts to fetch.
     */
    where: gmail_accountsWhereUniqueInput
  }

  /**
   * gmail_accounts findFirst
   */
  export type gmail_accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * Filter, which gmail_accounts to fetch.
     */
    where?: gmail_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gmail_accounts to fetch.
     */
    orderBy?: gmail_accountsOrderByWithRelationInput | gmail_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gmail_accounts.
     */
    cursor?: gmail_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gmail_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gmail_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gmail_accounts.
     */
    distinct?: Gmail_accountsScalarFieldEnum | Gmail_accountsScalarFieldEnum[]
  }

  /**
   * gmail_accounts findFirstOrThrow
   */
  export type gmail_accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * Filter, which gmail_accounts to fetch.
     */
    where?: gmail_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gmail_accounts to fetch.
     */
    orderBy?: gmail_accountsOrderByWithRelationInput | gmail_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gmail_accounts.
     */
    cursor?: gmail_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gmail_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gmail_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gmail_accounts.
     */
    distinct?: Gmail_accountsScalarFieldEnum | Gmail_accountsScalarFieldEnum[]
  }

  /**
   * gmail_accounts findMany
   */
  export type gmail_accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * Filter, which gmail_accounts to fetch.
     */
    where?: gmail_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gmail_accounts to fetch.
     */
    orderBy?: gmail_accountsOrderByWithRelationInput | gmail_accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gmail_accounts.
     */
    cursor?: gmail_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gmail_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gmail_accounts.
     */
    skip?: number
    distinct?: Gmail_accountsScalarFieldEnum | Gmail_accountsScalarFieldEnum[]
  }

  /**
   * gmail_accounts create
   */
  export type gmail_accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a gmail_accounts.
     */
    data: XOR<gmail_accountsCreateInput, gmail_accountsUncheckedCreateInput>
  }

  /**
   * gmail_accounts createMany
   */
  export type gmail_accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gmail_accounts.
     */
    data: gmail_accountsCreateManyInput | gmail_accountsCreateManyInput[]
  }

  /**
   * gmail_accounts createManyAndReturn
   */
  export type gmail_accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * The data used to create many gmail_accounts.
     */
    data: gmail_accountsCreateManyInput | gmail_accountsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * gmail_accounts update
   */
  export type gmail_accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a gmail_accounts.
     */
    data: XOR<gmail_accountsUpdateInput, gmail_accountsUncheckedUpdateInput>
    /**
     * Choose, which gmail_accounts to update.
     */
    where: gmail_accountsWhereUniqueInput
  }

  /**
   * gmail_accounts updateMany
   */
  export type gmail_accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gmail_accounts.
     */
    data: XOR<gmail_accountsUpdateManyMutationInput, gmail_accountsUncheckedUpdateManyInput>
    /**
     * Filter which gmail_accounts to update
     */
    where?: gmail_accountsWhereInput
    /**
     * Limit how many gmail_accounts to update.
     */
    limit?: number
  }

  /**
   * gmail_accounts updateManyAndReturn
   */
  export type gmail_accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * The data used to update gmail_accounts.
     */
    data: XOR<gmail_accountsUpdateManyMutationInput, gmail_accountsUncheckedUpdateManyInput>
    /**
     * Filter which gmail_accounts to update
     */
    where?: gmail_accountsWhereInput
    /**
     * Limit how many gmail_accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * gmail_accounts upsert
   */
  export type gmail_accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the gmail_accounts to update in case it exists.
     */
    where: gmail_accountsWhereUniqueInput
    /**
     * In case the gmail_accounts found by the `where` argument doesn't exist, create a new gmail_accounts with this data.
     */
    create: XOR<gmail_accountsCreateInput, gmail_accountsUncheckedCreateInput>
    /**
     * In case the gmail_accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gmail_accountsUpdateInput, gmail_accountsUncheckedUpdateInput>
  }

  /**
   * gmail_accounts delete
   */
  export type gmail_accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    /**
     * Filter which gmail_accounts to delete.
     */
    where: gmail_accountsWhereUniqueInput
  }

  /**
   * gmail_accounts deleteMany
   */
  export type gmail_accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gmail_accounts to delete
     */
    where?: gmail_accountsWhereInput
    /**
     * Limit how many gmail_accounts to delete.
     */
    limit?: number
  }

  /**
   * gmail_accounts.campaigns
   */
  export type gmail_accounts$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    where?: campaignsWhereInput
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    cursor?: campaignsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * gmail_accounts.email_logs
   */
  export type gmail_accounts$email_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    where?: email_logsWhereInput
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    cursor?: email_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[]
  }

  /**
   * gmail_accounts.leads
   */
  export type gmail_accounts$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    cursor?: leadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * gmail_accounts without action
   */
  export type gmail_accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
  }


  /**
   * Model leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    currentSequenceStep: number | null
  }

  export type LeadsSumAggregateOutputType = {
    currentSequenceStep: number | null
  }

  export type LeadsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    gmail_account_id: string | null
    email: string | null
    first_name: string | null
    company_name: string | null
    domain_name: string | null
    custom_fields: string | null
    status: $Enums.LeadStatus | null
    sent_at: Date | null
    opened_at: Date | null
    clicked_at: Date | null
    replied_at: Date | null
    bounced_at: Date | null
    error_message: string | null
    created_at: Date | null
    currentSequenceStep: number | null
    lastMessageId: string | null
    lastThreadId: string | null
    receivedReply: boolean | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    gmail_account_id: string | null
    email: string | null
    first_name: string | null
    company_name: string | null
    domain_name: string | null
    custom_fields: string | null
    status: $Enums.LeadStatus | null
    sent_at: Date | null
    opened_at: Date | null
    clicked_at: Date | null
    replied_at: Date | null
    bounced_at: Date | null
    error_message: string | null
    created_at: Date | null
    currentSequenceStep: number | null
    lastMessageId: string | null
    lastThreadId: string | null
    receivedReply: boolean | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    user_id: number
    campaign_id: number
    gmail_account_id: number
    email: number
    first_name: number
    company_name: number
    domain_name: number
    custom_fields: number
    status: number
    sent_at: number
    opened_at: number
    clicked_at: number
    replied_at: number
    bounced_at: number
    error_message: number
    created_at: number
    currentSequenceStep: number
    lastMessageId: number
    lastThreadId: number
    receivedReply: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    currentSequenceStep?: true
  }

  export type LeadsSumAggregateInputType = {
    currentSequenceStep?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    gmail_account_id?: true
    email?: true
    first_name?: true
    company_name?: true
    domain_name?: true
    custom_fields?: true
    status?: true
    sent_at?: true
    opened_at?: true
    clicked_at?: true
    replied_at?: true
    bounced_at?: true
    error_message?: true
    created_at?: true
    currentSequenceStep?: true
    lastMessageId?: true
    lastThreadId?: true
    receivedReply?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    gmail_account_id?: true
    email?: true
    first_name?: true
    company_name?: true
    domain_name?: true
    custom_fields?: true
    status?: true
    sent_at?: true
    opened_at?: true
    clicked_at?: true
    replied_at?: true
    bounced_at?: true
    error_message?: true
    created_at?: true
    currentSequenceStep?: true
    lastMessageId?: true
    lastThreadId?: true
    receivedReply?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    gmail_account_id?: true
    email?: true
    first_name?: true
    company_name?: true
    domain_name?: true
    custom_fields?: true
    status?: true
    sent_at?: true
    opened_at?: true
    clicked_at?: true
    replied_at?: true
    bounced_at?: true
    error_message?: true
    created_at?: true
    currentSequenceStep?: true
    lastMessageId?: true
    lastThreadId?: true
    receivedReply?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to aggregate.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type leadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithAggregationInput | leadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: leadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: string
    user_id: string
    campaign_id: string
    gmail_account_id: string | null
    email: string
    first_name: string | null
    company_name: string | null
    domain_name: string | null
    custom_fields: string | null
    status: $Enums.LeadStatus | null
    sent_at: Date | null
    opened_at: Date | null
    clicked_at: Date | null
    replied_at: Date | null
    bounced_at: Date | null
    error_message: string | null
    created_at: Date | null
    currentSequenceStep: number | null
    lastMessageId: string | null
    lastThreadId: string | null
    receivedReply: boolean | null
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends leadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type leadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    gmail_account_id?: boolean
    email?: boolean
    first_name?: boolean
    company_name?: boolean
    domain_name?: boolean
    custom_fields?: boolean
    status?: boolean
    sent_at?: boolean
    opened_at?: boolean
    clicked_at?: boolean
    replied_at?: boolean
    bounced_at?: boolean
    error_message?: boolean
    created_at?: boolean
    currentSequenceStep?: boolean
    lastMessageId?: boolean
    lastThreadId?: boolean
    receivedReply?: boolean
    email_logs?: boolean | leads$email_logsArgs<ExtArgs>
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | leads$gmail_accountsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    queue_jobs?: boolean | leads$queue_jobsArgs<ExtArgs>
    _count?: boolean | LeadsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    gmail_account_id?: boolean
    email?: boolean
    first_name?: boolean
    company_name?: boolean
    domain_name?: boolean
    custom_fields?: boolean
    status?: boolean
    sent_at?: boolean
    opened_at?: boolean
    clicked_at?: boolean
    replied_at?: boolean
    bounced_at?: boolean
    error_message?: boolean
    created_at?: boolean
    currentSequenceStep?: boolean
    lastMessageId?: boolean
    lastThreadId?: boolean
    receivedReply?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | leads$gmail_accountsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    gmail_account_id?: boolean
    email?: boolean
    first_name?: boolean
    company_name?: boolean
    domain_name?: boolean
    custom_fields?: boolean
    status?: boolean
    sent_at?: boolean
    opened_at?: boolean
    clicked_at?: boolean
    replied_at?: boolean
    bounced_at?: boolean
    error_message?: boolean
    created_at?: boolean
    currentSequenceStep?: boolean
    lastMessageId?: boolean
    lastThreadId?: boolean
    receivedReply?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | leads$gmail_accountsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectScalar = {
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    gmail_account_id?: boolean
    email?: boolean
    first_name?: boolean
    company_name?: boolean
    domain_name?: boolean
    custom_fields?: boolean
    status?: boolean
    sent_at?: boolean
    opened_at?: boolean
    clicked_at?: boolean
    replied_at?: boolean
    bounced_at?: boolean
    error_message?: boolean
    created_at?: boolean
    currentSequenceStep?: boolean
    lastMessageId?: boolean
    lastThreadId?: boolean
    receivedReply?: boolean
  }

  export type leadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "campaign_id" | "gmail_account_id" | "email" | "first_name" | "company_name" | "domain_name" | "custom_fields" | "status" | "sent_at" | "opened_at" | "clicked_at" | "replied_at" | "bounced_at" | "error_message" | "created_at" | "currentSequenceStep" | "lastMessageId" | "lastThreadId" | "receivedReply", ExtArgs["result"]["leads"]>
  export type leadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email_logs?: boolean | leads$email_logsArgs<ExtArgs>
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | leads$gmail_accountsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    queue_jobs?: boolean | leads$queue_jobsArgs<ExtArgs>
    _count?: boolean | LeadsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type leadsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | leads$gmail_accountsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type leadsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    gmail_accounts?: boolean | leads$gmail_accountsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $leadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leads"
    objects: {
      email_logs: Prisma.$email_logsPayload<ExtArgs>[]
      campaigns: Prisma.$campaignsPayload<ExtArgs>
      gmail_accounts: Prisma.$gmail_accountsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
      queue_jobs: Prisma.$queue_jobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      campaign_id: string
      gmail_account_id: string | null
      email: string
      first_name: string | null
      company_name: string | null
      domain_name: string | null
      custom_fields: string | null
      status: $Enums.LeadStatus | null
      sent_at: Date | null
      opened_at: Date | null
      clicked_at: Date | null
      replied_at: Date | null
      bounced_at: Date | null
      error_message: string | null
      created_at: Date | null
      currentSequenceStep: number | null
      lastMessageId: string | null
      lastThreadId: string | null
      receivedReply: boolean | null
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type leadsGetPayload<S extends boolean | null | undefined | leadsDefaultArgs> = $Result.GetResult<Prisma.$leadsPayload, S>

  type leadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface leadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leads'], meta: { name: 'leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {leadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leadsFindUniqueArgs>(args: SelectSubset<T, leadsFindUniqueArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leadsFindUniqueOrThrowArgs>(args: SelectSubset<T, leadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leadsFindFirstArgs>(args?: SelectSubset<T, leadsFindFirstArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leadsFindFirstOrThrowArgs>(args?: SelectSubset<T, leadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leadsFindManyArgs>(args?: SelectSubset<T, leadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {leadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends leadsCreateArgs>(args: SelectSubset<T, leadsCreateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {leadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leadsCreateManyArgs>(args?: SelectSubset<T, leadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {leadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leadsCreateManyAndReturnArgs>(args?: SelectSubset<T, leadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {leadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends leadsDeleteArgs>(args: SelectSubset<T, leadsDeleteArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {leadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leadsUpdateArgs>(args: SelectSubset<T, leadsUpdateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {leadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leadsDeleteManyArgs>(args?: SelectSubset<T, leadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leadsUpdateManyArgs>(args: SelectSubset<T, leadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {leadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leadsUpdateManyAndReturnArgs>(args: SelectSubset<T, leadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {leadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends leadsUpsertArgs>(args: SelectSubset<T, leadsUpsertArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends leadsCountArgs>(
      args?: Subset<T, leadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leadsGroupByArgs['orderBy'] }
        : { orderBy?: leadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leads model
   */
  readonly fields: leadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    email_logs<T extends leads$email_logsArgs<ExtArgs> = {}>(args?: Subset<T, leads$email_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends campaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, campaignsDefaultArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gmail_accounts<T extends leads$gmail_accountsArgs<ExtArgs> = {}>(args?: Subset<T, leads$gmail_accountsArgs<ExtArgs>>): Prisma__gmail_accountsClient<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    queue_jobs<T extends leads$queue_jobsArgs<ExtArgs> = {}>(args?: Subset<T, leads$queue_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leads model
   */
  interface leadsFieldRefs {
    readonly id: FieldRef<"leads", 'String'>
    readonly user_id: FieldRef<"leads", 'String'>
    readonly campaign_id: FieldRef<"leads", 'String'>
    readonly gmail_account_id: FieldRef<"leads", 'String'>
    readonly email: FieldRef<"leads", 'String'>
    readonly first_name: FieldRef<"leads", 'String'>
    readonly company_name: FieldRef<"leads", 'String'>
    readonly domain_name: FieldRef<"leads", 'String'>
    readonly custom_fields: FieldRef<"leads", 'String'>
    readonly status: FieldRef<"leads", 'LeadStatus'>
    readonly sent_at: FieldRef<"leads", 'DateTime'>
    readonly opened_at: FieldRef<"leads", 'DateTime'>
    readonly clicked_at: FieldRef<"leads", 'DateTime'>
    readonly replied_at: FieldRef<"leads", 'DateTime'>
    readonly bounced_at: FieldRef<"leads", 'DateTime'>
    readonly error_message: FieldRef<"leads", 'String'>
    readonly created_at: FieldRef<"leads", 'DateTime'>
    readonly currentSequenceStep: FieldRef<"leads", 'Int'>
    readonly lastMessageId: FieldRef<"leads", 'String'>
    readonly lastThreadId: FieldRef<"leads", 'String'>
    readonly receivedReply: FieldRef<"leads", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * leads findUnique
   */
  export type leadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findUniqueOrThrow
   */
  export type leadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findFirst
   */
  export type leadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findFirstOrThrow
   */
  export type leadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findMany
   */
  export type leadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads create
   */
  export type leadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The data needed to create a leads.
     */
    data: XOR<leadsCreateInput, leadsUncheckedCreateInput>
  }

  /**
   * leads createMany
   */
  export type leadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
  }

  /**
   * leads createManyAndReturn
   */
  export type leadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leads update
   */
  export type leadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The data needed to update a leads.
     */
    data: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
    /**
     * Choose, which leads to update.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads updateMany
   */
  export type leadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads updateManyAndReturn
   */
  export type leadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leads upsert
   */
  export type leadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The filter to search for the leads to update in case it exists.
     */
    where: leadsWhereUniqueInput
    /**
     * In case the leads found by the `where` argument doesn't exist, create a new leads with this data.
     */
    create: XOR<leadsCreateInput, leadsUncheckedCreateInput>
    /**
     * In case the leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
  }

  /**
   * leads delete
   */
  export type leadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter which leads to delete.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads deleteMany
   */
  export type leadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to delete
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to delete.
     */
    limit?: number
  }

  /**
   * leads.email_logs
   */
  export type leads$email_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    where?: email_logsWhereInput
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    cursor?: email_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[]
  }

  /**
   * leads.gmail_accounts
   */
  export type leads$gmail_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    where?: gmail_accountsWhereInput
  }

  /**
   * leads.queue_jobs
   */
  export type leads$queue_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    where?: queue_jobsWhereInput
    orderBy?: queue_jobsOrderByWithRelationInput | queue_jobsOrderByWithRelationInput[]
    cursor?: queue_jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Queue_jobsScalarFieldEnum | Queue_jobsScalarFieldEnum[]
  }

  /**
   * leads without action
   */
  export type leadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
  }


  /**
   * Model queue_jobs
   */

  export type AggregateQueue_jobs = {
    _count: Queue_jobsCountAggregateOutputType | null
    _avg: Queue_jobsAvgAggregateOutputType | null
    _sum: Queue_jobsSumAggregateOutputType | null
    _min: Queue_jobsMinAggregateOutputType | null
    _max: Queue_jobsMaxAggregateOutputType | null
  }

  export type Queue_jobsAvgAggregateOutputType = {
    attempts: number | null
  }

  export type Queue_jobsSumAggregateOutputType = {
    attempts: number | null
  }

  export type Queue_jobsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    lead_id: string | null
    scheduled_for: Date | null
    status: string | null
    attempts: number | null
    last_error: string | null
    created_at: Date | null
  }

  export type Queue_jobsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    lead_id: string | null
    scheduled_for: Date | null
    status: string | null
    attempts: number | null
    last_error: string | null
    created_at: Date | null
  }

  export type Queue_jobsCountAggregateOutputType = {
    id: number
    user_id: number
    campaign_id: number
    lead_id: number
    scheduled_for: number
    status: number
    attempts: number
    last_error: number
    created_at: number
    _all: number
  }


  export type Queue_jobsAvgAggregateInputType = {
    attempts?: true
  }

  export type Queue_jobsSumAggregateInputType = {
    attempts?: true
  }

  export type Queue_jobsMinAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    lead_id?: true
    scheduled_for?: true
    status?: true
    attempts?: true
    last_error?: true
    created_at?: true
  }

  export type Queue_jobsMaxAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    lead_id?: true
    scheduled_for?: true
    status?: true
    attempts?: true
    last_error?: true
    created_at?: true
  }

  export type Queue_jobsCountAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    lead_id?: true
    scheduled_for?: true
    status?: true
    attempts?: true
    last_error?: true
    created_at?: true
    _all?: true
  }

  export type Queue_jobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which queue_jobs to aggregate.
     */
    where?: queue_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_jobs to fetch.
     */
    orderBy?: queue_jobsOrderByWithRelationInput | queue_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: queue_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned queue_jobs
    **/
    _count?: true | Queue_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Queue_jobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Queue_jobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Queue_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Queue_jobsMaxAggregateInputType
  }

  export type GetQueue_jobsAggregateType<T extends Queue_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateQueue_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueue_jobs[P]>
      : GetScalarType<T[P], AggregateQueue_jobs[P]>
  }




  export type queue_jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: queue_jobsWhereInput
    orderBy?: queue_jobsOrderByWithAggregationInput | queue_jobsOrderByWithAggregationInput[]
    by: Queue_jobsScalarFieldEnum[] | Queue_jobsScalarFieldEnum
    having?: queue_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Queue_jobsCountAggregateInputType | true
    _avg?: Queue_jobsAvgAggregateInputType
    _sum?: Queue_jobsSumAggregateInputType
    _min?: Queue_jobsMinAggregateInputType
    _max?: Queue_jobsMaxAggregateInputType
  }

  export type Queue_jobsGroupByOutputType = {
    id: string
    user_id: string
    campaign_id: string
    lead_id: string
    scheduled_for: Date
    status: string | null
    attempts: number | null
    last_error: string | null
    created_at: Date | null
    _count: Queue_jobsCountAggregateOutputType | null
    _avg: Queue_jobsAvgAggregateOutputType | null
    _sum: Queue_jobsSumAggregateOutputType | null
    _min: Queue_jobsMinAggregateOutputType | null
    _max: Queue_jobsMaxAggregateOutputType | null
  }

  type GetQueue_jobsGroupByPayload<T extends queue_jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Queue_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Queue_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Queue_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], Queue_jobsGroupByOutputType[P]>
        }
      >
    >


  export type queue_jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    scheduled_for?: boolean
    status?: boolean
    attempts?: boolean
    last_error?: boolean
    created_at?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue_jobs"]>

  export type queue_jobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    scheduled_for?: boolean
    status?: boolean
    attempts?: boolean
    last_error?: boolean
    created_at?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue_jobs"]>

  export type queue_jobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    scheduled_for?: boolean
    status?: boolean
    attempts?: boolean
    last_error?: boolean
    created_at?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue_jobs"]>

  export type queue_jobsSelectScalar = {
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    scheduled_for?: boolean
    status?: boolean
    attempts?: boolean
    last_error?: boolean
    created_at?: boolean
  }

  export type queue_jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "campaign_id" | "lead_id" | "scheduled_for" | "status" | "attempts" | "last_error" | "created_at", ExtArgs["result"]["queue_jobs"]>
  export type queue_jobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type queue_jobsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type queue_jobsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    leads?: boolean | leadsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $queue_jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "queue_jobs"
    objects: {
      campaigns: Prisma.$campaignsPayload<ExtArgs>
      leads: Prisma.$leadsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      campaign_id: string
      lead_id: string
      scheduled_for: Date
      status: string | null
      attempts: number | null
      last_error: string | null
      created_at: Date | null
    }, ExtArgs["result"]["queue_jobs"]>
    composites: {}
  }

  type queue_jobsGetPayload<S extends boolean | null | undefined | queue_jobsDefaultArgs> = $Result.GetResult<Prisma.$queue_jobsPayload, S>

  type queue_jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<queue_jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Queue_jobsCountAggregateInputType | true
    }

  export interface queue_jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['queue_jobs'], meta: { name: 'queue_jobs' } }
    /**
     * Find zero or one Queue_jobs that matches the filter.
     * @param {queue_jobsFindUniqueArgs} args - Arguments to find a Queue_jobs
     * @example
     * // Get one Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends queue_jobsFindUniqueArgs>(args: SelectSubset<T, queue_jobsFindUniqueArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Queue_jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {queue_jobsFindUniqueOrThrowArgs} args - Arguments to find a Queue_jobs
     * @example
     * // Get one Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends queue_jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, queue_jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_jobsFindFirstArgs} args - Arguments to find a Queue_jobs
     * @example
     * // Get one Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends queue_jobsFindFirstArgs>(args?: SelectSubset<T, queue_jobsFindFirstArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue_jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_jobsFindFirstOrThrowArgs} args - Arguments to find a Queue_jobs
     * @example
     * // Get one Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends queue_jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, queue_jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queue_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.findMany()
     * 
     * // Get first 10 Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queue_jobsWithIdOnly = await prisma.queue_jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends queue_jobsFindManyArgs>(args?: SelectSubset<T, queue_jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Queue_jobs.
     * @param {queue_jobsCreateArgs} args - Arguments to create a Queue_jobs.
     * @example
     * // Create one Queue_jobs
     * const Queue_jobs = await prisma.queue_jobs.create({
     *   data: {
     *     // ... data to create a Queue_jobs
     *   }
     * })
     * 
     */
    create<T extends queue_jobsCreateArgs>(args: SelectSubset<T, queue_jobsCreateArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queue_jobs.
     * @param {queue_jobsCreateManyArgs} args - Arguments to create many Queue_jobs.
     * @example
     * // Create many Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends queue_jobsCreateManyArgs>(args?: SelectSubset<T, queue_jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queue_jobs and returns the data saved in the database.
     * @param {queue_jobsCreateManyAndReturnArgs} args - Arguments to create many Queue_jobs.
     * @example
     * // Create many Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queue_jobs and only return the `id`
     * const queue_jobsWithIdOnly = await prisma.queue_jobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends queue_jobsCreateManyAndReturnArgs>(args?: SelectSubset<T, queue_jobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Queue_jobs.
     * @param {queue_jobsDeleteArgs} args - Arguments to delete one Queue_jobs.
     * @example
     * // Delete one Queue_jobs
     * const Queue_jobs = await prisma.queue_jobs.delete({
     *   where: {
     *     // ... filter to delete one Queue_jobs
     *   }
     * })
     * 
     */
    delete<T extends queue_jobsDeleteArgs>(args: SelectSubset<T, queue_jobsDeleteArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Queue_jobs.
     * @param {queue_jobsUpdateArgs} args - Arguments to update one Queue_jobs.
     * @example
     * // Update one Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends queue_jobsUpdateArgs>(args: SelectSubset<T, queue_jobsUpdateArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queue_jobs.
     * @param {queue_jobsDeleteManyArgs} args - Arguments to filter Queue_jobs to delete.
     * @example
     * // Delete a few Queue_jobs
     * const { count } = await prisma.queue_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends queue_jobsDeleteManyArgs>(args?: SelectSubset<T, queue_jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queue_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends queue_jobsUpdateManyArgs>(args: SelectSubset<T, queue_jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queue_jobs and returns the data updated in the database.
     * @param {queue_jobsUpdateManyAndReturnArgs} args - Arguments to update many Queue_jobs.
     * @example
     * // Update many Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queue_jobs and only return the `id`
     * const queue_jobsWithIdOnly = await prisma.queue_jobs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends queue_jobsUpdateManyAndReturnArgs>(args: SelectSubset<T, queue_jobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Queue_jobs.
     * @param {queue_jobsUpsertArgs} args - Arguments to update or create a Queue_jobs.
     * @example
     * // Update or create a Queue_jobs
     * const queue_jobs = await prisma.queue_jobs.upsert({
     *   create: {
     *     // ... data to create a Queue_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Queue_jobs we want to update
     *   }
     * })
     */
    upsert<T extends queue_jobsUpsertArgs>(args: SelectSubset<T, queue_jobsUpsertArgs<ExtArgs>>): Prisma__queue_jobsClient<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queue_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_jobsCountArgs} args - Arguments to filter Queue_jobs to count.
     * @example
     * // Count the number of Queue_jobs
     * const count = await prisma.queue_jobs.count({
     *   where: {
     *     // ... the filter for the Queue_jobs we want to count
     *   }
     * })
    **/
    count<T extends queue_jobsCountArgs>(
      args?: Subset<T, queue_jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Queue_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Queue_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Queue_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Queue_jobsAggregateArgs>(args: Subset<T, Queue_jobsAggregateArgs>): Prisma.PrismaPromise<GetQueue_jobsAggregateType<T>>

    /**
     * Group by Queue_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_jobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends queue_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: queue_jobsGroupByArgs['orderBy'] }
        : { orderBy?: queue_jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, queue_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueue_jobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the queue_jobs model
   */
  readonly fields: queue_jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for queue_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__queue_jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends campaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, campaignsDefaultArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends leadsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leadsDefaultArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the queue_jobs model
   */
  interface queue_jobsFieldRefs {
    readonly id: FieldRef<"queue_jobs", 'String'>
    readonly user_id: FieldRef<"queue_jobs", 'String'>
    readonly campaign_id: FieldRef<"queue_jobs", 'String'>
    readonly lead_id: FieldRef<"queue_jobs", 'String'>
    readonly scheduled_for: FieldRef<"queue_jobs", 'DateTime'>
    readonly status: FieldRef<"queue_jobs", 'String'>
    readonly attempts: FieldRef<"queue_jobs", 'Int'>
    readonly last_error: FieldRef<"queue_jobs", 'String'>
    readonly created_at: FieldRef<"queue_jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * queue_jobs findUnique
   */
  export type queue_jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * Filter, which queue_jobs to fetch.
     */
    where: queue_jobsWhereUniqueInput
  }

  /**
   * queue_jobs findUniqueOrThrow
   */
  export type queue_jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * Filter, which queue_jobs to fetch.
     */
    where: queue_jobsWhereUniqueInput
  }

  /**
   * queue_jobs findFirst
   */
  export type queue_jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * Filter, which queue_jobs to fetch.
     */
    where?: queue_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_jobs to fetch.
     */
    orderBy?: queue_jobsOrderByWithRelationInput | queue_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for queue_jobs.
     */
    cursor?: queue_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of queue_jobs.
     */
    distinct?: Queue_jobsScalarFieldEnum | Queue_jobsScalarFieldEnum[]
  }

  /**
   * queue_jobs findFirstOrThrow
   */
  export type queue_jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * Filter, which queue_jobs to fetch.
     */
    where?: queue_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_jobs to fetch.
     */
    orderBy?: queue_jobsOrderByWithRelationInput | queue_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for queue_jobs.
     */
    cursor?: queue_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of queue_jobs.
     */
    distinct?: Queue_jobsScalarFieldEnum | Queue_jobsScalarFieldEnum[]
  }

  /**
   * queue_jobs findMany
   */
  export type queue_jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * Filter, which queue_jobs to fetch.
     */
    where?: queue_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_jobs to fetch.
     */
    orderBy?: queue_jobsOrderByWithRelationInput | queue_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing queue_jobs.
     */
    cursor?: queue_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_jobs.
     */
    skip?: number
    distinct?: Queue_jobsScalarFieldEnum | Queue_jobsScalarFieldEnum[]
  }

  /**
   * queue_jobs create
   */
  export type queue_jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * The data needed to create a queue_jobs.
     */
    data: XOR<queue_jobsCreateInput, queue_jobsUncheckedCreateInput>
  }

  /**
   * queue_jobs createMany
   */
  export type queue_jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many queue_jobs.
     */
    data: queue_jobsCreateManyInput | queue_jobsCreateManyInput[]
  }

  /**
   * queue_jobs createManyAndReturn
   */
  export type queue_jobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * The data used to create many queue_jobs.
     */
    data: queue_jobsCreateManyInput | queue_jobsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * queue_jobs update
   */
  export type queue_jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * The data needed to update a queue_jobs.
     */
    data: XOR<queue_jobsUpdateInput, queue_jobsUncheckedUpdateInput>
    /**
     * Choose, which queue_jobs to update.
     */
    where: queue_jobsWhereUniqueInput
  }

  /**
   * queue_jobs updateMany
   */
  export type queue_jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update queue_jobs.
     */
    data: XOR<queue_jobsUpdateManyMutationInput, queue_jobsUncheckedUpdateManyInput>
    /**
     * Filter which queue_jobs to update
     */
    where?: queue_jobsWhereInput
    /**
     * Limit how many queue_jobs to update.
     */
    limit?: number
  }

  /**
   * queue_jobs updateManyAndReturn
   */
  export type queue_jobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * The data used to update queue_jobs.
     */
    data: XOR<queue_jobsUpdateManyMutationInput, queue_jobsUncheckedUpdateManyInput>
    /**
     * Filter which queue_jobs to update
     */
    where?: queue_jobsWhereInput
    /**
     * Limit how many queue_jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * queue_jobs upsert
   */
  export type queue_jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * The filter to search for the queue_jobs to update in case it exists.
     */
    where: queue_jobsWhereUniqueInput
    /**
     * In case the queue_jobs found by the `where` argument doesn't exist, create a new queue_jobs with this data.
     */
    create: XOR<queue_jobsCreateInput, queue_jobsUncheckedCreateInput>
    /**
     * In case the queue_jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<queue_jobsUpdateInput, queue_jobsUncheckedUpdateInput>
  }

  /**
   * queue_jobs delete
   */
  export type queue_jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    /**
     * Filter which queue_jobs to delete.
     */
    where: queue_jobsWhereUniqueInput
  }

  /**
   * queue_jobs deleteMany
   */
  export type queue_jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which queue_jobs to delete
     */
    where?: queue_jobsWhereInput
    /**
     * Limit how many queue_jobs to delete.
     */
    limit?: number
  }

  /**
   * queue_jobs without action
   */
  export type queue_jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    audit_logs?: boolean | users$audit_logsArgs<ExtArgs>
    campaigns?: boolean | users$campaignsArgs<ExtArgs>
    email_logs?: boolean | users$email_logsArgs<ExtArgs>
    gmail_accounts?: boolean | users$gmail_accountsArgs<ExtArgs>
    leads?: boolean | users$leadsArgs<ExtArgs>
    queue_jobs?: boolean | users$queue_jobsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | users$audit_logsArgs<ExtArgs>
    campaigns?: boolean | users$campaignsArgs<ExtArgs>
    email_logs?: boolean | users$email_logsArgs<ExtArgs>
    gmail_accounts?: boolean | users$gmail_accountsArgs<ExtArgs>
    leads?: boolean | users$leadsArgs<ExtArgs>
    queue_jobs?: boolean | users$queue_jobsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      audit_logs: Prisma.$audit_logsPayload<ExtArgs>[]
      campaigns: Prisma.$campaignsPayload<ExtArgs>[]
      email_logs: Prisma.$email_logsPayload<ExtArgs>[]
      gmail_accounts: Prisma.$gmail_accountsPayload<ExtArgs>[]
      leads: Prisma.$leadsPayload<ExtArgs>[]
      queue_jobs: Prisma.$queue_jobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_logs<T extends users$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends users$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, users$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    email_logs<T extends users$email_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$email_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gmail_accounts<T extends users$gmail_accountsArgs<ExtArgs> = {}>(args?: Subset<T, users$gmail_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gmail_accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends users$leadsArgs<ExtArgs> = {}>(args?: Subset<T, users$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queue_jobs<T extends users$queue_jobsArgs<ExtArgs> = {}>(args?: Subset<T, users$queue_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.audit_logs
   */
  export type users$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    cursor?: audit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * users.campaigns
   */
  export type users$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    where?: campaignsWhereInput
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    cursor?: campaignsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * users.email_logs
   */
  export type users$email_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_logs
     */
    omit?: email_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_logsInclude<ExtArgs> | null
    where?: email_logsWhereInput
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[]
    cursor?: email_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[]
  }

  /**
   * users.gmail_accounts
   */
  export type users$gmail_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gmail_accounts
     */
    select?: gmail_accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gmail_accounts
     */
    omit?: gmail_accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gmail_accountsInclude<ExtArgs> | null
    where?: gmail_accountsWhereInput
    orderBy?: gmail_accountsOrderByWithRelationInput | gmail_accountsOrderByWithRelationInput[]
    cursor?: gmail_accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gmail_accountsScalarFieldEnum | Gmail_accountsScalarFieldEnum[]
  }

  /**
   * users.leads
   */
  export type users$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    cursor?: leadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * users.queue_jobs
   */
  export type users$queue_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_jobs
     */
    select?: queue_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_jobs
     */
    omit?: queue_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_jobsInclude<ExtArgs> | null
    where?: queue_jobsWhereInput
    orderBy?: queue_jobsOrderByWithRelationInput | queue_jobsOrderByWithRelationInput[]
    cursor?: queue_jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Queue_jobsScalarFieldEnum | Queue_jobsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    timestamp: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    timestamp: bigint | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    timestamp: bigint | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    campaign_id: string | null
    timestamp: bigint | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    campaign_id: number
    timestamp: number
    created_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    timestamp?: true
  }

  export type NotificationsSumAggregateInputType = {
    timestamp?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    timestamp?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    timestamp?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    campaign_id?: true
    timestamp?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    user_id: string
    campaign_id: string
    timestamp: bigint
    created_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    timestamp?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    timestamp?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    timestamp?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    campaign_id?: boolean
    timestamp?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "campaign_id" | "timestamp" | "created_at", ExtArgs["result"]["notifications"]>

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      campaign_id: string
      timestamp: bigint
      created_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'String'>
    readonly user_id: FieldRef<"notifications", 'String'>
    readonly campaign_id: FieldRef<"notifications", 'String'>
    readonly timestamp: FieldRef<"notifications", 'BigInt'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Audit_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    resource: 'resource',
    resource_id: 'resource_id',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type Audit_logsScalarFieldEnum = (typeof Audit_logsScalarFieldEnum)[keyof typeof Audit_logsScalarFieldEnum]


  export const Campaign_notificationsScalarFieldEnum: {
    id: 'id',
    campaign_id: 'campaign_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type Campaign_notificationsScalarFieldEnum = (typeof Campaign_notificationsScalarFieldEnum)[keyof typeof Campaign_notificationsScalarFieldEnum]


  export const CampaignsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    gmail_account_id: 'gmail_account_id',
    name: 'name',
    subject_template: 'subject_template',
    body_template: 'body_template',
    required_variables: 'required_variables',
    daily_limit: 'daily_limit',
    delay_min_seconds: 'delay_min_seconds',
    delay_max_seconds: 'delay_max_seconds',
    start_time: 'start_time',
    status: 'status',
    failure_count: 'failure_count',
    follow_up2_body: 'follow_up2_body',
    follow_up2_delay_hours: 'follow_up2_delay_hours',
    follow_up3_body: 'follow_up3_body',
    follow_up3_delay_hours: 'follow_up3_delay_hours',
    follow_up4_body: 'follow_up4_body',
    follow_up4_delay_hours: 'follow_up4_delay_hours',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CampaignsScalarFieldEnum = (typeof CampaignsScalarFieldEnum)[keyof typeof CampaignsScalarFieldEnum]


  export const Email_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    campaign_id: 'campaign_id',
    lead_id: 'lead_id',
    gmail_account_id: 'gmail_account_id',
    subject: 'subject',
    body: 'body',
    sent_at: 'sent_at',
    status: 'status',
    error_message: 'error_message',
    bounce_status: 'bounce_status',
    created_at: 'created_at',
    sequence_step: 'sequence_step'
  };

  export type Email_logsScalarFieldEnum = (typeof Email_logsScalarFieldEnum)[keyof typeof Email_logsScalarFieldEnum]


  export const Gmail_accountsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    email: 'email',
    refresh_token_encrypted: 'refresh_token_encrypted',
    access_token_encrypted: 'access_token_encrypted',
    access_token_expires_at: 'access_token_expires_at',
    status: 'status',
    created_at: 'created_at'
  };

  export type Gmail_accountsScalarFieldEnum = (typeof Gmail_accountsScalarFieldEnum)[keyof typeof Gmail_accountsScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    campaign_id: 'campaign_id',
    gmail_account_id: 'gmail_account_id',
    email: 'email',
    first_name: 'first_name',
    company_name: 'company_name',
    domain_name: 'domain_name',
    custom_fields: 'custom_fields',
    status: 'status',
    sent_at: 'sent_at',
    opened_at: 'opened_at',
    clicked_at: 'clicked_at',
    replied_at: 'replied_at',
    bounced_at: 'bounced_at',
    error_message: 'error_message',
    created_at: 'created_at',
    currentSequenceStep: 'currentSequenceStep',
    lastMessageId: 'lastMessageId',
    lastThreadId: 'lastThreadId',
    receivedReply: 'receivedReply'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const Queue_jobsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    campaign_id: 'campaign_id',
    lead_id: 'lead_id',
    scheduled_for: 'scheduled_for',
    status: 'status',
    attempts: 'attempts',
    last_error: 'last_error',
    created_at: 'created_at'
  };

  export type Queue_jobsScalarFieldEnum = (typeof Queue_jobsScalarFieldEnum)[keyof typeof Queue_jobsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    campaign_id: 'campaign_id',
    timestamp: 'timestamp',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'GmailAccountStatus'
   */
  export type EnumGmailAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GmailAccountStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type audit_logsWhereInput = {
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    id?: StringFilter<"audit_logs"> | string
    user_id?: StringFilter<"audit_logs"> | string
    action?: StringFilter<"audit_logs"> | string
    resource?: StringFilter<"audit_logs"> | string
    resource_id?: StringNullableFilter<"audit_logs"> | string | null
    metadata?: StringNullableFilter<"audit_logs"> | string | null
    created_at?: DateTimeFilter<"audit_logs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type audit_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resource_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type audit_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    user_id?: StringFilter<"audit_logs"> | string
    action?: StringFilter<"audit_logs"> | string
    resource?: StringFilter<"audit_logs"> | string
    resource_id?: StringNullableFilter<"audit_logs"> | string | null
    metadata?: StringNullableFilter<"audit_logs"> | string | null
    created_at?: DateTimeFilter<"audit_logs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type audit_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resource_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: audit_logsCountOrderByAggregateInput
    _max?: audit_logsMaxOrderByAggregateInput
    _min?: audit_logsMinOrderByAggregateInput
  }

  export type audit_logsScalarWhereWithAggregatesInput = {
    AND?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    OR?: audit_logsScalarWhereWithAggregatesInput[]
    NOT?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"audit_logs"> | string
    user_id?: StringWithAggregatesFilter<"audit_logs"> | string
    action?: StringWithAggregatesFilter<"audit_logs"> | string
    resource?: StringWithAggregatesFilter<"audit_logs"> | string
    resource_id?: StringNullableWithAggregatesFilter<"audit_logs"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"audit_logs"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"audit_logs"> | Date | string
  }

  export type campaign_notificationsWhereInput = {
    AND?: campaign_notificationsWhereInput | campaign_notificationsWhereInput[]
    OR?: campaign_notificationsWhereInput[]
    NOT?: campaign_notificationsWhereInput | campaign_notificationsWhereInput[]
    id?: StringFilter<"campaign_notifications"> | string
    campaign_id?: StringFilter<"campaign_notifications"> | string
    user_id?: StringFilter<"campaign_notifications"> | string
    created_at?: DateTimeFilter<"campaign_notifications"> | Date | string
  }

  export type campaign_notificationsOrderByWithRelationInput = {
    id?: SortOrder
    campaign_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type campaign_notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: campaign_notificationsWhereInput | campaign_notificationsWhereInput[]
    OR?: campaign_notificationsWhereInput[]
    NOT?: campaign_notificationsWhereInput | campaign_notificationsWhereInput[]
    campaign_id?: StringFilter<"campaign_notifications"> | string
    user_id?: StringFilter<"campaign_notifications"> | string
    created_at?: DateTimeFilter<"campaign_notifications"> | Date | string
  }, "id">

  export type campaign_notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    campaign_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: campaign_notificationsCountOrderByAggregateInput
    _max?: campaign_notificationsMaxOrderByAggregateInput
    _min?: campaign_notificationsMinOrderByAggregateInput
  }

  export type campaign_notificationsScalarWhereWithAggregatesInput = {
    AND?: campaign_notificationsScalarWhereWithAggregatesInput | campaign_notificationsScalarWhereWithAggregatesInput[]
    OR?: campaign_notificationsScalarWhereWithAggregatesInput[]
    NOT?: campaign_notificationsScalarWhereWithAggregatesInput | campaign_notificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"campaign_notifications"> | string
    campaign_id?: StringWithAggregatesFilter<"campaign_notifications"> | string
    user_id?: StringWithAggregatesFilter<"campaign_notifications"> | string
    created_at?: DateTimeWithAggregatesFilter<"campaign_notifications"> | Date | string
  }

  export type campaignsWhereInput = {
    AND?: campaignsWhereInput | campaignsWhereInput[]
    OR?: campaignsWhereInput[]
    NOT?: campaignsWhereInput | campaignsWhereInput[]
    id?: StringFilter<"campaigns"> | string
    user_id?: StringFilter<"campaigns"> | string
    gmail_account_id?: StringFilter<"campaigns"> | string
    name?: StringFilter<"campaigns"> | string
    subject_template?: StringFilter<"campaigns"> | string
    body_template?: StringFilter<"campaigns"> | string
    required_variables?: StringNullableFilter<"campaigns"> | string | null
    daily_limit?: IntFilter<"campaigns"> | number
    delay_min_seconds?: IntFilter<"campaigns"> | number
    delay_max_seconds?: IntFilter<"campaigns"> | number
    start_time?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    status?: EnumCampaignStatusNullableFilter<"campaigns"> | $Enums.CampaignStatus | null
    failure_count?: IntNullableFilter<"campaigns"> | number | null
    follow_up2_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up2_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    follow_up3_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up3_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    follow_up4_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up4_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    created_at?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    gmail_accounts?: XOR<Gmail_accountsScalarRelationFilter, gmail_accountsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    email_logs?: Email_logsListRelationFilter
    leads?: LeadsListRelationFilter
    queue_jobs?: Queue_jobsListRelationFilter
  }

  export type campaignsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gmail_account_id?: SortOrder
    name?: SortOrder
    subject_template?: SortOrder
    body_template?: SortOrder
    required_variables?: SortOrderInput | SortOrder
    daily_limit?: SortOrder
    delay_min_seconds?: SortOrder
    delay_max_seconds?: SortOrder
    start_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    failure_count?: SortOrderInput | SortOrder
    follow_up2_body?: SortOrderInput | SortOrder
    follow_up2_delay_hours?: SortOrderInput | SortOrder
    follow_up3_body?: SortOrderInput | SortOrder
    follow_up3_delay_hours?: SortOrderInput | SortOrder
    follow_up4_body?: SortOrderInput | SortOrder
    follow_up4_delay_hours?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    gmail_accounts?: gmail_accountsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    email_logs?: email_logsOrderByRelationAggregateInput
    leads?: leadsOrderByRelationAggregateInput
    queue_jobs?: queue_jobsOrderByRelationAggregateInput
  }

  export type campaignsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: campaignsWhereInput | campaignsWhereInput[]
    OR?: campaignsWhereInput[]
    NOT?: campaignsWhereInput | campaignsWhereInput[]
    user_id?: StringFilter<"campaigns"> | string
    gmail_account_id?: StringFilter<"campaigns"> | string
    name?: StringFilter<"campaigns"> | string
    subject_template?: StringFilter<"campaigns"> | string
    body_template?: StringFilter<"campaigns"> | string
    required_variables?: StringNullableFilter<"campaigns"> | string | null
    daily_limit?: IntFilter<"campaigns"> | number
    delay_min_seconds?: IntFilter<"campaigns"> | number
    delay_max_seconds?: IntFilter<"campaigns"> | number
    start_time?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    status?: EnumCampaignStatusNullableFilter<"campaigns"> | $Enums.CampaignStatus | null
    failure_count?: IntNullableFilter<"campaigns"> | number | null
    follow_up2_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up2_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    follow_up3_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up3_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    follow_up4_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up4_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    created_at?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    gmail_accounts?: XOR<Gmail_accountsScalarRelationFilter, gmail_accountsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    email_logs?: Email_logsListRelationFilter
    leads?: LeadsListRelationFilter
    queue_jobs?: Queue_jobsListRelationFilter
  }, "id">

  export type campaignsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gmail_account_id?: SortOrder
    name?: SortOrder
    subject_template?: SortOrder
    body_template?: SortOrder
    required_variables?: SortOrderInput | SortOrder
    daily_limit?: SortOrder
    delay_min_seconds?: SortOrder
    delay_max_seconds?: SortOrder
    start_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    failure_count?: SortOrderInput | SortOrder
    follow_up2_body?: SortOrderInput | SortOrder
    follow_up2_delay_hours?: SortOrderInput | SortOrder
    follow_up3_body?: SortOrderInput | SortOrder
    follow_up3_delay_hours?: SortOrderInput | SortOrder
    follow_up4_body?: SortOrderInput | SortOrder
    follow_up4_delay_hours?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: campaignsCountOrderByAggregateInput
    _avg?: campaignsAvgOrderByAggregateInput
    _max?: campaignsMaxOrderByAggregateInput
    _min?: campaignsMinOrderByAggregateInput
    _sum?: campaignsSumOrderByAggregateInput
  }

  export type campaignsScalarWhereWithAggregatesInput = {
    AND?: campaignsScalarWhereWithAggregatesInput | campaignsScalarWhereWithAggregatesInput[]
    OR?: campaignsScalarWhereWithAggregatesInput[]
    NOT?: campaignsScalarWhereWithAggregatesInput | campaignsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"campaigns"> | string
    user_id?: StringWithAggregatesFilter<"campaigns"> | string
    gmail_account_id?: StringWithAggregatesFilter<"campaigns"> | string
    name?: StringWithAggregatesFilter<"campaigns"> | string
    subject_template?: StringWithAggregatesFilter<"campaigns"> | string
    body_template?: StringWithAggregatesFilter<"campaigns"> | string
    required_variables?: StringNullableWithAggregatesFilter<"campaigns"> | string | null
    daily_limit?: IntWithAggregatesFilter<"campaigns"> | number
    delay_min_seconds?: IntWithAggregatesFilter<"campaigns"> | number
    delay_max_seconds?: IntWithAggregatesFilter<"campaigns"> | number
    start_time?: DateTimeNullableWithAggregatesFilter<"campaigns"> | Date | string | null
    status?: EnumCampaignStatusNullableWithAggregatesFilter<"campaigns"> | $Enums.CampaignStatus | null
    failure_count?: IntNullableWithAggregatesFilter<"campaigns"> | number | null
    follow_up2_body?: StringNullableWithAggregatesFilter<"campaigns"> | string | null
    follow_up2_delay_hours?: IntNullableWithAggregatesFilter<"campaigns"> | number | null
    follow_up3_body?: StringNullableWithAggregatesFilter<"campaigns"> | string | null
    follow_up3_delay_hours?: IntNullableWithAggregatesFilter<"campaigns"> | number | null
    follow_up4_body?: StringNullableWithAggregatesFilter<"campaigns"> | string | null
    follow_up4_delay_hours?: IntNullableWithAggregatesFilter<"campaigns"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"campaigns"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"campaigns"> | Date | string | null
  }

  export type email_logsWhereInput = {
    AND?: email_logsWhereInput | email_logsWhereInput[]
    OR?: email_logsWhereInput[]
    NOT?: email_logsWhereInput | email_logsWhereInput[]
    id?: StringFilter<"email_logs"> | string
    user_id?: StringFilter<"email_logs"> | string
    campaign_id?: StringFilter<"email_logs"> | string
    lead_id?: StringFilter<"email_logs"> | string
    gmail_account_id?: StringFilter<"email_logs"> | string
    subject?: StringFilter<"email_logs"> | string
    body?: StringFilter<"email_logs"> | string
    sent_at?: DateTimeNullableFilter<"email_logs"> | Date | string | null
    status?: StringNullableFilter<"email_logs"> | string | null
    error_message?: StringNullableFilter<"email_logs"> | string | null
    bounce_status?: StringNullableFilter<"email_logs"> | string | null
    created_at?: DateTimeNullableFilter<"email_logs"> | Date | string | null
    sequence_step?: IntNullableFilter<"email_logs"> | number | null
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    gmail_accounts?: XOR<Gmail_accountsScalarRelationFilter, gmail_accountsWhereInput>
    leads?: XOR<LeadsScalarRelationFilter, leadsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type email_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    gmail_account_id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    bounce_status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    sequence_step?: SortOrderInput | SortOrder
    campaigns?: campaignsOrderByWithRelationInput
    gmail_accounts?: gmail_accountsOrderByWithRelationInput
    leads?: leadsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type email_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: email_logsWhereInput | email_logsWhereInput[]
    OR?: email_logsWhereInput[]
    NOT?: email_logsWhereInput | email_logsWhereInput[]
    user_id?: StringFilter<"email_logs"> | string
    campaign_id?: StringFilter<"email_logs"> | string
    lead_id?: StringFilter<"email_logs"> | string
    gmail_account_id?: StringFilter<"email_logs"> | string
    subject?: StringFilter<"email_logs"> | string
    body?: StringFilter<"email_logs"> | string
    sent_at?: DateTimeNullableFilter<"email_logs"> | Date | string | null
    status?: StringNullableFilter<"email_logs"> | string | null
    error_message?: StringNullableFilter<"email_logs"> | string | null
    bounce_status?: StringNullableFilter<"email_logs"> | string | null
    created_at?: DateTimeNullableFilter<"email_logs"> | Date | string | null
    sequence_step?: IntNullableFilter<"email_logs"> | number | null
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    gmail_accounts?: XOR<Gmail_accountsScalarRelationFilter, gmail_accountsWhereInput>
    leads?: XOR<LeadsScalarRelationFilter, leadsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type email_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    gmail_account_id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    bounce_status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    sequence_step?: SortOrderInput | SortOrder
    _count?: email_logsCountOrderByAggregateInput
    _avg?: email_logsAvgOrderByAggregateInput
    _max?: email_logsMaxOrderByAggregateInput
    _min?: email_logsMinOrderByAggregateInput
    _sum?: email_logsSumOrderByAggregateInput
  }

  export type email_logsScalarWhereWithAggregatesInput = {
    AND?: email_logsScalarWhereWithAggregatesInput | email_logsScalarWhereWithAggregatesInput[]
    OR?: email_logsScalarWhereWithAggregatesInput[]
    NOT?: email_logsScalarWhereWithAggregatesInput | email_logsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"email_logs"> | string
    user_id?: StringWithAggregatesFilter<"email_logs"> | string
    campaign_id?: StringWithAggregatesFilter<"email_logs"> | string
    lead_id?: StringWithAggregatesFilter<"email_logs"> | string
    gmail_account_id?: StringWithAggregatesFilter<"email_logs"> | string
    subject?: StringWithAggregatesFilter<"email_logs"> | string
    body?: StringWithAggregatesFilter<"email_logs"> | string
    sent_at?: DateTimeNullableWithAggregatesFilter<"email_logs"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"email_logs"> | string | null
    error_message?: StringNullableWithAggregatesFilter<"email_logs"> | string | null
    bounce_status?: StringNullableWithAggregatesFilter<"email_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"email_logs"> | Date | string | null
    sequence_step?: IntNullableWithAggregatesFilter<"email_logs"> | number | null
  }

  export type gmail_accountsWhereInput = {
    AND?: gmail_accountsWhereInput | gmail_accountsWhereInput[]
    OR?: gmail_accountsWhereInput[]
    NOT?: gmail_accountsWhereInput | gmail_accountsWhereInput[]
    id?: StringFilter<"gmail_accounts"> | string
    user_id?: StringFilter<"gmail_accounts"> | string
    email?: StringFilter<"gmail_accounts"> | string
    refresh_token_encrypted?: StringFilter<"gmail_accounts"> | string
    access_token_encrypted?: StringNullableFilter<"gmail_accounts"> | string | null
    access_token_expires_at?: DateTimeNullableFilter<"gmail_accounts"> | Date | string | null
    status?: EnumGmailAccountStatusNullableFilter<"gmail_accounts"> | $Enums.GmailAccountStatus | null
    created_at?: DateTimeNullableFilter<"gmail_accounts"> | Date | string | null
    campaigns?: CampaignsListRelationFilter
    email_logs?: Email_logsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    leads?: LeadsListRelationFilter
  }

  export type gmail_accountsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    refresh_token_encrypted?: SortOrder
    access_token_encrypted?: SortOrderInput | SortOrder
    access_token_expires_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    campaigns?: campaignsOrderByRelationAggregateInput
    email_logs?: email_logsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    leads?: leadsOrderByRelationAggregateInput
  }

  export type gmail_accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: gmail_accountsWhereInput | gmail_accountsWhereInput[]
    OR?: gmail_accountsWhereInput[]
    NOT?: gmail_accountsWhereInput | gmail_accountsWhereInput[]
    user_id?: StringFilter<"gmail_accounts"> | string
    email?: StringFilter<"gmail_accounts"> | string
    refresh_token_encrypted?: StringFilter<"gmail_accounts"> | string
    access_token_encrypted?: StringNullableFilter<"gmail_accounts"> | string | null
    access_token_expires_at?: DateTimeNullableFilter<"gmail_accounts"> | Date | string | null
    status?: EnumGmailAccountStatusNullableFilter<"gmail_accounts"> | $Enums.GmailAccountStatus | null
    created_at?: DateTimeNullableFilter<"gmail_accounts"> | Date | string | null
    campaigns?: CampaignsListRelationFilter
    email_logs?: Email_logsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    leads?: LeadsListRelationFilter
  }, "id">

  export type gmail_accountsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    refresh_token_encrypted?: SortOrder
    access_token_encrypted?: SortOrderInput | SortOrder
    access_token_expires_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: gmail_accountsCountOrderByAggregateInput
    _max?: gmail_accountsMaxOrderByAggregateInput
    _min?: gmail_accountsMinOrderByAggregateInput
  }

  export type gmail_accountsScalarWhereWithAggregatesInput = {
    AND?: gmail_accountsScalarWhereWithAggregatesInput | gmail_accountsScalarWhereWithAggregatesInput[]
    OR?: gmail_accountsScalarWhereWithAggregatesInput[]
    NOT?: gmail_accountsScalarWhereWithAggregatesInput | gmail_accountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"gmail_accounts"> | string
    user_id?: StringWithAggregatesFilter<"gmail_accounts"> | string
    email?: StringWithAggregatesFilter<"gmail_accounts"> | string
    refresh_token_encrypted?: StringWithAggregatesFilter<"gmail_accounts"> | string
    access_token_encrypted?: StringNullableWithAggregatesFilter<"gmail_accounts"> | string | null
    access_token_expires_at?: DateTimeNullableWithAggregatesFilter<"gmail_accounts"> | Date | string | null
    status?: EnumGmailAccountStatusNullableWithAggregatesFilter<"gmail_accounts"> | $Enums.GmailAccountStatus | null
    created_at?: DateTimeNullableWithAggregatesFilter<"gmail_accounts"> | Date | string | null
  }

  export type leadsWhereInput = {
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    id?: StringFilter<"leads"> | string
    user_id?: StringFilter<"leads"> | string
    campaign_id?: StringFilter<"leads"> | string
    gmail_account_id?: StringNullableFilter<"leads"> | string | null
    email?: StringFilter<"leads"> | string
    first_name?: StringNullableFilter<"leads"> | string | null
    company_name?: StringNullableFilter<"leads"> | string | null
    domain_name?: StringNullableFilter<"leads"> | string | null
    custom_fields?: StringNullableFilter<"leads"> | string | null
    status?: EnumLeadStatusNullableFilter<"leads"> | $Enums.LeadStatus | null
    sent_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    opened_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    clicked_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    replied_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    bounced_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    error_message?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    currentSequenceStep?: IntNullableFilter<"leads"> | number | null
    lastMessageId?: StringNullableFilter<"leads"> | string | null
    lastThreadId?: StringNullableFilter<"leads"> | string | null
    receivedReply?: BoolNullableFilter<"leads"> | boolean | null
    email_logs?: Email_logsListRelationFilter
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    gmail_accounts?: XOR<Gmail_accountsNullableScalarRelationFilter, gmail_accountsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    queue_jobs?: Queue_jobsListRelationFilter
  }

  export type leadsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    gmail_account_id?: SortOrderInput | SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    domain_name?: SortOrderInput | SortOrder
    custom_fields?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    opened_at?: SortOrderInput | SortOrder
    clicked_at?: SortOrderInput | SortOrder
    replied_at?: SortOrderInput | SortOrder
    bounced_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    currentSequenceStep?: SortOrderInput | SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastThreadId?: SortOrderInput | SortOrder
    receivedReply?: SortOrderInput | SortOrder
    email_logs?: email_logsOrderByRelationAggregateInput
    campaigns?: campaignsOrderByWithRelationInput
    gmail_accounts?: gmail_accountsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    queue_jobs?: queue_jobsOrderByRelationAggregateInput
  }

  export type leadsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaign_id_email?: leadsCampaign_idEmailCompoundUniqueInput
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    user_id?: StringFilter<"leads"> | string
    campaign_id?: StringFilter<"leads"> | string
    gmail_account_id?: StringNullableFilter<"leads"> | string | null
    email?: StringFilter<"leads"> | string
    first_name?: StringNullableFilter<"leads"> | string | null
    company_name?: StringNullableFilter<"leads"> | string | null
    domain_name?: StringNullableFilter<"leads"> | string | null
    custom_fields?: StringNullableFilter<"leads"> | string | null
    status?: EnumLeadStatusNullableFilter<"leads"> | $Enums.LeadStatus | null
    sent_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    opened_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    clicked_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    replied_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    bounced_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    error_message?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    currentSequenceStep?: IntNullableFilter<"leads"> | number | null
    lastMessageId?: StringNullableFilter<"leads"> | string | null
    lastThreadId?: StringNullableFilter<"leads"> | string | null
    receivedReply?: BoolNullableFilter<"leads"> | boolean | null
    email_logs?: Email_logsListRelationFilter
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    gmail_accounts?: XOR<Gmail_accountsNullableScalarRelationFilter, gmail_accountsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    queue_jobs?: Queue_jobsListRelationFilter
  }, "id" | "campaign_id_email">

  export type leadsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    gmail_account_id?: SortOrderInput | SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    domain_name?: SortOrderInput | SortOrder
    custom_fields?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    opened_at?: SortOrderInput | SortOrder
    clicked_at?: SortOrderInput | SortOrder
    replied_at?: SortOrderInput | SortOrder
    bounced_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    currentSequenceStep?: SortOrderInput | SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastThreadId?: SortOrderInput | SortOrder
    receivedReply?: SortOrderInput | SortOrder
    _count?: leadsCountOrderByAggregateInput
    _avg?: leadsAvgOrderByAggregateInput
    _max?: leadsMaxOrderByAggregateInput
    _min?: leadsMinOrderByAggregateInput
    _sum?: leadsSumOrderByAggregateInput
  }

  export type leadsScalarWhereWithAggregatesInput = {
    AND?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    OR?: leadsScalarWhereWithAggregatesInput[]
    NOT?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"leads"> | string
    user_id?: StringWithAggregatesFilter<"leads"> | string
    campaign_id?: StringWithAggregatesFilter<"leads"> | string
    gmail_account_id?: StringNullableWithAggregatesFilter<"leads"> | string | null
    email?: StringWithAggregatesFilter<"leads"> | string
    first_name?: StringNullableWithAggregatesFilter<"leads"> | string | null
    company_name?: StringNullableWithAggregatesFilter<"leads"> | string | null
    domain_name?: StringNullableWithAggregatesFilter<"leads"> | string | null
    custom_fields?: StringNullableWithAggregatesFilter<"leads"> | string | null
    status?: EnumLeadStatusNullableWithAggregatesFilter<"leads"> | $Enums.LeadStatus | null
    sent_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
    opened_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
    clicked_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
    replied_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
    bounced_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
    error_message?: StringNullableWithAggregatesFilter<"leads"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
    currentSequenceStep?: IntNullableWithAggregatesFilter<"leads"> | number | null
    lastMessageId?: StringNullableWithAggregatesFilter<"leads"> | string | null
    lastThreadId?: StringNullableWithAggregatesFilter<"leads"> | string | null
    receivedReply?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
  }

  export type queue_jobsWhereInput = {
    AND?: queue_jobsWhereInput | queue_jobsWhereInput[]
    OR?: queue_jobsWhereInput[]
    NOT?: queue_jobsWhereInput | queue_jobsWhereInput[]
    id?: StringFilter<"queue_jobs"> | string
    user_id?: StringFilter<"queue_jobs"> | string
    campaign_id?: StringFilter<"queue_jobs"> | string
    lead_id?: StringFilter<"queue_jobs"> | string
    scheduled_for?: DateTimeFilter<"queue_jobs"> | Date | string
    status?: StringNullableFilter<"queue_jobs"> | string | null
    attempts?: IntNullableFilter<"queue_jobs"> | number | null
    last_error?: StringNullableFilter<"queue_jobs"> | string | null
    created_at?: DateTimeNullableFilter<"queue_jobs"> | Date | string | null
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    leads?: XOR<LeadsScalarRelationFilter, leadsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type queue_jobsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    scheduled_for?: SortOrder
    status?: SortOrderInput | SortOrder
    attempts?: SortOrderInput | SortOrder
    last_error?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    campaigns?: campaignsOrderByWithRelationInput
    leads?: leadsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type queue_jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: queue_jobsWhereInput | queue_jobsWhereInput[]
    OR?: queue_jobsWhereInput[]
    NOT?: queue_jobsWhereInput | queue_jobsWhereInput[]
    user_id?: StringFilter<"queue_jobs"> | string
    campaign_id?: StringFilter<"queue_jobs"> | string
    lead_id?: StringFilter<"queue_jobs"> | string
    scheduled_for?: DateTimeFilter<"queue_jobs"> | Date | string
    status?: StringNullableFilter<"queue_jobs"> | string | null
    attempts?: IntNullableFilter<"queue_jobs"> | number | null
    last_error?: StringNullableFilter<"queue_jobs"> | string | null
    created_at?: DateTimeNullableFilter<"queue_jobs"> | Date | string | null
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    leads?: XOR<LeadsScalarRelationFilter, leadsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type queue_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    scheduled_for?: SortOrder
    status?: SortOrderInput | SortOrder
    attempts?: SortOrderInput | SortOrder
    last_error?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: queue_jobsCountOrderByAggregateInput
    _avg?: queue_jobsAvgOrderByAggregateInput
    _max?: queue_jobsMaxOrderByAggregateInput
    _min?: queue_jobsMinOrderByAggregateInput
    _sum?: queue_jobsSumOrderByAggregateInput
  }

  export type queue_jobsScalarWhereWithAggregatesInput = {
    AND?: queue_jobsScalarWhereWithAggregatesInput | queue_jobsScalarWhereWithAggregatesInput[]
    OR?: queue_jobsScalarWhereWithAggregatesInput[]
    NOT?: queue_jobsScalarWhereWithAggregatesInput | queue_jobsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"queue_jobs"> | string
    user_id?: StringWithAggregatesFilter<"queue_jobs"> | string
    campaign_id?: StringWithAggregatesFilter<"queue_jobs"> | string
    lead_id?: StringWithAggregatesFilter<"queue_jobs"> | string
    scheduled_for?: DateTimeWithAggregatesFilter<"queue_jobs"> | Date | string
    status?: StringNullableWithAggregatesFilter<"queue_jobs"> | string | null
    attempts?: IntNullableWithAggregatesFilter<"queue_jobs"> | number | null
    last_error?: StringNullableWithAggregatesFilter<"queue_jobs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"queue_jobs"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    campaigns?: CampaignsListRelationFilter
    email_logs?: Email_logsListRelationFilter
    gmail_accounts?: Gmail_accountsListRelationFilter
    leads?: LeadsListRelationFilter
    queue_jobs?: Queue_jobsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    audit_logs?: audit_logsOrderByRelationAggregateInput
    campaigns?: campaignsOrderByRelationAggregateInput
    email_logs?: email_logsOrderByRelationAggregateInput
    gmail_accounts?: gmail_accountsOrderByRelationAggregateInput
    leads?: leadsOrderByRelationAggregateInput
    queue_jobs?: queue_jobsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    audit_logs?: Audit_logsListRelationFilter
    campaigns?: CampaignsListRelationFilter
    email_logs?: Email_logsListRelationFilter
    gmail_accounts?: Gmail_accountsListRelationFilter
    leads?: LeadsListRelationFilter
    queue_jobs?: Queue_jobsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: StringFilter<"notifications"> | string
    user_id?: StringFilter<"notifications"> | string
    campaign_id?: StringFilter<"notifications"> | string
    timestamp?: BigIntFilter<"notifications"> | bigint | number
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    timestamp?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: StringFilter<"notifications"> | string
    campaign_id?: StringFilter<"notifications"> | string
    timestamp?: BigIntFilter<"notifications"> | bigint | number
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    timestamp?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notifications"> | string
    user_id?: StringWithAggregatesFilter<"notifications"> | string
    campaign_id?: StringWithAggregatesFilter<"notifications"> | string
    timestamp?: BigIntWithAggregatesFilter<"notifications"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type audit_logsCreateInput = {
    id?: string
    action: string
    resource: string
    resource_id?: string | null
    metadata?: string | null
    created_at?: Date | string
    users: usersCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    action: string
    resource: string
    resource_id?: string | null
    metadata?: string | null
    created_at?: Date | string
  }

  export type audit_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type audit_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logsCreateManyInput = {
    id?: string
    user_id: string
    action: string
    resource: string
    resource_id?: string | null
    metadata?: string | null
    created_at?: Date | string
  }

  export type audit_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campaign_notificationsCreateInput = {
    id?: string
    campaign_id: string
    user_id: string
    created_at?: Date | string
  }

  export type campaign_notificationsUncheckedCreateInput = {
    id?: string
    campaign_id: string
    user_id: string
    created_at?: Date | string
  }

  export type campaign_notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campaign_notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campaign_notificationsCreateManyInput = {
    id?: string
    campaign_id: string
    user_id: string
    created_at?: Date | string
  }

  export type campaign_notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campaign_notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campaignsCreateInput = {
    id?: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gmail_accounts: gmail_accountsCreateNestedOneWithoutCampaignsInput
    users: usersCreateNestedOneWithoutCampaignsInput
    email_logs?: email_logsCreateNestedManyWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateInput = {
    id?: string
    user_id: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutCampaignsInput
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutCampaignsNestedInput
    users?: usersUpdateOneRequiredWithoutCampaignsNestedInput
    email_logs?: email_logsUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_logs?: email_logsUncheckedUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsCreateManyInput = {
    id?: string
    user_id: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type campaignsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type campaignsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_logsCreateInput = {
    id?: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
    campaigns: campaignsCreateNestedOneWithoutEmail_logsInput
    gmail_accounts: gmail_accountsCreateNestedOneWithoutEmail_logsInput
    leads: leadsCreateNestedOneWithoutEmail_logsInput
    users: usersCreateNestedOneWithoutEmail_logsInput
  }

  export type email_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    campaign_id: string
    lead_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type email_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
    campaigns?: campaignsUpdateOneRequiredWithoutEmail_logsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutEmail_logsNestedInput
    leads?: leadsUpdateOneRequiredWithoutEmail_logsNestedInput
    users?: usersUpdateOneRequiredWithoutEmail_logsNestedInput
  }

  export type email_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type email_logsCreateManyInput = {
    id?: string
    user_id: string
    campaign_id: string
    lead_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type email_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type email_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gmail_accountsCreateInput = {
    id?: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsCreateNestedManyWithoutGmail_accountsInput
    email_logs?: email_logsCreateNestedManyWithoutGmail_accountsInput
    users: usersCreateNestedOneWithoutGmail_accountsInput
    leads?: leadsCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsUncheckedCreateInput = {
    id?: string
    user_id: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsUncheckedCreateNestedManyWithoutGmail_accountsInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutGmail_accountsInput
    leads?: leadsUncheckedCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateManyWithoutGmail_accountsNestedInput
    email_logs?: email_logsUpdateManyWithoutGmail_accountsNestedInput
    users?: usersUpdateOneRequiredWithoutGmail_accountsNestedInput
    leads?: leadsUpdateManyWithoutGmail_accountsNestedInput
  }

  export type gmail_accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUncheckedUpdateManyWithoutGmail_accountsNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutGmail_accountsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutGmail_accountsNestedInput
  }

  export type gmail_accountsCreateManyInput = {
    id?: string
    user_id: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
  }

  export type gmail_accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gmail_accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leadsCreateInput = {
    id?: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsCreateNestedManyWithoutLeadsInput
    campaigns: campaignsCreateNestedOneWithoutLeadsInput
    gmail_accounts?: gmail_accountsCreateNestedOneWithoutLeadsInput
    users: usersCreateNestedOneWithoutLeadsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutLeadsInput
  }

  export type leadsUncheckedCreateInput = {
    id?: string
    user_id: string
    campaign_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutLeadsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type leadsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUpdateManyWithoutLeadsNestedInput
    campaigns?: campaignsUpdateOneRequiredWithoutLeadsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneWithoutLeadsNestedInput
    users?: usersUpdateOneRequiredWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUncheckedUpdateManyWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type leadsCreateManyInput = {
    id?: string
    user_id: string
    campaign_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
  }

  export type leadsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type leadsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type queue_jobsCreateInput = {
    id?: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
    campaigns: campaignsCreateNestedOneWithoutQueue_jobsInput
    leads: leadsCreateNestedOneWithoutQueue_jobsInput
    users: usersCreateNestedOneWithoutQueue_jobsInput
  }

  export type queue_jobsUncheckedCreateInput = {
    id?: string
    user_id: string
    campaign_id: string
    lead_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type queue_jobsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateOneRequiredWithoutQueue_jobsNestedInput
    leads?: leadsUpdateOneRequiredWithoutQueue_jobsNestedInput
    users?: usersUpdateOneRequiredWithoutQueue_jobsNestedInput
  }

  export type queue_jobsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_jobsCreateManyInput = {
    id?: string
    user_id: string
    campaign_id: string
    lead_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type queue_jobsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_jobsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    campaigns?: campaignsCreateNestedManyWithoutUsersInput
    email_logs?: email_logsCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsCreateNestedManyWithoutUsersInput
    leads?: leadsCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    campaigns?: campaignsUncheckedCreateNestedManyWithoutUsersInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsUncheckedCreateNestedManyWithoutUsersInput
    leads?: leadsUncheckedCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUpdateManyWithoutUsersNestedInput
    leads?: leadsUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUncheckedUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUncheckedUpdateManyWithoutUsersNestedInput
    leads?: leadsUncheckedUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    id?: string
    user_id: string
    campaign_id: string
    timestamp: bigint | number
    created_at?: Date | string | null
  }

  export type notificationsUncheckedCreateInput = {
    id?: string
    user_id: string
    campaign_id: string
    timestamp: bigint | number
    created_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id?: string
    user_id: string
    campaign_id: string
    timestamp: bigint | number
    created_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type audit_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resource_id?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resource_id?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resource_id?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type campaign_notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    campaign_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type campaign_notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    campaign_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type campaign_notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    campaign_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCampaignStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CampaignStatus[] | null
    notIn?: $Enums.CampaignStatus[] | null
    not?: NestedEnumCampaignStatusNullableFilter<$PrismaModel> | $Enums.CampaignStatus | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Gmail_accountsScalarRelationFilter = {
    is?: gmail_accountsWhereInput
    isNot?: gmail_accountsWhereInput
  }

  export type Email_logsListRelationFilter = {
    every?: email_logsWhereInput
    some?: email_logsWhereInput
    none?: email_logsWhereInput
  }

  export type LeadsListRelationFilter = {
    every?: leadsWhereInput
    some?: leadsWhereInput
    none?: leadsWhereInput
  }

  export type Queue_jobsListRelationFilter = {
    every?: queue_jobsWhereInput
    some?: queue_jobsWhereInput
    none?: queue_jobsWhereInput
  }

  export type email_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type queue_jobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type campaignsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gmail_account_id?: SortOrder
    name?: SortOrder
    subject_template?: SortOrder
    body_template?: SortOrder
    required_variables?: SortOrder
    daily_limit?: SortOrder
    delay_min_seconds?: SortOrder
    delay_max_seconds?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
    failure_count?: SortOrder
    follow_up2_body?: SortOrder
    follow_up2_delay_hours?: SortOrder
    follow_up3_body?: SortOrder
    follow_up3_delay_hours?: SortOrder
    follow_up4_body?: SortOrder
    follow_up4_delay_hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type campaignsAvgOrderByAggregateInput = {
    daily_limit?: SortOrder
    delay_min_seconds?: SortOrder
    delay_max_seconds?: SortOrder
    failure_count?: SortOrder
    follow_up2_delay_hours?: SortOrder
    follow_up3_delay_hours?: SortOrder
    follow_up4_delay_hours?: SortOrder
  }

  export type campaignsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gmail_account_id?: SortOrder
    name?: SortOrder
    subject_template?: SortOrder
    body_template?: SortOrder
    required_variables?: SortOrder
    daily_limit?: SortOrder
    delay_min_seconds?: SortOrder
    delay_max_seconds?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
    failure_count?: SortOrder
    follow_up2_body?: SortOrder
    follow_up2_delay_hours?: SortOrder
    follow_up3_body?: SortOrder
    follow_up3_delay_hours?: SortOrder
    follow_up4_body?: SortOrder
    follow_up4_delay_hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type campaignsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gmail_account_id?: SortOrder
    name?: SortOrder
    subject_template?: SortOrder
    body_template?: SortOrder
    required_variables?: SortOrder
    daily_limit?: SortOrder
    delay_min_seconds?: SortOrder
    delay_max_seconds?: SortOrder
    start_time?: SortOrder
    status?: SortOrder
    failure_count?: SortOrder
    follow_up2_body?: SortOrder
    follow_up2_delay_hours?: SortOrder
    follow_up3_body?: SortOrder
    follow_up3_delay_hours?: SortOrder
    follow_up4_body?: SortOrder
    follow_up4_delay_hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type campaignsSumOrderByAggregateInput = {
    daily_limit?: SortOrder
    delay_min_seconds?: SortOrder
    delay_max_seconds?: SortOrder
    failure_count?: SortOrder
    follow_up2_delay_hours?: SortOrder
    follow_up3_delay_hours?: SortOrder
    follow_up4_delay_hours?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CampaignStatus[] | null
    notIn?: $Enums.CampaignStatus[] | null
    not?: NestedEnumCampaignStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CampaignsScalarRelationFilter = {
    is?: campaignsWhereInput
    isNot?: campaignsWhereInput
  }

  export type LeadsScalarRelationFilter = {
    is?: leadsWhereInput
    isNot?: leadsWhereInput
  }

  export type email_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    gmail_account_id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    bounce_status?: SortOrder
    created_at?: SortOrder
    sequence_step?: SortOrder
  }

  export type email_logsAvgOrderByAggregateInput = {
    sequence_step?: SortOrder
  }

  export type email_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    gmail_account_id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    bounce_status?: SortOrder
    created_at?: SortOrder
    sequence_step?: SortOrder
  }

  export type email_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    gmail_account_id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    bounce_status?: SortOrder
    created_at?: SortOrder
    sequence_step?: SortOrder
  }

  export type email_logsSumOrderByAggregateInput = {
    sequence_step?: SortOrder
  }

  export type EnumGmailAccountStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GmailAccountStatus | EnumGmailAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GmailAccountStatus[] | null
    notIn?: $Enums.GmailAccountStatus[] | null
    not?: NestedEnumGmailAccountStatusNullableFilter<$PrismaModel> | $Enums.GmailAccountStatus | null
  }

  export type CampaignsListRelationFilter = {
    every?: campaignsWhereInput
    some?: campaignsWhereInput
    none?: campaignsWhereInput
  }

  export type campaignsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gmail_accountsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    refresh_token_encrypted?: SortOrder
    access_token_encrypted?: SortOrder
    access_token_expires_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type gmail_accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    refresh_token_encrypted?: SortOrder
    access_token_encrypted?: SortOrder
    access_token_expires_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type gmail_accountsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    refresh_token_encrypted?: SortOrder
    access_token_encrypted?: SortOrder
    access_token_expires_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EnumGmailAccountStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GmailAccountStatus | EnumGmailAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GmailAccountStatus[] | null
    notIn?: $Enums.GmailAccountStatus[] | null
    not?: NestedEnumGmailAccountStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.GmailAccountStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGmailAccountStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumGmailAccountStatusNullableFilter<$PrismaModel>
  }

  export type EnumLeadStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadStatus[] | null
    notIn?: $Enums.LeadStatus[] | null
    not?: NestedEnumLeadStatusNullableFilter<$PrismaModel> | $Enums.LeadStatus | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Gmail_accountsNullableScalarRelationFilter = {
    is?: gmail_accountsWhereInput | null
    isNot?: gmail_accountsWhereInput | null
  }

  export type leadsCampaign_idEmailCompoundUniqueInput = {
    campaign_id: string
    email: string
  }

  export type leadsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    gmail_account_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    company_name?: SortOrder
    domain_name?: SortOrder
    custom_fields?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    opened_at?: SortOrder
    clicked_at?: SortOrder
    replied_at?: SortOrder
    bounced_at?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    currentSequenceStep?: SortOrder
    lastMessageId?: SortOrder
    lastThreadId?: SortOrder
    receivedReply?: SortOrder
  }

  export type leadsAvgOrderByAggregateInput = {
    currentSequenceStep?: SortOrder
  }

  export type leadsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    gmail_account_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    company_name?: SortOrder
    domain_name?: SortOrder
    custom_fields?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    opened_at?: SortOrder
    clicked_at?: SortOrder
    replied_at?: SortOrder
    bounced_at?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    currentSequenceStep?: SortOrder
    lastMessageId?: SortOrder
    lastThreadId?: SortOrder
    receivedReply?: SortOrder
  }

  export type leadsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    gmail_account_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    company_name?: SortOrder
    domain_name?: SortOrder
    custom_fields?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    opened_at?: SortOrder
    clicked_at?: SortOrder
    replied_at?: SortOrder
    bounced_at?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    currentSequenceStep?: SortOrder
    lastMessageId?: SortOrder
    lastThreadId?: SortOrder
    receivedReply?: SortOrder
  }

  export type leadsSumOrderByAggregateInput = {
    currentSequenceStep?: SortOrder
  }

  export type EnumLeadStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadStatus[] | null
    notIn?: $Enums.LeadStatus[] | null
    not?: NestedEnumLeadStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type queue_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    scheduled_for?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    last_error?: SortOrder
    created_at?: SortOrder
  }

  export type queue_jobsAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type queue_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    scheduled_for?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    last_error?: SortOrder
    created_at?: SortOrder
  }

  export type queue_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    scheduled_for?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    last_error?: SortOrder
    created_at?: SortOrder
  }

  export type queue_jobsSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type Audit_logsListRelationFilter = {
    every?: audit_logsWhereInput
    some?: audit_logsWhereInput
    none?: audit_logsWhereInput
  }

  export type Gmail_accountsListRelationFilter = {
    every?: gmail_accountsWhereInput
    some?: gmail_accountsWhereInput
    none?: gmail_accountsWhereInput
  }

  export type audit_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gmail_accountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    timestamp?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    timestamp?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    campaign_id?: SortOrder
    timestamp?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_logsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutAudit_logsNestedInput = {
    create?: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_logsInput
    upsert?: usersUpsertWithoutAudit_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAudit_logsInput, usersUpdateWithoutAudit_logsInput>, usersUncheckedUpdateWithoutAudit_logsInput>
  }

  export type gmail_accountsCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<gmail_accountsCreateWithoutCampaignsInput, gmail_accountsUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutCampaignsInput
    connect?: gmail_accountsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<usersCreateWithoutCampaignsInput, usersUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCampaignsInput
    connect?: usersWhereUniqueInput
  }

  export type email_logsCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<email_logsCreateWithoutCampaignsInput, email_logsUncheckedCreateWithoutCampaignsInput> | email_logsCreateWithoutCampaignsInput[] | email_logsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutCampaignsInput | email_logsCreateOrConnectWithoutCampaignsInput[]
    createMany?: email_logsCreateManyCampaignsInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type leadsCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type queue_jobsCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<queue_jobsCreateWithoutCampaignsInput, queue_jobsUncheckedCreateWithoutCampaignsInput> | queue_jobsCreateWithoutCampaignsInput[] | queue_jobsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutCampaignsInput | queue_jobsCreateOrConnectWithoutCampaignsInput[]
    createMany?: queue_jobsCreateManyCampaignsInputEnvelope
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
  }

  export type email_logsUncheckedCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<email_logsCreateWithoutCampaignsInput, email_logsUncheckedCreateWithoutCampaignsInput> | email_logsCreateWithoutCampaignsInput[] | email_logsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutCampaignsInput | email_logsCreateOrConnectWithoutCampaignsInput[]
    createMany?: email_logsCreateManyCampaignsInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type leadsUncheckedCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type queue_jobsUncheckedCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<queue_jobsCreateWithoutCampaignsInput, queue_jobsUncheckedCreateWithoutCampaignsInput> | queue_jobsCreateWithoutCampaignsInput[] | queue_jobsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutCampaignsInput | queue_jobsCreateOrConnectWithoutCampaignsInput[]
    createMany?: queue_jobsCreateManyCampaignsInputEnvelope
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type gmail_accountsUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<gmail_accountsCreateWithoutCampaignsInput, gmail_accountsUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutCampaignsInput
    upsert?: gmail_accountsUpsertWithoutCampaignsInput
    connect?: gmail_accountsWhereUniqueInput
    update?: XOR<XOR<gmail_accountsUpdateToOneWithWhereWithoutCampaignsInput, gmail_accountsUpdateWithoutCampaignsInput>, gmail_accountsUncheckedUpdateWithoutCampaignsInput>
  }

  export type usersUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<usersCreateWithoutCampaignsInput, usersUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCampaignsInput
    upsert?: usersUpsertWithoutCampaignsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCampaignsInput, usersUpdateWithoutCampaignsInput>, usersUncheckedUpdateWithoutCampaignsInput>
  }

  export type email_logsUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<email_logsCreateWithoutCampaignsInput, email_logsUncheckedCreateWithoutCampaignsInput> | email_logsCreateWithoutCampaignsInput[] | email_logsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutCampaignsInput | email_logsCreateOrConnectWithoutCampaignsInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutCampaignsInput | email_logsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: email_logsCreateManyCampaignsInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutCampaignsInput | email_logsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutCampaignsInput | email_logsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type leadsUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutCampaignsInput | leadsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutCampaignsInput | leadsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutCampaignsInput | leadsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type queue_jobsUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<queue_jobsCreateWithoutCampaignsInput, queue_jobsUncheckedCreateWithoutCampaignsInput> | queue_jobsCreateWithoutCampaignsInput[] | queue_jobsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutCampaignsInput | queue_jobsCreateOrConnectWithoutCampaignsInput[]
    upsert?: queue_jobsUpsertWithWhereUniqueWithoutCampaignsInput | queue_jobsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: queue_jobsCreateManyCampaignsInputEnvelope
    set?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    disconnect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    delete?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    update?: queue_jobsUpdateWithWhereUniqueWithoutCampaignsInput | queue_jobsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: queue_jobsUpdateManyWithWhereWithoutCampaignsInput | queue_jobsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
  }

  export type email_logsUncheckedUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<email_logsCreateWithoutCampaignsInput, email_logsUncheckedCreateWithoutCampaignsInput> | email_logsCreateWithoutCampaignsInput[] | email_logsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutCampaignsInput | email_logsCreateOrConnectWithoutCampaignsInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutCampaignsInput | email_logsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: email_logsCreateManyCampaignsInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutCampaignsInput | email_logsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutCampaignsInput | email_logsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type leadsUncheckedUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutCampaignsInput | leadsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutCampaignsInput | leadsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutCampaignsInput | leadsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type queue_jobsUncheckedUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<queue_jobsCreateWithoutCampaignsInput, queue_jobsUncheckedCreateWithoutCampaignsInput> | queue_jobsCreateWithoutCampaignsInput[] | queue_jobsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutCampaignsInput | queue_jobsCreateOrConnectWithoutCampaignsInput[]
    upsert?: queue_jobsUpsertWithWhereUniqueWithoutCampaignsInput | queue_jobsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: queue_jobsCreateManyCampaignsInputEnvelope
    set?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    disconnect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    delete?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    update?: queue_jobsUpdateWithWhereUniqueWithoutCampaignsInput | queue_jobsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: queue_jobsUpdateManyWithWhereWithoutCampaignsInput | queue_jobsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
  }

  export type campaignsCreateNestedOneWithoutEmail_logsInput = {
    create?: XOR<campaignsCreateWithoutEmail_logsInput, campaignsUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutEmail_logsInput
    connect?: campaignsWhereUniqueInput
  }

  export type gmail_accountsCreateNestedOneWithoutEmail_logsInput = {
    create?: XOR<gmail_accountsCreateWithoutEmail_logsInput, gmail_accountsUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutEmail_logsInput
    connect?: gmail_accountsWhereUniqueInput
  }

  export type leadsCreateNestedOneWithoutEmail_logsInput = {
    create?: XOR<leadsCreateWithoutEmail_logsInput, leadsUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: leadsCreateOrConnectWithoutEmail_logsInput
    connect?: leadsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutEmail_logsInput = {
    create?: XOR<usersCreateWithoutEmail_logsInput, usersUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmail_logsInput
    connect?: usersWhereUniqueInput
  }

  export type campaignsUpdateOneRequiredWithoutEmail_logsNestedInput = {
    create?: XOR<campaignsCreateWithoutEmail_logsInput, campaignsUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutEmail_logsInput
    upsert?: campaignsUpsertWithoutEmail_logsInput
    connect?: campaignsWhereUniqueInput
    update?: XOR<XOR<campaignsUpdateToOneWithWhereWithoutEmail_logsInput, campaignsUpdateWithoutEmail_logsInput>, campaignsUncheckedUpdateWithoutEmail_logsInput>
  }

  export type gmail_accountsUpdateOneRequiredWithoutEmail_logsNestedInput = {
    create?: XOR<gmail_accountsCreateWithoutEmail_logsInput, gmail_accountsUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutEmail_logsInput
    upsert?: gmail_accountsUpsertWithoutEmail_logsInput
    connect?: gmail_accountsWhereUniqueInput
    update?: XOR<XOR<gmail_accountsUpdateToOneWithWhereWithoutEmail_logsInput, gmail_accountsUpdateWithoutEmail_logsInput>, gmail_accountsUncheckedUpdateWithoutEmail_logsInput>
  }

  export type leadsUpdateOneRequiredWithoutEmail_logsNestedInput = {
    create?: XOR<leadsCreateWithoutEmail_logsInput, leadsUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: leadsCreateOrConnectWithoutEmail_logsInput
    upsert?: leadsUpsertWithoutEmail_logsInput
    connect?: leadsWhereUniqueInput
    update?: XOR<XOR<leadsUpdateToOneWithWhereWithoutEmail_logsInput, leadsUpdateWithoutEmail_logsInput>, leadsUncheckedUpdateWithoutEmail_logsInput>
  }

  export type usersUpdateOneRequiredWithoutEmail_logsNestedInput = {
    create?: XOR<usersCreateWithoutEmail_logsInput, usersUncheckedCreateWithoutEmail_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmail_logsInput
    upsert?: usersUpsertWithoutEmail_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEmail_logsInput, usersUpdateWithoutEmail_logsInput>, usersUncheckedUpdateWithoutEmail_logsInput>
  }

  export type campaignsCreateNestedManyWithoutGmail_accountsInput = {
    create?: XOR<campaignsCreateWithoutGmail_accountsInput, campaignsUncheckedCreateWithoutGmail_accountsInput> | campaignsCreateWithoutGmail_accountsInput[] | campaignsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutGmail_accountsInput | campaignsCreateOrConnectWithoutGmail_accountsInput[]
    createMany?: campaignsCreateManyGmail_accountsInputEnvelope
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
  }

  export type email_logsCreateNestedManyWithoutGmail_accountsInput = {
    create?: XOR<email_logsCreateWithoutGmail_accountsInput, email_logsUncheckedCreateWithoutGmail_accountsInput> | email_logsCreateWithoutGmail_accountsInput[] | email_logsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutGmail_accountsInput | email_logsCreateOrConnectWithoutGmail_accountsInput[]
    createMany?: email_logsCreateManyGmail_accountsInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutGmail_accountsInput = {
    create?: XOR<usersCreateWithoutGmail_accountsInput, usersUncheckedCreateWithoutGmail_accountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGmail_accountsInput
    connect?: usersWhereUniqueInput
  }

  export type leadsCreateNestedManyWithoutGmail_accountsInput = {
    create?: XOR<leadsCreateWithoutGmail_accountsInput, leadsUncheckedCreateWithoutGmail_accountsInput> | leadsCreateWithoutGmail_accountsInput[] | leadsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutGmail_accountsInput | leadsCreateOrConnectWithoutGmail_accountsInput[]
    createMany?: leadsCreateManyGmail_accountsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type campaignsUncheckedCreateNestedManyWithoutGmail_accountsInput = {
    create?: XOR<campaignsCreateWithoutGmail_accountsInput, campaignsUncheckedCreateWithoutGmail_accountsInput> | campaignsCreateWithoutGmail_accountsInput[] | campaignsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutGmail_accountsInput | campaignsCreateOrConnectWithoutGmail_accountsInput[]
    createMany?: campaignsCreateManyGmail_accountsInputEnvelope
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
  }

  export type email_logsUncheckedCreateNestedManyWithoutGmail_accountsInput = {
    create?: XOR<email_logsCreateWithoutGmail_accountsInput, email_logsUncheckedCreateWithoutGmail_accountsInput> | email_logsCreateWithoutGmail_accountsInput[] | email_logsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutGmail_accountsInput | email_logsCreateOrConnectWithoutGmail_accountsInput[]
    createMany?: email_logsCreateManyGmail_accountsInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type leadsUncheckedCreateNestedManyWithoutGmail_accountsInput = {
    create?: XOR<leadsCreateWithoutGmail_accountsInput, leadsUncheckedCreateWithoutGmail_accountsInput> | leadsCreateWithoutGmail_accountsInput[] | leadsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutGmail_accountsInput | leadsCreateOrConnectWithoutGmail_accountsInput[]
    createMany?: leadsCreateManyGmail_accountsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type NullableEnumGmailAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.GmailAccountStatus | null
  }

  export type campaignsUpdateManyWithoutGmail_accountsNestedInput = {
    create?: XOR<campaignsCreateWithoutGmail_accountsInput, campaignsUncheckedCreateWithoutGmail_accountsInput> | campaignsCreateWithoutGmail_accountsInput[] | campaignsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutGmail_accountsInput | campaignsCreateOrConnectWithoutGmail_accountsInput[]
    upsert?: campaignsUpsertWithWhereUniqueWithoutGmail_accountsInput | campaignsUpsertWithWhereUniqueWithoutGmail_accountsInput[]
    createMany?: campaignsCreateManyGmail_accountsInputEnvelope
    set?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    disconnect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    delete?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    update?: campaignsUpdateWithWhereUniqueWithoutGmail_accountsInput | campaignsUpdateWithWhereUniqueWithoutGmail_accountsInput[]
    updateMany?: campaignsUpdateManyWithWhereWithoutGmail_accountsInput | campaignsUpdateManyWithWhereWithoutGmail_accountsInput[]
    deleteMany?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
  }

  export type email_logsUpdateManyWithoutGmail_accountsNestedInput = {
    create?: XOR<email_logsCreateWithoutGmail_accountsInput, email_logsUncheckedCreateWithoutGmail_accountsInput> | email_logsCreateWithoutGmail_accountsInput[] | email_logsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutGmail_accountsInput | email_logsCreateOrConnectWithoutGmail_accountsInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutGmail_accountsInput | email_logsUpsertWithWhereUniqueWithoutGmail_accountsInput[]
    createMany?: email_logsCreateManyGmail_accountsInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutGmail_accountsInput | email_logsUpdateWithWhereUniqueWithoutGmail_accountsInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutGmail_accountsInput | email_logsUpdateManyWithWhereWithoutGmail_accountsInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutGmail_accountsNestedInput = {
    create?: XOR<usersCreateWithoutGmail_accountsInput, usersUncheckedCreateWithoutGmail_accountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGmail_accountsInput
    upsert?: usersUpsertWithoutGmail_accountsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGmail_accountsInput, usersUpdateWithoutGmail_accountsInput>, usersUncheckedUpdateWithoutGmail_accountsInput>
  }

  export type leadsUpdateManyWithoutGmail_accountsNestedInput = {
    create?: XOR<leadsCreateWithoutGmail_accountsInput, leadsUncheckedCreateWithoutGmail_accountsInput> | leadsCreateWithoutGmail_accountsInput[] | leadsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutGmail_accountsInput | leadsCreateOrConnectWithoutGmail_accountsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutGmail_accountsInput | leadsUpsertWithWhereUniqueWithoutGmail_accountsInput[]
    createMany?: leadsCreateManyGmail_accountsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutGmail_accountsInput | leadsUpdateWithWhereUniqueWithoutGmail_accountsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutGmail_accountsInput | leadsUpdateManyWithWhereWithoutGmail_accountsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type campaignsUncheckedUpdateManyWithoutGmail_accountsNestedInput = {
    create?: XOR<campaignsCreateWithoutGmail_accountsInput, campaignsUncheckedCreateWithoutGmail_accountsInput> | campaignsCreateWithoutGmail_accountsInput[] | campaignsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutGmail_accountsInput | campaignsCreateOrConnectWithoutGmail_accountsInput[]
    upsert?: campaignsUpsertWithWhereUniqueWithoutGmail_accountsInput | campaignsUpsertWithWhereUniqueWithoutGmail_accountsInput[]
    createMany?: campaignsCreateManyGmail_accountsInputEnvelope
    set?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    disconnect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    delete?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    update?: campaignsUpdateWithWhereUniqueWithoutGmail_accountsInput | campaignsUpdateWithWhereUniqueWithoutGmail_accountsInput[]
    updateMany?: campaignsUpdateManyWithWhereWithoutGmail_accountsInput | campaignsUpdateManyWithWhereWithoutGmail_accountsInput[]
    deleteMany?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
  }

  export type email_logsUncheckedUpdateManyWithoutGmail_accountsNestedInput = {
    create?: XOR<email_logsCreateWithoutGmail_accountsInput, email_logsUncheckedCreateWithoutGmail_accountsInput> | email_logsCreateWithoutGmail_accountsInput[] | email_logsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutGmail_accountsInput | email_logsCreateOrConnectWithoutGmail_accountsInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutGmail_accountsInput | email_logsUpsertWithWhereUniqueWithoutGmail_accountsInput[]
    createMany?: email_logsCreateManyGmail_accountsInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutGmail_accountsInput | email_logsUpdateWithWhereUniqueWithoutGmail_accountsInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutGmail_accountsInput | email_logsUpdateManyWithWhereWithoutGmail_accountsInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type leadsUncheckedUpdateManyWithoutGmail_accountsNestedInput = {
    create?: XOR<leadsCreateWithoutGmail_accountsInput, leadsUncheckedCreateWithoutGmail_accountsInput> | leadsCreateWithoutGmail_accountsInput[] | leadsUncheckedCreateWithoutGmail_accountsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutGmail_accountsInput | leadsCreateOrConnectWithoutGmail_accountsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutGmail_accountsInput | leadsUpsertWithWhereUniqueWithoutGmail_accountsInput[]
    createMany?: leadsCreateManyGmail_accountsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutGmail_accountsInput | leadsUpdateWithWhereUniqueWithoutGmail_accountsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutGmail_accountsInput | leadsUpdateManyWithWhereWithoutGmail_accountsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type email_logsCreateNestedManyWithoutLeadsInput = {
    create?: XOR<email_logsCreateWithoutLeadsInput, email_logsUncheckedCreateWithoutLeadsInput> | email_logsCreateWithoutLeadsInput[] | email_logsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutLeadsInput | email_logsCreateOrConnectWithoutLeadsInput[]
    createMany?: email_logsCreateManyLeadsInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type campaignsCreateNestedOneWithoutLeadsInput = {
    create?: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutLeadsInput
    connect?: campaignsWhereUniqueInput
  }

  export type gmail_accountsCreateNestedOneWithoutLeadsInput = {
    create?: XOR<gmail_accountsCreateWithoutLeadsInput, gmail_accountsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutLeadsInput
    connect?: gmail_accountsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutLeadsInput = {
    create?: XOR<usersCreateWithoutLeadsInput, usersUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLeadsInput
    connect?: usersWhereUniqueInput
  }

  export type queue_jobsCreateNestedManyWithoutLeadsInput = {
    create?: XOR<queue_jobsCreateWithoutLeadsInput, queue_jobsUncheckedCreateWithoutLeadsInput> | queue_jobsCreateWithoutLeadsInput[] | queue_jobsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutLeadsInput | queue_jobsCreateOrConnectWithoutLeadsInput[]
    createMany?: queue_jobsCreateManyLeadsInputEnvelope
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
  }

  export type email_logsUncheckedCreateNestedManyWithoutLeadsInput = {
    create?: XOR<email_logsCreateWithoutLeadsInput, email_logsUncheckedCreateWithoutLeadsInput> | email_logsCreateWithoutLeadsInput[] | email_logsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutLeadsInput | email_logsCreateOrConnectWithoutLeadsInput[]
    createMany?: email_logsCreateManyLeadsInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type queue_jobsUncheckedCreateNestedManyWithoutLeadsInput = {
    create?: XOR<queue_jobsCreateWithoutLeadsInput, queue_jobsUncheckedCreateWithoutLeadsInput> | queue_jobsCreateWithoutLeadsInput[] | queue_jobsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutLeadsInput | queue_jobsCreateOrConnectWithoutLeadsInput[]
    createMany?: queue_jobsCreateManyLeadsInputEnvelope
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
  }

  export type NullableEnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type email_logsUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<email_logsCreateWithoutLeadsInput, email_logsUncheckedCreateWithoutLeadsInput> | email_logsCreateWithoutLeadsInput[] | email_logsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutLeadsInput | email_logsCreateOrConnectWithoutLeadsInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutLeadsInput | email_logsUpsertWithWhereUniqueWithoutLeadsInput[]
    createMany?: email_logsCreateManyLeadsInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutLeadsInput | email_logsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutLeadsInput | email_logsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type campaignsUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutLeadsInput
    upsert?: campaignsUpsertWithoutLeadsInput
    connect?: campaignsWhereUniqueInput
    update?: XOR<XOR<campaignsUpdateToOneWithWhereWithoutLeadsInput, campaignsUpdateWithoutLeadsInput>, campaignsUncheckedUpdateWithoutLeadsInput>
  }

  export type gmail_accountsUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<gmail_accountsCreateWithoutLeadsInput, gmail_accountsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutLeadsInput
    upsert?: gmail_accountsUpsertWithoutLeadsInput
    disconnect?: gmail_accountsWhereInput | boolean
    delete?: gmail_accountsWhereInput | boolean
    connect?: gmail_accountsWhereUniqueInput
    update?: XOR<XOR<gmail_accountsUpdateToOneWithWhereWithoutLeadsInput, gmail_accountsUpdateWithoutLeadsInput>, gmail_accountsUncheckedUpdateWithoutLeadsInput>
  }

  export type usersUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<usersCreateWithoutLeadsInput, usersUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLeadsInput
    upsert?: usersUpsertWithoutLeadsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLeadsInput, usersUpdateWithoutLeadsInput>, usersUncheckedUpdateWithoutLeadsInput>
  }

  export type queue_jobsUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<queue_jobsCreateWithoutLeadsInput, queue_jobsUncheckedCreateWithoutLeadsInput> | queue_jobsCreateWithoutLeadsInput[] | queue_jobsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutLeadsInput | queue_jobsCreateOrConnectWithoutLeadsInput[]
    upsert?: queue_jobsUpsertWithWhereUniqueWithoutLeadsInput | queue_jobsUpsertWithWhereUniqueWithoutLeadsInput[]
    createMany?: queue_jobsCreateManyLeadsInputEnvelope
    set?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    disconnect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    delete?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    update?: queue_jobsUpdateWithWhereUniqueWithoutLeadsInput | queue_jobsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: queue_jobsUpdateManyWithWhereWithoutLeadsInput | queue_jobsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
  }

  export type email_logsUncheckedUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<email_logsCreateWithoutLeadsInput, email_logsUncheckedCreateWithoutLeadsInput> | email_logsCreateWithoutLeadsInput[] | email_logsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutLeadsInput | email_logsCreateOrConnectWithoutLeadsInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutLeadsInput | email_logsUpsertWithWhereUniqueWithoutLeadsInput[]
    createMany?: email_logsCreateManyLeadsInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutLeadsInput | email_logsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutLeadsInput | email_logsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type queue_jobsUncheckedUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<queue_jobsCreateWithoutLeadsInput, queue_jobsUncheckedCreateWithoutLeadsInput> | queue_jobsCreateWithoutLeadsInput[] | queue_jobsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutLeadsInput | queue_jobsCreateOrConnectWithoutLeadsInput[]
    upsert?: queue_jobsUpsertWithWhereUniqueWithoutLeadsInput | queue_jobsUpsertWithWhereUniqueWithoutLeadsInput[]
    createMany?: queue_jobsCreateManyLeadsInputEnvelope
    set?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    disconnect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    delete?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    update?: queue_jobsUpdateWithWhereUniqueWithoutLeadsInput | queue_jobsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: queue_jobsUpdateManyWithWhereWithoutLeadsInput | queue_jobsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
  }

  export type campaignsCreateNestedOneWithoutQueue_jobsInput = {
    create?: XOR<campaignsCreateWithoutQueue_jobsInput, campaignsUncheckedCreateWithoutQueue_jobsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutQueue_jobsInput
    connect?: campaignsWhereUniqueInput
  }

  export type leadsCreateNestedOneWithoutQueue_jobsInput = {
    create?: XOR<leadsCreateWithoutQueue_jobsInput, leadsUncheckedCreateWithoutQueue_jobsInput>
    connectOrCreate?: leadsCreateOrConnectWithoutQueue_jobsInput
    connect?: leadsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutQueue_jobsInput = {
    create?: XOR<usersCreateWithoutQueue_jobsInput, usersUncheckedCreateWithoutQueue_jobsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQueue_jobsInput
    connect?: usersWhereUniqueInput
  }

  export type campaignsUpdateOneRequiredWithoutQueue_jobsNestedInput = {
    create?: XOR<campaignsCreateWithoutQueue_jobsInput, campaignsUncheckedCreateWithoutQueue_jobsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutQueue_jobsInput
    upsert?: campaignsUpsertWithoutQueue_jobsInput
    connect?: campaignsWhereUniqueInput
    update?: XOR<XOR<campaignsUpdateToOneWithWhereWithoutQueue_jobsInput, campaignsUpdateWithoutQueue_jobsInput>, campaignsUncheckedUpdateWithoutQueue_jobsInput>
  }

  export type leadsUpdateOneRequiredWithoutQueue_jobsNestedInput = {
    create?: XOR<leadsCreateWithoutQueue_jobsInput, leadsUncheckedCreateWithoutQueue_jobsInput>
    connectOrCreate?: leadsCreateOrConnectWithoutQueue_jobsInput
    upsert?: leadsUpsertWithoutQueue_jobsInput
    connect?: leadsWhereUniqueInput
    update?: XOR<XOR<leadsUpdateToOneWithWhereWithoutQueue_jobsInput, leadsUpdateWithoutQueue_jobsInput>, leadsUncheckedUpdateWithoutQueue_jobsInput>
  }

  export type usersUpdateOneRequiredWithoutQueue_jobsNestedInput = {
    create?: XOR<usersCreateWithoutQueue_jobsInput, usersUncheckedCreateWithoutQueue_jobsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQueue_jobsInput
    upsert?: usersUpsertWithoutQueue_jobsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutQueue_jobsInput, usersUpdateWithoutQueue_jobsInput>, usersUncheckedUpdateWithoutQueue_jobsInput>
  }

  export type audit_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type campaignsCreateNestedManyWithoutUsersInput = {
    create?: XOR<campaignsCreateWithoutUsersInput, campaignsUncheckedCreateWithoutUsersInput> | campaignsCreateWithoutUsersInput[] | campaignsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutUsersInput | campaignsCreateOrConnectWithoutUsersInput[]
    createMany?: campaignsCreateManyUsersInputEnvelope
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
  }

  export type email_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<email_logsCreateWithoutUsersInput, email_logsUncheckedCreateWithoutUsersInput> | email_logsCreateWithoutUsersInput[] | email_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutUsersInput | email_logsCreateOrConnectWithoutUsersInput[]
    createMany?: email_logsCreateManyUsersInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type gmail_accountsCreateNestedManyWithoutUsersInput = {
    create?: XOR<gmail_accountsCreateWithoutUsersInput, gmail_accountsUncheckedCreateWithoutUsersInput> | gmail_accountsCreateWithoutUsersInput[] | gmail_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutUsersInput | gmail_accountsCreateOrConnectWithoutUsersInput[]
    createMany?: gmail_accountsCreateManyUsersInputEnvelope
    connect?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
  }

  export type leadsCreateNestedManyWithoutUsersInput = {
    create?: XOR<leadsCreateWithoutUsersInput, leadsUncheckedCreateWithoutUsersInput> | leadsCreateWithoutUsersInput[] | leadsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutUsersInput | leadsCreateOrConnectWithoutUsersInput[]
    createMany?: leadsCreateManyUsersInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type queue_jobsCreateNestedManyWithoutUsersInput = {
    create?: XOR<queue_jobsCreateWithoutUsersInput, queue_jobsUncheckedCreateWithoutUsersInput> | queue_jobsCreateWithoutUsersInput[] | queue_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutUsersInput | queue_jobsCreateOrConnectWithoutUsersInput[]
    createMany?: queue_jobsCreateManyUsersInputEnvelope
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
  }

  export type audit_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type campaignsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<campaignsCreateWithoutUsersInput, campaignsUncheckedCreateWithoutUsersInput> | campaignsCreateWithoutUsersInput[] | campaignsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutUsersInput | campaignsCreateOrConnectWithoutUsersInput[]
    createMany?: campaignsCreateManyUsersInputEnvelope
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
  }

  export type email_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<email_logsCreateWithoutUsersInput, email_logsUncheckedCreateWithoutUsersInput> | email_logsCreateWithoutUsersInput[] | email_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutUsersInput | email_logsCreateOrConnectWithoutUsersInput[]
    createMany?: email_logsCreateManyUsersInputEnvelope
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
  }

  export type gmail_accountsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<gmail_accountsCreateWithoutUsersInput, gmail_accountsUncheckedCreateWithoutUsersInput> | gmail_accountsCreateWithoutUsersInput[] | gmail_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutUsersInput | gmail_accountsCreateOrConnectWithoutUsersInput[]
    createMany?: gmail_accountsCreateManyUsersInputEnvelope
    connect?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
  }

  export type leadsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<leadsCreateWithoutUsersInput, leadsUncheckedCreateWithoutUsersInput> | leadsCreateWithoutUsersInput[] | leadsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutUsersInput | leadsCreateOrConnectWithoutUsersInput[]
    createMany?: leadsCreateManyUsersInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type queue_jobsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<queue_jobsCreateWithoutUsersInput, queue_jobsUncheckedCreateWithoutUsersInput> | queue_jobsCreateWithoutUsersInput[] | queue_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutUsersInput | queue_jobsCreateOrConnectWithoutUsersInput[]
    createMany?: queue_jobsCreateManyUsersInputEnvelope
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
  }

  export type audit_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutUsersInput | audit_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutUsersInput | audit_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutUsersInput | audit_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type campaignsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<campaignsCreateWithoutUsersInput, campaignsUncheckedCreateWithoutUsersInput> | campaignsCreateWithoutUsersInput[] | campaignsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutUsersInput | campaignsCreateOrConnectWithoutUsersInput[]
    upsert?: campaignsUpsertWithWhereUniqueWithoutUsersInput | campaignsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: campaignsCreateManyUsersInputEnvelope
    set?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    disconnect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    delete?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    update?: campaignsUpdateWithWhereUniqueWithoutUsersInput | campaignsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: campaignsUpdateManyWithWhereWithoutUsersInput | campaignsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
  }

  export type email_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<email_logsCreateWithoutUsersInput, email_logsUncheckedCreateWithoutUsersInput> | email_logsCreateWithoutUsersInput[] | email_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutUsersInput | email_logsCreateOrConnectWithoutUsersInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutUsersInput | email_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: email_logsCreateManyUsersInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutUsersInput | email_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutUsersInput | email_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type gmail_accountsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<gmail_accountsCreateWithoutUsersInput, gmail_accountsUncheckedCreateWithoutUsersInput> | gmail_accountsCreateWithoutUsersInput[] | gmail_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutUsersInput | gmail_accountsCreateOrConnectWithoutUsersInput[]
    upsert?: gmail_accountsUpsertWithWhereUniqueWithoutUsersInput | gmail_accountsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: gmail_accountsCreateManyUsersInputEnvelope
    set?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    disconnect?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    delete?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    connect?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    update?: gmail_accountsUpdateWithWhereUniqueWithoutUsersInput | gmail_accountsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: gmail_accountsUpdateManyWithWhereWithoutUsersInput | gmail_accountsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: gmail_accountsScalarWhereInput | gmail_accountsScalarWhereInput[]
  }

  export type leadsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<leadsCreateWithoutUsersInput, leadsUncheckedCreateWithoutUsersInput> | leadsCreateWithoutUsersInput[] | leadsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutUsersInput | leadsCreateOrConnectWithoutUsersInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutUsersInput | leadsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: leadsCreateManyUsersInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutUsersInput | leadsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutUsersInput | leadsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type queue_jobsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<queue_jobsCreateWithoutUsersInput, queue_jobsUncheckedCreateWithoutUsersInput> | queue_jobsCreateWithoutUsersInput[] | queue_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutUsersInput | queue_jobsCreateOrConnectWithoutUsersInput[]
    upsert?: queue_jobsUpsertWithWhereUniqueWithoutUsersInput | queue_jobsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: queue_jobsCreateManyUsersInputEnvelope
    set?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    disconnect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    delete?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    update?: queue_jobsUpdateWithWhereUniqueWithoutUsersInput | queue_jobsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: queue_jobsUpdateManyWithWhereWithoutUsersInput | queue_jobsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
  }

  export type audit_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutUsersInput | audit_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutUsersInput | audit_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutUsersInput | audit_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type campaignsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<campaignsCreateWithoutUsersInput, campaignsUncheckedCreateWithoutUsersInput> | campaignsCreateWithoutUsersInput[] | campaignsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutUsersInput | campaignsCreateOrConnectWithoutUsersInput[]
    upsert?: campaignsUpsertWithWhereUniqueWithoutUsersInput | campaignsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: campaignsCreateManyUsersInputEnvelope
    set?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    disconnect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    delete?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    update?: campaignsUpdateWithWhereUniqueWithoutUsersInput | campaignsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: campaignsUpdateManyWithWhereWithoutUsersInput | campaignsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
  }

  export type email_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<email_logsCreateWithoutUsersInput, email_logsUncheckedCreateWithoutUsersInput> | email_logsCreateWithoutUsersInput[] | email_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: email_logsCreateOrConnectWithoutUsersInput | email_logsCreateOrConnectWithoutUsersInput[]
    upsert?: email_logsUpsertWithWhereUniqueWithoutUsersInput | email_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: email_logsCreateManyUsersInputEnvelope
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[]
    update?: email_logsUpdateWithWhereUniqueWithoutUsersInput | email_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: email_logsUpdateManyWithWhereWithoutUsersInput | email_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
  }

  export type gmail_accountsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<gmail_accountsCreateWithoutUsersInput, gmail_accountsUncheckedCreateWithoutUsersInput> | gmail_accountsCreateWithoutUsersInput[] | gmail_accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gmail_accountsCreateOrConnectWithoutUsersInput | gmail_accountsCreateOrConnectWithoutUsersInput[]
    upsert?: gmail_accountsUpsertWithWhereUniqueWithoutUsersInput | gmail_accountsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: gmail_accountsCreateManyUsersInputEnvelope
    set?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    disconnect?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    delete?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    connect?: gmail_accountsWhereUniqueInput | gmail_accountsWhereUniqueInput[]
    update?: gmail_accountsUpdateWithWhereUniqueWithoutUsersInput | gmail_accountsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: gmail_accountsUpdateManyWithWhereWithoutUsersInput | gmail_accountsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: gmail_accountsScalarWhereInput | gmail_accountsScalarWhereInput[]
  }

  export type leadsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<leadsCreateWithoutUsersInput, leadsUncheckedCreateWithoutUsersInput> | leadsCreateWithoutUsersInput[] | leadsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutUsersInput | leadsCreateOrConnectWithoutUsersInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutUsersInput | leadsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: leadsCreateManyUsersInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutUsersInput | leadsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutUsersInput | leadsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type queue_jobsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<queue_jobsCreateWithoutUsersInput, queue_jobsUncheckedCreateWithoutUsersInput> | queue_jobsCreateWithoutUsersInput[] | queue_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: queue_jobsCreateOrConnectWithoutUsersInput | queue_jobsCreateOrConnectWithoutUsersInput[]
    upsert?: queue_jobsUpsertWithWhereUniqueWithoutUsersInput | queue_jobsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: queue_jobsCreateManyUsersInputEnvelope
    set?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    disconnect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    delete?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    connect?: queue_jobsWhereUniqueInput | queue_jobsWhereUniqueInput[]
    update?: queue_jobsUpdateWithWhereUniqueWithoutUsersInput | queue_jobsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: queue_jobsUpdateManyWithWhereWithoutUsersInput | queue_jobsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCampaignStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CampaignStatus[] | null
    notIn?: $Enums.CampaignStatus[] | null
    not?: NestedEnumCampaignStatusNullableFilter<$PrismaModel> | $Enums.CampaignStatus | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CampaignStatus[] | null
    notIn?: $Enums.CampaignStatus[] | null
    not?: NestedEnumCampaignStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGmailAccountStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GmailAccountStatus | EnumGmailAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GmailAccountStatus[] | null
    notIn?: $Enums.GmailAccountStatus[] | null
    not?: NestedEnumGmailAccountStatusNullableFilter<$PrismaModel> | $Enums.GmailAccountStatus | null
  }

  export type NestedEnumGmailAccountStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GmailAccountStatus | EnumGmailAccountStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GmailAccountStatus[] | null
    notIn?: $Enums.GmailAccountStatus[] | null
    not?: NestedEnumGmailAccountStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.GmailAccountStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGmailAccountStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumGmailAccountStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadStatus[] | null
    notIn?: $Enums.LeadStatus[] | null
    not?: NestedEnumLeadStatusNullableFilter<$PrismaModel> | $Enums.LeadStatus | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumLeadStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadStatus[] | null
    notIn?: $Enums.LeadStatus[] | null
    not?: NestedEnumLeadStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type usersCreateWithoutAudit_logsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    campaigns?: campaignsCreateNestedManyWithoutUsersInput
    email_logs?: email_logsCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsCreateNestedManyWithoutUsersInput
    leads?: leadsCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    campaigns?: campaignsUncheckedCreateNestedManyWithoutUsersInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsUncheckedCreateNestedManyWithoutUsersInput
    leads?: leadsUncheckedCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAudit_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
  }

  export type usersUpsertWithoutAudit_logsInput = {
    update: XOR<usersUpdateWithoutAudit_logsInput, usersUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAudit_logsInput, usersUncheckedUpdateWithoutAudit_logsInput>
  }

  export type usersUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUpdateManyWithoutUsersNestedInput
    leads?: leadsUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUncheckedUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUncheckedUpdateManyWithoutUsersNestedInput
    leads?: leadsUncheckedUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type gmail_accountsCreateWithoutCampaignsInput = {
    id?: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    email_logs?: email_logsCreateNestedManyWithoutGmail_accountsInput
    users: usersCreateNestedOneWithoutGmail_accountsInput
    leads?: leadsCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsUncheckedCreateWithoutCampaignsInput = {
    id?: string
    user_id: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutGmail_accountsInput
    leads?: leadsUncheckedCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsCreateOrConnectWithoutCampaignsInput = {
    where: gmail_accountsWhereUniqueInput
    create: XOR<gmail_accountsCreateWithoutCampaignsInput, gmail_accountsUncheckedCreateWithoutCampaignsInput>
  }

  export type usersCreateWithoutCampaignsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    email_logs?: email_logsCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsCreateNestedManyWithoutUsersInput
    leads?: leadsCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCampaignsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsUncheckedCreateNestedManyWithoutUsersInput
    leads?: leadsUncheckedCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCampaignsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCampaignsInput, usersUncheckedCreateWithoutCampaignsInput>
  }

  export type email_logsCreateWithoutCampaignsInput = {
    id?: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
    gmail_accounts: gmail_accountsCreateNestedOneWithoutEmail_logsInput
    leads: leadsCreateNestedOneWithoutEmail_logsInput
    users: usersCreateNestedOneWithoutEmail_logsInput
  }

  export type email_logsUncheckedCreateWithoutCampaignsInput = {
    id?: string
    user_id: string
    lead_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type email_logsCreateOrConnectWithoutCampaignsInput = {
    where: email_logsWhereUniqueInput
    create: XOR<email_logsCreateWithoutCampaignsInput, email_logsUncheckedCreateWithoutCampaignsInput>
  }

  export type email_logsCreateManyCampaignsInputEnvelope = {
    data: email_logsCreateManyCampaignsInput | email_logsCreateManyCampaignsInput[]
  }

  export type leadsCreateWithoutCampaignsInput = {
    id?: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsCreateNestedManyWithoutLeadsInput
    gmail_accounts?: gmail_accountsCreateNestedOneWithoutLeadsInput
    users: usersCreateNestedOneWithoutLeadsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutLeadsInput
  }

  export type leadsUncheckedCreateWithoutCampaignsInput = {
    id?: string
    user_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutLeadsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type leadsCreateOrConnectWithoutCampaignsInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput>
  }

  export type leadsCreateManyCampaignsInputEnvelope = {
    data: leadsCreateManyCampaignsInput | leadsCreateManyCampaignsInput[]
  }

  export type queue_jobsCreateWithoutCampaignsInput = {
    id?: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
    leads: leadsCreateNestedOneWithoutQueue_jobsInput
    users: usersCreateNestedOneWithoutQueue_jobsInput
  }

  export type queue_jobsUncheckedCreateWithoutCampaignsInput = {
    id?: string
    user_id: string
    lead_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type queue_jobsCreateOrConnectWithoutCampaignsInput = {
    where: queue_jobsWhereUniqueInput
    create: XOR<queue_jobsCreateWithoutCampaignsInput, queue_jobsUncheckedCreateWithoutCampaignsInput>
  }

  export type queue_jobsCreateManyCampaignsInputEnvelope = {
    data: queue_jobsCreateManyCampaignsInput | queue_jobsCreateManyCampaignsInput[]
  }

  export type gmail_accountsUpsertWithoutCampaignsInput = {
    update: XOR<gmail_accountsUpdateWithoutCampaignsInput, gmail_accountsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<gmail_accountsCreateWithoutCampaignsInput, gmail_accountsUncheckedCreateWithoutCampaignsInput>
    where?: gmail_accountsWhereInput
  }

  export type gmail_accountsUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: gmail_accountsWhereInput
    data: XOR<gmail_accountsUpdateWithoutCampaignsInput, gmail_accountsUncheckedUpdateWithoutCampaignsInput>
  }

  export type gmail_accountsUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_logs?: email_logsUpdateManyWithoutGmail_accountsNestedInput
    users?: usersUpdateOneRequiredWithoutGmail_accountsNestedInput
    leads?: leadsUpdateManyWithoutGmail_accountsNestedInput
  }

  export type gmail_accountsUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_logs?: email_logsUncheckedUpdateManyWithoutGmail_accountsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutGmail_accountsNestedInput
  }

  export type usersUpsertWithoutCampaignsInput = {
    update: XOR<usersUpdateWithoutCampaignsInput, usersUncheckedUpdateWithoutCampaignsInput>
    create: XOR<usersCreateWithoutCampaignsInput, usersUncheckedCreateWithoutCampaignsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCampaignsInput, usersUncheckedUpdateWithoutCampaignsInput>
  }

  export type usersUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUpdateManyWithoutUsersNestedInput
    leads?: leadsUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUncheckedUpdateManyWithoutUsersNestedInput
    leads?: leadsUncheckedUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type email_logsUpsertWithWhereUniqueWithoutCampaignsInput = {
    where: email_logsWhereUniqueInput
    update: XOR<email_logsUpdateWithoutCampaignsInput, email_logsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<email_logsCreateWithoutCampaignsInput, email_logsUncheckedCreateWithoutCampaignsInput>
  }

  export type email_logsUpdateWithWhereUniqueWithoutCampaignsInput = {
    where: email_logsWhereUniqueInput
    data: XOR<email_logsUpdateWithoutCampaignsInput, email_logsUncheckedUpdateWithoutCampaignsInput>
  }

  export type email_logsUpdateManyWithWhereWithoutCampaignsInput = {
    where: email_logsScalarWhereInput
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyWithoutCampaignsInput>
  }

  export type email_logsScalarWhereInput = {
    AND?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
    OR?: email_logsScalarWhereInput[]
    NOT?: email_logsScalarWhereInput | email_logsScalarWhereInput[]
    id?: StringFilter<"email_logs"> | string
    user_id?: StringFilter<"email_logs"> | string
    campaign_id?: StringFilter<"email_logs"> | string
    lead_id?: StringFilter<"email_logs"> | string
    gmail_account_id?: StringFilter<"email_logs"> | string
    subject?: StringFilter<"email_logs"> | string
    body?: StringFilter<"email_logs"> | string
    sent_at?: DateTimeNullableFilter<"email_logs"> | Date | string | null
    status?: StringNullableFilter<"email_logs"> | string | null
    error_message?: StringNullableFilter<"email_logs"> | string | null
    bounce_status?: StringNullableFilter<"email_logs"> | string | null
    created_at?: DateTimeNullableFilter<"email_logs"> | Date | string | null
    sequence_step?: IntNullableFilter<"email_logs"> | number | null
  }

  export type leadsUpsertWithWhereUniqueWithoutCampaignsInput = {
    where: leadsWhereUniqueInput
    update: XOR<leadsUpdateWithoutCampaignsInput, leadsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput>
  }

  export type leadsUpdateWithWhereUniqueWithoutCampaignsInput = {
    where: leadsWhereUniqueInput
    data: XOR<leadsUpdateWithoutCampaignsInput, leadsUncheckedUpdateWithoutCampaignsInput>
  }

  export type leadsUpdateManyWithWhereWithoutCampaignsInput = {
    where: leadsScalarWhereInput
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyWithoutCampaignsInput>
  }

  export type leadsScalarWhereInput = {
    AND?: leadsScalarWhereInput | leadsScalarWhereInput[]
    OR?: leadsScalarWhereInput[]
    NOT?: leadsScalarWhereInput | leadsScalarWhereInput[]
    id?: StringFilter<"leads"> | string
    user_id?: StringFilter<"leads"> | string
    campaign_id?: StringFilter<"leads"> | string
    gmail_account_id?: StringNullableFilter<"leads"> | string | null
    email?: StringFilter<"leads"> | string
    first_name?: StringNullableFilter<"leads"> | string | null
    company_name?: StringNullableFilter<"leads"> | string | null
    domain_name?: StringNullableFilter<"leads"> | string | null
    custom_fields?: StringNullableFilter<"leads"> | string | null
    status?: EnumLeadStatusNullableFilter<"leads"> | $Enums.LeadStatus | null
    sent_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    opened_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    clicked_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    replied_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    bounced_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    error_message?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    currentSequenceStep?: IntNullableFilter<"leads"> | number | null
    lastMessageId?: StringNullableFilter<"leads"> | string | null
    lastThreadId?: StringNullableFilter<"leads"> | string | null
    receivedReply?: BoolNullableFilter<"leads"> | boolean | null
  }

  export type queue_jobsUpsertWithWhereUniqueWithoutCampaignsInput = {
    where: queue_jobsWhereUniqueInput
    update: XOR<queue_jobsUpdateWithoutCampaignsInput, queue_jobsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<queue_jobsCreateWithoutCampaignsInput, queue_jobsUncheckedCreateWithoutCampaignsInput>
  }

  export type queue_jobsUpdateWithWhereUniqueWithoutCampaignsInput = {
    where: queue_jobsWhereUniqueInput
    data: XOR<queue_jobsUpdateWithoutCampaignsInput, queue_jobsUncheckedUpdateWithoutCampaignsInput>
  }

  export type queue_jobsUpdateManyWithWhereWithoutCampaignsInput = {
    where: queue_jobsScalarWhereInput
    data: XOR<queue_jobsUpdateManyMutationInput, queue_jobsUncheckedUpdateManyWithoutCampaignsInput>
  }

  export type queue_jobsScalarWhereInput = {
    AND?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
    OR?: queue_jobsScalarWhereInput[]
    NOT?: queue_jobsScalarWhereInput | queue_jobsScalarWhereInput[]
    id?: StringFilter<"queue_jobs"> | string
    user_id?: StringFilter<"queue_jobs"> | string
    campaign_id?: StringFilter<"queue_jobs"> | string
    lead_id?: StringFilter<"queue_jobs"> | string
    scheduled_for?: DateTimeFilter<"queue_jobs"> | Date | string
    status?: StringNullableFilter<"queue_jobs"> | string | null
    attempts?: IntNullableFilter<"queue_jobs"> | number | null
    last_error?: StringNullableFilter<"queue_jobs"> | string | null
    created_at?: DateTimeNullableFilter<"queue_jobs"> | Date | string | null
  }

  export type campaignsCreateWithoutEmail_logsInput = {
    id?: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gmail_accounts: gmail_accountsCreateNestedOneWithoutCampaignsInput
    users: usersCreateNestedOneWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutEmail_logsInput = {
    id?: string
    user_id: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutEmail_logsInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutEmail_logsInput, campaignsUncheckedCreateWithoutEmail_logsInput>
  }

  export type gmail_accountsCreateWithoutEmail_logsInput = {
    id?: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsCreateNestedManyWithoutGmail_accountsInput
    users: usersCreateNestedOneWithoutGmail_accountsInput
    leads?: leadsCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsUncheckedCreateWithoutEmail_logsInput = {
    id?: string
    user_id: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsUncheckedCreateNestedManyWithoutGmail_accountsInput
    leads?: leadsUncheckedCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsCreateOrConnectWithoutEmail_logsInput = {
    where: gmail_accountsWhereUniqueInput
    create: XOR<gmail_accountsCreateWithoutEmail_logsInput, gmail_accountsUncheckedCreateWithoutEmail_logsInput>
  }

  export type leadsCreateWithoutEmail_logsInput = {
    id?: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    campaigns: campaignsCreateNestedOneWithoutLeadsInput
    gmail_accounts?: gmail_accountsCreateNestedOneWithoutLeadsInput
    users: usersCreateNestedOneWithoutLeadsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutLeadsInput
  }

  export type leadsUncheckedCreateWithoutEmail_logsInput = {
    id?: string
    user_id: string
    campaign_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type leadsCreateOrConnectWithoutEmail_logsInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutEmail_logsInput, leadsUncheckedCreateWithoutEmail_logsInput>
  }

  export type usersCreateWithoutEmail_logsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    campaigns?: campaignsCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsCreateNestedManyWithoutUsersInput
    leads?: leadsCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEmail_logsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    campaigns?: campaignsUncheckedCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsUncheckedCreateNestedManyWithoutUsersInput
    leads?: leadsUncheckedCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEmail_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEmail_logsInput, usersUncheckedCreateWithoutEmail_logsInput>
  }

  export type campaignsUpsertWithoutEmail_logsInput = {
    update: XOR<campaignsUpdateWithoutEmail_logsInput, campaignsUncheckedUpdateWithoutEmail_logsInput>
    create: XOR<campaignsCreateWithoutEmail_logsInput, campaignsUncheckedCreateWithoutEmail_logsInput>
    where?: campaignsWhereInput
  }

  export type campaignsUpdateToOneWithWhereWithoutEmail_logsInput = {
    where?: campaignsWhereInput
    data: XOR<campaignsUpdateWithoutEmail_logsInput, campaignsUncheckedUpdateWithoutEmail_logsInput>
  }

  export type campaignsUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutCampaignsNestedInput
    users?: usersUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type gmail_accountsUpsertWithoutEmail_logsInput = {
    update: XOR<gmail_accountsUpdateWithoutEmail_logsInput, gmail_accountsUncheckedUpdateWithoutEmail_logsInput>
    create: XOR<gmail_accountsCreateWithoutEmail_logsInput, gmail_accountsUncheckedCreateWithoutEmail_logsInput>
    where?: gmail_accountsWhereInput
  }

  export type gmail_accountsUpdateToOneWithWhereWithoutEmail_logsInput = {
    where?: gmail_accountsWhereInput
    data: XOR<gmail_accountsUpdateWithoutEmail_logsInput, gmail_accountsUncheckedUpdateWithoutEmail_logsInput>
  }

  export type gmail_accountsUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateManyWithoutGmail_accountsNestedInput
    users?: usersUpdateOneRequiredWithoutGmail_accountsNestedInput
    leads?: leadsUpdateManyWithoutGmail_accountsNestedInput
  }

  export type gmail_accountsUncheckedUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUncheckedUpdateManyWithoutGmail_accountsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutGmail_accountsNestedInput
  }

  export type leadsUpsertWithoutEmail_logsInput = {
    update: XOR<leadsUpdateWithoutEmail_logsInput, leadsUncheckedUpdateWithoutEmail_logsInput>
    create: XOR<leadsCreateWithoutEmail_logsInput, leadsUncheckedCreateWithoutEmail_logsInput>
    where?: leadsWhereInput
  }

  export type leadsUpdateToOneWithWhereWithoutEmail_logsInput = {
    where?: leadsWhereInput
    data: XOR<leadsUpdateWithoutEmail_logsInput, leadsUncheckedUpdateWithoutEmail_logsInput>
  }

  export type leadsUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaigns?: campaignsUpdateOneRequiredWithoutLeadsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneWithoutLeadsNestedInput
    users?: usersUpdateOneRequiredWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type usersUpsertWithoutEmail_logsInput = {
    update: XOR<usersUpdateWithoutEmail_logsInput, usersUncheckedUpdateWithoutEmail_logsInput>
    create: XOR<usersCreateWithoutEmail_logsInput, usersUncheckedCreateWithoutEmail_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEmail_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEmail_logsInput, usersUncheckedUpdateWithoutEmail_logsInput>
  }

  export type usersUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUpdateManyWithoutUsersNestedInput
    leads?: leadsUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUncheckedUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUncheckedUpdateManyWithoutUsersNestedInput
    leads?: leadsUncheckedUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type campaignsCreateWithoutGmail_accountsInput = {
    id?: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutCampaignsInput
    email_logs?: email_logsCreateNestedManyWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutGmail_accountsInput = {
    id?: string
    user_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutCampaignsInput
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutGmail_accountsInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutGmail_accountsInput, campaignsUncheckedCreateWithoutGmail_accountsInput>
  }

  export type campaignsCreateManyGmail_accountsInputEnvelope = {
    data: campaignsCreateManyGmail_accountsInput | campaignsCreateManyGmail_accountsInput[]
  }

  export type email_logsCreateWithoutGmail_accountsInput = {
    id?: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
    campaigns: campaignsCreateNestedOneWithoutEmail_logsInput
    leads: leadsCreateNestedOneWithoutEmail_logsInput
    users: usersCreateNestedOneWithoutEmail_logsInput
  }

  export type email_logsUncheckedCreateWithoutGmail_accountsInput = {
    id?: string
    user_id: string
    campaign_id: string
    lead_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type email_logsCreateOrConnectWithoutGmail_accountsInput = {
    where: email_logsWhereUniqueInput
    create: XOR<email_logsCreateWithoutGmail_accountsInput, email_logsUncheckedCreateWithoutGmail_accountsInput>
  }

  export type email_logsCreateManyGmail_accountsInputEnvelope = {
    data: email_logsCreateManyGmail_accountsInput | email_logsCreateManyGmail_accountsInput[]
  }

  export type usersCreateWithoutGmail_accountsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    campaigns?: campaignsCreateNestedManyWithoutUsersInput
    email_logs?: email_logsCreateNestedManyWithoutUsersInput
    leads?: leadsCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutGmail_accountsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    campaigns?: campaignsUncheckedCreateNestedManyWithoutUsersInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUsersInput
    leads?: leadsUncheckedCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutGmail_accountsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGmail_accountsInput, usersUncheckedCreateWithoutGmail_accountsInput>
  }

  export type leadsCreateWithoutGmail_accountsInput = {
    id?: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsCreateNestedManyWithoutLeadsInput
    campaigns: campaignsCreateNestedOneWithoutLeadsInput
    users: usersCreateNestedOneWithoutLeadsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutLeadsInput
  }

  export type leadsUncheckedCreateWithoutGmail_accountsInput = {
    id?: string
    user_id: string
    campaign_id: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutLeadsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type leadsCreateOrConnectWithoutGmail_accountsInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutGmail_accountsInput, leadsUncheckedCreateWithoutGmail_accountsInput>
  }

  export type leadsCreateManyGmail_accountsInputEnvelope = {
    data: leadsCreateManyGmail_accountsInput | leadsCreateManyGmail_accountsInput[]
  }

  export type campaignsUpsertWithWhereUniqueWithoutGmail_accountsInput = {
    where: campaignsWhereUniqueInput
    update: XOR<campaignsUpdateWithoutGmail_accountsInput, campaignsUncheckedUpdateWithoutGmail_accountsInput>
    create: XOR<campaignsCreateWithoutGmail_accountsInput, campaignsUncheckedCreateWithoutGmail_accountsInput>
  }

  export type campaignsUpdateWithWhereUniqueWithoutGmail_accountsInput = {
    where: campaignsWhereUniqueInput
    data: XOR<campaignsUpdateWithoutGmail_accountsInput, campaignsUncheckedUpdateWithoutGmail_accountsInput>
  }

  export type campaignsUpdateManyWithWhereWithoutGmail_accountsInput = {
    where: campaignsScalarWhereInput
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyWithoutGmail_accountsInput>
  }

  export type campaignsScalarWhereInput = {
    AND?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
    OR?: campaignsScalarWhereInput[]
    NOT?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
    id?: StringFilter<"campaigns"> | string
    user_id?: StringFilter<"campaigns"> | string
    gmail_account_id?: StringFilter<"campaigns"> | string
    name?: StringFilter<"campaigns"> | string
    subject_template?: StringFilter<"campaigns"> | string
    body_template?: StringFilter<"campaigns"> | string
    required_variables?: StringNullableFilter<"campaigns"> | string | null
    daily_limit?: IntFilter<"campaigns"> | number
    delay_min_seconds?: IntFilter<"campaigns"> | number
    delay_max_seconds?: IntFilter<"campaigns"> | number
    start_time?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    status?: EnumCampaignStatusNullableFilter<"campaigns"> | $Enums.CampaignStatus | null
    failure_count?: IntNullableFilter<"campaigns"> | number | null
    follow_up2_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up2_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    follow_up3_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up3_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    follow_up4_body?: StringNullableFilter<"campaigns"> | string | null
    follow_up4_delay_hours?: IntNullableFilter<"campaigns"> | number | null
    created_at?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"campaigns"> | Date | string | null
  }

  export type email_logsUpsertWithWhereUniqueWithoutGmail_accountsInput = {
    where: email_logsWhereUniqueInput
    update: XOR<email_logsUpdateWithoutGmail_accountsInput, email_logsUncheckedUpdateWithoutGmail_accountsInput>
    create: XOR<email_logsCreateWithoutGmail_accountsInput, email_logsUncheckedCreateWithoutGmail_accountsInput>
  }

  export type email_logsUpdateWithWhereUniqueWithoutGmail_accountsInput = {
    where: email_logsWhereUniqueInput
    data: XOR<email_logsUpdateWithoutGmail_accountsInput, email_logsUncheckedUpdateWithoutGmail_accountsInput>
  }

  export type email_logsUpdateManyWithWhereWithoutGmail_accountsInput = {
    where: email_logsScalarWhereInput
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyWithoutGmail_accountsInput>
  }

  export type usersUpsertWithoutGmail_accountsInput = {
    update: XOR<usersUpdateWithoutGmail_accountsInput, usersUncheckedUpdateWithoutGmail_accountsInput>
    create: XOR<usersCreateWithoutGmail_accountsInput, usersUncheckedCreateWithoutGmail_accountsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGmail_accountsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGmail_accountsInput, usersUncheckedUpdateWithoutGmail_accountsInput>
  }

  export type usersUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUpdateManyWithoutUsersNestedInput
    leads?: leadsUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUncheckedUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutUsersNestedInput
    leads?: leadsUncheckedUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type leadsUpsertWithWhereUniqueWithoutGmail_accountsInput = {
    where: leadsWhereUniqueInput
    update: XOR<leadsUpdateWithoutGmail_accountsInput, leadsUncheckedUpdateWithoutGmail_accountsInput>
    create: XOR<leadsCreateWithoutGmail_accountsInput, leadsUncheckedCreateWithoutGmail_accountsInput>
  }

  export type leadsUpdateWithWhereUniqueWithoutGmail_accountsInput = {
    where: leadsWhereUniqueInput
    data: XOR<leadsUpdateWithoutGmail_accountsInput, leadsUncheckedUpdateWithoutGmail_accountsInput>
  }

  export type leadsUpdateManyWithWhereWithoutGmail_accountsInput = {
    where: leadsScalarWhereInput
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyWithoutGmail_accountsInput>
  }

  export type email_logsCreateWithoutLeadsInput = {
    id?: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
    campaigns: campaignsCreateNestedOneWithoutEmail_logsInput
    gmail_accounts: gmail_accountsCreateNestedOneWithoutEmail_logsInput
    users: usersCreateNestedOneWithoutEmail_logsInput
  }

  export type email_logsUncheckedCreateWithoutLeadsInput = {
    id?: string
    user_id: string
    campaign_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type email_logsCreateOrConnectWithoutLeadsInput = {
    where: email_logsWhereUniqueInput
    create: XOR<email_logsCreateWithoutLeadsInput, email_logsUncheckedCreateWithoutLeadsInput>
  }

  export type email_logsCreateManyLeadsInputEnvelope = {
    data: email_logsCreateManyLeadsInput | email_logsCreateManyLeadsInput[]
  }

  export type campaignsCreateWithoutLeadsInput = {
    id?: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gmail_accounts: gmail_accountsCreateNestedOneWithoutCampaignsInput
    users: usersCreateNestedOneWithoutCampaignsInput
    email_logs?: email_logsCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutLeadsInput = {
    id?: string
    user_id: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutLeadsInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
  }

  export type gmail_accountsCreateWithoutLeadsInput = {
    id?: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsCreateNestedManyWithoutGmail_accountsInput
    email_logs?: email_logsCreateNestedManyWithoutGmail_accountsInput
    users: usersCreateNestedOneWithoutGmail_accountsInput
  }

  export type gmail_accountsUncheckedCreateWithoutLeadsInput = {
    id?: string
    user_id: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsUncheckedCreateNestedManyWithoutGmail_accountsInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsCreateOrConnectWithoutLeadsInput = {
    where: gmail_accountsWhereUniqueInput
    create: XOR<gmail_accountsCreateWithoutLeadsInput, gmail_accountsUncheckedCreateWithoutLeadsInput>
  }

  export type usersCreateWithoutLeadsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    campaigns?: campaignsCreateNestedManyWithoutUsersInput
    email_logs?: email_logsCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLeadsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    campaigns?: campaignsUncheckedCreateNestedManyWithoutUsersInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsUncheckedCreateNestedManyWithoutUsersInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLeadsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLeadsInput, usersUncheckedCreateWithoutLeadsInput>
  }

  export type queue_jobsCreateWithoutLeadsInput = {
    id?: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
    campaigns: campaignsCreateNestedOneWithoutQueue_jobsInput
    users: usersCreateNestedOneWithoutQueue_jobsInput
  }

  export type queue_jobsUncheckedCreateWithoutLeadsInput = {
    id?: string
    user_id: string
    campaign_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type queue_jobsCreateOrConnectWithoutLeadsInput = {
    where: queue_jobsWhereUniqueInput
    create: XOR<queue_jobsCreateWithoutLeadsInput, queue_jobsUncheckedCreateWithoutLeadsInput>
  }

  export type queue_jobsCreateManyLeadsInputEnvelope = {
    data: queue_jobsCreateManyLeadsInput | queue_jobsCreateManyLeadsInput[]
  }

  export type email_logsUpsertWithWhereUniqueWithoutLeadsInput = {
    where: email_logsWhereUniqueInput
    update: XOR<email_logsUpdateWithoutLeadsInput, email_logsUncheckedUpdateWithoutLeadsInput>
    create: XOR<email_logsCreateWithoutLeadsInput, email_logsUncheckedCreateWithoutLeadsInput>
  }

  export type email_logsUpdateWithWhereUniqueWithoutLeadsInput = {
    where: email_logsWhereUniqueInput
    data: XOR<email_logsUpdateWithoutLeadsInput, email_logsUncheckedUpdateWithoutLeadsInput>
  }

  export type email_logsUpdateManyWithWhereWithoutLeadsInput = {
    where: email_logsScalarWhereInput
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyWithoutLeadsInput>
  }

  export type campaignsUpsertWithoutLeadsInput = {
    update: XOR<campaignsUpdateWithoutLeadsInput, campaignsUncheckedUpdateWithoutLeadsInput>
    create: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
    where?: campaignsWhereInput
  }

  export type campaignsUpdateToOneWithWhereWithoutLeadsInput = {
    where?: campaignsWhereInput
    data: XOR<campaignsUpdateWithoutLeadsInput, campaignsUncheckedUpdateWithoutLeadsInput>
  }

  export type campaignsUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutCampaignsNestedInput
    users?: usersUpdateOneRequiredWithoutCampaignsNestedInput
    email_logs?: email_logsUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_logs?: email_logsUncheckedUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type gmail_accountsUpsertWithoutLeadsInput = {
    update: XOR<gmail_accountsUpdateWithoutLeadsInput, gmail_accountsUncheckedUpdateWithoutLeadsInput>
    create: XOR<gmail_accountsCreateWithoutLeadsInput, gmail_accountsUncheckedCreateWithoutLeadsInput>
    where?: gmail_accountsWhereInput
  }

  export type gmail_accountsUpdateToOneWithWhereWithoutLeadsInput = {
    where?: gmail_accountsWhereInput
    data: XOR<gmail_accountsUpdateWithoutLeadsInput, gmail_accountsUncheckedUpdateWithoutLeadsInput>
  }

  export type gmail_accountsUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateManyWithoutGmail_accountsNestedInput
    email_logs?: email_logsUpdateManyWithoutGmail_accountsNestedInput
    users?: usersUpdateOneRequiredWithoutGmail_accountsNestedInput
  }

  export type gmail_accountsUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUncheckedUpdateManyWithoutGmail_accountsNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutGmail_accountsNestedInput
  }

  export type usersUpsertWithoutLeadsInput = {
    update: XOR<usersUpdateWithoutLeadsInput, usersUncheckedUpdateWithoutLeadsInput>
    create: XOR<usersCreateWithoutLeadsInput, usersUncheckedCreateWithoutLeadsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLeadsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLeadsInput, usersUncheckedUpdateWithoutLeadsInput>
  }

  export type usersUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUncheckedUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUncheckedUpdateManyWithoutUsersNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type queue_jobsUpsertWithWhereUniqueWithoutLeadsInput = {
    where: queue_jobsWhereUniqueInput
    update: XOR<queue_jobsUpdateWithoutLeadsInput, queue_jobsUncheckedUpdateWithoutLeadsInput>
    create: XOR<queue_jobsCreateWithoutLeadsInput, queue_jobsUncheckedCreateWithoutLeadsInput>
  }

  export type queue_jobsUpdateWithWhereUniqueWithoutLeadsInput = {
    where: queue_jobsWhereUniqueInput
    data: XOR<queue_jobsUpdateWithoutLeadsInput, queue_jobsUncheckedUpdateWithoutLeadsInput>
  }

  export type queue_jobsUpdateManyWithWhereWithoutLeadsInput = {
    where: queue_jobsScalarWhereInput
    data: XOR<queue_jobsUpdateManyMutationInput, queue_jobsUncheckedUpdateManyWithoutLeadsInput>
  }

  export type campaignsCreateWithoutQueue_jobsInput = {
    id?: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gmail_accounts: gmail_accountsCreateNestedOneWithoutCampaignsInput
    users: usersCreateNestedOneWithoutCampaignsInput
    email_logs?: email_logsCreateNestedManyWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutQueue_jobsInput = {
    id?: string
    user_id: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutCampaignsInput
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutQueue_jobsInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutQueue_jobsInput, campaignsUncheckedCreateWithoutQueue_jobsInput>
  }

  export type leadsCreateWithoutQueue_jobsInput = {
    id?: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsCreateNestedManyWithoutLeadsInput
    campaigns: campaignsCreateNestedOneWithoutLeadsInput
    gmail_accounts?: gmail_accountsCreateNestedOneWithoutLeadsInput
    users: usersCreateNestedOneWithoutLeadsInput
  }

  export type leadsUncheckedCreateWithoutQueue_jobsInput = {
    id?: string
    user_id: string
    campaign_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type leadsCreateOrConnectWithoutQueue_jobsInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutQueue_jobsInput, leadsUncheckedCreateWithoutQueue_jobsInput>
  }

  export type usersCreateWithoutQueue_jobsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    campaigns?: campaignsCreateNestedManyWithoutUsersInput
    email_logs?: email_logsCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsCreateNestedManyWithoutUsersInput
    leads?: leadsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutQueue_jobsInput = {
    id?: string
    email: string
    password_hash: string
    created_at?: Date | string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    campaigns?: campaignsUncheckedCreateNestedManyWithoutUsersInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUsersInput
    gmail_accounts?: gmail_accountsUncheckedCreateNestedManyWithoutUsersInput
    leads?: leadsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutQueue_jobsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutQueue_jobsInput, usersUncheckedCreateWithoutQueue_jobsInput>
  }

  export type campaignsUpsertWithoutQueue_jobsInput = {
    update: XOR<campaignsUpdateWithoutQueue_jobsInput, campaignsUncheckedUpdateWithoutQueue_jobsInput>
    create: XOR<campaignsCreateWithoutQueue_jobsInput, campaignsUncheckedCreateWithoutQueue_jobsInput>
    where?: campaignsWhereInput
  }

  export type campaignsUpdateToOneWithWhereWithoutQueue_jobsInput = {
    where?: campaignsWhereInput
    data: XOR<campaignsUpdateWithoutQueue_jobsInput, campaignsUncheckedUpdateWithoutQueue_jobsInput>
  }

  export type campaignsUpdateWithoutQueue_jobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutCampaignsNestedInput
    users?: usersUpdateOneRequiredWithoutCampaignsNestedInput
    email_logs?: email_logsUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutQueue_jobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_logs?: email_logsUncheckedUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type leadsUpsertWithoutQueue_jobsInput = {
    update: XOR<leadsUpdateWithoutQueue_jobsInput, leadsUncheckedUpdateWithoutQueue_jobsInput>
    create: XOR<leadsCreateWithoutQueue_jobsInput, leadsUncheckedCreateWithoutQueue_jobsInput>
    where?: leadsWhereInput
  }

  export type leadsUpdateToOneWithWhereWithoutQueue_jobsInput = {
    where?: leadsWhereInput
    data: XOR<leadsUpdateWithoutQueue_jobsInput, leadsUncheckedUpdateWithoutQueue_jobsInput>
  }

  export type leadsUpdateWithoutQueue_jobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUpdateManyWithoutLeadsNestedInput
    campaigns?: campaignsUpdateOneRequiredWithoutLeadsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneWithoutLeadsNestedInput
    users?: usersUpdateOneRequiredWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateWithoutQueue_jobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type usersUpsertWithoutQueue_jobsInput = {
    update: XOR<usersUpdateWithoutQueue_jobsInput, usersUncheckedUpdateWithoutQueue_jobsInput>
    create: XOR<usersCreateWithoutQueue_jobsInput, usersUncheckedCreateWithoutQueue_jobsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutQueue_jobsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutQueue_jobsInput, usersUncheckedUpdateWithoutQueue_jobsInput>
  }

  export type usersUpdateWithoutQueue_jobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUpdateManyWithoutUsersNestedInput
    leads?: leadsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutQueue_jobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    campaigns?: campaignsUncheckedUpdateManyWithoutUsersNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutUsersNestedInput
    gmail_accounts?: gmail_accountsUncheckedUpdateManyWithoutUsersNestedInput
    leads?: leadsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type audit_logsCreateWithoutUsersInput = {
    id?: string
    action: string
    resource: string
    resource_id?: string | null
    metadata?: string | null
    created_at?: Date | string
  }

  export type audit_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    action: string
    resource: string
    resource_id?: string | null
    metadata?: string | null
    created_at?: Date | string
  }

  export type audit_logsCreateOrConnectWithoutUsersInput = {
    where: audit_logsWhereUniqueInput
    create: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput>
  }

  export type audit_logsCreateManyUsersInputEnvelope = {
    data: audit_logsCreateManyUsersInput | audit_logsCreateManyUsersInput[]
  }

  export type campaignsCreateWithoutUsersInput = {
    id?: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    gmail_accounts: gmail_accountsCreateNestedOneWithoutCampaignsInput
    email_logs?: email_logsCreateNestedManyWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutUsersInput = {
    id?: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutCampaignsInput
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutUsersInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutUsersInput, campaignsUncheckedCreateWithoutUsersInput>
  }

  export type campaignsCreateManyUsersInputEnvelope = {
    data: campaignsCreateManyUsersInput | campaignsCreateManyUsersInput[]
  }

  export type email_logsCreateWithoutUsersInput = {
    id?: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
    campaigns: campaignsCreateNestedOneWithoutEmail_logsInput
    gmail_accounts: gmail_accountsCreateNestedOneWithoutEmail_logsInput
    leads: leadsCreateNestedOneWithoutEmail_logsInput
  }

  export type email_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    campaign_id: string
    lead_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type email_logsCreateOrConnectWithoutUsersInput = {
    where: email_logsWhereUniqueInput
    create: XOR<email_logsCreateWithoutUsersInput, email_logsUncheckedCreateWithoutUsersInput>
  }

  export type email_logsCreateManyUsersInputEnvelope = {
    data: email_logsCreateManyUsersInput | email_logsCreateManyUsersInput[]
  }

  export type gmail_accountsCreateWithoutUsersInput = {
    id?: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsCreateNestedManyWithoutGmail_accountsInput
    email_logs?: email_logsCreateNestedManyWithoutGmail_accountsInput
    leads?: leadsCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsUncheckedCreateWithoutUsersInput = {
    id?: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
    campaigns?: campaignsUncheckedCreateNestedManyWithoutGmail_accountsInput
    email_logs?: email_logsUncheckedCreateNestedManyWithoutGmail_accountsInput
    leads?: leadsUncheckedCreateNestedManyWithoutGmail_accountsInput
  }

  export type gmail_accountsCreateOrConnectWithoutUsersInput = {
    where: gmail_accountsWhereUniqueInput
    create: XOR<gmail_accountsCreateWithoutUsersInput, gmail_accountsUncheckedCreateWithoutUsersInput>
  }

  export type gmail_accountsCreateManyUsersInputEnvelope = {
    data: gmail_accountsCreateManyUsersInput | gmail_accountsCreateManyUsersInput[]
  }

  export type leadsCreateWithoutUsersInput = {
    id?: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsCreateNestedManyWithoutLeadsInput
    campaigns: campaignsCreateNestedOneWithoutLeadsInput
    gmail_accounts?: gmail_accountsCreateNestedOneWithoutLeadsInput
    queue_jobs?: queue_jobsCreateNestedManyWithoutLeadsInput
  }

  export type leadsUncheckedCreateWithoutUsersInput = {
    id?: string
    campaign_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
    email_logs?: email_logsUncheckedCreateNestedManyWithoutLeadsInput
    queue_jobs?: queue_jobsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type leadsCreateOrConnectWithoutUsersInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutUsersInput, leadsUncheckedCreateWithoutUsersInput>
  }

  export type leadsCreateManyUsersInputEnvelope = {
    data: leadsCreateManyUsersInput | leadsCreateManyUsersInput[]
  }

  export type queue_jobsCreateWithoutUsersInput = {
    id?: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
    campaigns: campaignsCreateNestedOneWithoutQueue_jobsInput
    leads: leadsCreateNestedOneWithoutQueue_jobsInput
  }

  export type queue_jobsUncheckedCreateWithoutUsersInput = {
    id?: string
    campaign_id: string
    lead_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type queue_jobsCreateOrConnectWithoutUsersInput = {
    where: queue_jobsWhereUniqueInput
    create: XOR<queue_jobsCreateWithoutUsersInput, queue_jobsUncheckedCreateWithoutUsersInput>
  }

  export type queue_jobsCreateManyUsersInputEnvelope = {
    data: queue_jobsCreateManyUsersInput | queue_jobsCreateManyUsersInput[]
  }

  export type audit_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: audit_logsWhereUniqueInput
    update: XOR<audit_logsUpdateWithoutUsersInput, audit_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput>
  }

  export type audit_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: audit_logsWhereUniqueInput
    data: XOR<audit_logsUpdateWithoutUsersInput, audit_logsUncheckedUpdateWithoutUsersInput>
  }

  export type audit_logsUpdateManyWithWhereWithoutUsersInput = {
    where: audit_logsScalarWhereInput
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type audit_logsScalarWhereInput = {
    AND?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    OR?: audit_logsScalarWhereInput[]
    NOT?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    id?: StringFilter<"audit_logs"> | string
    user_id?: StringFilter<"audit_logs"> | string
    action?: StringFilter<"audit_logs"> | string
    resource?: StringFilter<"audit_logs"> | string
    resource_id?: StringNullableFilter<"audit_logs"> | string | null
    metadata?: StringNullableFilter<"audit_logs"> | string | null
    created_at?: DateTimeFilter<"audit_logs"> | Date | string
  }

  export type campaignsUpsertWithWhereUniqueWithoutUsersInput = {
    where: campaignsWhereUniqueInput
    update: XOR<campaignsUpdateWithoutUsersInput, campaignsUncheckedUpdateWithoutUsersInput>
    create: XOR<campaignsCreateWithoutUsersInput, campaignsUncheckedCreateWithoutUsersInput>
  }

  export type campaignsUpdateWithWhereUniqueWithoutUsersInput = {
    where: campaignsWhereUniqueInput
    data: XOR<campaignsUpdateWithoutUsersInput, campaignsUncheckedUpdateWithoutUsersInput>
  }

  export type campaignsUpdateManyWithWhereWithoutUsersInput = {
    where: campaignsScalarWhereInput
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyWithoutUsersInput>
  }

  export type email_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: email_logsWhereUniqueInput
    update: XOR<email_logsUpdateWithoutUsersInput, email_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<email_logsCreateWithoutUsersInput, email_logsUncheckedCreateWithoutUsersInput>
  }

  export type email_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: email_logsWhereUniqueInput
    data: XOR<email_logsUpdateWithoutUsersInput, email_logsUncheckedUpdateWithoutUsersInput>
  }

  export type email_logsUpdateManyWithWhereWithoutUsersInput = {
    where: email_logsScalarWhereInput
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type gmail_accountsUpsertWithWhereUniqueWithoutUsersInput = {
    where: gmail_accountsWhereUniqueInput
    update: XOR<gmail_accountsUpdateWithoutUsersInput, gmail_accountsUncheckedUpdateWithoutUsersInput>
    create: XOR<gmail_accountsCreateWithoutUsersInput, gmail_accountsUncheckedCreateWithoutUsersInput>
  }

  export type gmail_accountsUpdateWithWhereUniqueWithoutUsersInput = {
    where: gmail_accountsWhereUniqueInput
    data: XOR<gmail_accountsUpdateWithoutUsersInput, gmail_accountsUncheckedUpdateWithoutUsersInput>
  }

  export type gmail_accountsUpdateManyWithWhereWithoutUsersInput = {
    where: gmail_accountsScalarWhereInput
    data: XOR<gmail_accountsUpdateManyMutationInput, gmail_accountsUncheckedUpdateManyWithoutUsersInput>
  }

  export type gmail_accountsScalarWhereInput = {
    AND?: gmail_accountsScalarWhereInput | gmail_accountsScalarWhereInput[]
    OR?: gmail_accountsScalarWhereInput[]
    NOT?: gmail_accountsScalarWhereInput | gmail_accountsScalarWhereInput[]
    id?: StringFilter<"gmail_accounts"> | string
    user_id?: StringFilter<"gmail_accounts"> | string
    email?: StringFilter<"gmail_accounts"> | string
    refresh_token_encrypted?: StringFilter<"gmail_accounts"> | string
    access_token_encrypted?: StringNullableFilter<"gmail_accounts"> | string | null
    access_token_expires_at?: DateTimeNullableFilter<"gmail_accounts"> | Date | string | null
    status?: EnumGmailAccountStatusNullableFilter<"gmail_accounts"> | $Enums.GmailAccountStatus | null
    created_at?: DateTimeNullableFilter<"gmail_accounts"> | Date | string | null
  }

  export type leadsUpsertWithWhereUniqueWithoutUsersInput = {
    where: leadsWhereUniqueInput
    update: XOR<leadsUpdateWithoutUsersInput, leadsUncheckedUpdateWithoutUsersInput>
    create: XOR<leadsCreateWithoutUsersInput, leadsUncheckedCreateWithoutUsersInput>
  }

  export type leadsUpdateWithWhereUniqueWithoutUsersInput = {
    where: leadsWhereUniqueInput
    data: XOR<leadsUpdateWithoutUsersInput, leadsUncheckedUpdateWithoutUsersInput>
  }

  export type leadsUpdateManyWithWhereWithoutUsersInput = {
    where: leadsScalarWhereInput
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyWithoutUsersInput>
  }

  export type queue_jobsUpsertWithWhereUniqueWithoutUsersInput = {
    where: queue_jobsWhereUniqueInput
    update: XOR<queue_jobsUpdateWithoutUsersInput, queue_jobsUncheckedUpdateWithoutUsersInput>
    create: XOR<queue_jobsCreateWithoutUsersInput, queue_jobsUncheckedCreateWithoutUsersInput>
  }

  export type queue_jobsUpdateWithWhereUniqueWithoutUsersInput = {
    where: queue_jobsWhereUniqueInput
    data: XOR<queue_jobsUpdateWithoutUsersInput, queue_jobsUncheckedUpdateWithoutUsersInput>
  }

  export type queue_jobsUpdateManyWithWhereWithoutUsersInput = {
    where: queue_jobsScalarWhereInput
    data: XOR<queue_jobsUpdateManyMutationInput, queue_jobsUncheckedUpdateManyWithoutUsersInput>
  }

  export type email_logsCreateManyCampaignsInput = {
    id?: string
    user_id: string
    lead_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type leadsCreateManyCampaignsInput = {
    id?: string
    user_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
  }

  export type queue_jobsCreateManyCampaignsInput = {
    id?: string
    user_id: string
    lead_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type email_logsUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutEmail_logsNestedInput
    leads?: leadsUpdateOneRequiredWithoutEmail_logsNestedInput
    users?: usersUpdateOneRequiredWithoutEmail_logsNestedInput
  }

  export type email_logsUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type email_logsUncheckedUpdateManyWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type leadsUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUpdateManyWithoutLeadsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneWithoutLeadsNestedInput
    users?: usersUpdateOneRequiredWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUncheckedUpdateManyWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateManyWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type queue_jobsUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: leadsUpdateOneRequiredWithoutQueue_jobsNestedInput
    users?: usersUpdateOneRequiredWithoutQueue_jobsNestedInput
  }

  export type queue_jobsUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_jobsUncheckedUpdateManyWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type campaignsCreateManyGmail_accountsInput = {
    id?: string
    user_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type email_logsCreateManyGmail_accountsInput = {
    id?: string
    user_id: string
    campaign_id: string
    lead_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type leadsCreateManyGmail_accountsInput = {
    id?: string
    user_id: string
    campaign_id: string
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
  }

  export type campaignsUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCampaignsNestedInput
    email_logs?: email_logsUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_logs?: email_logsUncheckedUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateManyWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_logsUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
    campaigns?: campaignsUpdateOneRequiredWithoutEmail_logsNestedInput
    leads?: leadsUpdateOneRequiredWithoutEmail_logsNestedInput
    users?: usersUpdateOneRequiredWithoutEmail_logsNestedInput
  }

  export type email_logsUncheckedUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type email_logsUncheckedUpdateManyWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type leadsUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUpdateManyWithoutLeadsNestedInput
    campaigns?: campaignsUpdateOneRequiredWithoutLeadsNestedInput
    users?: usersUpdateOneRequiredWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUncheckedUpdateManyWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateManyWithoutGmail_accountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type email_logsCreateManyLeadsInput = {
    id?: string
    user_id: string
    campaign_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type queue_jobsCreateManyLeadsInput = {
    id?: string
    user_id: string
    campaign_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type email_logsUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
    campaigns?: campaignsUpdateOneRequiredWithoutEmail_logsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutEmail_logsNestedInput
    users?: usersUpdateOneRequiredWithoutEmail_logsNestedInput
  }

  export type email_logsUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type email_logsUncheckedUpdateManyWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type queue_jobsUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateOneRequiredWithoutQueue_jobsNestedInput
    users?: usersUpdateOneRequiredWithoutQueue_jobsNestedInput
  }

  export type queue_jobsUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_jobsUncheckedUpdateManyWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsCreateManyUsersInput = {
    id?: string
    action: string
    resource: string
    resource_id?: string | null
    metadata?: string | null
    created_at?: Date | string
  }

  export type campaignsCreateManyUsersInput = {
    id?: string
    gmail_account_id: string
    name: string
    subject_template: string
    body_template: string
    required_variables?: string | null
    daily_limit: number
    delay_min_seconds: number
    delay_max_seconds: number
    start_time?: Date | string | null
    status?: $Enums.CampaignStatus | null
    failure_count?: number | null
    follow_up2_body?: string | null
    follow_up2_delay_hours?: number | null
    follow_up3_body?: string | null
    follow_up3_delay_hours?: number | null
    follow_up4_body?: string | null
    follow_up4_delay_hours?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type email_logsCreateManyUsersInput = {
    id?: string
    campaign_id: string
    lead_id: string
    gmail_account_id: string
    subject: string
    body: string
    sent_at?: Date | string | null
    status?: string | null
    error_message?: string | null
    bounce_status?: string | null
    created_at?: Date | string | null
    sequence_step?: number | null
  }

  export type gmail_accountsCreateManyUsersInput = {
    id?: string
    email: string
    refresh_token_encrypted: string
    access_token_encrypted?: string | null
    access_token_expires_at?: Date | string | null
    status?: $Enums.GmailAccountStatus | null
    created_at?: Date | string | null
  }

  export type leadsCreateManyUsersInput = {
    id?: string
    campaign_id: string
    gmail_account_id?: string | null
    email: string
    first_name?: string | null
    company_name?: string | null
    domain_name?: string | null
    custom_fields?: string | null
    status?: $Enums.LeadStatus | null
    sent_at?: Date | string | null
    opened_at?: Date | string | null
    clicked_at?: Date | string | null
    replied_at?: Date | string | null
    bounced_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string | null
    currentSequenceStep?: number | null
    lastMessageId?: string | null
    lastThreadId?: string | null
    receivedReply?: boolean | null
  }

  export type queue_jobsCreateManyUsersInput = {
    id?: string
    campaign_id: string
    lead_id: string
    scheduled_for: Date | string
    status?: string | null
    attempts?: number | null
    last_error?: string | null
    created_at?: Date | string | null
  }

  export type audit_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campaignsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutCampaignsNestedInput
    email_logs?: email_logsUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_logs?: email_logsUncheckedUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject_template?: StringFieldUpdateOperationsInput | string
    body_template?: StringFieldUpdateOperationsInput | string
    required_variables?: NullableStringFieldUpdateOperationsInput | string | null
    daily_limit?: IntFieldUpdateOperationsInput | number
    delay_min_seconds?: IntFieldUpdateOperationsInput | number
    delay_max_seconds?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus | null
    failure_count?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up2_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up2_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up3_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up3_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    follow_up4_body?: NullableStringFieldUpdateOperationsInput | string | null
    follow_up4_delay_hours?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
    campaigns?: campaignsUpdateOneRequiredWithoutEmail_logsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneRequiredWithoutEmail_logsNestedInput
    leads?: leadsUpdateOneRequiredWithoutEmail_logsNestedInput
  }

  export type email_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type email_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    bounce_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence_step?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gmail_accountsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateManyWithoutGmail_accountsNestedInput
    email_logs?: email_logsUpdateManyWithoutGmail_accountsNestedInput
    leads?: leadsUpdateManyWithoutGmail_accountsNestedInput
  }

  export type gmail_accountsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUncheckedUpdateManyWithoutGmail_accountsNestedInput
    email_logs?: email_logsUncheckedUpdateManyWithoutGmail_accountsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutGmail_accountsNestedInput
  }

  export type gmail_accountsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    refresh_token_encrypted?: StringFieldUpdateOperationsInput | string
    access_token_encrypted?: NullableStringFieldUpdateOperationsInput | string | null
    access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumGmailAccountStatusFieldUpdateOperationsInput | $Enums.GmailAccountStatus | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leadsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUpdateManyWithoutLeadsNestedInput
    campaigns?: campaignsUpdateOneRequiredWithoutLeadsNestedInput
    gmail_accounts?: gmail_accountsUpdateOneWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_logs?: email_logsUncheckedUpdateManyWithoutLeadsNestedInput
    queue_jobs?: queue_jobsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    gmail_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_name?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opened_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bounced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSequenceStep?: NullableIntFieldUpdateOperationsInput | number | null
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    lastThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    receivedReply?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type queue_jobsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaigns?: campaignsUpdateOneRequiredWithoutQueue_jobsNestedInput
    leads?: leadsUpdateOneRequiredWithoutQueue_jobsNestedInput
  }

  export type queue_jobsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_jobsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    scheduled_for?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}