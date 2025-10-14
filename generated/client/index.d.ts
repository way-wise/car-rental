
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model verifications
 * 
 */
export type verifications = $Result.DefaultSelection<Prisma.$verificationsPayload>
/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model fuelReports
 * 
 */
export type fuelReports = $Result.DefaultSelection<Prisma.$fuelReportsPayload>
/**
 * Model maintenance
 * 
 */
export type maintenance = $Result.DefaultSelection<Prisma.$maintenancePayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  user: 'user'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PaymentStatus: {
  pending: 'pending',
  succeeded: 'succeeded',
  failed: 'failed',
  canceled: 'canceled',
  refunded: 'refunded'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const BookingStatus: {
  upcoming: 'upcoming',
  ongoing: 'ongoing',
  completed: 'completed',
  canceled: 'canceled'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PricingType: {
  kilometer: 'kilometer',
  hour: 'hour'
};

export type PricingType = (typeof PricingType)[keyof typeof PricingType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PricingType = $Enums.PricingType

export const PricingType: typeof $Enums.PricingType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verifications`: Exposes CRUD operations for the **verifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verifications.findMany()
    * ```
    */
  get verifications(): Prisma.verificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuelReports`: Exposes CRUD operations for the **fuelReports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FuelReports
    * const fuelReports = await prisma.fuelReports.findMany()
    * ```
    */
  get fuelReports(): Prisma.fuelReportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.maintenanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    users: 'users',
    sessions: 'sessions',
    accounts: 'accounts',
    verifications: 'verifications',
    bookings: 'bookings',
    fuelReports: 'fuelReports',
    maintenance: 'maintenance',
    settings: 'settings'
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
      modelProps: "users" | "sessions" | "accounts" | "verifications" | "bookings" | "fuelReports" | "maintenance" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      verifications: {
        payload: Prisma.$verificationsPayload<ExtArgs>
        fields: Prisma.verificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>
          }
          findFirst: {
            args: Prisma.verificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>
          }
          findMany: {
            args: Prisma.verificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>[]
          }
          create: {
            args: Prisma.verificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>
          }
          createMany: {
            args: Prisma.verificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>[]
          }
          delete: {
            args: Prisma.verificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>
          }
          update: {
            args: Prisma.verificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>
          }
          deleteMany: {
            args: Prisma.verificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>[]
          }
          upsert: {
            args: Prisma.verificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationsPayload>
          }
          aggregate: {
            args: Prisma.VerificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerifications>
          }
          groupBy: {
            args: Prisma.verificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.verificationsCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationsCountAggregateOutputType> | number
          }
        }
      }
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      fuelReports: {
        payload: Prisma.$fuelReportsPayload<ExtArgs>
        fields: Prisma.fuelReportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fuelReportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fuelReportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>
          }
          findFirst: {
            args: Prisma.fuelReportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fuelReportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>
          }
          findMany: {
            args: Prisma.fuelReportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>[]
          }
          create: {
            args: Prisma.fuelReportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>
          }
          createMany: {
            args: Prisma.fuelReportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fuelReportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>[]
          }
          delete: {
            args: Prisma.fuelReportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>
          }
          update: {
            args: Prisma.fuelReportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>
          }
          deleteMany: {
            args: Prisma.fuelReportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fuelReportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fuelReportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>[]
          }
          upsert: {
            args: Prisma.fuelReportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fuelReportsPayload>
          }
          aggregate: {
            args: Prisma.FuelReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuelReports>
          }
          groupBy: {
            args: Prisma.fuelReportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuelReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fuelReportsCountArgs<ExtArgs>
            result: $Utils.Optional<FuelReportsCountAggregateOutputType> | number
          }
        }
      }
      maintenance: {
        payload: Prisma.$maintenancePayload<ExtArgs>
        fields: Prisma.maintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          findFirst: {
            args: Prisma.maintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          findMany: {
            args: Prisma.maintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>[]
          }
          create: {
            args: Prisma.maintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          createMany: {
            args: Prisma.maintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.maintenanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>[]
          }
          delete: {
            args: Prisma.maintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          update: {
            args: Prisma.maintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          deleteMany: {
            args: Prisma.maintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.maintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.maintenanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>[]
          }
          upsert: {
            args: Prisma.maintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.maintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.maintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
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
    users?: usersOmit
    sessions?: sessionsOmit
    accounts?: accountsOmit
    verifications?: verificationsOmit
    bookings?: bookingsOmit
    fuelReports?: fuelReportsOmit
    maintenance?: maintenanceOmit
    settings?: settingsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sessions: number
    accounts: number
    bookings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UsersCountOutputTypeCountSessionsArgs
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
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
  export type UsersCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    banExpires: number | null
  }

  export type UsersSumAggregateOutputType = {
    banExpires: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    role: $Enums.UserRole | null
    banned: boolean | null
    banReason: string | null
    banExpires: number | null
    stripeCustomerId: string | null
    defaultPaymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    role: $Enums.UserRole | null
    banned: boolean | null
    banReason: string | null
    banExpires: number | null
    stripeCustomerId: string | null
    defaultPaymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    emailVerified: number
    image: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    stripeCustomerId: number
    defaultPaymentMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    banExpires?: true
  }

  export type UsersSumAggregateInputType = {
    banExpires?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    stripeCustomerId?: true
    defaultPaymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    stripeCustomerId?: true
    defaultPaymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    stripeCustomerId?: true
    defaultPaymentMethod?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    name: string
    emailVerified: boolean
    image: string | null
    role: $Enums.UserRole | null
    banned: boolean | null
    banReason: string | null
    banExpires: number | null
    stripeCustomerId: string | null
    defaultPaymentMethod: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
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
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
    defaultPaymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | users$sessionsArgs<ExtArgs>
    accounts?: boolean | users$accountsArgs<ExtArgs>
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
    defaultPaymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
    defaultPaymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    stripeCustomerId?: boolean
    defaultPaymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "emailVerified" | "image" | "role" | "banned" | "banReason" | "banExpires" | "stripeCustomerId" | "defaultPaymentMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | users$sessionsArgs<ExtArgs>
    accounts?: boolean | users$accountsArgs<ExtArgs>
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
      accounts: Prisma.$accountsPayload<ExtArgs>[]
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      emailVerified: boolean
      image: string | null
      role: $Enums.UserRole | null
      banned: boolean | null
      banReason: string | null
      banExpires: number | null
      stripeCustomerId: string | null
      defaultPaymentMethod: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
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
    sessions<T extends users$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, users$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends users$accountsArgs<ExtArgs> = {}>(args?: Subset<T, users$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"users", 'String'>
    readonly emailVerified: FieldRef<"users", 'Boolean'>
    readonly image: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'UserRole'>
    readonly banned: FieldRef<"users", 'Boolean'>
    readonly banReason: FieldRef<"users", 'String'>
    readonly banExpires: FieldRef<"users", 'Int'>
    readonly stripeCustomerId: FieldRef<"users", 'String'>
    readonly defaultPaymentMethod: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
   * users.sessions
   */
  export type users$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * users.accounts
   */
  export type users$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    cursor?: accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * users.bookings
   */
  export type users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
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
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    impersonatedBy: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    impersonatedBy: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    impersonatedBy: number
    ipAddress: number
    userAgent: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    impersonatedBy?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    impersonatedBy?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    impersonatedBy?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    impersonatedBy: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    impersonatedBy?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    impersonatedBy?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    impersonatedBy?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    impersonatedBy?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "impersonatedBy" | "ipAddress" | "userAgent" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["sessions"]>
  export type sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      impersonatedBy: string | null
      ipAddress: string | null
      userAgent: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'String'>
    readonly token: FieldRef<"sessions", 'String'>
    readonly expiresAt: FieldRef<"sessions", 'DateTime'>
    readonly impersonatedBy: FieldRef<"sessions", 'String'>
    readonly ipAddress: FieldRef<"sessions", 'String'>
    readonly userAgent: FieldRef<"sessions", 'String'>
    readonly userId: FieldRef<"sessions", 'String'>
    readonly createdAt: FieldRef<"sessions", 'DateTime'>
    readonly updatedAt: FieldRef<"sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions updateManyAndReturn
   */
  export type sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["accounts"]>
  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type accountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.updateManyAndReturn({
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
    updateManyAndReturn<T extends accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
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
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'String'>
    readonly accountId: FieldRef<"accounts", 'String'>
    readonly providerId: FieldRef<"accounts", 'String'>
    readonly userId: FieldRef<"accounts", 'String'>
    readonly accessToken: FieldRef<"accounts", 'String'>
    readonly refreshToken: FieldRef<"accounts", 'String'>
    readonly idToken: FieldRef<"accounts", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"accounts", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"accounts", 'DateTime'>
    readonly scope: FieldRef<"accounts", 'String'>
    readonly password: FieldRef<"accounts", 'String'>
    readonly createdAt: FieldRef<"accounts", 'DateTime'>
    readonly updatedAt: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts updateManyAndReturn
   */
  export type accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model verifications
   */

  export type AggregateVerifications = {
    _count: VerificationsCountAggregateOutputType | null
    _min: VerificationsMinAggregateOutputType | null
    _max: VerificationsMaxAggregateOutputType | null
  }

  export type VerificationsMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationsMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationsCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationsMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationsMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationsCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verifications to aggregate.
     */
    where?: verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationsOrderByWithRelationInput | verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verifications
    **/
    _count?: true | VerificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationsMaxAggregateInputType
  }

  export type GetVerificationsAggregateType<T extends VerificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateVerifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerifications[P]>
      : GetScalarType<T[P], AggregateVerifications[P]>
  }




  export type verificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificationsWhereInput
    orderBy?: verificationsOrderByWithAggregationInput | verificationsOrderByWithAggregationInput[]
    by: VerificationsScalarFieldEnum[] | VerificationsScalarFieldEnum
    having?: verificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationsCountAggregateInputType | true
    _min?: VerificationsMinAggregateInputType
    _max?: VerificationsMaxAggregateInputType
  }

  export type VerificationsGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationsCountAggregateOutputType | null
    _min: VerificationsMinAggregateOutputType | null
    _max: VerificationsMaxAggregateOutputType | null
  }

  type GetVerificationsGroupByPayload<T extends verificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationsGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationsGroupByOutputType[P]>
        }
      >
    >


  export type verificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verifications"]>

  export type verificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verifications"]>

  export type verificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verifications"]>

  export type verificationsSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type verificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verifications"]>

  export type $verificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verifications"]>
    composites: {}
  }

  type verificationsGetPayload<S extends boolean | null | undefined | verificationsDefaultArgs> = $Result.GetResult<Prisma.$verificationsPayload, S>

  type verificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: VerificationsCountAggregateInputType | true
    }

  export interface verificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verifications'], meta: { name: 'verifications' } }
    /**
     * Find zero or one Verifications that matches the filter.
     * @param {verificationsFindUniqueArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verificationsFindUniqueArgs>(args: SelectSubset<T, verificationsFindUniqueArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verificationsFindUniqueOrThrowArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, verificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationsFindFirstArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verificationsFindFirstArgs>(args?: SelectSubset<T, verificationsFindFirstArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationsFindFirstOrThrowArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, verificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verifications.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationsWithIdOnly = await prisma.verifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verificationsFindManyArgs>(args?: SelectSubset<T, verificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verifications.
     * @param {verificationsCreateArgs} args - Arguments to create a Verifications.
     * @example
     * // Create one Verifications
     * const Verifications = await prisma.verifications.create({
     *   data: {
     *     // ... data to create a Verifications
     *   }
     * })
     * 
     */
    create<T extends verificationsCreateArgs>(args: SelectSubset<T, verificationsCreateArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {verificationsCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verifications = await prisma.verifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verificationsCreateManyArgs>(args?: SelectSubset<T, verificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {verificationsCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verifications = await prisma.verifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationsWithIdOnly = await prisma.verifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, verificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verifications.
     * @param {verificationsDeleteArgs} args - Arguments to delete one Verifications.
     * @example
     * // Delete one Verifications
     * const Verifications = await prisma.verifications.delete({
     *   where: {
     *     // ... filter to delete one Verifications
     *   }
     * })
     * 
     */
    delete<T extends verificationsDeleteArgs>(args: SelectSubset<T, verificationsDeleteArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verifications.
     * @param {verificationsUpdateArgs} args - Arguments to update one Verifications.
     * @example
     * // Update one Verifications
     * const verifications = await prisma.verifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verificationsUpdateArgs>(args: SelectSubset<T, verificationsUpdateArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {verificationsDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verificationsDeleteManyArgs>(args?: SelectSubset<T, verificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verifications = await prisma.verifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verificationsUpdateManyArgs>(args: SelectSubset<T, verificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {verificationsUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verifications = await prisma.verifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationsWithIdOnly = await prisma.verifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends verificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, verificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verifications.
     * @param {verificationsUpsertArgs} args - Arguments to update or create a Verifications.
     * @example
     * // Update or create a Verifications
     * const verifications = await prisma.verifications.upsert({
     *   create: {
     *     // ... data to create a Verifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verifications we want to update
     *   }
     * })
     */
    upsert<T extends verificationsUpsertArgs>(args: SelectSubset<T, verificationsUpsertArgs<ExtArgs>>): Prisma__verificationsClient<$Result.GetResult<Prisma.$verificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationsCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verifications.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends verificationsCountArgs>(
      args?: Subset<T, verificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationsAggregateArgs>(args: Subset<T, VerificationsAggregateArgs>): Prisma.PrismaPromise<GetVerificationsAggregateType<T>>

    /**
     * Group by Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationsGroupByArgs} args - Group by arguments.
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
      T extends verificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verificationsGroupByArgs['orderBy'] }
        : { orderBy?: verificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, verificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verifications model
   */
  readonly fields: verificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the verifications model
   */
  interface verificationsFieldRefs {
    readonly id: FieldRef<"verifications", 'String'>
    readonly identifier: FieldRef<"verifications", 'String'>
    readonly value: FieldRef<"verifications", 'String'>
    readonly expiresAt: FieldRef<"verifications", 'DateTime'>
    readonly createdAt: FieldRef<"verifications", 'DateTime'>
    readonly updatedAt: FieldRef<"verifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verifications findUnique
   */
  export type verificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * Filter, which verifications to fetch.
     */
    where: verificationsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications findUniqueOrThrow
   */
  export type verificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * Filter, which verifications to fetch.
     */
    where: verificationsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications findFirst
   */
  export type verificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * Filter, which verifications to fetch.
     */
    where?: verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationsOrderByWithRelationInput | verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: VerificationsScalarFieldEnum | VerificationsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications findFirstOrThrow
   */
  export type verificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * Filter, which verifications to fetch.
     */
    where?: verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationsOrderByWithRelationInput | verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: VerificationsScalarFieldEnum | VerificationsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications findMany
   */
  export type verificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * Filter, which verifications to fetch.
     */
    where?: verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: verificationsOrderByWithRelationInput | verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verifications.
     */
    cursor?: verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    distinct?: VerificationsScalarFieldEnum | VerificationsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications create
   */
  export type verificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a verifications.
     */
    data: XOR<verificationsCreateInput, verificationsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications createMany
   */
  export type verificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verifications.
     */
    data: verificationsCreateManyInput | verificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verifications createManyAndReturn
   */
  export type verificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * The data used to create many verifications.
     */
    data: verificationsCreateManyInput | verificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verifications update
   */
  export type verificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a verifications.
     */
    data: XOR<verificationsUpdateInput, verificationsUncheckedUpdateInput>
    /**
     * Choose, which verifications to update.
     */
    where: verificationsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications updateMany
   */
  export type verificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verifications.
     */
    data: XOR<verificationsUpdateManyMutationInput, verificationsUncheckedUpdateManyInput>
    /**
     * Filter which verifications to update
     */
    where?: verificationsWhereInput
    /**
     * Limit how many verifications to update.
     */
    limit?: number
  }

  /**
   * verifications updateManyAndReturn
   */
  export type verificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * The data used to update verifications.
     */
    data: XOR<verificationsUpdateManyMutationInput, verificationsUncheckedUpdateManyInput>
    /**
     * Filter which verifications to update
     */
    where?: verificationsWhereInput
    /**
     * Limit how many verifications to update.
     */
    limit?: number
  }

  /**
   * verifications upsert
   */
  export type verificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the verifications to update in case it exists.
     */
    where: verificationsWhereUniqueInput
    /**
     * In case the verifications found by the `where` argument doesn't exist, create a new verifications with this data.
     */
    create: XOR<verificationsCreateInput, verificationsUncheckedCreateInput>
    /**
     * In case the verifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificationsUpdateInput, verificationsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications delete
   */
  export type verificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
    /**
     * Filter which verifications to delete.
     */
    where: verificationsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * verifications deleteMany
   */
  export type verificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verifications to delete
     */
    where?: verificationsWhereInput
    /**
     * Limit how many verifications to delete.
     */
    limit?: number
  }

  /**
   * verifications without action
   */
  export type verificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifications
     */
    select?: verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifications
     */
    omit?: verificationsOmit<ExtArgs> | null
  }


  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    distance: number | null
    duration: number | null
    amount: number | null
  }

  export type BookingsSumAggregateOutputType = {
    distance: number | null
    duration: number | null
    amount: number | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pickupLocation: string | null
    dropLocation: string | null
    bookingDate: Date | null
    bookingTime: string | null
    distance: number | null
    duration: number | null
    stripePaymentIntentId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    bookingStatus: $Enums.BookingStatus | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pickupLocation: string | null
    dropLocation: string | null
    bookingDate: Date | null
    bookingTime: string | null
    distance: number | null
    duration: number | null
    stripePaymentIntentId: string | null
    paymentStatus: $Enums.PaymentStatus | null
    bookingStatus: $Enums.BookingStatus | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    userId: number
    pickupLocation: number
    dropLocation: number
    bookingDate: number
    bookingTime: number
    distance: number
    duration: number
    stripePaymentIntentId: number
    paymentStatus: number
    bookingStatus: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    distance?: true
    duration?: true
    amount?: true
  }

  export type BookingsSumAggregateInputType = {
    distance?: true
    duration?: true
    amount?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    userId?: true
    pickupLocation?: true
    dropLocation?: true
    bookingDate?: true
    bookingTime?: true
    distance?: true
    duration?: true
    stripePaymentIntentId?: true
    paymentStatus?: true
    bookingStatus?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    userId?: true
    pickupLocation?: true
    dropLocation?: true
    bookingDate?: true
    bookingTime?: true
    distance?: true
    duration?: true
    stripePaymentIntentId?: true
    paymentStatus?: true
    bookingStatus?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    userId?: true
    pickupLocation?: true
    dropLocation?: true
    bookingDate?: true
    bookingTime?: true
    distance?: true
    duration?: true
    stripePaymentIntentId?: true
    paymentStatus?: true
    bookingStatus?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    userId: string
    pickupLocation: string
    dropLocation: string
    bookingDate: Date
    bookingTime: string
    distance: number | null
    duration: number | null
    stripePaymentIntentId: string | null
    paymentStatus: $Enums.PaymentStatus
    bookingStatus: $Enums.BookingStatus
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pickupLocation?: boolean
    dropLocation?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    distance?: boolean
    duration?: boolean
    stripePaymentIntentId?: boolean
    paymentStatus?: boolean
    bookingStatus?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pickupLocation?: boolean
    dropLocation?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    distance?: boolean
    duration?: boolean
    stripePaymentIntentId?: boolean
    paymentStatus?: boolean
    bookingStatus?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pickupLocation?: boolean
    dropLocation?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    distance?: boolean
    duration?: boolean
    stripePaymentIntentId?: boolean
    paymentStatus?: boolean
    bookingStatus?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    userId?: boolean
    pickupLocation?: boolean
    dropLocation?: boolean
    bookingDate?: boolean
    bookingTime?: boolean
    distance?: boolean
    duration?: boolean
    stripePaymentIntentId?: boolean
    paymentStatus?: boolean
    bookingStatus?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pickupLocation" | "dropLocation" | "bookingDate" | "bookingTime" | "distance" | "duration" | "stripePaymentIntentId" | "paymentStatus" | "bookingStatus" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pickupLocation: string
      dropLocation: string
      bookingDate: Date
      bookingTime: string
      distance: number | null
      duration: number | null
      stripePaymentIntentId: string | null
      paymentStatus: $Enums.PaymentStatus
      bookingStatus: $Enums.BookingStatus
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
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
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
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
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'String'>
    readonly userId: FieldRef<"bookings", 'String'>
    readonly pickupLocation: FieldRef<"bookings", 'String'>
    readonly dropLocation: FieldRef<"bookings", 'String'>
    readonly bookingDate: FieldRef<"bookings", 'DateTime'>
    readonly bookingTime: FieldRef<"bookings", 'String'>
    readonly distance: FieldRef<"bookings", 'Float'>
    readonly duration: FieldRef<"bookings", 'Float'>
    readonly stripePaymentIntentId: FieldRef<"bookings", 'String'>
    readonly paymentStatus: FieldRef<"bookings", 'PaymentStatus'>
    readonly bookingStatus: FieldRef<"bookings", 'BookingStatus'>
    readonly amount: FieldRef<"bookings", 'Int'>
    readonly createdAt: FieldRef<"bookings", 'DateTime'>
    readonly updatedAt: FieldRef<"bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model fuelReports
   */

  export type AggregateFuelReports = {
    _count: FuelReportsCountAggregateOutputType | null
    _avg: FuelReportsAvgAggregateOutputType | null
    _sum: FuelReportsSumAggregateOutputType | null
    _min: FuelReportsMinAggregateOutputType | null
    _max: FuelReportsMaxAggregateOutputType | null
  }

  export type FuelReportsAvgAggregateOutputType = {
    currentOdometer: number | null
    previousOdometer: number | null
    fuelVolume: number | null
    fuelUnitPrice: number | null
    fuelCost: number | null
    mileage: number | null
  }

  export type FuelReportsSumAggregateOutputType = {
    currentOdometer: number | null
    previousOdometer: number | null
    fuelVolume: number | null
    fuelUnitPrice: number | null
    fuelCost: number | null
    mileage: number | null
  }

  export type FuelReportsMinAggregateOutputType = {
    id: string | null
    currentOdometer: number | null
    previousOdometer: number | null
    fuelVolume: number | null
    fuelUnitPrice: number | null
    fuelCost: number | null
    mileage: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelReportsMaxAggregateOutputType = {
    id: string | null
    currentOdometer: number | null
    previousOdometer: number | null
    fuelVolume: number | null
    fuelUnitPrice: number | null
    fuelCost: number | null
    mileage: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelReportsCountAggregateOutputType = {
    id: number
    currentOdometer: number
    previousOdometer: number
    fuelVolume: number
    fuelUnitPrice: number
    fuelCost: number
    mileage: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuelReportsAvgAggregateInputType = {
    currentOdometer?: true
    previousOdometer?: true
    fuelVolume?: true
    fuelUnitPrice?: true
    fuelCost?: true
    mileage?: true
  }

  export type FuelReportsSumAggregateInputType = {
    currentOdometer?: true
    previousOdometer?: true
    fuelVolume?: true
    fuelUnitPrice?: true
    fuelCost?: true
    mileage?: true
  }

  export type FuelReportsMinAggregateInputType = {
    id?: true
    currentOdometer?: true
    previousOdometer?: true
    fuelVolume?: true
    fuelUnitPrice?: true
    fuelCost?: true
    mileage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelReportsMaxAggregateInputType = {
    id?: true
    currentOdometer?: true
    previousOdometer?: true
    fuelVolume?: true
    fuelUnitPrice?: true
    fuelCost?: true
    mileage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelReportsCountAggregateInputType = {
    id?: true
    currentOdometer?: true
    previousOdometer?: true
    fuelVolume?: true
    fuelUnitPrice?: true
    fuelCost?: true
    mileage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuelReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fuelReports to aggregate.
     */
    where?: fuelReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuelReports to fetch.
     */
    orderBy?: fuelReportsOrderByWithRelationInput | fuelReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fuelReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuelReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuelReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fuelReports
    **/
    _count?: true | FuelReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuelReportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuelReportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuelReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuelReportsMaxAggregateInputType
  }

  export type GetFuelReportsAggregateType<T extends FuelReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateFuelReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuelReports[P]>
      : GetScalarType<T[P], AggregateFuelReports[P]>
  }




  export type fuelReportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fuelReportsWhereInput
    orderBy?: fuelReportsOrderByWithAggregationInput | fuelReportsOrderByWithAggregationInput[]
    by: FuelReportsScalarFieldEnum[] | FuelReportsScalarFieldEnum
    having?: fuelReportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuelReportsCountAggregateInputType | true
    _avg?: FuelReportsAvgAggregateInputType
    _sum?: FuelReportsSumAggregateInputType
    _min?: FuelReportsMinAggregateInputType
    _max?: FuelReportsMaxAggregateInputType
  }

  export type FuelReportsGroupByOutputType = {
    id: string
    currentOdometer: number
    previousOdometer: number
    fuelVolume: number
    fuelUnitPrice: number
    fuelCost: number
    mileage: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: FuelReportsCountAggregateOutputType | null
    _avg: FuelReportsAvgAggregateOutputType | null
    _sum: FuelReportsSumAggregateOutputType | null
    _min: FuelReportsMinAggregateOutputType | null
    _max: FuelReportsMaxAggregateOutputType | null
  }

  type GetFuelReportsGroupByPayload<T extends fuelReportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuelReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuelReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuelReportsGroupByOutputType[P]>
            : GetScalarType<T[P], FuelReportsGroupByOutputType[P]>
        }
      >
    >


  export type fuelReportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentOdometer?: boolean
    previousOdometer?: boolean
    fuelVolume?: boolean
    fuelUnitPrice?: boolean
    fuelCost?: boolean
    mileage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fuelReports"]>

  export type fuelReportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentOdometer?: boolean
    previousOdometer?: boolean
    fuelVolume?: boolean
    fuelUnitPrice?: boolean
    fuelCost?: boolean
    mileage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fuelReports"]>

  export type fuelReportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentOdometer?: boolean
    previousOdometer?: boolean
    fuelVolume?: boolean
    fuelUnitPrice?: boolean
    fuelCost?: boolean
    mileage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fuelReports"]>

  export type fuelReportsSelectScalar = {
    id?: boolean
    currentOdometer?: boolean
    previousOdometer?: boolean
    fuelVolume?: boolean
    fuelUnitPrice?: boolean
    fuelCost?: boolean
    mileage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type fuelReportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currentOdometer" | "previousOdometer" | "fuelVolume" | "fuelUnitPrice" | "fuelCost" | "mileage" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["fuelReports"]>

  export type $fuelReportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fuelReports"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currentOdometer: number
      previousOdometer: number
      fuelVolume: number
      fuelUnitPrice: number
      fuelCost: number
      mileage: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fuelReports"]>
    composites: {}
  }

  type fuelReportsGetPayload<S extends boolean | null | undefined | fuelReportsDefaultArgs> = $Result.GetResult<Prisma.$fuelReportsPayload, S>

  type fuelReportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fuelReportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: FuelReportsCountAggregateInputType | true
    }

  export interface fuelReportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fuelReports'], meta: { name: 'fuelReports' } }
    /**
     * Find zero or one FuelReports that matches the filter.
     * @param {fuelReportsFindUniqueArgs} args - Arguments to find a FuelReports
     * @example
     * // Get one FuelReports
     * const fuelReports = await prisma.fuelReports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fuelReportsFindUniqueArgs>(args: SelectSubset<T, fuelReportsFindUniqueArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FuelReports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fuelReportsFindUniqueOrThrowArgs} args - Arguments to find a FuelReports
     * @example
     * // Get one FuelReports
     * const fuelReports = await prisma.fuelReports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fuelReportsFindUniqueOrThrowArgs>(args: SelectSubset<T, fuelReportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelReportsFindFirstArgs} args - Arguments to find a FuelReports
     * @example
     * // Get one FuelReports
     * const fuelReports = await prisma.fuelReports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fuelReportsFindFirstArgs>(args?: SelectSubset<T, fuelReportsFindFirstArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelReports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelReportsFindFirstOrThrowArgs} args - Arguments to find a FuelReports
     * @example
     * // Get one FuelReports
     * const fuelReports = await prisma.fuelReports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fuelReportsFindFirstOrThrowArgs>(args?: SelectSubset<T, fuelReportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FuelReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelReportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FuelReports
     * const fuelReports = await prisma.fuelReports.findMany()
     * 
     * // Get first 10 FuelReports
     * const fuelReports = await prisma.fuelReports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fuelReportsWithIdOnly = await prisma.fuelReports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fuelReportsFindManyArgs>(args?: SelectSubset<T, fuelReportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FuelReports.
     * @param {fuelReportsCreateArgs} args - Arguments to create a FuelReports.
     * @example
     * // Create one FuelReports
     * const FuelReports = await prisma.fuelReports.create({
     *   data: {
     *     // ... data to create a FuelReports
     *   }
     * })
     * 
     */
    create<T extends fuelReportsCreateArgs>(args: SelectSubset<T, fuelReportsCreateArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FuelReports.
     * @param {fuelReportsCreateManyArgs} args - Arguments to create many FuelReports.
     * @example
     * // Create many FuelReports
     * const fuelReports = await prisma.fuelReports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fuelReportsCreateManyArgs>(args?: SelectSubset<T, fuelReportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FuelReports and returns the data saved in the database.
     * @param {fuelReportsCreateManyAndReturnArgs} args - Arguments to create many FuelReports.
     * @example
     * // Create many FuelReports
     * const fuelReports = await prisma.fuelReports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FuelReports and only return the `id`
     * const fuelReportsWithIdOnly = await prisma.fuelReports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fuelReportsCreateManyAndReturnArgs>(args?: SelectSubset<T, fuelReportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FuelReports.
     * @param {fuelReportsDeleteArgs} args - Arguments to delete one FuelReports.
     * @example
     * // Delete one FuelReports
     * const FuelReports = await prisma.fuelReports.delete({
     *   where: {
     *     // ... filter to delete one FuelReports
     *   }
     * })
     * 
     */
    delete<T extends fuelReportsDeleteArgs>(args: SelectSubset<T, fuelReportsDeleteArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FuelReports.
     * @param {fuelReportsUpdateArgs} args - Arguments to update one FuelReports.
     * @example
     * // Update one FuelReports
     * const fuelReports = await prisma.fuelReports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fuelReportsUpdateArgs>(args: SelectSubset<T, fuelReportsUpdateArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FuelReports.
     * @param {fuelReportsDeleteManyArgs} args - Arguments to filter FuelReports to delete.
     * @example
     * // Delete a few FuelReports
     * const { count } = await prisma.fuelReports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fuelReportsDeleteManyArgs>(args?: SelectSubset<T, fuelReportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelReportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FuelReports
     * const fuelReports = await prisma.fuelReports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fuelReportsUpdateManyArgs>(args: SelectSubset<T, fuelReportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelReports and returns the data updated in the database.
     * @param {fuelReportsUpdateManyAndReturnArgs} args - Arguments to update many FuelReports.
     * @example
     * // Update many FuelReports
     * const fuelReports = await prisma.fuelReports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FuelReports and only return the `id`
     * const fuelReportsWithIdOnly = await prisma.fuelReports.updateManyAndReturn({
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
    updateManyAndReturn<T extends fuelReportsUpdateManyAndReturnArgs>(args: SelectSubset<T, fuelReportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FuelReports.
     * @param {fuelReportsUpsertArgs} args - Arguments to update or create a FuelReports.
     * @example
     * // Update or create a FuelReports
     * const fuelReports = await prisma.fuelReports.upsert({
     *   create: {
     *     // ... data to create a FuelReports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FuelReports we want to update
     *   }
     * })
     */
    upsert<T extends fuelReportsUpsertArgs>(args: SelectSubset<T, fuelReportsUpsertArgs<ExtArgs>>): Prisma__fuelReportsClient<$Result.GetResult<Prisma.$fuelReportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FuelReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelReportsCountArgs} args - Arguments to filter FuelReports to count.
     * @example
     * // Count the number of FuelReports
     * const count = await prisma.fuelReports.count({
     *   where: {
     *     // ... the filter for the FuelReports we want to count
     *   }
     * })
    **/
    count<T extends fuelReportsCountArgs>(
      args?: Subset<T, fuelReportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuelReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FuelReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuelReportsAggregateArgs>(args: Subset<T, FuelReportsAggregateArgs>): Prisma.PrismaPromise<GetFuelReportsAggregateType<T>>

    /**
     * Group by FuelReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelReportsGroupByArgs} args - Group by arguments.
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
      T extends fuelReportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fuelReportsGroupByArgs['orderBy'] }
        : { orderBy?: fuelReportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fuelReportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fuelReports model
   */
  readonly fields: fuelReportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fuelReports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fuelReportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the fuelReports model
   */
  interface fuelReportsFieldRefs {
    readonly id: FieldRef<"fuelReports", 'String'>
    readonly currentOdometer: FieldRef<"fuelReports", 'Float'>
    readonly previousOdometer: FieldRef<"fuelReports", 'Float'>
    readonly fuelVolume: FieldRef<"fuelReports", 'Float'>
    readonly fuelUnitPrice: FieldRef<"fuelReports", 'Float'>
    readonly fuelCost: FieldRef<"fuelReports", 'Float'>
    readonly mileage: FieldRef<"fuelReports", 'Float'>
    readonly notes: FieldRef<"fuelReports", 'String'>
    readonly createdAt: FieldRef<"fuelReports", 'DateTime'>
    readonly updatedAt: FieldRef<"fuelReports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fuelReports findUnique
   */
  export type fuelReportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * Filter, which fuelReports to fetch.
     */
    where: fuelReportsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports findUniqueOrThrow
   */
  export type fuelReportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * Filter, which fuelReports to fetch.
     */
    where: fuelReportsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports findFirst
   */
  export type fuelReportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * Filter, which fuelReports to fetch.
     */
    where?: fuelReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuelReports to fetch.
     */
    orderBy?: fuelReportsOrderByWithRelationInput | fuelReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fuelReports.
     */
    cursor?: fuelReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuelReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuelReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fuelReports.
     */
    distinct?: FuelReportsScalarFieldEnum | FuelReportsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports findFirstOrThrow
   */
  export type fuelReportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * Filter, which fuelReports to fetch.
     */
    where?: fuelReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuelReports to fetch.
     */
    orderBy?: fuelReportsOrderByWithRelationInput | fuelReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fuelReports.
     */
    cursor?: fuelReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuelReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuelReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fuelReports.
     */
    distinct?: FuelReportsScalarFieldEnum | FuelReportsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports findMany
   */
  export type fuelReportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * Filter, which fuelReports to fetch.
     */
    where?: fuelReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuelReports to fetch.
     */
    orderBy?: fuelReportsOrderByWithRelationInput | fuelReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fuelReports.
     */
    cursor?: fuelReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuelReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuelReports.
     */
    skip?: number
    distinct?: FuelReportsScalarFieldEnum | FuelReportsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports create
   */
  export type fuelReportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * The data needed to create a fuelReports.
     */
    data: XOR<fuelReportsCreateInput, fuelReportsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports createMany
   */
  export type fuelReportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fuelReports.
     */
    data: fuelReportsCreateManyInput | fuelReportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fuelReports createManyAndReturn
   */
  export type fuelReportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * The data used to create many fuelReports.
     */
    data: fuelReportsCreateManyInput | fuelReportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fuelReports update
   */
  export type fuelReportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * The data needed to update a fuelReports.
     */
    data: XOR<fuelReportsUpdateInput, fuelReportsUncheckedUpdateInput>
    /**
     * Choose, which fuelReports to update.
     */
    where: fuelReportsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports updateMany
   */
  export type fuelReportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fuelReports.
     */
    data: XOR<fuelReportsUpdateManyMutationInput, fuelReportsUncheckedUpdateManyInput>
    /**
     * Filter which fuelReports to update
     */
    where?: fuelReportsWhereInput
    /**
     * Limit how many fuelReports to update.
     */
    limit?: number
  }

  /**
   * fuelReports updateManyAndReturn
   */
  export type fuelReportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * The data used to update fuelReports.
     */
    data: XOR<fuelReportsUpdateManyMutationInput, fuelReportsUncheckedUpdateManyInput>
    /**
     * Filter which fuelReports to update
     */
    where?: fuelReportsWhereInput
    /**
     * Limit how many fuelReports to update.
     */
    limit?: number
  }

  /**
   * fuelReports upsert
   */
  export type fuelReportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * The filter to search for the fuelReports to update in case it exists.
     */
    where: fuelReportsWhereUniqueInput
    /**
     * In case the fuelReports found by the `where` argument doesn't exist, create a new fuelReports with this data.
     */
    create: XOR<fuelReportsCreateInput, fuelReportsUncheckedCreateInput>
    /**
     * In case the fuelReports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fuelReportsUpdateInput, fuelReportsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports delete
   */
  export type fuelReportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
    /**
     * Filter which fuelReports to delete.
     */
    where: fuelReportsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * fuelReports deleteMany
   */
  export type fuelReportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fuelReports to delete
     */
    where?: fuelReportsWhereInput
    /**
     * Limit how many fuelReports to delete.
     */
    limit?: number
  }

  /**
   * fuelReports without action
   */
  export type fuelReportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuelReports
     */
    select?: fuelReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fuelReports
     */
    omit?: fuelReportsOmit<ExtArgs> | null
  }


  /**
   * Model maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceAvgAggregateOutputType = {
    cost: number | null
    odometerReading: number | null
  }

  export type MaintenanceSumAggregateOutputType = {
    cost: number | null
    odometerReading: number | null
  }

  export type MaintenanceMinAggregateOutputType = {
    id: string | null
    maintenanceType: string | null
    cost: number | null
    odometerReading: number | null
    details: string | null
    serviceProvider: string | null
    nextServiceDue: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    id: string | null
    maintenanceType: string | null
    cost: number | null
    odometerReading: number | null
    details: string | null
    serviceProvider: string | null
    nextServiceDue: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceCountAggregateOutputType = {
    id: number
    maintenanceType: number
    cost: number
    odometerReading: number
    details: number
    serviceProvider: number
    nextServiceDue: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceAvgAggregateInputType = {
    cost?: true
    odometerReading?: true
  }

  export type MaintenanceSumAggregateInputType = {
    cost?: true
    odometerReading?: true
  }

  export type MaintenanceMinAggregateInputType = {
    id?: true
    maintenanceType?: true
    cost?: true
    odometerReading?: true
    details?: true
    serviceProvider?: true
    nextServiceDue?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    id?: true
    maintenanceType?: true
    cost?: true
    odometerReading?: true
    details?: true
    serviceProvider?: true
    nextServiceDue?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceCountAggregateInputType = {
    id?: true
    maintenanceType?: true
    cost?: true
    odometerReading?: true
    details?: true
    serviceProvider?: true
    nextServiceDue?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance to aggregate.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type maintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenanceWhereInput
    orderBy?: maintenanceOrderByWithAggregationInput | maintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: maintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _avg?: MaintenanceAvgAggregateInputType
    _sum?: MaintenanceSumAggregateInputType
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    id: string
    maintenanceType: string
    cost: number
    odometerReading: number
    details: string
    serviceProvider: string | null
    nextServiceDue: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends maintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type maintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maintenanceType?: boolean
    cost?: boolean
    odometerReading?: boolean
    details?: boolean
    serviceProvider?: boolean
    nextServiceDue?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenance"]>

  export type maintenanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maintenanceType?: boolean
    cost?: boolean
    odometerReading?: boolean
    details?: boolean
    serviceProvider?: boolean
    nextServiceDue?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenance"]>

  export type maintenanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maintenanceType?: boolean
    cost?: boolean
    odometerReading?: boolean
    details?: boolean
    serviceProvider?: boolean
    nextServiceDue?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenance"]>

  export type maintenanceSelectScalar = {
    id?: boolean
    maintenanceType?: boolean
    cost?: boolean
    odometerReading?: boolean
    details?: boolean
    serviceProvider?: boolean
    nextServiceDue?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type maintenanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maintenanceType" | "cost" | "odometerReading" | "details" | "serviceProvider" | "nextServiceDue" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenance"]>

  export type $maintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maintenance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maintenanceType: string
      cost: number
      odometerReading: number
      details: string
      serviceProvider: string | null
      nextServiceDue: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }

  type maintenanceGetPayload<S extends boolean | null | undefined | maintenanceDefaultArgs> = $Result.GetResult<Prisma.$maintenancePayload, S>

  type maintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<maintenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface maintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maintenance'], meta: { name: 'maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {maintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends maintenanceFindUniqueArgs>(args: SelectSubset<T, maintenanceFindUniqueArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {maintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends maintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, maintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends maintenanceFindFirstArgs>(args?: SelectSubset<T, maintenanceFindFirstArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends maintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, maintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends maintenanceFindManyArgs>(args?: SelectSubset<T, maintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance.
     * @param {maintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
     */
    create<T extends maintenanceCreateArgs>(args: SelectSubset<T, maintenanceCreateArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenances.
     * @param {maintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends maintenanceCreateManyArgs>(args?: SelectSubset<T, maintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenances and returns the data saved in the database.
     * @param {maintenanceCreateManyAndReturnArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends maintenanceCreateManyAndReturnArgs>(args?: SelectSubset<T, maintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maintenance.
     * @param {maintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
     */
    delete<T extends maintenanceDeleteArgs>(args: SelectSubset<T, maintenanceDeleteArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance.
     * @param {maintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends maintenanceUpdateArgs>(args: SelectSubset<T, maintenanceUpdateArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenances.
     * @param {maintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends maintenanceDeleteManyArgs>(args?: SelectSubset<T, maintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends maintenanceUpdateManyArgs>(args: SelectSubset<T, maintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances and returns the data updated in the database.
     * @param {maintenanceUpdateManyAndReturnArgs} args - Arguments to update many Maintenances.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.updateManyAndReturn({
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
    updateManyAndReturn<T extends maintenanceUpdateManyAndReturnArgs>(args: SelectSubset<T, maintenanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maintenance.
     * @param {maintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     */
    upsert<T extends maintenanceUpsertArgs>(args: SelectSubset<T, maintenanceUpsertArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends maintenanceCountArgs>(
      args?: Subset<T, maintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceGroupByArgs} args - Group by arguments.
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
      T extends maintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maintenanceGroupByArgs['orderBy'] }
        : { orderBy?: maintenanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, maintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maintenance model
   */
  readonly fields: maintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the maintenance model
   */
  interface maintenanceFieldRefs {
    readonly id: FieldRef<"maintenance", 'String'>
    readonly maintenanceType: FieldRef<"maintenance", 'String'>
    readonly cost: FieldRef<"maintenance", 'Float'>
    readonly odometerReading: FieldRef<"maintenance", 'Float'>
    readonly details: FieldRef<"maintenance", 'String'>
    readonly serviceProvider: FieldRef<"maintenance", 'String'>
    readonly nextServiceDue: FieldRef<"maintenance", 'String'>
    readonly notes: FieldRef<"maintenance", 'String'>
    readonly createdAt: FieldRef<"maintenance", 'DateTime'>
    readonly updatedAt: FieldRef<"maintenance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * maintenance findUnique
   */
  export type maintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where: maintenanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance findUniqueOrThrow
   */
  export type maintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where: maintenanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance findFirst
   */
  export type maintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenances.
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance findFirstOrThrow
   */
  export type maintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenances.
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance findMany
   */
  export type maintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Filter, which maintenances to fetch.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maintenances.
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance create
   */
  export type maintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * The data needed to create a maintenance.
     */
    data: XOR<maintenanceCreateInput, maintenanceUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance createMany
   */
  export type maintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maintenances.
     */
    data: maintenanceCreateManyInput | maintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maintenance createManyAndReturn
   */
  export type maintenanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * The data used to create many maintenances.
     */
    data: maintenanceCreateManyInput | maintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maintenance update
   */
  export type maintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * The data needed to update a maintenance.
     */
    data: XOR<maintenanceUpdateInput, maintenanceUncheckedUpdateInput>
    /**
     * Choose, which maintenance to update.
     */
    where: maintenanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance updateMany
   */
  export type maintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maintenances.
     */
    data: XOR<maintenanceUpdateManyMutationInput, maintenanceUncheckedUpdateManyInput>
    /**
     * Filter which maintenances to update
     */
    where?: maintenanceWhereInput
    /**
     * Limit how many maintenances to update.
     */
    limit?: number
  }

  /**
   * maintenance updateManyAndReturn
   */
  export type maintenanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * The data used to update maintenances.
     */
    data: XOR<maintenanceUpdateManyMutationInput, maintenanceUncheckedUpdateManyInput>
    /**
     * Filter which maintenances to update
     */
    where?: maintenanceWhereInput
    /**
     * Limit how many maintenances to update.
     */
    limit?: number
  }

  /**
   * maintenance upsert
   */
  export type maintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * The filter to search for the maintenance to update in case it exists.
     */
    where: maintenanceWhereUniqueInput
    /**
     * In case the maintenance found by the `where` argument doesn't exist, create a new maintenance with this data.
     */
    create: XOR<maintenanceCreateInput, maintenanceUncheckedCreateInput>
    /**
     * In case the maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maintenanceUpdateInput, maintenanceUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance delete
   */
  export type maintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Filter which maintenance to delete.
     */
    where: maintenanceWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * maintenance deleteMany
   */
  export type maintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenances to delete
     */
    where?: maintenanceWhereInput
    /**
     * Limit how many maintenances to delete.
     */
    limit?: number
  }

  /**
   * maintenance without action
   */
  export type maintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    pricePerKilometer: number | null
    pricePerHour: number | null
    basePrice: number | null
    minimumPrice: number | null
  }

  export type SettingsSumAggregateOutputType = {
    pricePerKilometer: number | null
    pricePerHour: number | null
    basePrice: number | null
    minimumPrice: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    pricingType: $Enums.PricingType | null
    pricePerKilometer: number | null
    pricePerHour: number | null
    basePrice: number | null
    minimumPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    pricingType: $Enums.PricingType | null
    pricePerKilometer: number | null
    pricePerHour: number | null
    basePrice: number | null
    minimumPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    pricingType: number
    pricePerKilometer: number
    pricePerHour: number
    basePrice: number
    minimumPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    pricePerKilometer?: true
    pricePerHour?: true
    basePrice?: true
    minimumPrice?: true
  }

  export type SettingsSumAggregateInputType = {
    pricePerKilometer?: true
    pricePerHour?: true
    basePrice?: true
    minimumPrice?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    pricingType?: true
    pricePerKilometer?: true
    pricePerHour?: true
    basePrice?: true
    minimumPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    pricingType?: true
    pricePerKilometer?: true
    pricePerHour?: true
    basePrice?: true
    minimumPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    pricingType?: true
    pricePerKilometer?: true
    pricePerHour?: true
    basePrice?: true
    minimumPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    pricingType: $Enums.PricingType
    pricePerKilometer: number | null
    pricePerHour: number | null
    basePrice: number
    minimumPrice: number
    createdAt: Date
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricingType?: boolean
    pricePerKilometer?: boolean
    pricePerHour?: boolean
    basePrice?: boolean
    minimumPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricingType?: boolean
    pricePerKilometer?: boolean
    pricePerHour?: boolean
    basePrice?: boolean
    minimumPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricingType?: boolean
    pricePerKilometer?: boolean
    pricePerHour?: boolean
    basePrice?: boolean
    minimumPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectScalar = {
    id?: boolean
    pricingType?: boolean
    pricePerKilometer?: boolean
    pricePerHour?: boolean
    basePrice?: boolean
    minimumPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pricingType" | "pricePerKilometer" | "pricePerHour" | "basePrice" | "minimumPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["settings"]>

  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pricingType: $Enums.PricingType
      pricePerKilometer: number | null
      pricePerHour: number | null
      basePrice: number
      minimumPrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {settingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {settingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
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
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the settings model
   */
  interface settingsFieldRefs {
    readonly id: FieldRef<"settings", 'String'>
    readonly pricingType: FieldRef<"settings", 'PricingType'>
    readonly pricePerKilometer: FieldRef<"settings", 'Float'>
    readonly pricePerHour: FieldRef<"settings", 'Float'>
    readonly basePrice: FieldRef<"settings", 'Float'>
    readonly minimumPrice: FieldRef<"settings", 'Float'>
    readonly createdAt: FieldRef<"settings", 'DateTime'>
    readonly updatedAt: FieldRef<"settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings createManyAndReturn
   */
  export type settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings updateManyAndReturn
   */
  export type settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires',
    stripeCustomerId: 'stripeCustomerId',
    defaultPaymentMethod: 'defaultPaymentMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    impersonatedBy: 'impersonatedBy',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const VerificationsScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationsScalarFieldEnum = (typeof VerificationsScalarFieldEnum)[keyof typeof VerificationsScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pickupLocation: 'pickupLocation',
    dropLocation: 'dropLocation',
    bookingDate: 'bookingDate',
    bookingTime: 'bookingTime',
    distance: 'distance',
    duration: 'duration',
    stripePaymentIntentId: 'stripePaymentIntentId',
    paymentStatus: 'paymentStatus',
    bookingStatus: 'bookingStatus',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const FuelReportsScalarFieldEnum: {
    id: 'id',
    currentOdometer: 'currentOdometer',
    previousOdometer: 'previousOdometer',
    fuelVolume: 'fuelVolume',
    fuelUnitPrice: 'fuelUnitPrice',
    fuelCost: 'fuelCost',
    mileage: 'mileage',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuelReportsScalarFieldEnum = (typeof FuelReportsScalarFieldEnum)[keyof typeof FuelReportsScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    id: 'id',
    maintenanceType: 'maintenanceType',
    cost: 'cost',
    odometerReading: 'odometerReading',
    details: 'details',
    serviceProvider: 'serviceProvider',
    nextServiceDue: 'nextServiceDue',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    pricingType: 'pricingType',
    pricePerKilometer: 'pricePerKilometer',
    pricePerHour: 'pricePerHour',
    basePrice: 'basePrice',
    minimumPrice: 'minimumPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PricingType'
   */
  export type EnumPricingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingType'>
    


  /**
   * Reference to a field of type 'PricingType[]'
   */
  export type ListEnumPricingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingType[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    emailVerified?: BoolFilter<"users"> | boolean
    image?: StringNullableFilter<"users"> | string | null
    role?: EnumUserRoleNullableFilter<"users"> | $Enums.UserRole | null
    banned?: BoolNullableFilter<"users"> | boolean | null
    banReason?: StringNullableFilter<"users"> | string | null
    banExpires?: IntNullableFilter<"users"> | number | null
    stripeCustomerId?: StringNullableFilter<"users"> | string | null
    defaultPaymentMethod?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sessions?: SessionsListRelationFilter
    accounts?: AccountsListRelationFilter
    bookings?: BookingsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    defaultPaymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: sessionsOrderByRelationAggregateInput
    accounts?: accountsOrderByRelationAggregateInput
    bookings?: bookingsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    emailVerified?: BoolFilter<"users"> | boolean
    image?: StringNullableFilter<"users"> | string | null
    role?: EnumUserRoleNullableFilter<"users"> | $Enums.UserRole | null
    banned?: BoolNullableFilter<"users"> | boolean | null
    banReason?: StringNullableFilter<"users"> | string | null
    banExpires?: IntNullableFilter<"users"> | number | null
    defaultPaymentMethod?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sessions?: SessionsListRelationFilter
    accounts?: AccountsListRelationFilter
    bookings?: BookingsListRelationFilter
  }, "id" | "email" | "stripeCustomerId">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    defaultPaymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    emailVerified?: BoolWithAggregatesFilter<"users"> | boolean
    image?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumUserRoleNullableWithAggregatesFilter<"users"> | $Enums.UserRole | null
    banned?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"users"> | string | null
    banExpires?: IntNullableWithAggregatesFilter<"users"> | number | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"users"> | string | null
    defaultPaymentMethod?: StringNullableWithAggregatesFilter<"users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: StringFilter<"sessions"> | string
    token?: StringFilter<"sessions"> | string
    expiresAt?: DateTimeFilter<"sessions"> | Date | string
    impersonatedBy?: StringNullableFilter<"sessions"> | string | null
    ipAddress?: StringNullableFilter<"sessions"> | string | null
    userAgent?: StringNullableFilter<"sessions"> | string | null
    userId?: StringFilter<"sessions"> | string
    createdAt?: DateTimeFilter<"sessions"> | Date | string
    updatedAt?: DateTimeFilter<"sessions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    expiresAt?: DateTimeFilter<"sessions"> | Date | string
    impersonatedBy?: StringNullableFilter<"sessions"> | string | null
    ipAddress?: StringNullableFilter<"sessions"> | string | null
    userAgent?: StringNullableFilter<"sessions"> | string | null
    userId?: StringFilter<"sessions"> | string
    createdAt?: DateTimeFilter<"sessions"> | Date | string
    updatedAt?: DateTimeFilter<"sessions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "token">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sessions"> | string
    token?: StringWithAggregatesFilter<"sessions"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    userId?: StringWithAggregatesFilter<"sessions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: StringFilter<"accounts"> | string
    accountId?: StringFilter<"accounts"> | string
    providerId?: StringFilter<"accounts"> | string
    userId?: StringFilter<"accounts"> | string
    accessToken?: StringNullableFilter<"accounts"> | string | null
    refreshToken?: StringNullableFilter<"accounts"> | string | null
    idToken?: StringNullableFilter<"accounts"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"accounts"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"accounts"> | Date | string | null
    scope?: StringNullableFilter<"accounts"> | string | null
    password?: StringNullableFilter<"accounts"> | string | null
    createdAt?: DateTimeFilter<"accounts"> | Date | string
    updatedAt?: DateTimeFilter<"accounts"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_accountId?: accountsProviderIdAccountIdCompoundUniqueInput
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    accountId?: StringFilter<"accounts"> | string
    providerId?: StringFilter<"accounts"> | string
    userId?: StringFilter<"accounts"> | string
    accessToken?: StringNullableFilter<"accounts"> | string | null
    refreshToken?: StringNullableFilter<"accounts"> | string | null
    idToken?: StringNullableFilter<"accounts"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"accounts"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"accounts"> | Date | string | null
    scope?: StringNullableFilter<"accounts"> | string | null
    password?: StringNullableFilter<"accounts"> | string | null
    createdAt?: DateTimeFilter<"accounts"> | Date | string
    updatedAt?: DateTimeFilter<"accounts"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "providerId_accountId">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"accounts"> | string
    accountId?: StringWithAggregatesFilter<"accounts"> | string
    providerId?: StringWithAggregatesFilter<"accounts"> | string
    userId?: StringWithAggregatesFilter<"accounts"> | string
    accessToken?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"accounts"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"accounts"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    password?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
  }

  export type verificationsWhereInput = {
    AND?: verificationsWhereInput | verificationsWhereInput[]
    OR?: verificationsWhereInput[]
    NOT?: verificationsWhereInput | verificationsWhereInput[]
    id?: StringFilter<"verifications"> | string
    identifier?: StringFilter<"verifications"> | string
    value?: StringFilter<"verifications"> | string
    expiresAt?: DateTimeFilter<"verifications"> | Date | string
    createdAt?: DateTimeFilter<"verifications"> | Date | string
    updatedAt?: DateTimeFilter<"verifications"> | Date | string
  }

  export type verificationsOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: verificationsWhereInput | verificationsWhereInput[]
    OR?: verificationsWhereInput[]
    NOT?: verificationsWhereInput | verificationsWhereInput[]
    identifier?: StringFilter<"verifications"> | string
    value?: StringFilter<"verifications"> | string
    expiresAt?: DateTimeFilter<"verifications"> | Date | string
    createdAt?: DateTimeFilter<"verifications"> | Date | string
    updatedAt?: DateTimeFilter<"verifications"> | Date | string
  }, "id">

  export type verificationsOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: verificationsCountOrderByAggregateInput
    _max?: verificationsMaxOrderByAggregateInput
    _min?: verificationsMinOrderByAggregateInput
  }

  export type verificationsScalarWhereWithAggregatesInput = {
    AND?: verificationsScalarWhereWithAggregatesInput | verificationsScalarWhereWithAggregatesInput[]
    OR?: verificationsScalarWhereWithAggregatesInput[]
    NOT?: verificationsScalarWhereWithAggregatesInput | verificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"verifications"> | string
    identifier?: StringWithAggregatesFilter<"verifications"> | string
    value?: StringWithAggregatesFilter<"verifications"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"verifications"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"verifications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"verifications"> | Date | string
  }

  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: StringFilter<"bookings"> | string
    userId?: StringFilter<"bookings"> | string
    pickupLocation?: StringFilter<"bookings"> | string
    dropLocation?: StringFilter<"bookings"> | string
    bookingDate?: DateTimeFilter<"bookings"> | Date | string
    bookingTime?: StringFilter<"bookings"> | string
    distance?: FloatNullableFilter<"bookings"> | number | null
    duration?: FloatNullableFilter<"bookings"> | number | null
    stripePaymentIntentId?: StringNullableFilter<"bookings"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"bookings"> | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFilter<"bookings"> | $Enums.BookingStatus
    amount?: IntFilter<"bookings"> | number
    createdAt?: DateTimeFilter<"bookings"> | Date | string
    updatedAt?: DateTimeFilter<"bookings"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pickupLocation?: SortOrder
    dropLocation?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    distance?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    bookingStatus?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePaymentIntentId?: string
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    userId?: StringFilter<"bookings"> | string
    pickupLocation?: StringFilter<"bookings"> | string
    dropLocation?: StringFilter<"bookings"> | string
    bookingDate?: DateTimeFilter<"bookings"> | Date | string
    bookingTime?: StringFilter<"bookings"> | string
    distance?: FloatNullableFilter<"bookings"> | number | null
    duration?: FloatNullableFilter<"bookings"> | number | null
    paymentStatus?: EnumPaymentStatusFilter<"bookings"> | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFilter<"bookings"> | $Enums.BookingStatus
    amount?: IntFilter<"bookings"> | number
    createdAt?: DateTimeFilter<"bookings"> | Date | string
    updatedAt?: DateTimeFilter<"bookings"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "stripePaymentIntentId">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pickupLocation?: SortOrder
    dropLocation?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    distance?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    bookingStatus?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"bookings"> | string
    userId?: StringWithAggregatesFilter<"bookings"> | string
    pickupLocation?: StringWithAggregatesFilter<"bookings"> | string
    dropLocation?: StringWithAggregatesFilter<"bookings"> | string
    bookingDate?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    bookingTime?: StringWithAggregatesFilter<"bookings"> | string
    distance?: FloatNullableWithAggregatesFilter<"bookings"> | number | null
    duration?: FloatNullableWithAggregatesFilter<"bookings"> | number | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"bookings"> | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusWithAggregatesFilter<"bookings"> | $Enums.BookingStatus
    amount?: IntWithAggregatesFilter<"bookings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
  }

  export type fuelReportsWhereInput = {
    AND?: fuelReportsWhereInput | fuelReportsWhereInput[]
    OR?: fuelReportsWhereInput[]
    NOT?: fuelReportsWhereInput | fuelReportsWhereInput[]
    id?: StringFilter<"fuelReports"> | string
    currentOdometer?: FloatFilter<"fuelReports"> | number
    previousOdometer?: FloatFilter<"fuelReports"> | number
    fuelVolume?: FloatFilter<"fuelReports"> | number
    fuelUnitPrice?: FloatFilter<"fuelReports"> | number
    fuelCost?: FloatFilter<"fuelReports"> | number
    mileage?: FloatFilter<"fuelReports"> | number
    notes?: StringNullableFilter<"fuelReports"> | string | null
    createdAt?: DateTimeFilter<"fuelReports"> | Date | string
    updatedAt?: DateTimeFilter<"fuelReports"> | Date | string
  }

  export type fuelReportsOrderByWithRelationInput = {
    id?: SortOrder
    currentOdometer?: SortOrder
    previousOdometer?: SortOrder
    fuelVolume?: SortOrder
    fuelUnitPrice?: SortOrder
    fuelCost?: SortOrder
    mileage?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type fuelReportsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fuelReportsWhereInput | fuelReportsWhereInput[]
    OR?: fuelReportsWhereInput[]
    NOT?: fuelReportsWhereInput | fuelReportsWhereInput[]
    currentOdometer?: FloatFilter<"fuelReports"> | number
    previousOdometer?: FloatFilter<"fuelReports"> | number
    fuelVolume?: FloatFilter<"fuelReports"> | number
    fuelUnitPrice?: FloatFilter<"fuelReports"> | number
    fuelCost?: FloatFilter<"fuelReports"> | number
    mileage?: FloatFilter<"fuelReports"> | number
    notes?: StringNullableFilter<"fuelReports"> | string | null
    createdAt?: DateTimeFilter<"fuelReports"> | Date | string
    updatedAt?: DateTimeFilter<"fuelReports"> | Date | string
  }, "id">

  export type fuelReportsOrderByWithAggregationInput = {
    id?: SortOrder
    currentOdometer?: SortOrder
    previousOdometer?: SortOrder
    fuelVolume?: SortOrder
    fuelUnitPrice?: SortOrder
    fuelCost?: SortOrder
    mileage?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: fuelReportsCountOrderByAggregateInput
    _avg?: fuelReportsAvgOrderByAggregateInput
    _max?: fuelReportsMaxOrderByAggregateInput
    _min?: fuelReportsMinOrderByAggregateInput
    _sum?: fuelReportsSumOrderByAggregateInput
  }

  export type fuelReportsScalarWhereWithAggregatesInput = {
    AND?: fuelReportsScalarWhereWithAggregatesInput | fuelReportsScalarWhereWithAggregatesInput[]
    OR?: fuelReportsScalarWhereWithAggregatesInput[]
    NOT?: fuelReportsScalarWhereWithAggregatesInput | fuelReportsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fuelReports"> | string
    currentOdometer?: FloatWithAggregatesFilter<"fuelReports"> | number
    previousOdometer?: FloatWithAggregatesFilter<"fuelReports"> | number
    fuelVolume?: FloatWithAggregatesFilter<"fuelReports"> | number
    fuelUnitPrice?: FloatWithAggregatesFilter<"fuelReports"> | number
    fuelCost?: FloatWithAggregatesFilter<"fuelReports"> | number
    mileage?: FloatWithAggregatesFilter<"fuelReports"> | number
    notes?: StringNullableWithAggregatesFilter<"fuelReports"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fuelReports"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fuelReports"> | Date | string
  }

  export type maintenanceWhereInput = {
    AND?: maintenanceWhereInput | maintenanceWhereInput[]
    OR?: maintenanceWhereInput[]
    NOT?: maintenanceWhereInput | maintenanceWhereInput[]
    id?: StringFilter<"maintenance"> | string
    maintenanceType?: StringFilter<"maintenance"> | string
    cost?: FloatFilter<"maintenance"> | number
    odometerReading?: FloatFilter<"maintenance"> | number
    details?: StringFilter<"maintenance"> | string
    serviceProvider?: StringNullableFilter<"maintenance"> | string | null
    nextServiceDue?: StringNullableFilter<"maintenance"> | string | null
    notes?: StringNullableFilter<"maintenance"> | string | null
    createdAt?: DateTimeFilter<"maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"maintenance"> | Date | string
  }

  export type maintenanceOrderByWithRelationInput = {
    id?: SortOrder
    maintenanceType?: SortOrder
    cost?: SortOrder
    odometerReading?: SortOrder
    details?: SortOrder
    serviceProvider?: SortOrderInput | SortOrder
    nextServiceDue?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: maintenanceWhereInput | maintenanceWhereInput[]
    OR?: maintenanceWhereInput[]
    NOT?: maintenanceWhereInput | maintenanceWhereInput[]
    maintenanceType?: StringFilter<"maintenance"> | string
    cost?: FloatFilter<"maintenance"> | number
    odometerReading?: FloatFilter<"maintenance"> | number
    details?: StringFilter<"maintenance"> | string
    serviceProvider?: StringNullableFilter<"maintenance"> | string | null
    nextServiceDue?: StringNullableFilter<"maintenance"> | string | null
    notes?: StringNullableFilter<"maintenance"> | string | null
    createdAt?: DateTimeFilter<"maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"maintenance"> | Date | string
  }, "id">

  export type maintenanceOrderByWithAggregationInput = {
    id?: SortOrder
    maintenanceType?: SortOrder
    cost?: SortOrder
    odometerReading?: SortOrder
    details?: SortOrder
    serviceProvider?: SortOrderInput | SortOrder
    nextServiceDue?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: maintenanceCountOrderByAggregateInput
    _avg?: maintenanceAvgOrderByAggregateInput
    _max?: maintenanceMaxOrderByAggregateInput
    _min?: maintenanceMinOrderByAggregateInput
    _sum?: maintenanceSumOrderByAggregateInput
  }

  export type maintenanceScalarWhereWithAggregatesInput = {
    AND?: maintenanceScalarWhereWithAggregatesInput | maintenanceScalarWhereWithAggregatesInput[]
    OR?: maintenanceScalarWhereWithAggregatesInput[]
    NOT?: maintenanceScalarWhereWithAggregatesInput | maintenanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"maintenance"> | string
    maintenanceType?: StringWithAggregatesFilter<"maintenance"> | string
    cost?: FloatWithAggregatesFilter<"maintenance"> | number
    odometerReading?: FloatWithAggregatesFilter<"maintenance"> | number
    details?: StringWithAggregatesFilter<"maintenance"> | string
    serviceProvider?: StringNullableWithAggregatesFilter<"maintenance"> | string | null
    nextServiceDue?: StringNullableWithAggregatesFilter<"maintenance"> | string | null
    notes?: StringNullableWithAggregatesFilter<"maintenance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"maintenance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"maintenance"> | Date | string
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    id?: StringFilter<"settings"> | string
    pricingType?: EnumPricingTypeFilter<"settings"> | $Enums.PricingType
    pricePerKilometer?: FloatNullableFilter<"settings"> | number | null
    pricePerHour?: FloatNullableFilter<"settings"> | number | null
    basePrice?: FloatFilter<"settings"> | number
    minimumPrice?: FloatFilter<"settings"> | number
    createdAt?: DateTimeFilter<"settings"> | Date | string
    updatedAt?: DateTimeFilter<"settings"> | Date | string
  }

  export type settingsOrderByWithRelationInput = {
    id?: SortOrder
    pricingType?: SortOrder
    pricePerKilometer?: SortOrderInput | SortOrder
    pricePerHour?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    minimumPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    pricingType?: EnumPricingTypeFilter<"settings"> | $Enums.PricingType
    pricePerKilometer?: FloatNullableFilter<"settings"> | number | null
    pricePerHour?: FloatNullableFilter<"settings"> | number | null
    basePrice?: FloatFilter<"settings"> | number
    minimumPrice?: FloatFilter<"settings"> | number
    createdAt?: DateTimeFilter<"settings"> | Date | string
    updatedAt?: DateTimeFilter<"settings"> | Date | string
  }, "id">

  export type settingsOrderByWithAggregationInput = {
    id?: SortOrder
    pricingType?: SortOrder
    pricePerKilometer?: SortOrderInput | SortOrder
    pricePerHour?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    minimumPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: settingsCountOrderByAggregateInput
    _avg?: settingsAvgOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
    _sum?: settingsSumOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"settings"> | string
    pricingType?: EnumPricingTypeWithAggregatesFilter<"settings"> | $Enums.PricingType
    pricePerKilometer?: FloatNullableWithAggregatesFilter<"settings"> | number | null
    pricePerHour?: FloatNullableWithAggregatesFilter<"settings"> | number | null
    basePrice?: FloatWithAggregatesFilter<"settings"> | number
    minimumPrice?: FloatWithAggregatesFilter<"settings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"settings"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: sessionsCreateNestedManyWithoutUserInput
    accounts?: accountsCreateNestedManyWithoutUserInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: sessionsUncheckedCreateNestedManyWithoutUserInput
    accounts?: accountsUncheckedCreateNestedManyWithoutUserInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUpdateManyWithoutUserNestedInput
    accounts?: accountsUpdateManyWithoutUserNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: accountsUncheckedUpdateManyWithoutUserNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    impersonatedBy?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    impersonatedBy?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    impersonatedBy?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutAccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationsCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type verificationsUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type verificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationsCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type verificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateInput = {
    id?: string
    pickupLocation: string
    dropLocation: string
    bookingDate: Date | string
    bookingTime: string
    distance?: number | null
    duration?: number | null
    stripePaymentIntentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    bookingStatus?: $Enums.BookingStatus
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: string
    userId: string
    pickupLocation: string
    dropLocation: string
    bookingDate: Date | string
    bookingTime: string
    distance?: number | null
    duration?: number | null
    stripePaymentIntentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    bookingStatus?: $Enums.BookingStatus
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropLocation?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropLocation?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateManyInput = {
    id?: string
    userId: string
    pickupLocation: string
    dropLocation: string
    bookingDate: Date | string
    bookingTime: string
    distance?: number | null
    duration?: number | null
    stripePaymentIntentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    bookingStatus?: $Enums.BookingStatus
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropLocation?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropLocation?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelReportsCreateInput = {
    id?: string
    currentOdometer: number
    previousOdometer: number
    fuelVolume: number
    fuelUnitPrice: number
    fuelCost: number
    mileage: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type fuelReportsUncheckedCreateInput = {
    id?: string
    currentOdometer: number
    previousOdometer: number
    fuelVolume: number
    fuelUnitPrice: number
    fuelCost: number
    mileage: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type fuelReportsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentOdometer?: FloatFieldUpdateOperationsInput | number
    previousOdometer?: FloatFieldUpdateOperationsInput | number
    fuelVolume?: FloatFieldUpdateOperationsInput | number
    fuelUnitPrice?: FloatFieldUpdateOperationsInput | number
    fuelCost?: FloatFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelReportsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentOdometer?: FloatFieldUpdateOperationsInput | number
    previousOdometer?: FloatFieldUpdateOperationsInput | number
    fuelVolume?: FloatFieldUpdateOperationsInput | number
    fuelUnitPrice?: FloatFieldUpdateOperationsInput | number
    fuelCost?: FloatFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelReportsCreateManyInput = {
    id?: string
    currentOdometer: number
    previousOdometer: number
    fuelVolume: number
    fuelUnitPrice: number
    fuelCost: number
    mileage: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type fuelReportsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentOdometer?: FloatFieldUpdateOperationsInput | number
    previousOdometer?: FloatFieldUpdateOperationsInput | number
    fuelVolume?: FloatFieldUpdateOperationsInput | number
    fuelUnitPrice?: FloatFieldUpdateOperationsInput | number
    fuelCost?: FloatFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelReportsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentOdometer?: FloatFieldUpdateOperationsInput | number
    previousOdometer?: FloatFieldUpdateOperationsInput | number
    fuelVolume?: FloatFieldUpdateOperationsInput | number
    fuelUnitPrice?: FloatFieldUpdateOperationsInput | number
    fuelCost?: FloatFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenanceCreateInput = {
    id?: string
    maintenanceType: string
    cost: number
    odometerReading: number
    details: string
    serviceProvider?: string | null
    nextServiceDue?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maintenanceUncheckedCreateInput = {
    id?: string
    maintenanceType: string
    cost: number
    odometerReading: number
    details: string
    serviceProvider?: string | null
    nextServiceDue?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maintenanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    odometerReading?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    serviceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    nextServiceDue?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    odometerReading?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    serviceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    nextServiceDue?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenanceCreateManyInput = {
    id?: string
    maintenanceType: string
    cost: number
    odometerReading: number
    details: string
    serviceProvider?: string | null
    nextServiceDue?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maintenanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    odometerReading?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    serviceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    nextServiceDue?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceType?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    odometerReading?: FloatFieldUpdateOperationsInput | number
    details?: StringFieldUpdateOperationsInput | string
    serviceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    nextServiceDue?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateInput = {
    id?: string
    pricingType?: $Enums.PricingType
    pricePerKilometer?: number | null
    pricePerHour?: number | null
    basePrice?: number
    minimumPrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type settingsUncheckedCreateInput = {
    id?: string
    pricingType?: $Enums.PricingType
    pricePerKilometer?: number | null
    pricePerHour?: number | null
    basePrice?: number
    minimumPrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type settingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricePerKilometer?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerHour?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    minimumPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricePerKilometer?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerHour?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    minimumPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateManyInput = {
    id?: string
    pricingType?: $Enums.PricingType
    pricePerKilometer?: number | null
    pricePerHour?: number | null
    basePrice?: number
    minimumPrice?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type settingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricePerKilometer?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerHour?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    minimumPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricePerKilometer?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerHour?: NullableFloatFieldUpdateOperationsInput | number | null
    basePrice?: FloatFieldUpdateOperationsInput | number
    minimumPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionsListRelationFilter = {
    every?: sessionsWhereInput
    some?: sessionsWhereInput
    none?: sessionsWhereInput
  }

  export type AccountsListRelationFilter = {
    every?: accountsWhereInput
    some?: accountsWhereInput
    none?: accountsWhereInput
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    stripeCustomerId?: SortOrder
    defaultPaymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    banExpires?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    stripeCustomerId?: SortOrder
    defaultPaymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    stripeCustomerId?: SortOrder
    defaultPaymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    banExpires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    impersonatedBy?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    impersonatedBy?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    impersonatedBy?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type accountsProviderIdAccountIdCompoundUniqueInput = {
    providerId: string
    accountId: string
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type verificationsCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type verificationsMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pickupLocation?: SortOrder
    dropLocation?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    stripePaymentIntentId?: SortOrder
    paymentStatus?: SortOrder
    bookingStatus?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    distance?: SortOrder
    duration?: SortOrder
    amount?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pickupLocation?: SortOrder
    dropLocation?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    stripePaymentIntentId?: SortOrder
    paymentStatus?: SortOrder
    bookingStatus?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pickupLocation?: SortOrder
    dropLocation?: SortOrder
    bookingDate?: SortOrder
    bookingTime?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    stripePaymentIntentId?: SortOrder
    paymentStatus?: SortOrder
    bookingStatus?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    distance?: SortOrder
    duration?: SortOrder
    amount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type fuelReportsCountOrderByAggregateInput = {
    id?: SortOrder
    currentOdometer?: SortOrder
    previousOdometer?: SortOrder
    fuelVolume?: SortOrder
    fuelUnitPrice?: SortOrder
    fuelCost?: SortOrder
    mileage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type fuelReportsAvgOrderByAggregateInput = {
    currentOdometer?: SortOrder
    previousOdometer?: SortOrder
    fuelVolume?: SortOrder
    fuelUnitPrice?: SortOrder
    fuelCost?: SortOrder
    mileage?: SortOrder
  }

  export type fuelReportsMaxOrderByAggregateInput = {
    id?: SortOrder
    currentOdometer?: SortOrder
    previousOdometer?: SortOrder
    fuelVolume?: SortOrder
    fuelUnitPrice?: SortOrder
    fuelCost?: SortOrder
    mileage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type fuelReportsMinOrderByAggregateInput = {
    id?: SortOrder
    currentOdometer?: SortOrder
    previousOdometer?: SortOrder
    fuelVolume?: SortOrder
    fuelUnitPrice?: SortOrder
    fuelCost?: SortOrder
    mileage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type fuelReportsSumOrderByAggregateInput = {
    currentOdometer?: SortOrder
    previousOdometer?: SortOrder
    fuelVolume?: SortOrder
    fuelUnitPrice?: SortOrder
    fuelCost?: SortOrder
    mileage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type maintenanceCountOrderByAggregateInput = {
    id?: SortOrder
    maintenanceType?: SortOrder
    cost?: SortOrder
    odometerReading?: SortOrder
    details?: SortOrder
    serviceProvider?: SortOrder
    nextServiceDue?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maintenanceAvgOrderByAggregateInput = {
    cost?: SortOrder
    odometerReading?: SortOrder
  }

  export type maintenanceMaxOrderByAggregateInput = {
    id?: SortOrder
    maintenanceType?: SortOrder
    cost?: SortOrder
    odometerReading?: SortOrder
    details?: SortOrder
    serviceProvider?: SortOrder
    nextServiceDue?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maintenanceMinOrderByAggregateInput = {
    id?: SortOrder
    maintenanceType?: SortOrder
    cost?: SortOrder
    odometerReading?: SortOrder
    details?: SortOrder
    serviceProvider?: SortOrder
    nextServiceDue?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maintenanceSumOrderByAggregateInput = {
    cost?: SortOrder
    odometerReading?: SortOrder
  }

  export type EnumPricingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeFilter<$PrismaModel> | $Enums.PricingType
  }

  export type settingsCountOrderByAggregateInput = {
    id?: SortOrder
    pricingType?: SortOrder
    pricePerKilometer?: SortOrder
    pricePerHour?: SortOrder
    basePrice?: SortOrder
    minimumPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type settingsAvgOrderByAggregateInput = {
    pricePerKilometer?: SortOrder
    pricePerHour?: SortOrder
    basePrice?: SortOrder
    minimumPrice?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    pricingType?: SortOrder
    pricePerKilometer?: SortOrder
    pricePerHour?: SortOrder
    basePrice?: SortOrder
    minimumPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    id?: SortOrder
    pricingType?: SortOrder
    pricePerKilometer?: SortOrder
    pricePerHour?: SortOrder
    basePrice?: SortOrder
    minimumPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type settingsSumOrderByAggregateInput = {
    pricePerKilometer?: SortOrder
    pricePerHour?: SortOrder
    basePrice?: SortOrder
    minimumPrice?: SortOrder
  }

  export type EnumPricingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeWithAggregatesFilter<$PrismaModel> | $Enums.PricingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingTypeFilter<$PrismaModel>
    _max?: NestedEnumPricingTypeFilter<$PrismaModel>
  }

  export type sessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput> | sessionsCreateWithoutUserInput[] | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput | sessionsCreateOrConnectWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type accountsCreateNestedManyWithoutUserInput = {
    create?: XOR<accountsCreateWithoutUserInput, accountsUncheckedCreateWithoutUserInput> | accountsCreateWithoutUserInput[] | accountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUserInput | accountsCreateOrConnectWithoutUserInput[]
    createMany?: accountsCreateManyUserInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type bookingsCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput> | sessionsCreateWithoutUserInput[] | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput | sessionsCreateOrConnectWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type accountsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<accountsCreateWithoutUserInput, accountsUncheckedCreateWithoutUserInput> | accountsCreateWithoutUserInput[] | accountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUserInput | accountsCreateOrConnectWithoutUserInput[]
    createMany?: accountsCreateManyUserInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type sessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput> | sessionsCreateWithoutUserInput[] | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput | sessionsCreateOrConnectWithoutUserInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutUserInput | sessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutUserInput | sessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutUserInput | sessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type accountsUpdateManyWithoutUserNestedInput = {
    create?: XOR<accountsCreateWithoutUserInput, accountsUncheckedCreateWithoutUserInput> | accountsCreateWithoutUserInput[] | accountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUserInput | accountsCreateOrConnectWithoutUserInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutUserInput | accountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: accountsCreateManyUserInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutUserInput | accountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutUserInput | accountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type bookingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUserInput | bookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUserInput | bookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUserInput | bookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput> | sessionsCreateWithoutUserInput[] | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput | sessionsCreateOrConnectWithoutUserInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutUserInput | sessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutUserInput | sessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutUserInput | sessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type accountsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<accountsCreateWithoutUserInput, accountsUncheckedCreateWithoutUserInput> | accountsCreateWithoutUserInput[] | accountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUserInput | accountsCreateOrConnectWithoutUserInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutUserInput | accountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: accountsCreateManyUserInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutUserInput | accountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutUserInput | accountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUserInput | bookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUserInput | bookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUserInput | bookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSessionsInput = {
    create?: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionsInput
    upsert?: usersUpsertWithoutSessionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSessionsInput, usersUpdateWithoutSessionsInput>, usersUncheckedUpdateWithoutSessionsInput>
  }

  export type usersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountsInput
    upsert?: usersUpsertWithoutAccountsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAccountsInput, usersUpdateWithoutAccountsInput>, usersUncheckedUpdateWithoutAccountsInput>
  }

  export type usersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    upsert?: usersUpsertWithoutBookingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookingsInput, usersUpdateWithoutBookingsInput>, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPricingTypeFieldUpdateOperationsInput = {
    set?: $Enums.PricingType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPricingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeFilter<$PrismaModel> | $Enums.PricingType
  }

  export type NestedEnumPricingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeWithAggregatesFilter<$PrismaModel> | $Enums.PricingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingTypeFilter<$PrismaModel>
    _max?: NestedEnumPricingTypeFilter<$PrismaModel>
  }

  export type sessionsCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    impersonatedBy?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionsUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    impersonatedBy?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionsCreateOrConnectWithoutUserInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
  }

  export type sessionsCreateManyUserInputEnvelope = {
    data: sessionsCreateManyUserInput | sessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type accountsCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountsUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountsCreateOrConnectWithoutUserInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutUserInput, accountsUncheckedCreateWithoutUserInput>
  }

  export type accountsCreateManyUserInputEnvelope = {
    data: accountsCreateManyUserInput | accountsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type bookingsCreateWithoutUserInput = {
    id?: string
    pickupLocation: string
    dropLocation: string
    bookingDate: Date | string
    bookingTime: string
    distance?: number | null
    duration?: number | null
    stripePaymentIntentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    bookingStatus?: $Enums.BookingStatus
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingsUncheckedCreateWithoutUserInput = {
    id?: string
    pickupLocation: string
    dropLocation: string
    bookingDate: Date | string
    bookingTime: string
    distance?: number | null
    duration?: number | null
    stripePaymentIntentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    bookingStatus?: $Enums.BookingStatus
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingsCreateOrConnectWithoutUserInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput>
  }

  export type bookingsCreateManyUserInputEnvelope = {
    data: bookingsCreateManyUserInput | bookingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutUserInput, sessionsUncheckedUpdateWithoutUserInput>
    create: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutUserInput, sessionsUncheckedUpdateWithoutUserInput>
  }

  export type sessionsUpdateManyWithWhereWithoutUserInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type sessionsScalarWhereInput = {
    AND?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    OR?: sessionsScalarWhereInput[]
    NOT?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    id?: StringFilter<"sessions"> | string
    token?: StringFilter<"sessions"> | string
    expiresAt?: DateTimeFilter<"sessions"> | Date | string
    impersonatedBy?: StringNullableFilter<"sessions"> | string | null
    ipAddress?: StringNullableFilter<"sessions"> | string | null
    userAgent?: StringNullableFilter<"sessions"> | string | null
    userId?: StringFilter<"sessions"> | string
    createdAt?: DateTimeFilter<"sessions"> | Date | string
    updatedAt?: DateTimeFilter<"sessions"> | Date | string
  }

  export type accountsUpsertWithWhereUniqueWithoutUserInput = {
    where: accountsWhereUniqueInput
    update: XOR<accountsUpdateWithoutUserInput, accountsUncheckedUpdateWithoutUserInput>
    create: XOR<accountsCreateWithoutUserInput, accountsUncheckedCreateWithoutUserInput>
  }

  export type accountsUpdateWithWhereUniqueWithoutUserInput = {
    where: accountsWhereUniqueInput
    data: XOR<accountsUpdateWithoutUserInput, accountsUncheckedUpdateWithoutUserInput>
  }

  export type accountsUpdateManyWithWhereWithoutUserInput = {
    where: accountsScalarWhereInput
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyWithoutUserInput>
  }

  export type accountsScalarWhereInput = {
    AND?: accountsScalarWhereInput | accountsScalarWhereInput[]
    OR?: accountsScalarWhereInput[]
    NOT?: accountsScalarWhereInput | accountsScalarWhereInput[]
    id?: StringFilter<"accounts"> | string
    accountId?: StringFilter<"accounts"> | string
    providerId?: StringFilter<"accounts"> | string
    userId?: StringFilter<"accounts"> | string
    accessToken?: StringNullableFilter<"accounts"> | string | null
    refreshToken?: StringNullableFilter<"accounts"> | string | null
    idToken?: StringNullableFilter<"accounts"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"accounts"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"accounts"> | Date | string | null
    scope?: StringNullableFilter<"accounts"> | string | null
    password?: StringNullableFilter<"accounts"> | string | null
    createdAt?: DateTimeFilter<"accounts"> | Date | string
    updatedAt?: DateTimeFilter<"accounts"> | Date | string
  }

  export type bookingsUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUserInput, bookingsUncheckedUpdateWithoutUserInput>
    create: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUserInput, bookingsUncheckedUpdateWithoutUserInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUserInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUserInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: StringFilter<"bookings"> | string
    userId?: StringFilter<"bookings"> | string
    pickupLocation?: StringFilter<"bookings"> | string
    dropLocation?: StringFilter<"bookings"> | string
    bookingDate?: DateTimeFilter<"bookings"> | Date | string
    bookingTime?: StringFilter<"bookings"> | string
    distance?: FloatNullableFilter<"bookings"> | number | null
    duration?: FloatNullableFilter<"bookings"> | number | null
    stripePaymentIntentId?: StringNullableFilter<"bookings"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"bookings"> | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFilter<"bookings"> | $Enums.BookingStatus
    amount?: IntFilter<"bookings"> | number
    createdAt?: DateTimeFilter<"bookings"> | Date | string
    updatedAt?: DateTimeFilter<"bookings"> | Date | string
  }

  export type usersCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: accountsCreateNestedManyWithoutUserInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: accountsUncheckedCreateNestedManyWithoutUserInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSessionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
  }

  export type usersUpsertWithoutSessionsInput = {
    update: XOR<usersUpdateWithoutSessionsInput, usersUncheckedUpdateWithoutSessionsInput>
    create: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSessionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSessionsInput, usersUncheckedUpdateWithoutSessionsInput>
  }

  export type usersUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountsUpdateManyWithoutUserNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountsUncheckedUpdateManyWithoutUserNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: sessionsCreateNestedManyWithoutUserInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: sessionsUncheckedCreateNestedManyWithoutUserInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAccountsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
  }

  export type usersUpsertWithoutAccountsInput = {
    update: XOR<usersUpdateWithoutAccountsInput, usersUncheckedUpdateWithoutAccountsInput>
    create: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAccountsInput, usersUncheckedUpdateWithoutAccountsInput>
  }

  export type usersUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUpdateManyWithoutUserNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUncheckedUpdateManyWithoutUserNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: sessionsCreateNestedManyWithoutUserInput
    accounts?: accountsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: number | null
    stripeCustomerId?: string | null
    defaultPaymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: sessionsUncheckedCreateNestedManyWithoutUserInput
    accounts?: accountsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutBookingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
  }

  export type usersUpsertWithoutBookingsInput = {
    update: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUpdateManyWithoutUserNestedInput
    accounts?: accountsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableIntFieldUpdateOperationsInput | number | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultPaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: accountsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sessionsCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    impersonatedBy?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountsCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookingsCreateManyUserInput = {
    id?: string
    pickupLocation: string
    dropLocation: string
    bookingDate: Date | string
    bookingTime: string
    distance?: number | null
    duration?: number | null
    stripePaymentIntentId?: string | null
    paymentStatus?: $Enums.PaymentStatus
    bookingStatus?: $Enums.BookingStatus
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sessionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropLocation?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropLocation?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropLocation?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingTime?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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