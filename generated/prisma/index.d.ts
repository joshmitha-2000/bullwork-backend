
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model DemoForm
 * 
 */
export type DemoForm = $Result.DefaultSelection<Prisma.$DemoFormPayload>
/**
 * Model BrochureRequest
 * 
 */
export type BrochureRequest = $Result.DefaultSelection<Prisma.$BrochureRequestPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model TcoSection
 * 
 */
export type TcoSection = $Result.DefaultSelection<Prisma.$TcoSectionPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderType: {
  INDIVIDUAL: 'INDIVIDUAL',
  CUSTOMER: 'CUSTOMER'
};

export type OrderType = (typeof OrderType)[keyof typeof OrderType]

}

export type OrderType = $Enums.OrderType

export const OrderType: typeof $Enums.OrderType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demoForm`: Exposes CRUD operations for the **DemoForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemoForms
    * const demoForms = await prisma.demoForm.findMany()
    * ```
    */
  get demoForm(): Prisma.DemoFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brochureRequest`: Exposes CRUD operations for the **BrochureRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrochureRequests
    * const brochureRequests = await prisma.brochureRequest.findMany()
    * ```
    */
  get brochureRequest(): Prisma.BrochureRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tcoSection`: Exposes CRUD operations for the **TcoSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TcoSections
    * const tcoSections = await prisma.tcoSection.findMany()
    * ```
    */
  get tcoSection(): Prisma.TcoSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Product: 'Product',
    Order: 'Order',
    DemoForm: 'DemoForm',
    BrochureRequest: 'BrochureRequest',
    Feature: 'Feature',
    TcoSection: 'TcoSection',
    Blog: 'Blog'
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
      modelProps: "product" | "order" | "demoForm" | "brochureRequest" | "feature" | "tcoSection" | "blog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      DemoForm: {
        payload: Prisma.$DemoFormPayload<ExtArgs>
        fields: Prisma.DemoFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemoFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemoFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>
          }
          findFirst: {
            args: Prisma.DemoFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemoFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>
          }
          findMany: {
            args: Prisma.DemoFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>[]
          }
          create: {
            args: Prisma.DemoFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>
          }
          createMany: {
            args: Prisma.DemoFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemoFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>[]
          }
          delete: {
            args: Prisma.DemoFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>
          }
          update: {
            args: Prisma.DemoFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>
          }
          deleteMany: {
            args: Prisma.DemoFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemoFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemoFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>[]
          }
          upsert: {
            args: Prisma.DemoFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoFormPayload>
          }
          aggregate: {
            args: Prisma.DemoFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemoForm>
          }
          groupBy: {
            args: Prisma.DemoFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemoFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemoFormCountArgs<ExtArgs>
            result: $Utils.Optional<DemoFormCountAggregateOutputType> | number
          }
        }
      }
      BrochureRequest: {
        payload: Prisma.$BrochureRequestPayload<ExtArgs>
        fields: Prisma.BrochureRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrochureRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrochureRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>
          }
          findFirst: {
            args: Prisma.BrochureRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrochureRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>
          }
          findMany: {
            args: Prisma.BrochureRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>[]
          }
          create: {
            args: Prisma.BrochureRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>
          }
          createMany: {
            args: Prisma.BrochureRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrochureRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>[]
          }
          delete: {
            args: Prisma.BrochureRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>
          }
          update: {
            args: Prisma.BrochureRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>
          }
          deleteMany: {
            args: Prisma.BrochureRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrochureRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrochureRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>[]
          }
          upsert: {
            args: Prisma.BrochureRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochureRequestPayload>
          }
          aggregate: {
            args: Prisma.BrochureRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrochureRequest>
          }
          groupBy: {
            args: Prisma.BrochureRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrochureRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrochureRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BrochureRequestCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      TcoSection: {
        payload: Prisma.$TcoSectionPayload<ExtArgs>
        fields: Prisma.TcoSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TcoSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TcoSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>
          }
          findFirst: {
            args: Prisma.TcoSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TcoSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>
          }
          findMany: {
            args: Prisma.TcoSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>[]
          }
          create: {
            args: Prisma.TcoSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>
          }
          createMany: {
            args: Prisma.TcoSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TcoSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>[]
          }
          delete: {
            args: Prisma.TcoSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>
          }
          update: {
            args: Prisma.TcoSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>
          }
          deleteMany: {
            args: Prisma.TcoSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TcoSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TcoSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>[]
          }
          upsert: {
            args: Prisma.TcoSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcoSectionPayload>
          }
          aggregate: {
            args: Prisma.TcoSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTcoSection>
          }
          groupBy: {
            args: Prisma.TcoSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TcoSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TcoSectionCountArgs<ExtArgs>
            result: $Utils.Optional<TcoSectionCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    product?: ProductOmit
    order?: OrderOmit
    demoForm?: DemoFormOmit
    brochureRequest?: BrochureRequestOmit
    feature?: FeatureOmit
    tcoSection?: TcoSectionOmit
    blog?: BlogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orders: number
    brochureRequests: number
    features: number
    tcoSections: number
    demoform: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
    brochureRequests?: boolean | ProductCountOutputTypeCountBrochureRequestsArgs
    features?: boolean | ProductCountOutputTypeCountFeaturesArgs
    tcoSections?: boolean | ProductCountOutputTypeCountTcoSectionsArgs
    demoform?: boolean | ProductCountOutputTypeCountDemoformArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBrochureRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrochureRequestWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTcoSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TcoSectionWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDemoformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoFormWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    image2: string | null
    brochureUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    image2: string | null
    brochureUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    imageUrl: number
    image2: number
    brochureUrl: number
    videoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    image2?: true
    brochureUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    image2?: true
    brochureUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    image2?: true
    brochureUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    imageUrl: string | null
    image2: string | null
    brochureUrl: string | null
    videoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    image2?: boolean
    brochureUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Product$ordersArgs<ExtArgs>
    brochureRequests?: boolean | Product$brochureRequestsArgs<ExtArgs>
    features?: boolean | Product$featuresArgs<ExtArgs>
    tcoSections?: boolean | Product$tcoSectionsArgs<ExtArgs>
    demoform?: boolean | Product$demoformArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    image2?: boolean
    brochureUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    image2?: boolean
    brochureUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    image2?: boolean
    brochureUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "imageUrl" | "image2" | "brochureUrl" | "videoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Product$ordersArgs<ExtArgs>
    brochureRequests?: boolean | Product$brochureRequestsArgs<ExtArgs>
    features?: boolean | Product$featuresArgs<ExtArgs>
    tcoSections?: boolean | Product$tcoSectionsArgs<ExtArgs>
    demoform?: boolean | Product$demoformArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      brochureRequests: Prisma.$BrochureRequestPayload<ExtArgs>[]
      features: Prisma.$FeaturePayload<ExtArgs>[]
      tcoSections: Prisma.$TcoSectionPayload<ExtArgs>[]
      demoform: Prisma.$DemoFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      imageUrl: string | null
      image2: string | null
      brochureUrl: string | null
      videoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brochureRequests<T extends Product$brochureRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Product$brochureRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    features<T extends Product$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Product$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tcoSections<T extends Product$tcoSectionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$tcoSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demoform<T extends Product$demoformArgs<ExtArgs> = {}>(args?: Subset<T, Product$demoformArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly image2: FieldRef<"Product", 'String'>
    readonly brochureUrl: FieldRef<"Product", 'String'>
    readonly videoUrl: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Product.brochureRequests
   */
  export type Product$brochureRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    where?: BrochureRequestWhereInput
    orderBy?: BrochureRequestOrderByWithRelationInput | BrochureRequestOrderByWithRelationInput[]
    cursor?: BrochureRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrochureRequestScalarFieldEnum | BrochureRequestScalarFieldEnum[]
  }

  /**
   * Product.features
   */
  export type Product$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Product.tcoSections
   */
  export type Product$tcoSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    where?: TcoSectionWhereInput
    orderBy?: TcoSectionOrderByWithRelationInput | TcoSectionOrderByWithRelationInput[]
    cursor?: TcoSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TcoSectionScalarFieldEnum | TcoSectionScalarFieldEnum[]
  }

  /**
   * Product.demoform
   */
  export type Product$demoformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    where?: DemoFormWhereInput
    orderBy?: DemoFormOrderByWithRelationInput | DemoFormOrderByWithRelationInput[]
    cursor?: DemoFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemoFormScalarFieldEnum | DemoFormScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    address: string | null
    country: string | null
    state: string | null
    city: string | null
    pincode: string | null
    aadharNumber: string | null
    panNumber: string | null
    orderType: $Enums.OrderType | null
    message: string | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    address: string | null
    country: string | null
    state: string | null
    city: string | null
    pincode: string | null
    aadharNumber: string | null
    panNumber: string | null
    orderType: $Enums.OrderType | null
    message: string | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    email: number
    address: number
    country: number
    state: number
    city: number
    pincode: number
    aadharNumber: number
    panNumber: number
    orderType: number
    message: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    address?: true
    country?: true
    state?: true
    city?: true
    pincode?: true
    aadharNumber?: true
    panNumber?: true
    orderType?: true
    message?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    address?: true
    country?: true
    state?: true
    city?: true
    pincode?: true
    aadharNumber?: true
    panNumber?: true
    orderType?: true
    message?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    address?: true
    country?: true
    state?: true
    city?: true
    pincode?: true
    aadharNumber?: true
    panNumber?: true
    orderType?: true
    message?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    email: string
    address: string
    country: string
    state: string
    city: string
    pincode: string
    aadharNumber: string
    panNumber: string
    orderType: $Enums.OrderType
    message: string | null
    productId: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pincode?: boolean
    aadharNumber?: boolean
    panNumber?: boolean
    orderType?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pincode?: boolean
    aadharNumber?: boolean
    panNumber?: boolean
    orderType?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pincode?: boolean
    aadharNumber?: boolean
    panNumber?: boolean
    orderType?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    pincode?: boolean
    aadharNumber?: boolean
    panNumber?: boolean
    orderType?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "email" | "address" | "country" | "state" | "city" | "pincode" | "aadharNumber" | "panNumber" | "orderType" | "message" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      email: string
      address: string
      country: string
      state: string
      city: string
      pincode: string
      aadharNumber: string
      panNumber: string
      orderType: $Enums.OrderType
      message: string | null
      productId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly name: FieldRef<"Order", 'String'>
    readonly phoneNumber: FieldRef<"Order", 'String'>
    readonly email: FieldRef<"Order", 'String'>
    readonly address: FieldRef<"Order", 'String'>
    readonly country: FieldRef<"Order", 'String'>
    readonly state: FieldRef<"Order", 'String'>
    readonly city: FieldRef<"Order", 'String'>
    readonly pincode: FieldRef<"Order", 'String'>
    readonly aadharNumber: FieldRef<"Order", 'String'>
    readonly panNumber: FieldRef<"Order", 'String'>
    readonly orderType: FieldRef<"Order", 'OrderType'>
    readonly message: FieldRef<"Order", 'String'>
    readonly productId: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model DemoForm
   */

  export type AggregateDemoForm = {
    _count: DemoFormCountAggregateOutputType | null
    _avg: DemoFormAvgAggregateOutputType | null
    _sum: DemoFormSumAggregateOutputType | null
    _min: DemoFormMinAggregateOutputType | null
    _max: DemoFormMaxAggregateOutputType | null
  }

  export type DemoFormAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type DemoFormSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type DemoFormMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    address: string | null
    message: string | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemoFormMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    address: string | null
    message: string | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemoFormCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    email: number
    address: number
    message: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DemoFormAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type DemoFormSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type DemoFormMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    address?: true
    message?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemoFormMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    address?: true
    message?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemoFormCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    address?: true
    message?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DemoFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoForm to aggregate.
     */
    where?: DemoFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoForms to fetch.
     */
    orderBy?: DemoFormOrderByWithRelationInput | DemoFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemoFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemoForms
    **/
    _count?: true | DemoFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemoFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemoFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoFormMaxAggregateInputType
  }

  export type GetDemoFormAggregateType<T extends DemoFormAggregateArgs> = {
        [P in keyof T & keyof AggregateDemoForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemoForm[P]>
      : GetScalarType<T[P], AggregateDemoForm[P]>
  }




  export type DemoFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoFormWhereInput
    orderBy?: DemoFormOrderByWithAggregationInput | DemoFormOrderByWithAggregationInput[]
    by: DemoFormScalarFieldEnum[] | DemoFormScalarFieldEnum
    having?: DemoFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoFormCountAggregateInputType | true
    _avg?: DemoFormAvgAggregateInputType
    _sum?: DemoFormSumAggregateInputType
    _min?: DemoFormMinAggregateInputType
    _max?: DemoFormMaxAggregateInputType
  }

  export type DemoFormGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    email: string
    address: string
    message: string | null
    productId: number
    createdAt: Date
    updatedAt: Date
    _count: DemoFormCountAggregateOutputType | null
    _avg: DemoFormAvgAggregateOutputType | null
    _sum: DemoFormSumAggregateOutputType | null
    _min: DemoFormMinAggregateOutputType | null
    _max: DemoFormMaxAggregateOutputType | null
  }

  type GetDemoFormGroupByPayload<T extends DemoFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemoFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemoFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemoFormGroupByOutputType[P]>
            : GetScalarType<T[P], DemoFormGroupByOutputType[P]>
        }
      >
    >


  export type DemoFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demoForm"]>

  export type DemoFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demoForm"]>

  export type DemoFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demoForm"]>

  export type DemoFormSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    address?: boolean
    message?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DemoFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "email" | "address" | "message" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["demoForm"]>
  export type DemoFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DemoFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DemoFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DemoFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemoForm"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      email: string
      address: string
      message: string | null
      productId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["demoForm"]>
    composites: {}
  }

  type DemoFormGetPayload<S extends boolean | null | undefined | DemoFormDefaultArgs> = $Result.GetResult<Prisma.$DemoFormPayload, S>

  type DemoFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemoFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemoFormCountAggregateInputType | true
    }

  export interface DemoFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemoForm'], meta: { name: 'DemoForm' } }
    /**
     * Find zero or one DemoForm that matches the filter.
     * @param {DemoFormFindUniqueArgs} args - Arguments to find a DemoForm
     * @example
     * // Get one DemoForm
     * const demoForm = await prisma.demoForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemoFormFindUniqueArgs>(args: SelectSubset<T, DemoFormFindUniqueArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DemoForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemoFormFindUniqueOrThrowArgs} args - Arguments to find a DemoForm
     * @example
     * // Get one DemoForm
     * const demoForm = await prisma.demoForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemoFormFindUniqueOrThrowArgs>(args: SelectSubset<T, DemoFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemoForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFormFindFirstArgs} args - Arguments to find a DemoForm
     * @example
     * // Get one DemoForm
     * const demoForm = await prisma.demoForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemoFormFindFirstArgs>(args?: SelectSubset<T, DemoFormFindFirstArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemoForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFormFindFirstOrThrowArgs} args - Arguments to find a DemoForm
     * @example
     * // Get one DemoForm
     * const demoForm = await prisma.demoForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemoFormFindFirstOrThrowArgs>(args?: SelectSubset<T, DemoFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DemoForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemoForms
     * const demoForms = await prisma.demoForm.findMany()
     * 
     * // Get first 10 DemoForms
     * const demoForms = await prisma.demoForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoFormWithIdOnly = await prisma.demoForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemoFormFindManyArgs>(args?: SelectSubset<T, DemoFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DemoForm.
     * @param {DemoFormCreateArgs} args - Arguments to create a DemoForm.
     * @example
     * // Create one DemoForm
     * const DemoForm = await prisma.demoForm.create({
     *   data: {
     *     // ... data to create a DemoForm
     *   }
     * })
     * 
     */
    create<T extends DemoFormCreateArgs>(args: SelectSubset<T, DemoFormCreateArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DemoForms.
     * @param {DemoFormCreateManyArgs} args - Arguments to create many DemoForms.
     * @example
     * // Create many DemoForms
     * const demoForm = await prisma.demoForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemoFormCreateManyArgs>(args?: SelectSubset<T, DemoFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DemoForms and returns the data saved in the database.
     * @param {DemoFormCreateManyAndReturnArgs} args - Arguments to create many DemoForms.
     * @example
     * // Create many DemoForms
     * const demoForm = await prisma.demoForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DemoForms and only return the `id`
     * const demoFormWithIdOnly = await prisma.demoForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemoFormCreateManyAndReturnArgs>(args?: SelectSubset<T, DemoFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DemoForm.
     * @param {DemoFormDeleteArgs} args - Arguments to delete one DemoForm.
     * @example
     * // Delete one DemoForm
     * const DemoForm = await prisma.demoForm.delete({
     *   where: {
     *     // ... filter to delete one DemoForm
     *   }
     * })
     * 
     */
    delete<T extends DemoFormDeleteArgs>(args: SelectSubset<T, DemoFormDeleteArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DemoForm.
     * @param {DemoFormUpdateArgs} args - Arguments to update one DemoForm.
     * @example
     * // Update one DemoForm
     * const demoForm = await prisma.demoForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemoFormUpdateArgs>(args: SelectSubset<T, DemoFormUpdateArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DemoForms.
     * @param {DemoFormDeleteManyArgs} args - Arguments to filter DemoForms to delete.
     * @example
     * // Delete a few DemoForms
     * const { count } = await prisma.demoForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemoFormDeleteManyArgs>(args?: SelectSubset<T, DemoFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemoForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemoForms
     * const demoForm = await prisma.demoForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemoFormUpdateManyArgs>(args: SelectSubset<T, DemoFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemoForms and returns the data updated in the database.
     * @param {DemoFormUpdateManyAndReturnArgs} args - Arguments to update many DemoForms.
     * @example
     * // Update many DemoForms
     * const demoForm = await prisma.demoForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DemoForms and only return the `id`
     * const demoFormWithIdOnly = await prisma.demoForm.updateManyAndReturn({
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
    updateManyAndReturn<T extends DemoFormUpdateManyAndReturnArgs>(args: SelectSubset<T, DemoFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DemoForm.
     * @param {DemoFormUpsertArgs} args - Arguments to update or create a DemoForm.
     * @example
     * // Update or create a DemoForm
     * const demoForm = await prisma.demoForm.upsert({
     *   create: {
     *     // ... data to create a DemoForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemoForm we want to update
     *   }
     * })
     */
    upsert<T extends DemoFormUpsertArgs>(args: SelectSubset<T, DemoFormUpsertArgs<ExtArgs>>): Prisma__DemoFormClient<$Result.GetResult<Prisma.$DemoFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DemoForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFormCountArgs} args - Arguments to filter DemoForms to count.
     * @example
     * // Count the number of DemoForms
     * const count = await prisma.demoForm.count({
     *   where: {
     *     // ... the filter for the DemoForms we want to count
     *   }
     * })
    **/
    count<T extends DemoFormCountArgs>(
      args?: Subset<T, DemoFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemoForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemoFormAggregateArgs>(args: Subset<T, DemoFormAggregateArgs>): Prisma.PrismaPromise<GetDemoFormAggregateType<T>>

    /**
     * Group by DemoForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFormGroupByArgs} args - Group by arguments.
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
      T extends DemoFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoFormGroupByArgs['orderBy'] }
        : { orderBy?: DemoFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemoFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemoForm model
   */
  readonly fields: DemoFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemoForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemoFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DemoForm model
   */
  interface DemoFormFieldRefs {
    readonly id: FieldRef<"DemoForm", 'Int'>
    readonly name: FieldRef<"DemoForm", 'String'>
    readonly phoneNumber: FieldRef<"DemoForm", 'String'>
    readonly email: FieldRef<"DemoForm", 'String'>
    readonly address: FieldRef<"DemoForm", 'String'>
    readonly message: FieldRef<"DemoForm", 'String'>
    readonly productId: FieldRef<"DemoForm", 'Int'>
    readonly createdAt: FieldRef<"DemoForm", 'DateTime'>
    readonly updatedAt: FieldRef<"DemoForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DemoForm findUnique
   */
  export type DemoFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * Filter, which DemoForm to fetch.
     */
    where: DemoFormWhereUniqueInput
  }

  /**
   * DemoForm findUniqueOrThrow
   */
  export type DemoFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * Filter, which DemoForm to fetch.
     */
    where: DemoFormWhereUniqueInput
  }

  /**
   * DemoForm findFirst
   */
  export type DemoFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * Filter, which DemoForm to fetch.
     */
    where?: DemoFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoForms to fetch.
     */
    orderBy?: DemoFormOrderByWithRelationInput | DemoFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoForms.
     */
    cursor?: DemoFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoForms.
     */
    distinct?: DemoFormScalarFieldEnum | DemoFormScalarFieldEnum[]
  }

  /**
   * DemoForm findFirstOrThrow
   */
  export type DemoFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * Filter, which DemoForm to fetch.
     */
    where?: DemoFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoForms to fetch.
     */
    orderBy?: DemoFormOrderByWithRelationInput | DemoFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoForms.
     */
    cursor?: DemoFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoForms.
     */
    distinct?: DemoFormScalarFieldEnum | DemoFormScalarFieldEnum[]
  }

  /**
   * DemoForm findMany
   */
  export type DemoFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * Filter, which DemoForms to fetch.
     */
    where?: DemoFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoForms to fetch.
     */
    orderBy?: DemoFormOrderByWithRelationInput | DemoFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemoForms.
     */
    cursor?: DemoFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoForms.
     */
    skip?: number
    distinct?: DemoFormScalarFieldEnum | DemoFormScalarFieldEnum[]
  }

  /**
   * DemoForm create
   */
  export type DemoFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * The data needed to create a DemoForm.
     */
    data: XOR<DemoFormCreateInput, DemoFormUncheckedCreateInput>
  }

  /**
   * DemoForm createMany
   */
  export type DemoFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemoForms.
     */
    data: DemoFormCreateManyInput | DemoFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DemoForm createManyAndReturn
   */
  export type DemoFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * The data used to create many DemoForms.
     */
    data: DemoFormCreateManyInput | DemoFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemoForm update
   */
  export type DemoFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * The data needed to update a DemoForm.
     */
    data: XOR<DemoFormUpdateInput, DemoFormUncheckedUpdateInput>
    /**
     * Choose, which DemoForm to update.
     */
    where: DemoFormWhereUniqueInput
  }

  /**
   * DemoForm updateMany
   */
  export type DemoFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemoForms.
     */
    data: XOR<DemoFormUpdateManyMutationInput, DemoFormUncheckedUpdateManyInput>
    /**
     * Filter which DemoForms to update
     */
    where?: DemoFormWhereInput
    /**
     * Limit how many DemoForms to update.
     */
    limit?: number
  }

  /**
   * DemoForm updateManyAndReturn
   */
  export type DemoFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * The data used to update DemoForms.
     */
    data: XOR<DemoFormUpdateManyMutationInput, DemoFormUncheckedUpdateManyInput>
    /**
     * Filter which DemoForms to update
     */
    where?: DemoFormWhereInput
    /**
     * Limit how many DemoForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemoForm upsert
   */
  export type DemoFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * The filter to search for the DemoForm to update in case it exists.
     */
    where: DemoFormWhereUniqueInput
    /**
     * In case the DemoForm found by the `where` argument doesn't exist, create a new DemoForm with this data.
     */
    create: XOR<DemoFormCreateInput, DemoFormUncheckedCreateInput>
    /**
     * In case the DemoForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemoFormUpdateInput, DemoFormUncheckedUpdateInput>
  }

  /**
   * DemoForm delete
   */
  export type DemoFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
    /**
     * Filter which DemoForm to delete.
     */
    where: DemoFormWhereUniqueInput
  }

  /**
   * DemoForm deleteMany
   */
  export type DemoFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoForms to delete
     */
    where?: DemoFormWhereInput
    /**
     * Limit how many DemoForms to delete.
     */
    limit?: number
  }

  /**
   * DemoForm without action
   */
  export type DemoFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoForm
     */
    select?: DemoFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoForm
     */
    omit?: DemoFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemoFormInclude<ExtArgs> | null
  }


  /**
   * Model BrochureRequest
   */

  export type AggregateBrochureRequest = {
    _count: BrochureRequestCountAggregateOutputType | null
    _avg: BrochureRequestAvgAggregateOutputType | null
    _sum: BrochureRequestSumAggregateOutputType | null
    _min: BrochureRequestMinAggregateOutputType | null
    _max: BrochureRequestMaxAggregateOutputType | null
  }

  export type BrochureRequestAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type BrochureRequestSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type BrochureRequestMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    productId: number | null
    requestedAt: Date | null
  }

  export type BrochureRequestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    productId: number | null
    requestedAt: Date | null
  }

  export type BrochureRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    productId: number
    requestedAt: number
    _all: number
  }


  export type BrochureRequestAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type BrochureRequestSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type BrochureRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    productId?: true
    requestedAt?: true
  }

  export type BrochureRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    productId?: true
    requestedAt?: true
  }

  export type BrochureRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    productId?: true
    requestedAt?: true
    _all?: true
  }

  export type BrochureRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrochureRequest to aggregate.
     */
    where?: BrochureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrochureRequests to fetch.
     */
    orderBy?: BrochureRequestOrderByWithRelationInput | BrochureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrochureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrochureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrochureRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrochureRequests
    **/
    _count?: true | BrochureRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrochureRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrochureRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrochureRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrochureRequestMaxAggregateInputType
  }

  export type GetBrochureRequestAggregateType<T extends BrochureRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBrochureRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrochureRequest[P]>
      : GetScalarType<T[P], AggregateBrochureRequest[P]>
  }




  export type BrochureRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrochureRequestWhereInput
    orderBy?: BrochureRequestOrderByWithAggregationInput | BrochureRequestOrderByWithAggregationInput[]
    by: BrochureRequestScalarFieldEnum[] | BrochureRequestScalarFieldEnum
    having?: BrochureRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrochureRequestCountAggregateInputType | true
    _avg?: BrochureRequestAvgAggregateInputType
    _sum?: BrochureRequestSumAggregateInputType
    _min?: BrochureRequestMinAggregateInputType
    _max?: BrochureRequestMaxAggregateInputType
  }

  export type BrochureRequestGroupByOutputType = {
    id: number
    name: string
    email: string
    phoneNumber: string
    productId: number
    requestedAt: Date
    _count: BrochureRequestCountAggregateOutputType | null
    _avg: BrochureRequestAvgAggregateOutputType | null
    _sum: BrochureRequestSumAggregateOutputType | null
    _min: BrochureRequestMinAggregateOutputType | null
    _max: BrochureRequestMaxAggregateOutputType | null
  }

  type GetBrochureRequestGroupByPayload<T extends BrochureRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrochureRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrochureRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrochureRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BrochureRequestGroupByOutputType[P]>
        }
      >
    >


  export type BrochureRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    productId?: boolean
    requestedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brochureRequest"]>

  export type BrochureRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    productId?: boolean
    requestedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brochureRequest"]>

  export type BrochureRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    productId?: boolean
    requestedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brochureRequest"]>

  export type BrochureRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    productId?: boolean
    requestedAt?: boolean
  }

  export type BrochureRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "productId" | "requestedAt", ExtArgs["result"]["brochureRequest"]>
  export type BrochureRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BrochureRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BrochureRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $BrochureRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrochureRequest"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phoneNumber: string
      productId: number
      requestedAt: Date
    }, ExtArgs["result"]["brochureRequest"]>
    composites: {}
  }

  type BrochureRequestGetPayload<S extends boolean | null | undefined | BrochureRequestDefaultArgs> = $Result.GetResult<Prisma.$BrochureRequestPayload, S>

  type BrochureRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrochureRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrochureRequestCountAggregateInputType | true
    }

  export interface BrochureRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrochureRequest'], meta: { name: 'BrochureRequest' } }
    /**
     * Find zero or one BrochureRequest that matches the filter.
     * @param {BrochureRequestFindUniqueArgs} args - Arguments to find a BrochureRequest
     * @example
     * // Get one BrochureRequest
     * const brochureRequest = await prisma.brochureRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrochureRequestFindUniqueArgs>(args: SelectSubset<T, BrochureRequestFindUniqueArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrochureRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrochureRequestFindUniqueOrThrowArgs} args - Arguments to find a BrochureRequest
     * @example
     * // Get one BrochureRequest
     * const brochureRequest = await prisma.brochureRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrochureRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BrochureRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrochureRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureRequestFindFirstArgs} args - Arguments to find a BrochureRequest
     * @example
     * // Get one BrochureRequest
     * const brochureRequest = await prisma.brochureRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrochureRequestFindFirstArgs>(args?: SelectSubset<T, BrochureRequestFindFirstArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrochureRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureRequestFindFirstOrThrowArgs} args - Arguments to find a BrochureRequest
     * @example
     * // Get one BrochureRequest
     * const brochureRequest = await prisma.brochureRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrochureRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BrochureRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrochureRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrochureRequests
     * const brochureRequests = await prisma.brochureRequest.findMany()
     * 
     * // Get first 10 BrochureRequests
     * const brochureRequests = await prisma.brochureRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brochureRequestWithIdOnly = await prisma.brochureRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrochureRequestFindManyArgs>(args?: SelectSubset<T, BrochureRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrochureRequest.
     * @param {BrochureRequestCreateArgs} args - Arguments to create a BrochureRequest.
     * @example
     * // Create one BrochureRequest
     * const BrochureRequest = await prisma.brochureRequest.create({
     *   data: {
     *     // ... data to create a BrochureRequest
     *   }
     * })
     * 
     */
    create<T extends BrochureRequestCreateArgs>(args: SelectSubset<T, BrochureRequestCreateArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrochureRequests.
     * @param {BrochureRequestCreateManyArgs} args - Arguments to create many BrochureRequests.
     * @example
     * // Create many BrochureRequests
     * const brochureRequest = await prisma.brochureRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrochureRequestCreateManyArgs>(args?: SelectSubset<T, BrochureRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrochureRequests and returns the data saved in the database.
     * @param {BrochureRequestCreateManyAndReturnArgs} args - Arguments to create many BrochureRequests.
     * @example
     * // Create many BrochureRequests
     * const brochureRequest = await prisma.brochureRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrochureRequests and only return the `id`
     * const brochureRequestWithIdOnly = await prisma.brochureRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrochureRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, BrochureRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrochureRequest.
     * @param {BrochureRequestDeleteArgs} args - Arguments to delete one BrochureRequest.
     * @example
     * // Delete one BrochureRequest
     * const BrochureRequest = await prisma.brochureRequest.delete({
     *   where: {
     *     // ... filter to delete one BrochureRequest
     *   }
     * })
     * 
     */
    delete<T extends BrochureRequestDeleteArgs>(args: SelectSubset<T, BrochureRequestDeleteArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrochureRequest.
     * @param {BrochureRequestUpdateArgs} args - Arguments to update one BrochureRequest.
     * @example
     * // Update one BrochureRequest
     * const brochureRequest = await prisma.brochureRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrochureRequestUpdateArgs>(args: SelectSubset<T, BrochureRequestUpdateArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrochureRequests.
     * @param {BrochureRequestDeleteManyArgs} args - Arguments to filter BrochureRequests to delete.
     * @example
     * // Delete a few BrochureRequests
     * const { count } = await prisma.brochureRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrochureRequestDeleteManyArgs>(args?: SelectSubset<T, BrochureRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrochureRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrochureRequests
     * const brochureRequest = await prisma.brochureRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrochureRequestUpdateManyArgs>(args: SelectSubset<T, BrochureRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrochureRequests and returns the data updated in the database.
     * @param {BrochureRequestUpdateManyAndReturnArgs} args - Arguments to update many BrochureRequests.
     * @example
     * // Update many BrochureRequests
     * const brochureRequest = await prisma.brochureRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrochureRequests and only return the `id`
     * const brochureRequestWithIdOnly = await prisma.brochureRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrochureRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, BrochureRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrochureRequest.
     * @param {BrochureRequestUpsertArgs} args - Arguments to update or create a BrochureRequest.
     * @example
     * // Update or create a BrochureRequest
     * const brochureRequest = await prisma.brochureRequest.upsert({
     *   create: {
     *     // ... data to create a BrochureRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrochureRequest we want to update
     *   }
     * })
     */
    upsert<T extends BrochureRequestUpsertArgs>(args: SelectSubset<T, BrochureRequestUpsertArgs<ExtArgs>>): Prisma__BrochureRequestClient<$Result.GetResult<Prisma.$BrochureRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrochureRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureRequestCountArgs} args - Arguments to filter BrochureRequests to count.
     * @example
     * // Count the number of BrochureRequests
     * const count = await prisma.brochureRequest.count({
     *   where: {
     *     // ... the filter for the BrochureRequests we want to count
     *   }
     * })
    **/
    count<T extends BrochureRequestCountArgs>(
      args?: Subset<T, BrochureRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrochureRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrochureRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrochureRequestAggregateArgs>(args: Subset<T, BrochureRequestAggregateArgs>): Prisma.PrismaPromise<GetBrochureRequestAggregateType<T>>

    /**
     * Group by BrochureRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureRequestGroupByArgs} args - Group by arguments.
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
      T extends BrochureRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrochureRequestGroupByArgs['orderBy'] }
        : { orderBy?: BrochureRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrochureRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrochureRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrochureRequest model
   */
  readonly fields: BrochureRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrochureRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrochureRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrochureRequest model
   */
  interface BrochureRequestFieldRefs {
    readonly id: FieldRef<"BrochureRequest", 'Int'>
    readonly name: FieldRef<"BrochureRequest", 'String'>
    readonly email: FieldRef<"BrochureRequest", 'String'>
    readonly phoneNumber: FieldRef<"BrochureRequest", 'String'>
    readonly productId: FieldRef<"BrochureRequest", 'Int'>
    readonly requestedAt: FieldRef<"BrochureRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BrochureRequest findUnique
   */
  export type BrochureRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * Filter, which BrochureRequest to fetch.
     */
    where: BrochureRequestWhereUniqueInput
  }

  /**
   * BrochureRequest findUniqueOrThrow
   */
  export type BrochureRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * Filter, which BrochureRequest to fetch.
     */
    where: BrochureRequestWhereUniqueInput
  }

  /**
   * BrochureRequest findFirst
   */
  export type BrochureRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * Filter, which BrochureRequest to fetch.
     */
    where?: BrochureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrochureRequests to fetch.
     */
    orderBy?: BrochureRequestOrderByWithRelationInput | BrochureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrochureRequests.
     */
    cursor?: BrochureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrochureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrochureRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrochureRequests.
     */
    distinct?: BrochureRequestScalarFieldEnum | BrochureRequestScalarFieldEnum[]
  }

  /**
   * BrochureRequest findFirstOrThrow
   */
  export type BrochureRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * Filter, which BrochureRequest to fetch.
     */
    where?: BrochureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrochureRequests to fetch.
     */
    orderBy?: BrochureRequestOrderByWithRelationInput | BrochureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrochureRequests.
     */
    cursor?: BrochureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrochureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrochureRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrochureRequests.
     */
    distinct?: BrochureRequestScalarFieldEnum | BrochureRequestScalarFieldEnum[]
  }

  /**
   * BrochureRequest findMany
   */
  export type BrochureRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * Filter, which BrochureRequests to fetch.
     */
    where?: BrochureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrochureRequests to fetch.
     */
    orderBy?: BrochureRequestOrderByWithRelationInput | BrochureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrochureRequests.
     */
    cursor?: BrochureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrochureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrochureRequests.
     */
    skip?: number
    distinct?: BrochureRequestScalarFieldEnum | BrochureRequestScalarFieldEnum[]
  }

  /**
   * BrochureRequest create
   */
  export type BrochureRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BrochureRequest.
     */
    data: XOR<BrochureRequestCreateInput, BrochureRequestUncheckedCreateInput>
  }

  /**
   * BrochureRequest createMany
   */
  export type BrochureRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrochureRequests.
     */
    data: BrochureRequestCreateManyInput | BrochureRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrochureRequest createManyAndReturn
   */
  export type BrochureRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * The data used to create many BrochureRequests.
     */
    data: BrochureRequestCreateManyInput | BrochureRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrochureRequest update
   */
  export type BrochureRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BrochureRequest.
     */
    data: XOR<BrochureRequestUpdateInput, BrochureRequestUncheckedUpdateInput>
    /**
     * Choose, which BrochureRequest to update.
     */
    where: BrochureRequestWhereUniqueInput
  }

  /**
   * BrochureRequest updateMany
   */
  export type BrochureRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrochureRequests.
     */
    data: XOR<BrochureRequestUpdateManyMutationInput, BrochureRequestUncheckedUpdateManyInput>
    /**
     * Filter which BrochureRequests to update
     */
    where?: BrochureRequestWhereInput
    /**
     * Limit how many BrochureRequests to update.
     */
    limit?: number
  }

  /**
   * BrochureRequest updateManyAndReturn
   */
  export type BrochureRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * The data used to update BrochureRequests.
     */
    data: XOR<BrochureRequestUpdateManyMutationInput, BrochureRequestUncheckedUpdateManyInput>
    /**
     * Filter which BrochureRequests to update
     */
    where?: BrochureRequestWhereInput
    /**
     * Limit how many BrochureRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrochureRequest upsert
   */
  export type BrochureRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BrochureRequest to update in case it exists.
     */
    where: BrochureRequestWhereUniqueInput
    /**
     * In case the BrochureRequest found by the `where` argument doesn't exist, create a new BrochureRequest with this data.
     */
    create: XOR<BrochureRequestCreateInput, BrochureRequestUncheckedCreateInput>
    /**
     * In case the BrochureRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrochureRequestUpdateInput, BrochureRequestUncheckedUpdateInput>
  }

  /**
   * BrochureRequest delete
   */
  export type BrochureRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
    /**
     * Filter which BrochureRequest to delete.
     */
    where: BrochureRequestWhereUniqueInput
  }

  /**
   * BrochureRequest deleteMany
   */
  export type BrochureRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrochureRequests to delete
     */
    where?: BrochureRequestWhereInput
    /**
     * Limit how many BrochureRequests to delete.
     */
    limit?: number
  }

  /**
   * BrochureRequest without action
   */
  export type BrochureRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureRequest
     */
    select?: BrochureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrochureRequest
     */
    omit?: BrochureRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureRequestInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FeatureSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FeatureMinAggregateOutputType = {
    id: number | null
    productId: number | null
    imageUrl: string | null
    title: string | null
    description: string | null
    feature1: string | null
    feature2: string | null
    feature3: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    imageUrl: string | null
    title: string | null
    description: string | null
    feature1: string | null
    feature2: string | null
    feature3: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    productId: number
    imageUrl: number
    title: number
    description: number
    feature1: number
    feature2: number
    feature3: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type FeatureSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type FeatureMinAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    title?: true
    description?: true
    feature1?: true
    feature2?: true
    feature3?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    title?: true
    description?: true
    feature1?: true
    feature2?: true
    feature3?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    title?: true
    description?: true
    feature1?: true
    feature2?: true
    feature3?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _avg?: FeatureAvgAggregateInputType
    _sum?: FeatureSumAggregateInputType
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: number
    productId: number
    imageUrl: string | null
    title: string | null
    description: string | null
    feature1: string | null
    feature2: string | null
    feature3: string | null
    createdAt: Date
    updatedAt: Date
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    feature1?: boolean
    feature2?: boolean
    feature3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    feature1?: boolean
    feature2?: boolean
    feature3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    feature1?: boolean
    feature2?: boolean
    feature3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    feature1?: boolean
    feature2?: boolean
    feature3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "imageUrl" | "title" | "description" | "feature1" | "feature2" | "feature3" | "createdAt" | "updatedAt", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      imageUrl: string | null
      title: string | null
      description: string | null
      feature1: string | null
      feature2: string | null
      feature3: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
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
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'Int'>
    readonly productId: FieldRef<"Feature", 'Int'>
    readonly imageUrl: FieldRef<"Feature", 'String'>
    readonly title: FieldRef<"Feature", 'String'>
    readonly description: FieldRef<"Feature", 'String'>
    readonly feature1: FieldRef<"Feature", 'String'>
    readonly feature2: FieldRef<"Feature", 'String'>
    readonly feature3: FieldRef<"Feature", 'String'>
    readonly createdAt: FieldRef<"Feature", 'DateTime'>
    readonly updatedAt: FieldRef<"Feature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature updateManyAndReturn
   */
  export type FeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model TcoSection
   */

  export type AggregateTcoSection = {
    _count: TcoSectionCountAggregateOutputType | null
    _avg: TcoSectionAvgAggregateOutputType | null
    _sum: TcoSectionSumAggregateOutputType | null
    _min: TcoSectionMinAggregateOutputType | null
    _max: TcoSectionMaxAggregateOutputType | null
  }

  export type TcoSectionAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    dieselSaving: number | null
  }

  export type TcoSectionSumAggregateOutputType = {
    id: number | null
    productId: number | null
    dieselSaving: number | null
  }

  export type TcoSectionMinAggregateOutputType = {
    id: number | null
    productId: number | null
    heading: string | null
    description: string | null
    dieselSaving: number | null
    graphUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TcoSectionMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    heading: string | null
    description: string | null
    dieselSaving: number | null
    graphUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TcoSectionCountAggregateOutputType = {
    id: number
    productId: number
    heading: number
    description: number
    dieselSaving: number
    graphUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TcoSectionAvgAggregateInputType = {
    id?: true
    productId?: true
    dieselSaving?: true
  }

  export type TcoSectionSumAggregateInputType = {
    id?: true
    productId?: true
    dieselSaving?: true
  }

  export type TcoSectionMinAggregateInputType = {
    id?: true
    productId?: true
    heading?: true
    description?: true
    dieselSaving?: true
    graphUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TcoSectionMaxAggregateInputType = {
    id?: true
    productId?: true
    heading?: true
    description?: true
    dieselSaving?: true
    graphUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TcoSectionCountAggregateInputType = {
    id?: true
    productId?: true
    heading?: true
    description?: true
    dieselSaving?: true
    graphUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TcoSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TcoSection to aggregate.
     */
    where?: TcoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcoSections to fetch.
     */
    orderBy?: TcoSectionOrderByWithRelationInput | TcoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TcoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcoSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TcoSections
    **/
    _count?: true | TcoSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TcoSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TcoSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TcoSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TcoSectionMaxAggregateInputType
  }

  export type GetTcoSectionAggregateType<T extends TcoSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateTcoSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTcoSection[P]>
      : GetScalarType<T[P], AggregateTcoSection[P]>
  }




  export type TcoSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TcoSectionWhereInput
    orderBy?: TcoSectionOrderByWithAggregationInput | TcoSectionOrderByWithAggregationInput[]
    by: TcoSectionScalarFieldEnum[] | TcoSectionScalarFieldEnum
    having?: TcoSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TcoSectionCountAggregateInputType | true
    _avg?: TcoSectionAvgAggregateInputType
    _sum?: TcoSectionSumAggregateInputType
    _min?: TcoSectionMinAggregateInputType
    _max?: TcoSectionMaxAggregateInputType
  }

  export type TcoSectionGroupByOutputType = {
    id: number
    productId: number
    heading: string | null
    description: string | null
    dieselSaving: number | null
    graphUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: TcoSectionCountAggregateOutputType | null
    _avg: TcoSectionAvgAggregateOutputType | null
    _sum: TcoSectionSumAggregateOutputType | null
    _min: TcoSectionMinAggregateOutputType | null
    _max: TcoSectionMaxAggregateOutputType | null
  }

  type GetTcoSectionGroupByPayload<T extends TcoSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TcoSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TcoSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TcoSectionGroupByOutputType[P]>
            : GetScalarType<T[P], TcoSectionGroupByOutputType[P]>
        }
      >
    >


  export type TcoSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    heading?: boolean
    description?: boolean
    dieselSaving?: boolean
    graphUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tcoSection"]>

  export type TcoSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    heading?: boolean
    description?: boolean
    dieselSaving?: boolean
    graphUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tcoSection"]>

  export type TcoSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    heading?: boolean
    description?: boolean
    dieselSaving?: boolean
    graphUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tcoSection"]>

  export type TcoSectionSelectScalar = {
    id?: boolean
    productId?: boolean
    heading?: boolean
    description?: boolean
    dieselSaving?: boolean
    graphUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TcoSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "heading" | "description" | "dieselSaving" | "graphUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["tcoSection"]>
  export type TcoSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TcoSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TcoSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $TcoSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TcoSection"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      heading: string | null
      description: string | null
      dieselSaving: number | null
      graphUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tcoSection"]>
    composites: {}
  }

  type TcoSectionGetPayload<S extends boolean | null | undefined | TcoSectionDefaultArgs> = $Result.GetResult<Prisma.$TcoSectionPayload, S>

  type TcoSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TcoSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TcoSectionCountAggregateInputType | true
    }

  export interface TcoSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TcoSection'], meta: { name: 'TcoSection' } }
    /**
     * Find zero or one TcoSection that matches the filter.
     * @param {TcoSectionFindUniqueArgs} args - Arguments to find a TcoSection
     * @example
     * // Get one TcoSection
     * const tcoSection = await prisma.tcoSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TcoSectionFindUniqueArgs>(args: SelectSubset<T, TcoSectionFindUniqueArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TcoSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TcoSectionFindUniqueOrThrowArgs} args - Arguments to find a TcoSection
     * @example
     * // Get one TcoSection
     * const tcoSection = await prisma.tcoSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TcoSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, TcoSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TcoSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcoSectionFindFirstArgs} args - Arguments to find a TcoSection
     * @example
     * // Get one TcoSection
     * const tcoSection = await prisma.tcoSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TcoSectionFindFirstArgs>(args?: SelectSubset<T, TcoSectionFindFirstArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TcoSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcoSectionFindFirstOrThrowArgs} args - Arguments to find a TcoSection
     * @example
     * // Get one TcoSection
     * const tcoSection = await prisma.tcoSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TcoSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, TcoSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TcoSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcoSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TcoSections
     * const tcoSections = await prisma.tcoSection.findMany()
     * 
     * // Get first 10 TcoSections
     * const tcoSections = await prisma.tcoSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tcoSectionWithIdOnly = await prisma.tcoSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TcoSectionFindManyArgs>(args?: SelectSubset<T, TcoSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TcoSection.
     * @param {TcoSectionCreateArgs} args - Arguments to create a TcoSection.
     * @example
     * // Create one TcoSection
     * const TcoSection = await prisma.tcoSection.create({
     *   data: {
     *     // ... data to create a TcoSection
     *   }
     * })
     * 
     */
    create<T extends TcoSectionCreateArgs>(args: SelectSubset<T, TcoSectionCreateArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TcoSections.
     * @param {TcoSectionCreateManyArgs} args - Arguments to create many TcoSections.
     * @example
     * // Create many TcoSections
     * const tcoSection = await prisma.tcoSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TcoSectionCreateManyArgs>(args?: SelectSubset<T, TcoSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TcoSections and returns the data saved in the database.
     * @param {TcoSectionCreateManyAndReturnArgs} args - Arguments to create many TcoSections.
     * @example
     * // Create many TcoSections
     * const tcoSection = await prisma.tcoSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TcoSections and only return the `id`
     * const tcoSectionWithIdOnly = await prisma.tcoSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TcoSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, TcoSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TcoSection.
     * @param {TcoSectionDeleteArgs} args - Arguments to delete one TcoSection.
     * @example
     * // Delete one TcoSection
     * const TcoSection = await prisma.tcoSection.delete({
     *   where: {
     *     // ... filter to delete one TcoSection
     *   }
     * })
     * 
     */
    delete<T extends TcoSectionDeleteArgs>(args: SelectSubset<T, TcoSectionDeleteArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TcoSection.
     * @param {TcoSectionUpdateArgs} args - Arguments to update one TcoSection.
     * @example
     * // Update one TcoSection
     * const tcoSection = await prisma.tcoSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TcoSectionUpdateArgs>(args: SelectSubset<T, TcoSectionUpdateArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TcoSections.
     * @param {TcoSectionDeleteManyArgs} args - Arguments to filter TcoSections to delete.
     * @example
     * // Delete a few TcoSections
     * const { count } = await prisma.tcoSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TcoSectionDeleteManyArgs>(args?: SelectSubset<T, TcoSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TcoSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcoSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TcoSections
     * const tcoSection = await prisma.tcoSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TcoSectionUpdateManyArgs>(args: SelectSubset<T, TcoSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TcoSections and returns the data updated in the database.
     * @param {TcoSectionUpdateManyAndReturnArgs} args - Arguments to update many TcoSections.
     * @example
     * // Update many TcoSections
     * const tcoSection = await prisma.tcoSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TcoSections and only return the `id`
     * const tcoSectionWithIdOnly = await prisma.tcoSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends TcoSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, TcoSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TcoSection.
     * @param {TcoSectionUpsertArgs} args - Arguments to update or create a TcoSection.
     * @example
     * // Update or create a TcoSection
     * const tcoSection = await prisma.tcoSection.upsert({
     *   create: {
     *     // ... data to create a TcoSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TcoSection we want to update
     *   }
     * })
     */
    upsert<T extends TcoSectionUpsertArgs>(args: SelectSubset<T, TcoSectionUpsertArgs<ExtArgs>>): Prisma__TcoSectionClient<$Result.GetResult<Prisma.$TcoSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TcoSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcoSectionCountArgs} args - Arguments to filter TcoSections to count.
     * @example
     * // Count the number of TcoSections
     * const count = await prisma.tcoSection.count({
     *   where: {
     *     // ... the filter for the TcoSections we want to count
     *   }
     * })
    **/
    count<T extends TcoSectionCountArgs>(
      args?: Subset<T, TcoSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TcoSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TcoSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcoSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TcoSectionAggregateArgs>(args: Subset<T, TcoSectionAggregateArgs>): Prisma.PrismaPromise<GetTcoSectionAggregateType<T>>

    /**
     * Group by TcoSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcoSectionGroupByArgs} args - Group by arguments.
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
      T extends TcoSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TcoSectionGroupByArgs['orderBy'] }
        : { orderBy?: TcoSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TcoSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTcoSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TcoSection model
   */
  readonly fields: TcoSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TcoSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TcoSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TcoSection model
   */
  interface TcoSectionFieldRefs {
    readonly id: FieldRef<"TcoSection", 'Int'>
    readonly productId: FieldRef<"TcoSection", 'Int'>
    readonly heading: FieldRef<"TcoSection", 'String'>
    readonly description: FieldRef<"TcoSection", 'String'>
    readonly dieselSaving: FieldRef<"TcoSection", 'Float'>
    readonly graphUrl: FieldRef<"TcoSection", 'String'>
    readonly createdAt: FieldRef<"TcoSection", 'DateTime'>
    readonly updatedAt: FieldRef<"TcoSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TcoSection findUnique
   */
  export type TcoSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * Filter, which TcoSection to fetch.
     */
    where: TcoSectionWhereUniqueInput
  }

  /**
   * TcoSection findUniqueOrThrow
   */
  export type TcoSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * Filter, which TcoSection to fetch.
     */
    where: TcoSectionWhereUniqueInput
  }

  /**
   * TcoSection findFirst
   */
  export type TcoSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * Filter, which TcoSection to fetch.
     */
    where?: TcoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcoSections to fetch.
     */
    orderBy?: TcoSectionOrderByWithRelationInput | TcoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TcoSections.
     */
    cursor?: TcoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcoSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TcoSections.
     */
    distinct?: TcoSectionScalarFieldEnum | TcoSectionScalarFieldEnum[]
  }

  /**
   * TcoSection findFirstOrThrow
   */
  export type TcoSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * Filter, which TcoSection to fetch.
     */
    where?: TcoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcoSections to fetch.
     */
    orderBy?: TcoSectionOrderByWithRelationInput | TcoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TcoSections.
     */
    cursor?: TcoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcoSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TcoSections.
     */
    distinct?: TcoSectionScalarFieldEnum | TcoSectionScalarFieldEnum[]
  }

  /**
   * TcoSection findMany
   */
  export type TcoSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * Filter, which TcoSections to fetch.
     */
    where?: TcoSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcoSections to fetch.
     */
    orderBy?: TcoSectionOrderByWithRelationInput | TcoSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TcoSections.
     */
    cursor?: TcoSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcoSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcoSections.
     */
    skip?: number
    distinct?: TcoSectionScalarFieldEnum | TcoSectionScalarFieldEnum[]
  }

  /**
   * TcoSection create
   */
  export type TcoSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a TcoSection.
     */
    data: XOR<TcoSectionCreateInput, TcoSectionUncheckedCreateInput>
  }

  /**
   * TcoSection createMany
   */
  export type TcoSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TcoSections.
     */
    data: TcoSectionCreateManyInput | TcoSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TcoSection createManyAndReturn
   */
  export type TcoSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * The data used to create many TcoSections.
     */
    data: TcoSectionCreateManyInput | TcoSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TcoSection update
   */
  export type TcoSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a TcoSection.
     */
    data: XOR<TcoSectionUpdateInput, TcoSectionUncheckedUpdateInput>
    /**
     * Choose, which TcoSection to update.
     */
    where: TcoSectionWhereUniqueInput
  }

  /**
   * TcoSection updateMany
   */
  export type TcoSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TcoSections.
     */
    data: XOR<TcoSectionUpdateManyMutationInput, TcoSectionUncheckedUpdateManyInput>
    /**
     * Filter which TcoSections to update
     */
    where?: TcoSectionWhereInput
    /**
     * Limit how many TcoSections to update.
     */
    limit?: number
  }

  /**
   * TcoSection updateManyAndReturn
   */
  export type TcoSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * The data used to update TcoSections.
     */
    data: XOR<TcoSectionUpdateManyMutationInput, TcoSectionUncheckedUpdateManyInput>
    /**
     * Filter which TcoSections to update
     */
    where?: TcoSectionWhereInput
    /**
     * Limit how many TcoSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TcoSection upsert
   */
  export type TcoSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the TcoSection to update in case it exists.
     */
    where: TcoSectionWhereUniqueInput
    /**
     * In case the TcoSection found by the `where` argument doesn't exist, create a new TcoSection with this data.
     */
    create: XOR<TcoSectionCreateInput, TcoSectionUncheckedCreateInput>
    /**
     * In case the TcoSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TcoSectionUpdateInput, TcoSectionUncheckedUpdateInput>
  }

  /**
   * TcoSection delete
   */
  export type TcoSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
    /**
     * Filter which TcoSection to delete.
     */
    where: TcoSectionWhereUniqueInput
  }

  /**
   * TcoSection deleteMany
   */
  export type TcoSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TcoSections to delete
     */
    where?: TcoSectionWhereInput
    /**
     * Limit how many TcoSections to delete.
     */
    limit?: number
  }

  /**
   * TcoSection without action
   */
  export type TcoSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcoSection
     */
    select?: TcoSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcoSection
     */
    omit?: TcoSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcoSectionInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    excerpt: string | null
    postedOn: Date | null
    readingTime: string | null
    imageUrl: string | null
    longDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    excerpt: string | null
    postedOn: Date | null
    readingTime: string | null
    imageUrl: string | null
    longDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    excerpt: number
    postedOn: number
    readingTime: number
    imageUrl: number
    longDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    excerpt?: true
    postedOn?: true
    readingTime?: true
    imageUrl?: true
    longDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    excerpt?: true
    postedOn?: true
    readingTime?: true
    imageUrl?: true
    longDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    excerpt?: true
    postedOn?: true
    readingTime?: true
    imageUrl?: true
    longDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    title: string
    subtitle: string | null
    excerpt: string
    postedOn: Date
    readingTime: string
    imageUrl: string | null
    longDescription: string
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    excerpt?: boolean
    postedOn?: boolean
    readingTime?: boolean
    imageUrl?: boolean
    longDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    excerpt?: boolean
    postedOn?: boolean
    readingTime?: boolean
    imageUrl?: boolean
    longDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    excerpt?: boolean
    postedOn?: boolean
    readingTime?: boolean
    imageUrl?: boolean
    longDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    excerpt?: boolean
    postedOn?: boolean
    readingTime?: boolean
    imageUrl?: boolean
    longDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subtitle" | "excerpt" | "postedOn" | "readingTime" | "imageUrl" | "longDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      subtitle: string | null
      excerpt: string
      postedOn: Date
      readingTime: string
      imageUrl: string | null
      longDescription: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly subtitle: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly postedOn: FieldRef<"Blog", 'DateTime'>
    readonly readingTime: FieldRef<"Blog", 'String'>
    readonly imageUrl: FieldRef<"Blog", 'String'>
    readonly longDescription: FieldRef<"Blog", 'String'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    imageUrl: 'imageUrl',
    image2: 'image2',
    brochureUrl: 'brochureUrl',
    videoUrl: 'videoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    email: 'email',
    address: 'address',
    country: 'country',
    state: 'state',
    city: 'city',
    pincode: 'pincode',
    aadharNumber: 'aadharNumber',
    panNumber: 'panNumber',
    orderType: 'orderType',
    message: 'message',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const DemoFormScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    email: 'email',
    address: 'address',
    message: 'message',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DemoFormScalarFieldEnum = (typeof DemoFormScalarFieldEnum)[keyof typeof DemoFormScalarFieldEnum]


  export const BrochureRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    productId: 'productId',
    requestedAt: 'requestedAt'
  };

  export type BrochureRequestScalarFieldEnum = (typeof BrochureRequestScalarFieldEnum)[keyof typeof BrochureRequestScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    imageUrl: 'imageUrl',
    title: 'title',
    description: 'description',
    feature1: 'feature1',
    feature2: 'feature2',
    feature3: 'feature3',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const TcoSectionScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    heading: 'heading',
    description: 'description',
    dieselSaving: 'dieselSaving',
    graphUrl: 'graphUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TcoSectionScalarFieldEnum = (typeof TcoSectionScalarFieldEnum)[keyof typeof TcoSectionScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    excerpt: 'excerpt',
    postedOn: 'postedOn',
    readingTime: 'readingTime',
    imageUrl: 'imageUrl',
    longDescription: 'longDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrderType'
   */
  export type EnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType'>
    


  /**
   * Reference to a field of type 'OrderType[]'
   */
  export type ListEnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    image2?: StringNullableFilter<"Product"> | string | null
    brochureUrl?: StringNullableFilter<"Product"> | string | null
    videoUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orders?: OrderListRelationFilter
    brochureRequests?: BrochureRequestListRelationFilter
    features?: FeatureListRelationFilter
    tcoSections?: TcoSectionListRelationFilter
    demoform?: DemoFormListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    image2?: SortOrderInput | SortOrder
    brochureUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    brochureRequests?: BrochureRequestOrderByRelationAggregateInput
    features?: FeatureOrderByRelationAggregateInput
    tcoSections?: TcoSectionOrderByRelationAggregateInput
    demoform?: DemoFormOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    image2?: StringNullableFilter<"Product"> | string | null
    brochureUrl?: StringNullableFilter<"Product"> | string | null
    videoUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orders?: OrderListRelationFilter
    brochureRequests?: BrochureRequestListRelationFilter
    features?: FeatureListRelationFilter
    tcoSections?: TcoSectionListRelationFilter
    demoform?: DemoFormListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    image2?: SortOrderInput | SortOrder
    brochureUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    brochureUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    name?: StringFilter<"Order"> | string
    phoneNumber?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    country?: StringFilter<"Order"> | string
    state?: StringFilter<"Order"> | string
    city?: StringFilter<"Order"> | string
    pincode?: StringFilter<"Order"> | string
    aadharNumber?: StringFilter<"Order"> | string
    panNumber?: StringFilter<"Order"> | string
    orderType?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    message?: StringNullableFilter<"Order"> | string | null
    productId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    aadharNumber?: SortOrder
    panNumber?: SortOrder
    orderType?: SortOrder
    message?: SortOrderInput | SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    name?: StringFilter<"Order"> | string
    phoneNumber?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    country?: StringFilter<"Order"> | string
    state?: StringFilter<"Order"> | string
    city?: StringFilter<"Order"> | string
    pincode?: StringFilter<"Order"> | string
    aadharNumber?: StringFilter<"Order"> | string
    panNumber?: StringFilter<"Order"> | string
    orderType?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    message?: StringNullableFilter<"Order"> | string | null
    productId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    aadharNumber?: SortOrder
    panNumber?: SortOrder
    orderType?: SortOrder
    message?: SortOrderInput | SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    name?: StringWithAggregatesFilter<"Order"> | string
    phoneNumber?: StringWithAggregatesFilter<"Order"> | string
    email?: StringWithAggregatesFilter<"Order"> | string
    address?: StringWithAggregatesFilter<"Order"> | string
    country?: StringWithAggregatesFilter<"Order"> | string
    state?: StringWithAggregatesFilter<"Order"> | string
    city?: StringWithAggregatesFilter<"Order"> | string
    pincode?: StringWithAggregatesFilter<"Order"> | string
    aadharNumber?: StringWithAggregatesFilter<"Order"> | string
    panNumber?: StringWithAggregatesFilter<"Order"> | string
    orderType?: EnumOrderTypeWithAggregatesFilter<"Order"> | $Enums.OrderType
    message?: StringNullableWithAggregatesFilter<"Order"> | string | null
    productId?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type DemoFormWhereInput = {
    AND?: DemoFormWhereInput | DemoFormWhereInput[]
    OR?: DemoFormWhereInput[]
    NOT?: DemoFormWhereInput | DemoFormWhereInput[]
    id?: IntFilter<"DemoForm"> | number
    name?: StringFilter<"DemoForm"> | string
    phoneNumber?: StringFilter<"DemoForm"> | string
    email?: StringFilter<"DemoForm"> | string
    address?: StringFilter<"DemoForm"> | string
    message?: StringNullableFilter<"DemoForm"> | string | null
    productId?: IntFilter<"DemoForm"> | number
    createdAt?: DateTimeFilter<"DemoForm"> | Date | string
    updatedAt?: DateTimeFilter<"DemoForm"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DemoFormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    message?: SortOrderInput | SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type DemoFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DemoFormWhereInput | DemoFormWhereInput[]
    OR?: DemoFormWhereInput[]
    NOT?: DemoFormWhereInput | DemoFormWhereInput[]
    name?: StringFilter<"DemoForm"> | string
    phoneNumber?: StringFilter<"DemoForm"> | string
    email?: StringFilter<"DemoForm"> | string
    address?: StringFilter<"DemoForm"> | string
    message?: StringNullableFilter<"DemoForm"> | string | null
    productId?: IntFilter<"DemoForm"> | number
    createdAt?: DateTimeFilter<"DemoForm"> | Date | string
    updatedAt?: DateTimeFilter<"DemoForm"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type DemoFormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    message?: SortOrderInput | SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DemoFormCountOrderByAggregateInput
    _avg?: DemoFormAvgOrderByAggregateInput
    _max?: DemoFormMaxOrderByAggregateInput
    _min?: DemoFormMinOrderByAggregateInput
    _sum?: DemoFormSumOrderByAggregateInput
  }

  export type DemoFormScalarWhereWithAggregatesInput = {
    AND?: DemoFormScalarWhereWithAggregatesInput | DemoFormScalarWhereWithAggregatesInput[]
    OR?: DemoFormScalarWhereWithAggregatesInput[]
    NOT?: DemoFormScalarWhereWithAggregatesInput | DemoFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DemoForm"> | number
    name?: StringWithAggregatesFilter<"DemoForm"> | string
    phoneNumber?: StringWithAggregatesFilter<"DemoForm"> | string
    email?: StringWithAggregatesFilter<"DemoForm"> | string
    address?: StringWithAggregatesFilter<"DemoForm"> | string
    message?: StringNullableWithAggregatesFilter<"DemoForm"> | string | null
    productId?: IntWithAggregatesFilter<"DemoForm"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DemoForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DemoForm"> | Date | string
  }

  export type BrochureRequestWhereInput = {
    AND?: BrochureRequestWhereInput | BrochureRequestWhereInput[]
    OR?: BrochureRequestWhereInput[]
    NOT?: BrochureRequestWhereInput | BrochureRequestWhereInput[]
    id?: IntFilter<"BrochureRequest"> | number
    name?: StringFilter<"BrochureRequest"> | string
    email?: StringFilter<"BrochureRequest"> | string
    phoneNumber?: StringFilter<"BrochureRequest"> | string
    productId?: IntFilter<"BrochureRequest"> | number
    requestedAt?: DateTimeFilter<"BrochureRequest"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type BrochureRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    productId?: SortOrder
    requestedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type BrochureRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrochureRequestWhereInput | BrochureRequestWhereInput[]
    OR?: BrochureRequestWhereInput[]
    NOT?: BrochureRequestWhereInput | BrochureRequestWhereInput[]
    name?: StringFilter<"BrochureRequest"> | string
    email?: StringFilter<"BrochureRequest"> | string
    phoneNumber?: StringFilter<"BrochureRequest"> | string
    productId?: IntFilter<"BrochureRequest"> | number
    requestedAt?: DateTimeFilter<"BrochureRequest"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type BrochureRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    productId?: SortOrder
    requestedAt?: SortOrder
    _count?: BrochureRequestCountOrderByAggregateInput
    _avg?: BrochureRequestAvgOrderByAggregateInput
    _max?: BrochureRequestMaxOrderByAggregateInput
    _min?: BrochureRequestMinOrderByAggregateInput
    _sum?: BrochureRequestSumOrderByAggregateInput
  }

  export type BrochureRequestScalarWhereWithAggregatesInput = {
    AND?: BrochureRequestScalarWhereWithAggregatesInput | BrochureRequestScalarWhereWithAggregatesInput[]
    OR?: BrochureRequestScalarWhereWithAggregatesInput[]
    NOT?: BrochureRequestScalarWhereWithAggregatesInput | BrochureRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BrochureRequest"> | number
    name?: StringWithAggregatesFilter<"BrochureRequest"> | string
    email?: StringWithAggregatesFilter<"BrochureRequest"> | string
    phoneNumber?: StringWithAggregatesFilter<"BrochureRequest"> | string
    productId?: IntWithAggregatesFilter<"BrochureRequest"> | number
    requestedAt?: DateTimeWithAggregatesFilter<"BrochureRequest"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: IntFilter<"Feature"> | number
    productId?: IntFilter<"Feature"> | number
    imageUrl?: StringNullableFilter<"Feature"> | string | null
    title?: StringNullableFilter<"Feature"> | string | null
    description?: StringNullableFilter<"Feature"> | string | null
    feature1?: StringNullableFilter<"Feature"> | string | null
    feature2?: StringNullableFilter<"Feature"> | string | null
    feature3?: StringNullableFilter<"Feature"> | string | null
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    feature1?: SortOrderInput | SortOrder
    feature2?: SortOrderInput | SortOrder
    feature3?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    productId?: IntFilter<"Feature"> | number
    imageUrl?: StringNullableFilter<"Feature"> | string | null
    title?: StringNullableFilter<"Feature"> | string | null
    description?: StringNullableFilter<"Feature"> | string | null
    feature1?: StringNullableFilter<"Feature"> | string | null
    feature2?: StringNullableFilter<"Feature"> | string | null
    feature3?: StringNullableFilter<"Feature"> | string | null
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    feature1?: SortOrderInput | SortOrder
    feature2?: SortOrderInput | SortOrder
    feature3?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _avg?: FeatureAvgOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
    _sum?: FeatureSumOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feature"> | number
    productId?: IntWithAggregatesFilter<"Feature"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    title?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    description?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    feature1?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    feature2?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    feature3?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
  }

  export type TcoSectionWhereInput = {
    AND?: TcoSectionWhereInput | TcoSectionWhereInput[]
    OR?: TcoSectionWhereInput[]
    NOT?: TcoSectionWhereInput | TcoSectionWhereInput[]
    id?: IntFilter<"TcoSection"> | number
    productId?: IntFilter<"TcoSection"> | number
    heading?: StringNullableFilter<"TcoSection"> | string | null
    description?: StringNullableFilter<"TcoSection"> | string | null
    dieselSaving?: FloatNullableFilter<"TcoSection"> | number | null
    graphUrl?: StringNullableFilter<"TcoSection"> | string | null
    createdAt?: DateTimeFilter<"TcoSection"> | Date | string
    updatedAt?: DateTimeFilter<"TcoSection"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type TcoSectionOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    heading?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    dieselSaving?: SortOrderInput | SortOrder
    graphUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type TcoSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TcoSectionWhereInput | TcoSectionWhereInput[]
    OR?: TcoSectionWhereInput[]
    NOT?: TcoSectionWhereInput | TcoSectionWhereInput[]
    productId?: IntFilter<"TcoSection"> | number
    heading?: StringNullableFilter<"TcoSection"> | string | null
    description?: StringNullableFilter<"TcoSection"> | string | null
    dieselSaving?: FloatNullableFilter<"TcoSection"> | number | null
    graphUrl?: StringNullableFilter<"TcoSection"> | string | null
    createdAt?: DateTimeFilter<"TcoSection"> | Date | string
    updatedAt?: DateTimeFilter<"TcoSection"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type TcoSectionOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    heading?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    dieselSaving?: SortOrderInput | SortOrder
    graphUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TcoSectionCountOrderByAggregateInput
    _avg?: TcoSectionAvgOrderByAggregateInput
    _max?: TcoSectionMaxOrderByAggregateInput
    _min?: TcoSectionMinOrderByAggregateInput
    _sum?: TcoSectionSumOrderByAggregateInput
  }

  export type TcoSectionScalarWhereWithAggregatesInput = {
    AND?: TcoSectionScalarWhereWithAggregatesInput | TcoSectionScalarWhereWithAggregatesInput[]
    OR?: TcoSectionScalarWhereWithAggregatesInput[]
    NOT?: TcoSectionScalarWhereWithAggregatesInput | TcoSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TcoSection"> | number
    productId?: IntWithAggregatesFilter<"TcoSection"> | number
    heading?: StringNullableWithAggregatesFilter<"TcoSection"> | string | null
    description?: StringNullableWithAggregatesFilter<"TcoSection"> | string | null
    dieselSaving?: FloatNullableWithAggregatesFilter<"TcoSection"> | number | null
    graphUrl?: StringNullableWithAggregatesFilter<"TcoSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TcoSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TcoSection"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    subtitle?: StringNullableFilter<"Blog"> | string | null
    excerpt?: StringFilter<"Blog"> | string
    postedOn?: DateTimeFilter<"Blog"> | Date | string
    readingTime?: StringFilter<"Blog"> | string
    imageUrl?: StringNullableFilter<"Blog"> | string | null
    longDescription?: StringFilter<"Blog"> | string
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    excerpt?: SortOrder
    postedOn?: SortOrder
    readingTime?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    longDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    subtitle?: StringNullableFilter<"Blog"> | string | null
    excerpt?: StringFilter<"Blog"> | string
    postedOn?: DateTimeFilter<"Blog"> | Date | string
    readingTime?: StringFilter<"Blog"> | string
    imageUrl?: StringNullableFilter<"Blog"> | string | null
    longDescription?: StringFilter<"Blog"> | string
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    excerpt?: SortOrder
    postedOn?: SortOrder
    readingTime?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    longDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    title?: StringWithAggregatesFilter<"Blog"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    excerpt?: StringWithAggregatesFilter<"Blog"> | string
    postedOn?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    readingTime?: StringWithAggregatesFilter<"Blog"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    longDescription?: StringWithAggregatesFilter<"Blog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type ProductCreateInput = {
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestCreateNestedManyWithoutProductInput
    features?: FeatureCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionCreateNestedManyWithoutProductInput
    demoform?: DemoFormCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestUncheckedCreateNestedManyWithoutProductInput
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionUncheckedCreateNestedManyWithoutProductInput
    demoform?: DemoFormUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUpdateManyWithoutProductNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUncheckedUpdateManyWithoutProductNestedInput
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUncheckedUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    name: string
    phoneNumber: string
    email: string
    address: string
    country: string
    state: string
    city: string
    pincode: string
    aadharNumber: string
    panNumber: string
    orderType: $Enums.OrderType
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    country: string
    state: string
    city: string
    pincode: string
    aadharNumber: string
    panNumber: string
    orderType: $Enums.OrderType
    message?: string | null
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    aadharNumber?: StringFieldUpdateOperationsInput | string
    panNumber?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    aadharNumber?: StringFieldUpdateOperationsInput | string
    panNumber?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    country: string
    state: string
    city: string
    pincode: string
    aadharNumber: string
    panNumber: string
    orderType: $Enums.OrderType
    message?: string | null
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    aadharNumber?: StringFieldUpdateOperationsInput | string
    panNumber?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    aadharNumber?: StringFieldUpdateOperationsInput | string
    panNumber?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoFormCreateInput = {
    name: string
    phoneNumber: string
    email: string
    address: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutDemoformInput
  }

  export type DemoFormUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    message?: string | null
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoFormUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDemoformNestedInput
  }

  export type DemoFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoFormCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    message?: string | null
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoFormUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureRequestCreateInput = {
    name: string
    email: string
    phoneNumber: string
    requestedAt?: Date | string
    product: ProductCreateNestedOneWithoutBrochureRequestsInput
  }

  export type BrochureRequestUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    productId: number
    requestedAt?: Date | string
  }

  export type BrochureRequestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBrochureRequestsNestedInput
  }

  export type BrochureRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureRequestCreateManyInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    productId: number
    requestedAt?: Date | string
  }

  export type BrochureRequestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    imageUrl?: string | null
    title?: string | null
    description?: string | null
    feature1?: string | null
    feature2?: string | null
    feature3?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutFeaturesInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: number
    productId: number
    imageUrl?: string | null
    title?: string | null
    description?: string | null
    feature1?: string | null
    feature2?: string | null
    feature3?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureUpdateInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feature1?: NullableStringFieldUpdateOperationsInput | string | null
    feature2?: NullableStringFieldUpdateOperationsInput | string | null
    feature3?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feature1?: NullableStringFieldUpdateOperationsInput | string | null
    feature2?: NullableStringFieldUpdateOperationsInput | string | null
    feature3?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateManyInput = {
    id?: number
    productId: number
    imageUrl?: string | null
    title?: string | null
    description?: string | null
    feature1?: string | null
    feature2?: string | null
    feature3?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureUpdateManyMutationInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feature1?: NullableStringFieldUpdateOperationsInput | string | null
    feature2?: NullableStringFieldUpdateOperationsInput | string | null
    feature3?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feature1?: NullableStringFieldUpdateOperationsInput | string | null
    feature2?: NullableStringFieldUpdateOperationsInput | string | null
    feature3?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TcoSectionCreateInput = {
    heading?: string | null
    description?: string | null
    dieselSaving?: number | null
    graphUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutTcoSectionsInput
  }

  export type TcoSectionUncheckedCreateInput = {
    id?: number
    productId: number
    heading?: string | null
    description?: string | null
    dieselSaving?: number | null
    graphUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TcoSectionUpdateInput = {
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dieselSaving?: NullableFloatFieldUpdateOperationsInput | number | null
    graphUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTcoSectionsNestedInput
  }

  export type TcoSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dieselSaving?: NullableFloatFieldUpdateOperationsInput | number | null
    graphUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TcoSectionCreateManyInput = {
    id?: number
    productId: number
    heading?: string | null
    description?: string | null
    dieselSaving?: number | null
    graphUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TcoSectionUpdateManyMutationInput = {
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dieselSaving?: NullableFloatFieldUpdateOperationsInput | number | null
    graphUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TcoSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dieselSaving?: NullableFloatFieldUpdateOperationsInput | number | null
    graphUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    title: string
    subtitle?: string | null
    excerpt: string
    postedOn: Date | string
    readingTime: string
    imageUrl?: string | null
    longDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    title: string
    subtitle?: string | null
    excerpt: string
    postedOn: Date | string
    readingTime: string
    imageUrl?: string | null
    longDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: StringFieldUpdateOperationsInput | string
    postedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    readingTime?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: StringFieldUpdateOperationsInput | string
    postedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    readingTime?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: number
    title: string
    subtitle?: string | null
    excerpt: string
    postedOn: Date | string
    readingTime: string
    imageUrl?: string | null
    longDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: StringFieldUpdateOperationsInput | string
    postedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    readingTime?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: StringFieldUpdateOperationsInput | string
    postedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    readingTime?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BrochureRequestListRelationFilter = {
    every?: BrochureRequestWhereInput
    some?: BrochureRequestWhereInput
    none?: BrochureRequestWhereInput
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type TcoSectionListRelationFilter = {
    every?: TcoSectionWhereInput
    some?: TcoSectionWhereInput
    none?: TcoSectionWhereInput
  }

  export type DemoFormListRelationFilter = {
    every?: DemoFormWhereInput
    some?: DemoFormWhereInput
    none?: DemoFormWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrochureRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TcoSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemoFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    image2?: SortOrder
    brochureUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    image2?: SortOrder
    brochureUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    image2?: SortOrder
    brochureUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    aadharNumber?: SortOrder
    panNumber?: SortOrder
    orderType?: SortOrder
    message?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    aadharNumber?: SortOrder
    panNumber?: SortOrder
    orderType?: SortOrder
    message?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    aadharNumber?: SortOrder
    panNumber?: SortOrder
    orderType?: SortOrder
    message?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type EnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
  }

  export type DemoFormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    message?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoFormAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type DemoFormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    message?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoFormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    message?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoFormSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type BrochureRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    productId?: SortOrder
    requestedAt?: SortOrder
  }

  export type BrochureRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type BrochureRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    productId?: SortOrder
    requestedAt?: SortOrder
  }

  export type BrochureRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    productId?: SortOrder
    requestedAt?: SortOrder
  }

  export type BrochureRequestSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feature1?: SortOrder
    feature2?: SortOrder
    feature3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feature1?: SortOrder
    feature2?: SortOrder
    feature3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feature1?: SortOrder
    feature2?: SortOrder
    feature3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
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

  export type TcoSectionCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    dieselSaving?: SortOrder
    graphUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TcoSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    dieselSaving?: SortOrder
  }

  export type TcoSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    dieselSaving?: SortOrder
    graphUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TcoSectionMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    dieselSaving?: SortOrder
    graphUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TcoSectionSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    dieselSaving?: SortOrder
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

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    excerpt?: SortOrder
    postedOn?: SortOrder
    readingTime?: SortOrder
    imageUrl?: SortOrder
    longDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    excerpt?: SortOrder
    postedOn?: SortOrder
    readingTime?: SortOrder
    imageUrl?: SortOrder
    longDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    excerpt?: SortOrder
    postedOn?: SortOrder
    readingTime?: SortOrder
    imageUrl?: SortOrder
    longDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BrochureRequestCreateNestedManyWithoutProductInput = {
    create?: XOR<BrochureRequestCreateWithoutProductInput, BrochureRequestUncheckedCreateWithoutProductInput> | BrochureRequestCreateWithoutProductInput[] | BrochureRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BrochureRequestCreateOrConnectWithoutProductInput | BrochureRequestCreateOrConnectWithoutProductInput[]
    createMany?: BrochureRequestCreateManyProductInputEnvelope
    connect?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
  }

  export type FeatureCreateNestedManyWithoutProductInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type TcoSectionCreateNestedManyWithoutProductInput = {
    create?: XOR<TcoSectionCreateWithoutProductInput, TcoSectionUncheckedCreateWithoutProductInput> | TcoSectionCreateWithoutProductInput[] | TcoSectionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TcoSectionCreateOrConnectWithoutProductInput | TcoSectionCreateOrConnectWithoutProductInput[]
    createMany?: TcoSectionCreateManyProductInputEnvelope
    connect?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
  }

  export type DemoFormCreateNestedManyWithoutProductInput = {
    create?: XOR<DemoFormCreateWithoutProductInput, DemoFormUncheckedCreateWithoutProductInput> | DemoFormCreateWithoutProductInput[] | DemoFormUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DemoFormCreateOrConnectWithoutProductInput | DemoFormCreateOrConnectWithoutProductInput[]
    createMany?: DemoFormCreateManyProductInputEnvelope
    connect?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BrochureRequestUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BrochureRequestCreateWithoutProductInput, BrochureRequestUncheckedCreateWithoutProductInput> | BrochureRequestCreateWithoutProductInput[] | BrochureRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BrochureRequestCreateOrConnectWithoutProductInput | BrochureRequestCreateOrConnectWithoutProductInput[]
    createMany?: BrochureRequestCreateManyProductInputEnvelope
    connect?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type TcoSectionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TcoSectionCreateWithoutProductInput, TcoSectionUncheckedCreateWithoutProductInput> | TcoSectionCreateWithoutProductInput[] | TcoSectionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TcoSectionCreateOrConnectWithoutProductInput | TcoSectionCreateOrConnectWithoutProductInput[]
    createMany?: TcoSectionCreateManyProductInputEnvelope
    connect?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
  }

  export type DemoFormUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DemoFormCreateWithoutProductInput, DemoFormUncheckedCreateWithoutProductInput> | DemoFormCreateWithoutProductInput[] | DemoFormUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DemoFormCreateOrConnectWithoutProductInput | DemoFormCreateOrConnectWithoutProductInput[]
    createMany?: DemoFormCreateManyProductInputEnvelope
    connect?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
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

  export type OrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BrochureRequestUpdateManyWithoutProductNestedInput = {
    create?: XOR<BrochureRequestCreateWithoutProductInput, BrochureRequestUncheckedCreateWithoutProductInput> | BrochureRequestCreateWithoutProductInput[] | BrochureRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BrochureRequestCreateOrConnectWithoutProductInput | BrochureRequestCreateOrConnectWithoutProductInput[]
    upsert?: BrochureRequestUpsertWithWhereUniqueWithoutProductInput | BrochureRequestUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BrochureRequestCreateManyProductInputEnvelope
    set?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    disconnect?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    delete?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    connect?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    update?: BrochureRequestUpdateWithWhereUniqueWithoutProductInput | BrochureRequestUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BrochureRequestUpdateManyWithWhereWithoutProductInput | BrochureRequestUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BrochureRequestScalarWhereInput | BrochureRequestScalarWhereInput[]
  }

  export type FeatureUpdateManyWithoutProductNestedInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutProductInput | FeatureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutProductInput | FeatureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutProductInput | FeatureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type TcoSectionUpdateManyWithoutProductNestedInput = {
    create?: XOR<TcoSectionCreateWithoutProductInput, TcoSectionUncheckedCreateWithoutProductInput> | TcoSectionCreateWithoutProductInput[] | TcoSectionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TcoSectionCreateOrConnectWithoutProductInput | TcoSectionCreateOrConnectWithoutProductInput[]
    upsert?: TcoSectionUpsertWithWhereUniqueWithoutProductInput | TcoSectionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TcoSectionCreateManyProductInputEnvelope
    set?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    disconnect?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    delete?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    connect?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    update?: TcoSectionUpdateWithWhereUniqueWithoutProductInput | TcoSectionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TcoSectionUpdateManyWithWhereWithoutProductInput | TcoSectionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TcoSectionScalarWhereInput | TcoSectionScalarWhereInput[]
  }

  export type DemoFormUpdateManyWithoutProductNestedInput = {
    create?: XOR<DemoFormCreateWithoutProductInput, DemoFormUncheckedCreateWithoutProductInput> | DemoFormCreateWithoutProductInput[] | DemoFormUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DemoFormCreateOrConnectWithoutProductInput | DemoFormCreateOrConnectWithoutProductInput[]
    upsert?: DemoFormUpsertWithWhereUniqueWithoutProductInput | DemoFormUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DemoFormCreateManyProductInputEnvelope
    set?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    disconnect?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    delete?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    connect?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    update?: DemoFormUpdateWithWhereUniqueWithoutProductInput | DemoFormUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DemoFormUpdateManyWithWhereWithoutProductInput | DemoFormUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DemoFormScalarWhereInput | DemoFormScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BrochureRequestUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BrochureRequestCreateWithoutProductInput, BrochureRequestUncheckedCreateWithoutProductInput> | BrochureRequestCreateWithoutProductInput[] | BrochureRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BrochureRequestCreateOrConnectWithoutProductInput | BrochureRequestCreateOrConnectWithoutProductInput[]
    upsert?: BrochureRequestUpsertWithWhereUniqueWithoutProductInput | BrochureRequestUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BrochureRequestCreateManyProductInputEnvelope
    set?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    disconnect?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    delete?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    connect?: BrochureRequestWhereUniqueInput | BrochureRequestWhereUniqueInput[]
    update?: BrochureRequestUpdateWithWhereUniqueWithoutProductInput | BrochureRequestUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BrochureRequestUpdateManyWithWhereWithoutProductInput | BrochureRequestUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BrochureRequestScalarWhereInput | BrochureRequestScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutProductInput | FeatureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutProductInput | FeatureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutProductInput | FeatureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type TcoSectionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TcoSectionCreateWithoutProductInput, TcoSectionUncheckedCreateWithoutProductInput> | TcoSectionCreateWithoutProductInput[] | TcoSectionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TcoSectionCreateOrConnectWithoutProductInput | TcoSectionCreateOrConnectWithoutProductInput[]
    upsert?: TcoSectionUpsertWithWhereUniqueWithoutProductInput | TcoSectionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TcoSectionCreateManyProductInputEnvelope
    set?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    disconnect?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    delete?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    connect?: TcoSectionWhereUniqueInput | TcoSectionWhereUniqueInput[]
    update?: TcoSectionUpdateWithWhereUniqueWithoutProductInput | TcoSectionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TcoSectionUpdateManyWithWhereWithoutProductInput | TcoSectionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TcoSectionScalarWhereInput | TcoSectionScalarWhereInput[]
  }

  export type DemoFormUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DemoFormCreateWithoutProductInput, DemoFormUncheckedCreateWithoutProductInput> | DemoFormCreateWithoutProductInput[] | DemoFormUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DemoFormCreateOrConnectWithoutProductInput | DemoFormCreateOrConnectWithoutProductInput[]
    upsert?: DemoFormUpsertWithWhereUniqueWithoutProductInput | DemoFormUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DemoFormCreateManyProductInputEnvelope
    set?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    disconnect?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    delete?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    connect?: DemoFormWhereUniqueInput | DemoFormWhereUniqueInput[]
    update?: DemoFormUpdateWithWhereUniqueWithoutProductInput | DemoFormUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DemoFormUpdateManyWithWhereWithoutProductInput | DemoFormUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DemoFormScalarWhereInput | DemoFormScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderType
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductCreateNestedOneWithoutDemoformInput = {
    create?: XOR<ProductCreateWithoutDemoformInput, ProductUncheckedCreateWithoutDemoformInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDemoformInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutDemoformNestedInput = {
    create?: XOR<ProductCreateWithoutDemoformInput, ProductUncheckedCreateWithoutDemoformInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDemoformInput
    upsert?: ProductUpsertWithoutDemoformInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDemoformInput, ProductUpdateWithoutDemoformInput>, ProductUncheckedUpdateWithoutDemoformInput>
  }

  export type ProductCreateNestedOneWithoutBrochureRequestsInput = {
    create?: XOR<ProductCreateWithoutBrochureRequestsInput, ProductUncheckedCreateWithoutBrochureRequestsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBrochureRequestsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutBrochureRequestsNestedInput = {
    create?: XOR<ProductCreateWithoutBrochureRequestsInput, ProductUncheckedCreateWithoutBrochureRequestsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBrochureRequestsInput
    upsert?: ProductUpsertWithoutBrochureRequestsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBrochureRequestsInput, ProductUpdateWithoutBrochureRequestsInput>, ProductUncheckedUpdateWithoutBrochureRequestsInput>
  }

  export type ProductCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFeaturesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFeaturesInput
    upsert?: ProductUpsertWithoutFeaturesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFeaturesInput, ProductUpdateWithoutFeaturesInput>, ProductUncheckedUpdateWithoutFeaturesInput>
  }

  export type ProductCreateNestedOneWithoutTcoSectionsInput = {
    create?: XOR<ProductCreateWithoutTcoSectionsInput, ProductUncheckedCreateWithoutTcoSectionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTcoSectionsInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutTcoSectionsNestedInput = {
    create?: XOR<ProductCreateWithoutTcoSectionsInput, ProductUncheckedCreateWithoutTcoSectionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTcoSectionsInput
    upsert?: ProductUpsertWithoutTcoSectionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTcoSectionsInput, ProductUpdateWithoutTcoSectionsInput>, ProductUncheckedUpdateWithoutTcoSectionsInput>
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

  export type NestedEnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
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

  export type OrderCreateWithoutProductInput = {
    name: string
    phoneNumber: string
    email: string
    address: string
    country: string
    state: string
    city: string
    pincode: string
    aadharNumber: string
    panNumber: string
    orderType: $Enums.OrderType
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    country: string
    state: string
    city: string
    pincode: string
    aadharNumber: string
    panNumber: string
    orderType: $Enums.OrderType
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutProductInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderCreateManyProductInputEnvelope = {
    data: OrderCreateManyProductInput | OrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BrochureRequestCreateWithoutProductInput = {
    name: string
    email: string
    phoneNumber: string
    requestedAt?: Date | string
  }

  export type BrochureRequestUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    requestedAt?: Date | string
  }

  export type BrochureRequestCreateOrConnectWithoutProductInput = {
    where: BrochureRequestWhereUniqueInput
    create: XOR<BrochureRequestCreateWithoutProductInput, BrochureRequestUncheckedCreateWithoutProductInput>
  }

  export type BrochureRequestCreateManyProductInputEnvelope = {
    data: BrochureRequestCreateManyProductInput | BrochureRequestCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FeatureCreateWithoutProductInput = {
    imageUrl?: string | null
    title?: string | null
    description?: string | null
    feature1?: string | null
    feature2?: string | null
    feature3?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureUncheckedCreateWithoutProductInput = {
    id?: number
    imageUrl?: string | null
    title?: string | null
    description?: string | null
    feature1?: string | null
    feature2?: string | null
    feature3?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureCreateOrConnectWithoutProductInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput>
  }

  export type FeatureCreateManyProductInputEnvelope = {
    data: FeatureCreateManyProductInput | FeatureCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type TcoSectionCreateWithoutProductInput = {
    heading?: string | null
    description?: string | null
    dieselSaving?: number | null
    graphUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TcoSectionUncheckedCreateWithoutProductInput = {
    id?: number
    heading?: string | null
    description?: string | null
    dieselSaving?: number | null
    graphUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TcoSectionCreateOrConnectWithoutProductInput = {
    where: TcoSectionWhereUniqueInput
    create: XOR<TcoSectionCreateWithoutProductInput, TcoSectionUncheckedCreateWithoutProductInput>
  }

  export type TcoSectionCreateManyProductInputEnvelope = {
    data: TcoSectionCreateManyProductInput | TcoSectionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DemoFormCreateWithoutProductInput = {
    name: string
    phoneNumber: string
    email: string
    address: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoFormUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoFormCreateOrConnectWithoutProductInput = {
    where: DemoFormWhereUniqueInput
    create: XOR<DemoFormCreateWithoutProductInput, DemoFormUncheckedCreateWithoutProductInput>
  }

  export type DemoFormCreateManyProductInputEnvelope = {
    data: DemoFormCreateManyProductInput | DemoFormCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
  }

  export type OrderUpdateManyWithWhereWithoutProductInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    name?: StringFilter<"Order"> | string
    phoneNumber?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    country?: StringFilter<"Order"> | string
    state?: StringFilter<"Order"> | string
    city?: StringFilter<"Order"> | string
    pincode?: StringFilter<"Order"> | string
    aadharNumber?: StringFilter<"Order"> | string
    panNumber?: StringFilter<"Order"> | string
    orderType?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    message?: StringNullableFilter<"Order"> | string | null
    productId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type BrochureRequestUpsertWithWhereUniqueWithoutProductInput = {
    where: BrochureRequestWhereUniqueInput
    update: XOR<BrochureRequestUpdateWithoutProductInput, BrochureRequestUncheckedUpdateWithoutProductInput>
    create: XOR<BrochureRequestCreateWithoutProductInput, BrochureRequestUncheckedCreateWithoutProductInput>
  }

  export type BrochureRequestUpdateWithWhereUniqueWithoutProductInput = {
    where: BrochureRequestWhereUniqueInput
    data: XOR<BrochureRequestUpdateWithoutProductInput, BrochureRequestUncheckedUpdateWithoutProductInput>
  }

  export type BrochureRequestUpdateManyWithWhereWithoutProductInput = {
    where: BrochureRequestScalarWhereInput
    data: XOR<BrochureRequestUpdateManyMutationInput, BrochureRequestUncheckedUpdateManyWithoutProductInput>
  }

  export type BrochureRequestScalarWhereInput = {
    AND?: BrochureRequestScalarWhereInput | BrochureRequestScalarWhereInput[]
    OR?: BrochureRequestScalarWhereInput[]
    NOT?: BrochureRequestScalarWhereInput | BrochureRequestScalarWhereInput[]
    id?: IntFilter<"BrochureRequest"> | number
    name?: StringFilter<"BrochureRequest"> | string
    email?: StringFilter<"BrochureRequest"> | string
    phoneNumber?: StringFilter<"BrochureRequest"> | string
    productId?: IntFilter<"BrochureRequest"> | number
    requestedAt?: DateTimeFilter<"BrochureRequest"> | Date | string
  }

  export type FeatureUpsertWithWhereUniqueWithoutProductInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutProductInput, FeatureUncheckedUpdateWithoutProductInput>
    create: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutProductInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutProductInput, FeatureUncheckedUpdateWithoutProductInput>
  }

  export type FeatureUpdateManyWithWhereWithoutProductInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutProductInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    id?: IntFilter<"Feature"> | number
    productId?: IntFilter<"Feature"> | number
    imageUrl?: StringNullableFilter<"Feature"> | string | null
    title?: StringNullableFilter<"Feature"> | string | null
    description?: StringNullableFilter<"Feature"> | string | null
    feature1?: StringNullableFilter<"Feature"> | string | null
    feature2?: StringNullableFilter<"Feature"> | string | null
    feature3?: StringNullableFilter<"Feature"> | string | null
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
  }

  export type TcoSectionUpsertWithWhereUniqueWithoutProductInput = {
    where: TcoSectionWhereUniqueInput
    update: XOR<TcoSectionUpdateWithoutProductInput, TcoSectionUncheckedUpdateWithoutProductInput>
    create: XOR<TcoSectionCreateWithoutProductInput, TcoSectionUncheckedCreateWithoutProductInput>
  }

  export type TcoSectionUpdateWithWhereUniqueWithoutProductInput = {
    where: TcoSectionWhereUniqueInput
    data: XOR<TcoSectionUpdateWithoutProductInput, TcoSectionUncheckedUpdateWithoutProductInput>
  }

  export type TcoSectionUpdateManyWithWhereWithoutProductInput = {
    where: TcoSectionScalarWhereInput
    data: XOR<TcoSectionUpdateManyMutationInput, TcoSectionUncheckedUpdateManyWithoutProductInput>
  }

  export type TcoSectionScalarWhereInput = {
    AND?: TcoSectionScalarWhereInput | TcoSectionScalarWhereInput[]
    OR?: TcoSectionScalarWhereInput[]
    NOT?: TcoSectionScalarWhereInput | TcoSectionScalarWhereInput[]
    id?: IntFilter<"TcoSection"> | number
    productId?: IntFilter<"TcoSection"> | number
    heading?: StringNullableFilter<"TcoSection"> | string | null
    description?: StringNullableFilter<"TcoSection"> | string | null
    dieselSaving?: FloatNullableFilter<"TcoSection"> | number | null
    graphUrl?: StringNullableFilter<"TcoSection"> | string | null
    createdAt?: DateTimeFilter<"TcoSection"> | Date | string
    updatedAt?: DateTimeFilter<"TcoSection"> | Date | string
  }

  export type DemoFormUpsertWithWhereUniqueWithoutProductInput = {
    where: DemoFormWhereUniqueInput
    update: XOR<DemoFormUpdateWithoutProductInput, DemoFormUncheckedUpdateWithoutProductInput>
    create: XOR<DemoFormCreateWithoutProductInput, DemoFormUncheckedCreateWithoutProductInput>
  }

  export type DemoFormUpdateWithWhereUniqueWithoutProductInput = {
    where: DemoFormWhereUniqueInput
    data: XOR<DemoFormUpdateWithoutProductInput, DemoFormUncheckedUpdateWithoutProductInput>
  }

  export type DemoFormUpdateManyWithWhereWithoutProductInput = {
    where: DemoFormScalarWhereInput
    data: XOR<DemoFormUpdateManyMutationInput, DemoFormUncheckedUpdateManyWithoutProductInput>
  }

  export type DemoFormScalarWhereInput = {
    AND?: DemoFormScalarWhereInput | DemoFormScalarWhereInput[]
    OR?: DemoFormScalarWhereInput[]
    NOT?: DemoFormScalarWhereInput | DemoFormScalarWhereInput[]
    id?: IntFilter<"DemoForm"> | number
    name?: StringFilter<"DemoForm"> | string
    phoneNumber?: StringFilter<"DemoForm"> | string
    email?: StringFilter<"DemoForm"> | string
    address?: StringFilter<"DemoForm"> | string
    message?: StringNullableFilter<"DemoForm"> | string | null
    productId?: IntFilter<"DemoForm"> | number
    createdAt?: DateTimeFilter<"DemoForm"> | Date | string
    updatedAt?: DateTimeFilter<"DemoForm"> | Date | string
  }

  export type ProductCreateWithoutOrdersInput = {
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brochureRequests?: BrochureRequestCreateNestedManyWithoutProductInput
    features?: FeatureCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionCreateNestedManyWithoutProductInput
    demoform?: DemoFormCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brochureRequests?: BrochureRequestUncheckedCreateNestedManyWithoutProductInput
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionUncheckedCreateNestedManyWithoutProductInput
    demoform?: DemoFormUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brochureRequests?: BrochureRequestUpdateManyWithoutProductNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brochureRequests?: BrochureRequestUncheckedUpdateManyWithoutProductNestedInput
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUncheckedUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutDemoformInput = {
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestCreateNestedManyWithoutProductInput
    features?: FeatureCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDemoformInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestUncheckedCreateNestedManyWithoutProductInput
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDemoformInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDemoformInput, ProductUncheckedCreateWithoutDemoformInput>
  }

  export type ProductUpsertWithoutDemoformInput = {
    update: XOR<ProductUpdateWithoutDemoformInput, ProductUncheckedUpdateWithoutDemoformInput>
    create: XOR<ProductCreateWithoutDemoformInput, ProductUncheckedCreateWithoutDemoformInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDemoformInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDemoformInput, ProductUncheckedUpdateWithoutDemoformInput>
  }

  export type ProductUpdateWithoutDemoformInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUpdateManyWithoutProductNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDemoformInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUncheckedUpdateManyWithoutProductNestedInput
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutBrochureRequestsInput = {
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    features?: FeatureCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionCreateNestedManyWithoutProductInput
    demoform?: DemoFormCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrochureRequestsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionUncheckedCreateNestedManyWithoutProductInput
    demoform?: DemoFormUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrochureRequestsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrochureRequestsInput, ProductUncheckedCreateWithoutBrochureRequestsInput>
  }

  export type ProductUpsertWithoutBrochureRequestsInput = {
    update: XOR<ProductUpdateWithoutBrochureRequestsInput, ProductUncheckedUpdateWithoutBrochureRequestsInput>
    create: XOR<ProductCreateWithoutBrochureRequestsInput, ProductUncheckedCreateWithoutBrochureRequestsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBrochureRequestsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBrochureRequestsInput, ProductUncheckedUpdateWithoutBrochureRequestsInput>
  }

  export type ProductUpdateWithoutBrochureRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrochureRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUncheckedUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutFeaturesInput = {
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionCreateNestedManyWithoutProductInput
    demoform?: DemoFormCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFeaturesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestUncheckedCreateNestedManyWithoutProductInput
    tcoSections?: TcoSectionUncheckedCreateNestedManyWithoutProductInput
    demoform?: DemoFormUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFeaturesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
  }

  export type ProductUpsertWithoutFeaturesInput = {
    update: XOR<ProductUpdateWithoutFeaturesInput, ProductUncheckedUpdateWithoutFeaturesInput>
    create: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFeaturesInput, ProductUncheckedUpdateWithoutFeaturesInput>
  }

  export type ProductUpdateWithoutFeaturesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUncheckedUpdateManyWithoutProductNestedInput
    tcoSections?: TcoSectionUncheckedUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutTcoSectionsInput = {
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestCreateNestedManyWithoutProductInput
    features?: FeatureCreateNestedManyWithoutProductInput
    demoform?: DemoFormCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTcoSectionsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    image2?: string | null
    brochureUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    brochureRequests?: BrochureRequestUncheckedCreateNestedManyWithoutProductInput
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    demoform?: DemoFormUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTcoSectionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTcoSectionsInput, ProductUncheckedCreateWithoutTcoSectionsInput>
  }

  export type ProductUpsertWithoutTcoSectionsInput = {
    update: XOR<ProductUpdateWithoutTcoSectionsInput, ProductUncheckedUpdateWithoutTcoSectionsInput>
    create: XOR<ProductCreateWithoutTcoSectionsInput, ProductUncheckedCreateWithoutTcoSectionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTcoSectionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTcoSectionsInput, ProductUncheckedUpdateWithoutTcoSectionsInput>
  }

  export type ProductUpdateWithoutTcoSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUpdateManyWithoutProductNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTcoSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    brochureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    brochureRequests?: BrochureRequestUncheckedUpdateManyWithoutProductNestedInput
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    demoform?: DemoFormUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderCreateManyProductInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    country: string
    state: string
    city: string
    pincode: string
    aadharNumber: string
    panNumber: string
    orderType: $Enums.OrderType
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrochureRequestCreateManyProductInput = {
    id?: number
    name: string
    email: string
    phoneNumber: string
    requestedAt?: Date | string
  }

  export type FeatureCreateManyProductInput = {
    id?: number
    imageUrl?: string | null
    title?: string | null
    description?: string | null
    feature1?: string | null
    feature2?: string | null
    feature3?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TcoSectionCreateManyProductInput = {
    id?: number
    heading?: string | null
    description?: string | null
    dieselSaving?: number | null
    graphUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoFormCreateManyProductInput = {
    id?: number
    name: string
    phoneNumber: string
    email: string
    address: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    aadharNumber?: StringFieldUpdateOperationsInput | string
    panNumber?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    aadharNumber?: StringFieldUpdateOperationsInput | string
    panNumber?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    aadharNumber?: StringFieldUpdateOperationsInput | string
    panNumber?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureRequestUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureRequestUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureRequestUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUpdateWithoutProductInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feature1?: NullableStringFieldUpdateOperationsInput | string | null
    feature2?: NullableStringFieldUpdateOperationsInput | string | null
    feature3?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feature1?: NullableStringFieldUpdateOperationsInput | string | null
    feature2?: NullableStringFieldUpdateOperationsInput | string | null
    feature3?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feature1?: NullableStringFieldUpdateOperationsInput | string | null
    feature2?: NullableStringFieldUpdateOperationsInput | string | null
    feature3?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TcoSectionUpdateWithoutProductInput = {
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dieselSaving?: NullableFloatFieldUpdateOperationsInput | number | null
    graphUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TcoSectionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dieselSaving?: NullableFloatFieldUpdateOperationsInput | number | null
    graphUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TcoSectionUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dieselSaving?: NullableFloatFieldUpdateOperationsInput | number | null
    graphUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoFormUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoFormUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoFormUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
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